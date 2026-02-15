// Advanced Geo-Fencing System
class GeoFencingSystem {
    constructor() {
        this.isActive = false;
        this.currentLocation = null;
        this.watchId = null;
        this.geofences = [
            {
                id: 'shillong_safe',
                name: 'Shillong Tourist Area',
                type: 'safe',
                center: { lat: 25.5788, lng: 91.8933 },
                radius: 5000, // 5km radius
                color: 'green'
            },
            {
                id: 'restricted_zone',
                name: 'Military Restricted Area',
                type: 'restricted',
                center: { lat: 25.6000, lng: 91.9000 },
                radius: 2000,
                color: 'red'
            },
            {
                id: 'caution_area',
                name: 'Weather Alert Zone',
                type: 'caution',
                center: { lat: 25.5500, lng: 91.8500 },
                radius: 3000,
                color: 'yellow'
            }
        ];
        this.alertHistory = [];
        this.init();
    }

    init() {
        if (navigator.geolocation) {
            this.startTracking();
        } else {
            console.error('Geolocation not supported');
        }
    }

    startTracking() {
        const options = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 30000
        };

        this.watchId = navigator.geolocation.watchPosition(
            (position) => {
                this.currentLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                    accuracy: position.coords.accuracy,
                    timestamp: new Date()
                };
                this.checkGeofences();
                this.updateLocationDisplay();
            },
            (error) => {
                console.error('Geolocation error:', error);
                this.showLocationError(error);
            },
            options
        );
        this.isActive = true;
    }

    stopTracking() {
        if (this.watchId) {
            navigator.geolocation.clearWatch(this.watchId);
            this.watchId = null;
            this.isActive = false;
        }
    }

    checkGeofences() {
        if (!this.currentLocation) return;

        this.geofences.forEach(fence => {
            const distance = this.calculateDistance(
                this.currentLocation.lat,
                this.currentLocation.lng,
                fence.center.lat,
                fence.center.lng
            );

            const isInside = distance <= fence.radius;
            const wasInside = this.alertHistory.some(alert => 
                alert.fenceId === fence.id && alert.status === 'inside' && 
                Date.now() - alert.timestamp < 300000 // 5 minutes
            );

            if (isInside && !wasInside) {
                this.triggerGeofenceAlert(fence, 'entered', distance);
            } else if (!isInside && wasInside) {
                this.triggerGeofenceAlert(fence, 'exited', distance);
            }
        });
    }

    calculateDistance(lat1, lng1, lat2, lng2) {
        const R = 6371000; // Earth's radius in meters
        const dLat = this.toRadians(lat2 - lat1);
        const dLng = this.toRadians(lng2 - lng1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) *
                Math.sin(dLng / 2) * Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    triggerGeofenceAlert(fence, action, distance) {
        const alert = {
            fenceId: fence.id,
            fenceName: fence.name,
            type: fence.type,
            action: action,
            distance: Math.round(distance),
            location: { ...this.currentLocation },
            timestamp: Date.now(),
            status: action === 'entered' ? 'inside' : 'outside'
        };

        this.alertHistory.push(alert);
        this.showGeofenceNotification(alert);
        this.sendGeofenceAlert(alert);

        // Trigger automatic actions based on fence type
        if (fence.type === 'restricted' && action === 'entered') {
            this.handleRestrictedAreaEntry(alert);
        }
    }

    showGeofenceNotification(alert) {
        const notification = document.createElement('div');
        notification.className = `fixed top-20 right-4 z-50 max-w-sm bg-slate-700 border-l-4 border-${this.getAlertColor(alert.type)} rounded-lg shadow-2xl p-4 slide-in`;
        
        notification.innerHTML = `
            <div class="flex items-start">
                <div class="flex-shrink-0">
                    <i class="fas ${this.getAlertIcon(alert.type)} text-${this.getAlertColor(alert.type)}-400 text-xl"></i>
                </div>
                <div class="ml-3 flex-1">
                    <h4 class="text-sm font-semibold text-slate-100">
                        ${alert.action === 'entered' ? 'Entered' : 'Exited'}: ${alert.fenceName}
                    </h4>
                    <p class="text-xs text-slate-300 mt-1">
                        Distance: ${alert.distance}m | ${new Date().toLocaleTimeString()}
                    </p>
                    ${alert.type === 'restricted' ? 
                        '<p class="text-xs text-red-300 mt-1 font-medium">⚠️ Restricted Area - Exit Immediately</p>' : ''
                    }
                </div>
                <button onclick="this.parentElement.parentElement.remove()" class="text-slate-400 hover:text-slate-200">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        document.body.appendChild(notification);

        // Auto remove after 8 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.remove();
            }
        }, 8000);

        // Vibrate for restricted areas
        if (alert.type === 'restricted' && navigator.vibrate) {
            navigator.vibrate([300, 100, 300, 100, 300]);
        }
    }

    getAlertColor(type) {
        const colors = {
            safe: 'green',
            restricted: 'red',
            caution: 'yellow'
        };
        return colors[type] || 'blue';
    }

    getAlertIcon(type) {
        const icons = {
            safe: 'fa-shield-alt',
            restricted: 'fa-exclamation-triangle',
            caution: 'fa-exclamation-circle'
        };
        return icons[type] || 'fa-map-marker-alt';
    }

    handleRestrictedAreaEntry(alert) {
        // Automatic notification to authorities
        const emergencyData = {
            userId: 'ST360-2025-001234',
            alertType: 'geofence_violation',
            severity: 'high',
            location: alert.location,
            fenceDetails: alert,
            autoGenerated: true
        };

        // In real app: send to authorities API
        console.warn('RESTRICTED AREA VIOLATION:', emergencyData);
        
        // Show urgent warning
        this.showUrgentWarning(alert);
    }

    showUrgentWarning(alert) {
        const warning = document.createElement('div');
        warning.className = 'fixed inset-0 bg-red-900 bg-opacity-90 z-50 flex items-center justify-center';
        warning.innerHTML = `
            <div class="bg-slate-800 rounded-xl p-8 max-w-md mx-4 text-center border-4 border-red-500 animate-pulse">
                <i class="fas fa-exclamation-triangle text-red-500 text-6xl mb-4"></i>
                <h2 class="text-2xl font-bold text-red-400 mb-4">RESTRICTED AREA!</h2>
                <p class="text-slate-200 mb-6">You have entered: <strong>${alert.fenceName}</strong></p>
                <p class="text-red-300 mb-6">Please exit immediately. Authorities have been notified.</p>
                <button onclick="this.parentElement.parentElement.remove()" 
                        class="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold">
                    I UNDERSTAND
                </button>
            </div>
        `;
        document.body.appendChild(warning);
    }

    sendGeofenceAlert(alert) {
        // Simulate API call to backend
        console.log('Sending geofence alert:', alert);
        // In real app: fetch('/api/geofence/alert', { method: 'POST', body: JSON.stringify(alert) });
    }

    updateLocationDisplay() {
        const locationDisplay = document.getElementById('currentLocation');
        if (locationDisplay && this.currentLocation) {
            locationDisplay.innerHTML = `
                <i class="fas fa-map-marker-alt text-blue-400 mr-2"></i>
                ${this.currentLocation.lat.toFixed(6)}, ${this.currentLocation.lng.toFixed(6)}
                <span class="text-xs text-slate-400 ml-2">±${Math.round(this.currentLocation.accuracy)}m</span>
            `;
        }
    }

    showLocationError(error) {
        let message = 'Location access error';
        switch(error.code) {
            case error.PERMISSION_DENIED:
                message = 'Location access denied. Please enable location services.';
                break;
            case error.POSITION_UNAVAILABLE:
                message = 'Location unavailable. Check your GPS connection.';
                break;
            case error.TIMEOUT:
                message = 'Location request timed out.';
                break;
        }
        
        const errorNotif = document.createElement('div');
        errorNotif.className = 'fixed top-20 right-4 z-50 max-w-sm bg-red-900 border border-red-600 rounded-lg p-4';
        errorNotif.innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-exclamation-circle text-red-400 mr-3"></i>
                <span class="text-red-200">${message}</span>
            </div>
        `;
        document.body.appendChild(errorNotif);
        
        setTimeout(() => errorNotif.remove(), 5000);
    }

    getStatus() {
        return {
            isActive: this.isActive,
            currentLocation: this.currentLocation,
            totalAlerts: this.alertHistory.length,
            recentAlerts: this.alertHistory.slice(-5)
        };
    }
}

// Initialize geofencing system
const geoFencing = new GeoFencingSystem();

// Add location display to tourist dashboard
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('tourist.html')) {
        const locationCard = document.createElement('div');
        locationCard.className = 'bg-slate-700 rounded-lg shadow-xl p-6 border border-slate-600';
        locationCard.innerHTML = `
            <h3 class="text-lg font-semibold mb-4 flex items-center text-slate-100">
                <i class="fas fa-crosshairs text-green-400 mr-2"></i>Current Location
            </h3>
            <div id="currentLocation" class="text-slate-300 text-sm">
                <i class="fas fa-spinner fa-spin text-blue-400 mr-2"></i>Getting location...
            </div>
            <div class="mt-4 flex justify-between items-center">
                <span class="text-slate-400 text-sm">Geo-fencing: ${geoFencing.isActive ? 'Active' : 'Inactive'}</span>
                <button onclick="geoFencing.isActive ? geoFencing.stopTracking() : geoFencing.startTracking()" 
                        class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
                    ${geoFencing.isActive ? 'Stop' : 'Start'}
                </button>
            </div>
        `;
        
        // Add to dashboard cards
        const dashboardCards = document.querySelector('.grid.md\\:grid-cols-2.lg\\:grid-cols-3');
        if (dashboardCards) {
            dashboardCards.appendChild(locationCard);
        }
    }
});
