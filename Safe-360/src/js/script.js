// DOM Elements
const panicBtn = document.getElementById('panicBtn');

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// Scroll to Contact Function
function scrollToContact() {
    // Check if we're on the home page
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        // Redirect to home page with contact hash
        window.location.href = 'index.html#contact';
    }
}

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Add a subtle visual feedback
    const homeButton = document.querySelector('a[onclick="scrollToTop(); return false;"]');
    if (homeButton) {
        homeButton.style.transform = 'scale(0.95)';
        setTimeout(() => {
            homeButton.style.transform = 'scale(1)';
        }, 150);
    }
}

// Panic Button Functionality
if (panicBtn) {
    panicBtn.addEventListener('click', function() {
        showPanicAlert();
    });
}

// Show Panic Alert Function
function showPanicAlert() {
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center slide-in';
    
    const modal = document.createElement('div');
    modal.className = 'bg-slate-700 rounded-lg p-8 max-w-md mx-4 text-center border border-slate-600 shadow-2xl';
    modal.innerHTML = `
        <div class="text-red-400 mb-4">
            <i class="fas fa-exclamation-triangle text-6xl glow-red"></i>
        </div>
        <h2 class="text-2xl font-bold text-slate-100 mb-4">EMERGENCY ALERT SENT!</h2>
        <p class="text-slate-300 mb-6">Your location has been shared with:</p>
        <div class="space-y-2 mb-6">
            <div class="flex items-center justify-center text-slate-200">
                <i class="fas fa-shield-alt text-blue-400 mr-2"></i>
                <span>Local Police Station</span>
            </div>
            <div class="flex items-center justify-center text-slate-200">
                <i class="fas fa-phone text-green-400 mr-2"></i>
                <span>Emergency Contacts</span>
            </div>
            <div class="flex items-center justify-center text-slate-200">
                <i class="fas fa-ambulance text-red-400 mr-2"></i>
                <span>Medical Services</span>
            </div>
        </div>
        <div class="bg-slate-800 rounded-lg p-4 mb-6 border border-slate-600">
            <p class="text-sm text-slate-300">
                <i class="fas fa-map-marker-alt mr-1 text-blue-400"></i>
                Location: Shillong Peak, Meghalaya<br>
                <i class="fas fa-clock mr-1 text-blue-400"></i>
                Time: ${new Date().toLocaleTimeString()}
            </p>
        </div>
        <button onclick="closePanicModal()" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300 hover:shadow-xl">
            Close
        </button>
    `;
    
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    setTimeout(() => {
        closePanicModal();
    }, 8000);
}

// Close Panic Modal
function closePanicModal() {
    const overlay = document.querySelector('.fixed.inset-0');
    if (overlay) {
        overlay.remove();
    }
}

// ==========================================
// 🆕 MODAL FUNCTIONS FOR FEATURE CARDS
// ==========================================

// 1. Digital Tourist ID Modal
function openDigitalIDModal() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center slide-in';
    modal.innerHTML = `
        <div class="bg-slate-700 rounded-xl p-8 max-w-4xl mx-4 text-center border border-slate-600 shadow-2xl max-h-[90vh] overflow-y-auto">
            <!-- Digital ID Card Display -->
            <div class="bg-gradient-to-br from-blue-600 via-purple-700 to-blue-800 rounded-2xl p-6 text-white shadow-2xl mb-6">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center">
                        <div class="relative">
                            <div class="w-20 h-20 rounded-full border-4 border-white shadow-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">D</div>
                            <div class="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full flex items-center justify-center">
                                <i class="fas fa-check text-white text-xs"></i>
                            </div>
                        </div>
                        <div class="ml-4">
                            <h2 class="text-2xl font-bold">Demo User</h2>
                            <p class="text-blue-200">demo@safetour360.com</p>
                            <p class="text-blue-200">Nationality: Indian</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <div class="bg-white bg-opacity-20 rounded-xl p-3 backdrop-blur-sm">
                            <div class="text-2xl font-bold">92</div>
                            <div class="text-sm opacity-90">Safety Score</div>
                        </div>
                    </div>
                </div>

                <!-- ID Details -->
                <div class="grid md:grid-cols-2 gap-4 bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
                    <div>
                        <h3 class="text-lg font-semibold mb-2">Tourist ID Details</h3>
                        <div class="space-y-1 text-sm">
                            <p><strong>ID Number:</strong> ST360-2025-001234</p>
                            <p><strong>Issue Date:</strong> 20 Sep 2025</p>
                            <p><strong>Valid Until:</strong> 30 Sep 2025</p>
                            <p><strong>Blockchain Hash:</strong> <span class="text-xs">0x7f9f...a3b2</span></p>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold mb-2">Trip Information</h3>
                        <div class="space-y-1 text-sm">
                            <p><strong>Destination:</strong> Northeast India</p>
                            <p><strong>Duration:</strong> 10 Days</p>
                            <p><strong>Purpose:</strong> Tourism</p>
                            <p><strong>Status:</strong> <span class="bg-green-500 px-2 py-1 rounded text-xs">Active</span></p>
                        </div>
                    </div>
                </div>

                <!-- QR Code -->
                <div class="text-center mt-4">
                    <div class="bg-white p-3 rounded-lg inline-block">
                        <div class="w-20 h-20 bg-gray-200 flex items-center justify-center">
                            <i class="fas fa-qrcode text-2xl text-gray-600"></i>
                        </div>
                    </div>
                    <p class="text-xs mt-1 opacity-80">Scan for verification</p>
                </div>
            </div>

            <!-- Generate Form -->
            <div class="bg-slate-800 rounded-xl p-6 border border-slate-600 mb-6">
                <h3 class="text-xl font-bold text-slate-100 mb-4">Generate Your Digital Tourist ID</h3>
                <div class="grid md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="Full Name" class="p-3 bg-slate-600 border border-slate-500 rounded-lg text-slate-200">
                    <input type="email" placeholder="Email" class="p-3 bg-slate-600 border border-slate-500 rounded-lg text-slate-200">
                    <input type="text" placeholder="Aadhaar Number" class="p-3 bg-slate-600 border border-slate-500 rounded-lg text-slate-200">
                    <select class="p-3 bg-slate-600 border border-slate-500 rounded-lg text-slate-200">
                        <option value="">Select Destination</option>
                        <option value="northeast">Northeast India</option>
                        <option value="kashmir">Kashmir</option>
                        <option value="kerala">Kerala</option>
                    </select>
                </div>
                <button onclick="generateDemoID()" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300">
                    <i class="fas fa-id-card mr-2"></i>Generate Digital ID
                </button>
            </div>

            <div class="flex space-x-4 justify-center">
                <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                        class="bg-slate-600 hover:bg-slate-500 text-white px-6 py-2 rounded-lg transition duration-300">
                    Close
                </button>
                <a href="digital-id.html" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300 inline-block">
                    Open Full Page
                </a>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// 2. Panic Button Modal
function openPanicButtonModal() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center slide-in';
    modal.innerHTML = `
        <div class="bg-slate-700 rounded-xl p-8 max-w-2xl mx-4 text-center border border-slate-600 shadow-2xl">
            <h2 class="text-3xl font-bold text-slate-100 mb-6">Emergency Panic Button System</h2>
            
            <!-- Panic Button Demo -->
            <div class="mb-8">
                <button id="demoPanicBtn" onclick="showDemoPanicAlert()" class="bg-red-600 hover:bg-red-700 text-white p-8 rounded-full text-center transition duration-300 shadow-xl hover:shadow-2xl hover:scale-105 mx-auto block animate-pulse">
                    <i class="fas fa-exclamation-triangle text-4xl mb-2"></i>
                    <div class="text-xl font-bold">PANIC BUTTON</div>
                    <div class="text-sm opacity-90">Click to Test</div>
                </button>
            </div>

            <!-- Alert Types -->
            <div class="grid grid-cols-2 gap-4 mb-6">
                <div onclick="showDemoAlert('emergency')" class="bg-red-900 p-4 rounded-lg cursor-pointer hover:bg-red-800 transition duration-300">
                    <i class="fas fa-exclamation-triangle text-red-400 text-2xl mb-2"></i>
                    <div class="text-red-200 font-semibold">Emergency</div>
                    <div class="text-red-300 text-xs">Critical situations</div>
                </div>
                <div onclick="showDemoAlert('medical')" class="bg-pink-900 p-4 rounded-lg cursor-pointer hover:bg-pink-800 transition duration-300">
                    <i class="fas fa-heart-pulse text-pink-400 text-2xl mb-2"></i>
                    <div class="text-pink-200 font-semibold">Medical</div>
                    <div class="text-pink-300 text-xs">Health emergencies</div>
                </div>
                <div onclick="showDemoAlert('security')" class="bg-orange-900 p-4 rounded-lg cursor-pointer hover:bg-orange-800 transition duration-300">
                    <i class="fas fa-shield-exclamation text-orange-400 text-2xl mb-2"></i>
                    <div class="text-orange-200 font-semibold">Security</div>
                    <div class="text-orange-300 text-xs">Safety threats</div>
                </div>
                <div onclick="showDemoAlert('help')" class="bg-yellow-900 p-4 rounded-lg cursor-pointer hover:bg-yellow-800 transition duration-300">
                    <i class="fas fa-hand-paper text-yellow-400 text-2xl mb-2"></i>
                    <div class="text-yellow-200 font-semibold">Help</div>
                    <div class="text-yellow-300 text-xs">General assistance</div>
                </div>
            </div>

            <!-- Features List -->
            <div class="bg-slate-800 rounded-lg p-4 mb-6 border border-slate-600">
                <h4 class="font-semibold text-slate-200 mb-3">Features:</h4>
                <div class="space-y-2 text-sm text-slate-300">
                    <div class="flex items-center"><i class="fas fa-check text-green-400 mr-2"></i>GPS location sharing</div>
                    <div class="flex items-center"><i class="fas fa-check text-green-400 mr-2"></i>Multi-authority alerts</div>
                    <div class="flex items-center"><i class="fas fa-check text-green-400 mr-2"></i>Voice emergency commands</div>
                    <div class="flex items-center"><i class="fas fa-check text-green-400 mr-2"></i>Automatic escalation</div>
                </div>
            </div>

            <div class="flex space-x-4 justify-center">
                <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                        class="bg-slate-600 hover:bg-slate-500 text-white px-6 py-2 rounded-lg transition duration-300">
                    Close
                </button>
                <a href="tourist.html" class="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition duration-300 inline-block">
                    Open Tourist Dashboard
                </a>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// 3. Geo-fencing Modal
function openGeofencingModal() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center slide-in';
    modal.innerHTML = `
        <div class="bg-slate-700 rounded-xl p-8 max-w-4xl mx-4 border border-slate-600 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h2 class="text-3xl font-bold text-slate-100 mb-6 text-center">Geo-Fencing System</h2>
            
            <!-- Mock Map -->
            <div class="bg-slate-600 rounded-lg h-64 flex items-center justify-center mb-6 border border-slate-500 relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20"></div>
                <div class="text-center text-slate-300 relative z-10">
                    <i class="fas fa-map-marked-alt text-4xl mb-2"></i>
                    <p class="font-semibold">Interactive Geo-fence Map</p>
                    <p class="text-sm">Showing safety zones around Shillong</p>
                </div>
                
                <!-- Demo Zones -->
                <div class="absolute top-4 left-4 bg-green-600 w-16 h-16 rounded-full opacity-30 animate-pulse"></div>
                <div class="absolute top-12 right-8 bg-red-600 w-12 h-12 rounded-full opacity-40 animate-pulse" style="animation-delay: 0.5s;"></div>
                <div class="absolute bottom-8 left-1/3 bg-yellow-600 w-20 h-20 rounded-full opacity-25 animate-pulse" style="animation-delay: 1s;"></div>
            </div>

            <!-- Zone Types -->
            <div class="grid md:grid-cols-3 gap-4 mb-6">
                <div class="bg-green-900 border border-green-700 p-4 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div class="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                        <h4 class="font-semibold text-green-200">Safe Zones</h4>
                    </div>
                    <div class="text-green-300 text-sm space-y-1">
                        <div>• Tourist areas</div>
                        <div>• Police stations nearby</div>
                        <div>• Well-lit regions</div>
                    </div>
                </div>
                
                <div class="bg-yellow-900 border border-yellow-700 p-4 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div class="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                        <h4 class="font-semibold text-yellow-200">Caution Zones</h4>
                    </div>
                    <div class="text-yellow-300 text-sm space-y-1">
                        <div>• Weather alerts</div>
                        <div>• Construction areas</div>
                        <div>• Moderate risk</div>
                    </div>
                </div>
                
                <div class="bg-red-900 border border-red-700 p-4 rounded-lg">
                    <div class="flex items-center mb-2">
                        <div class="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                        <h4 class="font-semibold text-red-200">Restricted Zones</h4>
                    </div>
                    <div class="text-red-300 text-sm space-y-1">
                        <div>• Military areas</div>
                        <div>• High-crime regions</div>
                        <div>• Entry prohibited</div>
                    </div>
                </div>
            </div>

            <!-- Live Demo -->
            <div class="bg-slate-800 rounded-lg p-4 mb-6 border border-slate-600">
                <h4 class="font-semibold text-slate-200 mb-3">Live Location Status:</h4>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <i class="fas fa-map-marker-alt text-blue-400 mr-2"></i>
                        <span class="text-slate-300 text-sm">Current: Shillong Peak</span>
                    </div>
                    <span class="bg-green-600 text-green-100 px-3 py-1 rounded-full text-sm">Safe Zone</span>
                </div>
                <div class="mt-2 text-xs text-slate-400">
                    GPS: 25.5788°N, 91.8933°E | Accuracy: ±5m
                </div>
                <button onclick="simulateGeofenceAlert()" class="mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition duration-300">
                    <i class="fas fa-play mr-1"></i>Simulate Zone Entry
                </button>
            </div>

            <div class="flex space-x-4 justify-center">
                <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                        class="bg-slate-600 hover:bg-slate-500 text-white px-6 py-2 rounded-lg transition duration-300">
                    Close
                </button>
                <a href="tourist.html" class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition duration-300 inline-block">
                    Enable Geo-fencing
                </a>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// 4. Multilingual Modal
function openMultilingualModal() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center slide-in';
    modal.innerHTML = `
        <div class="bg-slate-700 rounded-xl p-8 max-w-3xl mx-4 border border-slate-600 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h2 class="text-3xl font-bold text-slate-100 mb-6 text-center">Multilingual Support</h2>
            
            <!-- Current Language Display -->
            <div class="bg-slate-800 rounded-lg p-4 mb-6 border border-slate-600 text-center">
                <div class="text-4xl mb-2">🇮🇳</div>
                <div class="text-xl font-semibold text-slate-200">Currently: English</div>
                <div class="text-sm text-slate-400">SafeTour360° supports 12+ languages</div>
            </div>

            <!-- Language Grid -->
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                <div onclick="demoLanguageChange('en', '🇬🇧', 'English')" class="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg cursor-pointer transition duration-300 text-center">
                    <div class="text-2xl mb-1">🇬🇧</div>
                    <div class="text-slate-200 text-sm font-semibold">English</div>
                </div>
                <div onclick="demoLanguageChange('hi', '🇮🇳', 'हिंदी')" class="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg cursor-pointer transition duration-300 text-center">
                    <div class="text-2xl mb-1">🇮🇳</div>
                    <div class="text-slate-200 text-sm font-semibold">हिंदी</div>
                </div>
                <div onclick="demoLanguageChange('bn', '🇧🇩', 'বাংলা')" class="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg cursor-pointer transition duration-300 text-center">
                    <div class="text-2xl mb-1">🇧🇩</div>
                    <div class="text-slate-200 text-sm font-semibold">বাংলা</div>
                </div>
                <div onclick="demoLanguageChange('as', '🇮🇳', 'অসমীয়া')" class="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg cursor-pointer transition duration-300 text-center">
                    <div class="text-2xl mb-1">🇮🇳</div>
                    <div class="text-slate-200 text-sm font-semibold">অসমীয়া</div>
                </div>
                <div onclick="demoLanguageChange('ne', '🇳🇵', 'नेपाली')" class="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg cursor-pointer transition duration-300 text-center">
                    <div class="text-2xl mb-1">🇳🇵</div>
                    <div class="text-slate-200 text-sm font-semibold">नेपाली</div>
                </div>
                <div onclick="demoLanguageChange('ta', '🇮🇳', 'தமிழ்')" class="bg-slate-800 hover:bg-blue-600 p-3 rounded-lg cursor-pointer transition duration-300 text-center">
                    <div class="text-2xl mb-1">🇮🇳</div>
                    <div class="text-slate-200 text-sm font-semibold">தமிழ்</div>
                </div>
            </div>

            <!-- Voice Support Demo -->
            <div class="bg-slate-800 rounded-lg p-4 mb-6 border border-slate-600">
                <h4 class="font-semibold text-slate-200 mb-3 flex items-center">
                    <i class="fas fa-microphone text-purple-400 mr-2"></i>Voice Emergency Support
                </h4>
                <div class="grid md:grid-cols-2 gap-4">
                    <div>
                        <div class="text-sm text-slate-300 mb-2">English Commands:</div>
                        <div class="bg-slate-700 p-2 rounded text-xs text-slate-400">
                            "Help", "Emergency", "Police", "Medical"
                        </div>
                    </div>
                    <div>
                        <div class="text-sm text-slate-300 mb-2">Hindi Commands:</div>
                        <div class="bg-slate-700 p-2 rounded text-xs text-slate-400">
                            "मदद", "आपातकाल", "पुलिस", "डॉक्टर"
                        </div>
                    </div>
                </div>
                <button onclick="testVoiceCommand()" class="mt-3 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm transition duration-300">
                    <i class="fas fa-microphone mr-1"></i>Test Voice Command
                </button>
            </div>

            <!-- Features -->
            <div class="bg-slate-800 rounded-lg p-4 mb-6 border border-slate-600">
                <h4 class="font-semibold text-slate-200 mb-3">Language Features:</h4>
                <div class="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                    <div class="space-y-2">
                        <div class="flex items-center"><i class="fas fa-check text-green-400 mr-2"></i>Real-time translation</div>
                        <div class="flex items-center"><i class="fas fa-check text-green-400 mr-2"></i>Voice commands</div>
                        <div class="flex items-center"><i class="fas fa-check text-green-400 mr-2"></i>Emergency phrases</div>
                    </div>
                    <div class="space-y-2">
                        <div class="flex items-center"><i class="fas fa-check text-green-400 mr-2"></i>UI translation</div>
                        <div class="flex items-center"><i class="fas fa-check text-green-400 mr-2"></i>Offline support</div>
                        <div class="flex items-center"><i class="fas fa-check text-green-400 mr-2"></i>Cultural adaptation</div>
                    </div>
                </div>
            </div>

            <div class="flex space-x-4 justify-center">
                <button onclick="this.parentElement.parentElement.parentElement.remove()" 
                        class="bg-slate-600 hover:bg-slate-500 text-white px-6 py-2 rounded-lg transition duration-300">
                    Close
                </button>
                <button onclick="applyLanguageChange()" class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition duration-300">
                    Apply Language
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// ==========================================
// DEMO FUNCTIONS
// ==========================================

// Demo Functions
function generateDemoID() {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 z-50 max-w-sm bg-blue-900 border border-blue-600 rounded-lg p-4 slide-in';
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-id-card text-blue-400 mr-3"></i>
            <span class="text-blue-200">Demo: Digital Tourist ID would be generated with blockchain verification!</span>
        </div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 4000);
}

function showDemoPanicAlert() {
    // Use existing panic alert function
    showPanicAlert();
}

function showDemoAlert(type) {
    const colors = {
        emergency: 'red',
        medical: 'pink', 
        security: 'orange',
        help: 'yellow'
    };
    
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 max-w-sm bg-${colors[type]}-900 border border-${colors[type]}-600 rounded-lg p-4 slide-in`;
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-bell text-${colors[type]}-400 mr-3"></i>
            <span class="text-${colors[type]}-200">Demo ${type} alert triggered!</span>
        </div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

function simulateGeofenceAlert() {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 z-50 max-w-sm bg-yellow-900 border border-yellow-600 rounded-lg p-4 slide-in';
    notification.innerHTML = `
        <div class="flex items-start">
            <i class="fas fa-exclamation-triangle text-yellow-400 mr-3 mt-1"></i>
            <div>
                <h4 class="text-yellow-200 font-semibold">Geo-fence Alert!</h4>
                <p class="text-yellow-300 text-sm">Entered: Weather Alert Zone</p>
                <p class="text-yellow-400 text-xs mt-1">Distance: 150m | ${new Date().toLocaleTimeString()}</p>
            </div>
        </div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 5000);
    
    // Vibrate if supported
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200]);
    }
}

function demoLanguageChange(code, flag, name) {
    const currentLang = document.querySelector('.text-xl.font-semibold.text-slate-200');
    if (currentLang) {
        currentLang.textContent = `Currently: ${name}`;
    }
    
    const flagElement = currentLang?.parentElement.querySelector('.text-4xl');
    if (flagElement) {
        flagElement.textContent = flag;
    }
    
    // Show notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 z-50 max-w-sm bg-purple-900 border border-purple-600 rounded-lg p-4 slide-in';
    notification.innerHTML = `
        <div class="flex items-center">
            <span class="text-2xl mr-3">${flag}</span>
            <span class="text-purple-200">Language changed to ${name}</span>
        </div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

function testVoiceCommand() {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 z-50 max-w-sm bg-purple-900 border border-purple-600 rounded-lg p-4 slide-in';
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-microphone text-purple-400 mr-3"></i>
            <span class="text-purple-200">Demo: Voice recognition listening for emergency commands...</span>
        </div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 4000);
}

function applyLanguageChange() {
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 z-50 max-w-sm bg-green-900 border border-green-600 rounded-lg p-4 slide-in';
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-check text-green-400 mr-3"></i>
            <span class="text-green-200">Language preferences saved and applied!</span>
        </div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// ==========================================
// 🗺️ LIVE MAP FUNCTIONALITY  
// ==========================================

let currentMapFilter = 'all';
let zoomLevel = 1;
let mapUpdateInterval;

// Initialize map when dashboard loads
if (window.location.pathname.includes('dashboard.html')) {
    document.addEventListener('DOMContentLoaded', function() {
        initializeLiveMap();
        startRealTimeUpdates();
    });
}

function initializeLiveMap() {
    console.log('🗺️ Initializing live tourist map...');
    updateTouristCounts();
    simulateMovingTourists();
}

function startRealTimeUpdates() {
    // Update map every 10 seconds
    mapUpdateInterval = setInterval(() => {
        updateTouristPositions();
        updateLastUpdatedTime();
        simulateNewAlerts();
    }, 10000);
}

function updateTouristPositions() {
    const movingTourist = document.getElementById('movingTourist');
    if (movingTourist) {
        // Simulate movement
        const currentTop = parseFloat(movingTourist.style.top);
        const currentLeft = parseFloat(movingTourist.style.left);
        
        const newTop = Math.max(10, Math.min(80, currentTop + (Math.random() - 0.5) * 10));
        const newLeft = Math.max(10, Math.min(80, currentLeft + (Math.random() - 0.5) * 10));
        
        movingTourist.style.top = newTop + '%';
        movingTourist.style.left = newLeft + '%';
    }
    
    // Add slight movement to all markers for realism
    document.querySelectorAll('.tourist-marker').forEach(marker => {
        if (marker.id !== 'movingTourist') {
            const originalTop = marker.getAttribute('data-original-top') || marker.style.top;
            const originalLeft = marker.getAttribute('data-original-left') || marker.style.left;
            
            if (!marker.getAttribute('data-original-top')) {
                marker.setAttribute('data-original-top', marker.style.top);
                marker.setAttribute('data-original-left', marker.style.left);
            }
            
            const baseTop = parseFloat(originalTop);
            const baseLeft = parseFloat(originalLeft);
            
            const newTop = baseTop + (Math.sin(Date.now() / 10000) * 2);
            const newLeft = baseLeft + (Math.cos(Date.now() / 10000) * 2);
            
            marker.style.top = newTop + '%';
            marker.style.left = newLeft + '%';
        }
    });
}

function simulateMovingTourists() {
    // Add new tourists periodically
    setInterval(() => {
        if (Math.random() > 0.7) {
            addRandomTourist();
        }
    }, 30000);
}

function addRandomTourist() {
    const statuses = ['safe', 'alert'];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const colors = { safe: 'green', alert: 'yellow' };
    
    const marker = document.createElement('div');
    marker.className = `tourist-marker ${status} absolute animate-pulse`;
    marker.style.top = (Math.random() * 70 + 10) + '%';
    marker.style.left = (Math.random() * 70 + 10) + '%';
    marker.setAttribute('data-tourist-id', 'T' + Date.now().toString().slice(-3));
    marker.setAttribute('data-name', 'New Tourist');
    marker.setAttribute('data-status', status);
    marker.setAttribute('data-location', 'Unknown Location');
    marker.onclick = function() { showTouristInfo(this); };
    
    marker.innerHTML = `<div class="w-3 h-3 bg-${colors[status]}-500 rounded-full border-2 border-white shadow-lg"></div>`;
    
    const markersContainer = document.getElementById('touristMarkers');
    if (markersContainer) {
        markersContainer.appendChild(marker);
    }
    
    // Remove after some time
    setTimeout(() => {
        if (marker.parentNode) {
            marker.remove();
        }
    }, 120000);
    
    updateTouristCounts();
}

function filterTourists(status) {
    currentMapFilter = status;
    
    // Update filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-blue-600', 'text-white');
        btn.classList.add('bg-slate-600', 'text-slate-300');
    });
    
    // Find the clicked button
    const clickedBtn = document.querySelector(`[onclick="filterTourists('${status}')"]`);
    if (clickedBtn) {
        clickedBtn.classList.add('active', 'bg-blue-600', 'text-white');
        clickedBtn.classList.remove('bg-slate-600', 'text-slate-300');
    }
    
    // Show/hide markers
    document.querySelectorAll('.tourist-marker').forEach(marker => {
        const markerStatus = marker.getAttribute('data-status');
        
        if (status === 'all' || markerStatus === status) {
            marker.style.display = 'block';
        } else {
            marker.style.display = 'none';
        }
    });
}

function showTouristInfo(marker) {
    const modal = document.getElementById('touristInfoModal');
    const details = document.getElementById('touristDetails');
    
    if (!modal || !details) return;
    
    const touristId = marker.getAttribute('data-tourist-id');
    const name = marker.getAttribute('data-name');
    const status = marker.getAttribute('data-status');
    const location = marker.getAttribute('data-location');
    
    const statusColors = {
        safe: 'text-green-400',
        alert: 'text-yellow-400', 
        emergency: 'text-red-400'
    };
    
    const statusIcons = {
        safe: 'fas fa-check-circle',
        alert: 'fas fa-exclamation-triangle',
        emergency: 'fas fa-exclamation-circle'
    };
    
    details.innerHTML = `
        <div class="flex items-center justify-between p-3 bg-slate-800 rounded border border-slate-600">
            <div>
                <div class="font-semibold text-slate-100">${name}</div>
                <div class="text-sm text-slate-400">ID: ${touristId}</div>
            </div>
            <div class="${statusColors[status]}">
                <i class="${statusIcons[status]} text-2xl"></i>
            </div>
        </div>
        
        <div class="space-y-2 text-sm">
            <div class="flex justify-between">
                <span class="text-slate-400">Location:</span>
                <span class="text-slate-200">${location}</span>
            </div>
            <div class="flex justify-between">
                <span class="text-slate-400">Status:</span>
                <span class="${statusColors[status]} capitalize">${status}</span>
            </div>
            <div class="flex justify-between">
                <span class="text-slate-400">Last Update:</span>
                <span class="text-slate-200">${new Date().toLocaleTimeString()}</span>
            </div>
            <div class="flex justify-between">
                <span class="text-slate-400">GPS Accuracy:</span>
                <span class="text-slate-200">±5m</span>
            </div>
        </div>
        
        ${status === 'emergency' ? `
            <div class="bg-red-900 border border-red-600 rounded p-3">
                <div class="text-red-200 text-sm font-semibold mb-1">
                    <i class="fas fa-exclamation-triangle mr-1"></i>Emergency Alert Active
                </div>
                <div class="text-red-300 text-xs">Panic button activated 5 minutes ago</div>
            </div>
        ` : ''}
        
        ${status === 'alert' ? `
            <div class="bg-yellow-900 border border-yellow-600 rounded p-3">
                <div class="text-yellow-200 text-sm font-semibold mb-1">
                    <i class="fas fa-exclamation-triangle mr-1"></i>Geo-fence Alert
                </div>
                <div class="text-yellow-300 text-xs">Entered caution zone 2 minutes ago</div>
            </div>
        ` : ''}
    `;
    
    modal.classList.remove('hidden');
}

function closeTouristInfo() {
    const modal = document.getElementById('touristInfoModal');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function contactTourist() {
    alert('Contacting tourist via SafeTour360° app...');
    closeTouristInfo();
}

function trackTourist() {
    alert('Activating enhanced GPS tracking...');
    closeTouristInfo();
}

function toggleMapView() {
    // Toggle between satellite and street view
    const mapBase = document.getElementById('mapBase');
    if (mapBase) {
        if (mapBase.classList.contains('from-green-900/20')) {
            mapBase.className = 'absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600';
        } else {
            mapBase.className = 'absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/30 to-purple-900/20';
        }
    }
}

function changeMapType() {
    const mapType = document.getElementById('mapType');
    const mapBase = document.getElementById('mapBase');
    
    if (!mapType || !mapBase) return;
    
    switch(mapType.value) {
        case 'satellite':
            mapBase.className = 'absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/30 to-purple-900/20';
            break;
        case 'street':
            mapBase.className = 'absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500';
            break;
        case 'terrain':
            mapBase.className = 'absolute inset-0 bg-gradient-to-br from-amber-900/30 via-green-900/30 to-blue-900/30';
            break;
    }
}

function zoomIn() {
    if (zoomLevel < 3) {
        zoomLevel++;
        const markers = document.getElementById('touristMarkers');
        if (markers) {
            markers.style.transform = `scale(${zoomLevel})`;
        }
    }
}

function zoomOut() {
    if (zoomLevel > 1) {
        zoomLevel--;
        const markers = document.getElementById('touristMarkers');
        if (markers) {
            markers.style.transform = `scale(${zoomLevel})`;
        }
    }
}

function refreshMap() {
    updateTouristPositions();
    updateTouristCounts();
    updateLastUpdatedTime();
    
    // Show refresh feedback
    const notification = document.createElement('div');
    notification.className = 'fixed top-20 right-4 z-50 bg-blue-900 border border-blue-600 rounded-lg p-3 slide-in';
    notification.innerHTML = `
        <div class="flex items-center text-blue-200">
            <i class="fas fa-sync fa-spin mr-2"></i>
            <span>Map refreshed</span>
        </div>
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
}

function updateTouristCounts() {
    const safeCount = document.querySelectorAll('.tourist-marker.safe:not([style*="display: none"])').length;
    const alertCount = document.querySelectorAll('.tourist-marker.alert:not([style*="display: none"])').length;
    const emergencyCount = document.querySelectorAll('.tourist-marker.emergency:not([style*="display: none"])').length;
    const totalCount = safeCount + alertCount + emergencyCount;
    
    const allCountEl = document.getElementById('allCount');
    const safeCountEl = document.getElementById('safeCount');
    const alertCountEl = document.getElementById('alertCount');
    const emergencyCountEl = document.getElementById('emergencyCount');
    
    if (allCountEl) allCountEl.textContent = totalCount;
    if (safeCountEl) safeCountEl.textContent = safeCount;
    if (alertCountEl) alertCountEl.textContent = alertCount;
    if (emergencyCountEl) emergencyCountEl.textContent = emergencyCount;
}

function updateLastUpdatedTime() {
    const lastUpdatedEl = document.getElementById('lastUpdated');
    if (lastUpdatedEl) {
        const timeAgo = Math.floor(Math.random() * 3); // 0-2 minutes ago
        lastUpdatedEl.textContent = timeAgo === 0 ? 'Just now' : `${timeAgo} min ago`;
    }
}

function simulateNewAlerts() {
    if (Math.random() > 0.8) {
        // Randomly create an alert
        const safeMarkers = document.querySelectorAll('.tourist-marker.safe');
        if (safeMarkers.length > 0) {
            const randomMarker = safeMarkers[Math.floor(Math.random() * safeMarkers.length)];
            randomMarker.className = randomMarker.className.replace('safe', 'alert');
            randomMarker.setAttribute('data-status', 'alert');
            const markerDot = randomMarker.querySelector('div');
            if (markerDot) {
                markerDot.className = 'w-3 h-3 bg-yellow-500 rounded-full border-2 border-white shadow-lg';
            }
            
            updateTouristCounts();
            
            // Show alert notification
            const notification = document.createElement('div');
            notification.className = 'fixed top-20 right-4 z-50 bg-yellow-900 border border-yellow-600 rounded-lg p-3 slide-in';
            notification.innerHTML = `
                <div class="flex items-center text-yellow-200">
                    <i class="fas fa-exclamation-triangle mr-2"></i>
                    <span>New geo-fence alert detected</span>
                </div>
            `;
            document.body.appendChild(notification);
            setTimeout(() => notification.remove(), 4000);
        }
    }
}

// ==========================================
// EVENT LISTENERS & INITIALIZATION
// ==========================================

// Active Page Highlighting
document.addEventListener('DOMContentLoaded', function() {
    // Debug log
    console.log('Script loaded successfully!');
    
    // Add click events to feature cards automatically
    const featureCards = document.querySelectorAll('.feature-card');
    if (featureCards.length > 0) {
        console.log(`Found ${featureCards.length} feature cards`);
        
        featureCards.forEach((card, index) => {
            const feature = card.getAttribute('data-feature');
            
            card.addEventListener('click', function() {
                switch(feature) {
                    case 'digital-id':
                        openDigitalIDModal();
                        break;
                    case 'panic-button':
                        openPanicButtonModal();
                        break;
                    case 'geo-fencing':
                        openGeofencingModal();
                        break;
                    case 'multilingual':
                        openMultilingualModal();
                        break;
                }
            });
        });
        
        console.log(`✅ Added click events to ${featureCards.length} feature cards`);
    }

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a[href]');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('text-blue-400');
            link.classList.remove('text-slate-300');
        }
    });

    // Check for contact hash on page load
    if (window.location.hash === '#contact') {
        setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
});

// Simulate real-time updates for dashboard
if (window.location.pathname.includes('dashboard.html')) {
    setInterval(updateDashboardStats, 15000);
}

function updateDashboardStats() {
    const activeTourists = document.querySelector('.text-3xl.font-bold.text-blue-400');
    if (activeTourists) {
        const current = parseInt(activeTourists.textContent.replace(',', ''));
        const newCount = Math.max(current + Math.floor(Math.random() * 20) - 10, 1000);
        activeTourists.textContent = newCount.toLocaleString();
    }

    // Update alert count
    const alertCount = document.querySelector('.text-3xl.font-bold.text-red-400');
    if (alertCount) {
        const current = parseInt(alertCount.textContent);
        const newCount = Math.max(current + Math.floor(Math.random() * 6) - 3, 0);
        alertCount.textContent = newCount;
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Auto-close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuButton = event.target.closest('[onclick="toggleMobileMenu()"]');
    
    if (mobileMenu && !mobileMenu.classList.contains('hidden') && !menuButton && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.add('hidden');
    }
});

// Add loading animation to buttons
document.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON' && event.target.id !== 'panicBtn') {
        const button = event.target;
        button.classList.add('btn-loading');
        setTimeout(() => {
            button.classList.remove('btn-loading');
        }, 2000);
    }
});

// Tourist dashboard specific features
if (window.location.pathname.includes('tourist.html')) {
    // Simulate safety score updates
    setInterval(() => {
        const safetyScore = document.querySelector('.text-2xl.font-bold');
        if (safetyScore && safetyScore.textContent !== 'EMERGENCY ALERT SENT!') {
            const currentScore = parseInt(safetyScore.textContent);
            const newScore = Math.max(Math.min(currentScore + Math.floor(Math.random() * 6) - 3, 100), 0);
            safetyScore.textContent = newScore;
        }
    }, 30000);
}

// Add keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // ESC to close panic modal
    if (event.key === 'Escape') {
        closePanicModal();
        closeTouristInfo();
        // Close any open modals
        const modals = document.querySelectorAll('.fixed.inset-0');
        modals.forEach(modal => modal.remove());
    }
    
    // Ctrl/Cmd + H for home
    if ((event.ctrlKey || event.metaKey) && event.key === 'h') {
        event.preventDefault();
        window.location.href = 'index.html';
    }
});

// Cleanup intervals when leaving page
window.addEventListener('beforeunload', function() {
    if (mapUpdateInterval) {
        clearInterval(mapUpdateInterval);
    }
});

// Global function test - for debugging
window.testModals = function() {
    console.log('Testing modal functions:');
    console.log('openDigitalIDModal:', typeof openDigitalIDModal);
    console.log('openPanicButtonModal:', typeof openPanicButtonModal);
    console.log('openGeofencingModal:', typeof openGeofencingModal);
    console.log('openMultilingualModal:', typeof openMultilingualModal);
};
