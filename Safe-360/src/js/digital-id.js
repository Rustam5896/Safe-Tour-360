// Digital Tourist ID Management System
class DigitalIDSystem {
    constructor() {
        this.currentID = this.loadStoredID();
        this.blockchainConnected = false;
        this.init();
    }

    init() {
        this.displayStoredID();
        this.setupForm();
        this.simulateBlockchainConnection();
    }

    loadStoredID() {
        const stored = localStorage.getItem('safetour_digital_id');
        return stored ? JSON.parse(stored) : null;
    }

    displayStoredID() {
        if (this.currentID) {
            this.updateIDCard(this.currentID);
            const generateForm = document.getElementById('generateForm');
            if (generateForm) {
                generateForm.style.display = 'none';
            }
        }
    }

    setupForm() {
        const form = document.querySelector('#generateForm form');
        if (form) {
            form.addEventListener('submit', (e) => this.generateDigitalId(e));
        }
    }

    async generateDigitalId(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const idData = {
            fullName: formData.get('fullName') || document.getElementById('fullName')?.value,
            email: formData.get('email') || document.getElementById('email')?.value,
            aadhaar: formData.get('aadhaar') || document.getElementById('aadhaar')?.value,
            passport: formData.get('passport') || document.getElementById('passport')?.value || null,
            destination: formData.get('destinationSelect') || document.getElementById('destinationSelect')?.value,
            travelDate: formData.get('travelDate') || document.getElementById('travelDate')?.value,
            id: this.generateIDNumber(),
            issueDate: new Date().toISOString().split('T')[0],
            validUntil: this.calculateValidUntil(formData.get('travelDate') || document.getElementById('travelDate')?.value),
            blockchainHash: this.generateBlockchainHash(),
            safetyScore: 85 + Math.floor(Math.random() * 15),
            status: 'active'
        };

        // Validation
        if (!idData.fullName || !idData.email || !idData.aadhaar || !idData.destination || !idData.travelDate) {
            this.showErrorNotification('Please fill all required fields');
            return;
        }

        // Show loading
        this.showLoading();
        
        try {
            // Simulate blockchain transaction
            await this.simulateBlockchainTransaction(idData);
            
            // Store ID
            localStorage.setItem('safetour_digital_id', JSON.stringify(idData));
            this.currentID = idData;
            
            // Update display
            this.updateIDCard(idData);
            const generateForm = document.getElementById('generateForm');
            if (generateForm) {
                generateForm.style.display = 'none';
            }
            
            // Success notification
            this.showSuccessNotification();
            
        } catch (error) {
            this.showErrorNotification(error.message);
        }
    }

    generateIDNumber() {
        const prefix = 'ST360';
        const year = new Date().getFullYear();
        const random = Math.floor(Math.random() * 999999).toString().padStart(6, '0');
        return `${prefix}-${year}-${random}`;
    }

    calculateValidUntil(travelDate) {
        const travel = new Date(travelDate);
        travel.setDate(travel.getDate() + 30); // 30 days validity
        return travel.toISOString().split('T')[0];
    }

    generateBlockchainHash() {
        const chars = '0123456789abcdef';
        let hash = '0x';
        for (let i = 0; i < 8; i++) {
            hash += chars[Math.floor(Math.random() * chars.length)];
        }
        hash += '...';
        for (let i = 0; i < 4; i++) {
            hash += chars[Math.floor(Math.random() * chars.length)];
        }
        return hash;
    }

    async simulateBlockchainTransaction(idData) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.1) { // 90% success rate
                    resolve();
                } else {
                    reject(new Error('Blockchain network error. Please try again.'));
                }
            }, 3000);
        });
    }

    updateIDCard(data) {
        // Update main card elements
        const elements = {
            userName: data.fullName,
            userEmail: data.email,
            touristId: data.id,
            issueDate: new Date(data.issueDate).toLocaleDateString(),
            validUntil: new Date(data.validUntil).toLocaleDateString(),
            blockchainHash: data.blockchainHash,
            destination: this.getDestinationName(data.destination),
            safetyScore: data.safetyScore,
            status: data.status.toUpperCase(),
            nationality: 'Indian',
            duration: this.calculateDuration(data.issueDate, data.validUntil),
            purpose: 'Tourism'
        };

        // Update elements if they exist
        Object.entries(elements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = value;
            }
        });
        
        // Generate QR code
        this.generateQRCode(data.id);
        
        // Update card visibility
        const digitalIdCard = document.getElementById('digitalIdCard');
        if (digitalIdCard) {
            digitalIdCard.style.display = 'block';
        }
    }

    getDestinationName(code) {
        const destinations = {
            'northeast': 'Northeast India',
            'kashmir': 'Kashmir',
            'kerala': 'Kerala',
            'rajasthan': 'Rajasthan',
            'goa': 'Goa',
            'himachal': 'Himachal Pradesh'
        };
        return destinations[code] || code;
    }

    calculateDuration(issueDate, validUntil) {
        const start = new Date(issueDate);
        const end = new Date(validUntil);
        const diffTime = Math.abs(end - start);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return `${diffDays} Days`;
    }

    generateQRCode(idNumber) {
        const qrContainer = document.getElementById('qrCode');
        if (qrContainer) {
            // Simple QR code simulation with pattern
            qrContainer.innerHTML = `
                <div class="grid grid-cols-8 gap-0.5 w-full h-full">
                    ${Array.from({length: 64}, (_, i) => {
                        const isBlack = Math.sin(i * 0.3) > 0.2 || i % 7 === 0 || i % 9 === 0;
                        return `<div class="bg-${isBlack ? 'black' : 'white'} aspect-square rounded-sm"></div>`;
                    }).join('')}
                </div>
            `;
        }
    }

    showLoading() {
        const modal = document.createElement('div');
        modal.id = 'loadingModal';
        modal.className = 'fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center';
        modal.innerHTML = `
            <div class="bg-slate-700 rounded-xl p-8 text-center border border-slate-600 max-w-md mx-4">
                <div class="animate-spin rounded-full h-16 w-16 border-4 border-blue-400 border-t-transparent mx-auto mb-4"></div>
                <h3 class="text-xl font-bold text-slate-100 mb-2">Generating Digital ID</h3>
                <p class="text-slate-300 mb-4">Processing blockchain transaction...</p>
                <div class="bg-slate-800 rounded-lg p-3">
                    <div id="loadingSteps" class="text-sm text-slate-400 space-y-1">
                        <div class="flex items-center">
                            <i class="fas fa-check text-green-400 mr-2"></i>
                            <span>Validating KYC documents</span>
                        </div>
                        <div class="flex items-center opacity-50">
                            <i class="fas fa-spinner fa-spin text-blue-400 mr-2"></i>
                            <span>Creating blockchain record</span>
                        </div>
                        <div class="flex items-center opacity-30">
                            <i class="fas fa-clock text-gray-400 mr-2"></i>
                            <span>Generating secure hash</span>
                        </div>
                        <div class="flex items-center opacity-30">
                            <i class="fas fa-clock text-gray-400 mr-2"></i>
                            <span>Finalizing digital ID</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Simulate progress
        setTimeout(() => {
            const steps = document.querySelectorAll('#loadingSteps > div');
            if (steps[1]) {
                steps[1].className = 'flex items-center';
                steps[1].innerHTML = '<i class="fas fa-check text-green-400 mr-2"></i><span>Creating blockchain record</span>';
            }
        }, 1000);

        setTimeout(() => {
            const steps = document.querySelectorAll('#loadingSteps > div');
            if (steps[2]) {
                steps[2].className = 'flex items-center';
                steps[2].innerHTML = '<i class="fas fa-check text-green-400 mr-2"></i><span>Generating secure hash</span>';
            }
        }, 2000);

        setTimeout(() => {
            const steps = document.querySelectorAll('#loadingSteps > div');
            if (steps[3]) {
                steps[3].className = 'flex items-center';
                steps[3].innerHTML = '<i class="fas fa-check text-green-400 mr-2"></i><span>Finalizing digital ID</span>';
            }
        }, 2800);
    }

    showSuccessNotification() {
        const loadingModal = document.getElementById('loadingModal');
        if (loadingModal) {
            loadingModal.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = 'fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center';
        notification.innerHTML = `
            <div class="bg-slate-700 rounded-xl p-8 text-center border border-slate-600 max-w-md mx-4">
                <div class="text-green-400 mb-4">
                    <i class="fas fa-check-circle text-6xl"></i>
                </div>
                <h2 class="text-2xl font-bold text-slate-100 mb-4">Digital ID Created Successfully!</h2>
                <p class="text-slate-300 mb-6">Your tourist ID has been registered on the blockchain and is now active.</p>
                <div class="bg-slate-800 rounded-lg p-4 mb-6 border border-slate-600">
                    <div class="text-lg font-bold text-blue-400">${this.currentID.id}</div>
                    <div class="text-sm text-slate-400">Valid until: ${new Date(this.currentID.validUntil).toLocaleDateString()}</div>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" 
                        class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300">
                    Continue
                </button>
            </div>
        `;
        document.body.appendChild(notification);
        
        // Auto close after 8 seconds
        setTimeout(() => {
            if (document.body.contains(notification)) {
                notification.remove();
            }
        }, 8000);
    }

    showErrorNotification(message) {
        const loadingModal = document.getElementById('loadingModal');
        if (loadingModal) {
            loadingModal.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = 'fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center';
        notification.innerHTML = `
            <div class="bg-slate-700 rounded-xl p-8 text-center border border-slate-600 max-w-md mx-4">
                <div class="text-red-400 mb-4">
                    <i class="fas fa-exclamation-triangle text-6xl"></i>
                </div>
                <h2 class="text-2xl font-bold text-slate-100 mb-4">Generation Failed</h2>
                <p class="text-slate-300 mb-6">${message}</p>
                <button onclick="this.parentElement.parentElement.remove()" 
                        class="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition duration-300">
                    Try Again
                </button>
            </div>
        `;
        document.body.appendChild(notification);
    }

    simulateBlockchainConnection() {
        setTimeout(() => {
            this.blockchainConnected = true;
            console.log('✓ Connected to SafeTour360° Blockchain Network');
        }, 2000);
    }

    // Public methods for external access
    resetID() {
        localStorage.removeItem('safetour_digital_id');
        this.currentID = null;
        const generateForm = document.getElementById('generateForm');
        if (generateForm) {
            generateForm.style.display = 'block';
        }
        location.reload();
    }

    exportID() {
        if (this.currentID) {
            const dataStr = JSON.stringify(this.currentID, null, 2);
            const dataBlob = new Blob([dataStr], {type: 'application/json'});
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `SafeTour_ID_${this.currentID.id}.json`;
            link.click();
        }
    }

    getIDStatus() {
        return {
            hasID: !!this.currentID,
            isActive: this.currentID?.status === 'active',
            expiryDate: this.currentID?.validUntil,
            safetyScore: this.currentID?.safetyScore,
            blockchainConnected: this.blockchainConnected
        };
    }
}

// Global function for form submission (called from HTML)
function generateDigitalId(event) {
    if (window.digitalIDSystem) {
        window.digitalIDSystem.generateDigitalId(event);
    }
}

// Initialize Digital ID system
document.addEventListener('DOMContentLoaded', function() {
    window.digitalIDSystem = new DigitalIDSystem();
    
    // Add export and reset buttons if elements exist
    const exportBtn = document.getElementById('exportID');
    if (exportBtn) {
        exportBtn.addEventListener('click', () => window.digitalIDSystem.exportID());
    }
    
    const resetBtn = document.getElementById('resetID');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to reset your Digital ID?')) {
                window.digitalIDSystem.resetID();
            }
        });
    }
});

// Add to global scope for debugging
window.DigitalIDSystem = DigitalIDSystem;
