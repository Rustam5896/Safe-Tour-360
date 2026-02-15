// Comprehensive Multilingual Support System
class MultilingualSystem {
    constructor() {
        this.currentLanguage = localStorage.getItem('safetour_language') || 'en';
        this.translations = {};
        this.supportedLanguages = {
            'en': { name: 'English', flag: '🇬🇧', direction: 'ltr' },
            'hi': { name: 'हिंदी', flag: '🇮🇳', direction: 'ltr' },
            'bn': { name: 'বাংলা', flag: '🇧🇩', direction: 'ltr' },
            'as': { name: 'অসমীয়া', flag: '🇮🇳', direction: 'ltr' },
            'ne': { name: 'नेपाली', flag: '🇳🇵', direction: 'ltr' },
            'ta': { name: 'தமிழ்', flag: '🇮🇳', direction: 'ltr' },
            'te': { name: 'తెలుగు', flag: '🇮🇳', direction: 'ltr' },
            'ml': { name: 'മലയാളം', flag: '🇮🇳', direction: 'ltr' },
            'kn': { name: 'ಕನ್ನಡ', flag: '🇮🇳', direction: 'ltr' },
            'gu': { name: 'ગુજરાતી', flag: '🇮🇳', direction: 'ltr' },
            'mr': { name: 'मराठी', flag: '🇮🇳', direction: 'ltr' },
            'pa': { name: 'ਪੰਜਾਬੀ', flag: '🇮🇳', direction: 'ltr' }
        };
        this.loadTranslations();
        this.init();
    }

    loadTranslations() {
        // Core translations for SafeTour360°
        this.translations = {
            en: {
                // Navigation
                'nav.home': 'Home',
                'nav.tourists': 'Tourists',
                'nav.dashboard': 'Dashboard',
                'nav.contact': 'Contact',
                
                // Homepage
                'hero.title': 'Smart Tourist Safety',
                'hero.subtitle': 'Monitoring System',
                'hero.description': 'AI-powered safety monitoring with blockchain-based digital IDs, real-time tracking, and instant emergency response for tourists across India',
                'hero.cta.primary': 'Get Your Tourist ID',
                'hero.cta.secondary': 'Watch Demo',
                
                // Features
                'features.digital_id': 'Digital Tourist ID',
                'features.digital_id.desc': 'Blockchain-based secure digital identity with KYC verification',
                'features.panic_button': 'Panic Button',
                'features.panic_button.desc': 'Instant SOS with live location sharing to authorities',
                'features.geofencing': 'Geo-Fencing',
                'features.geofencing.desc': 'Smart alerts when entering high-risk zones',
                'features.multilingual': 'Multilingual',
                'features.multilingual.desc': 'Support for 10+ Indian languages and English',
                
                // Emergency
                'emergency.title': 'EMERGENCY ALERT SENT!',
                'emergency.location.shared': 'Your location has been shared with:',
                'emergency.police': 'Local Police Station',
                'emergency.medical': 'Medical Services',
                'emergency.contacts': 'Emergency Contacts',
                'emergency.close': 'Close',
                'emergency.call': 'Call Now',
                
                // Geofencing
                'geo.entered': 'Entered',
                'geo.exited': 'Exited',
                'geo.restricted': 'RESTRICTED AREA!',
                'geo.restricted.message': 'Please exit immediately. Authorities have been notified.',
                'geo.understand': 'I UNDERSTAND',
                
                // Common
                'common.loading': 'Loading...',
                'common.save': 'Save',
                'common.cancel': 'Cancel',
                'common.continue': 'Continue',
                'common.back': 'Back',
                'common.next': 'Next',
                'common.language': 'Language',
                'common.location': 'Location',
                'common.time': 'Time',
                'common.status': 'Status',
                'common.active': 'Active',
                'common.inactive': 'Inactive'
            },
            
            hi: {
                // Navigation
                'nav.home': 'होम',
                'nav.tourists': 'पर्यटक',
                'nav.dashboard': 'डैशबोर्ड',
                'nav.contact': 'संपर्क',
                
                // Homepage
                'hero.title': 'स्मार्ट पर्यटक सुरक्षा',
                'hero.subtitle': 'निगरानी प्रणाली',
                'hero.description': 'ब्लॉकचेन-आधारित डिजिटल आईडी, रीयल-टाइम ट्रैकिंग और भारत भर के पर्यटकों के लिए तत्काल आपातकालीन प्रतिक्रिया के साथ AI-संचालित सुरक्षा निगरानी',
                'hero.cta.primary': 'अपना पर्यटक आईडी प्राप्त करें',
                'hero.cta.secondary': 'डेमो देखें',
                
                // Features
                'features.digital_id': 'डिजिटल पर्यटक आईडी',
                'features.digital_id.desc': 'KYC सत्यापन के साथ ब्लॉकचेन-आधारित सुरक्षित डिजिटल पहचान',
                'features.panic_button': 'पैनिक बटन',
                'features.panic_button.desc': 'अधिकारियों को लाइव लोकेशन शेयरिंग के साथ तत्काल SOS',
                'features.geofencing': 'जियो-फेंसिंग',
                'features.geofencing.desc': 'उच्च जोखिम वाले क्षेत्रों में प्रवेश करते समय स्मार्ट अलर्ट',
                'features.multilingual': 'बहुभाषी',
                'features.multilingual.desc': '10+ भारतीय भाषाओं और अंग्रेजी का समर्थन',
                
                // Emergency
                'emergency.title': 'आपातकालीन चेतावनी भेजी गई!',
                'emergency.location.shared': 'आपका स्थान साझा किया गया है:',
                'emergency.police': 'स्थानीय पुलिस स्टेशन',
                'emergency.medical': 'चिकित्सा सेवाएं',
                'emergency.contacts': 'आपातकालीन संपर्क',
                'emergency.close': 'बंद करें',
                'emergency.call': 'अभी कॉल करें',
                
                // Geofencing
                'geo.entered': 'प्रवेश किया',
                'geo.exited': 'बाहर निकला',
                'geo.restricted': 'प्रतिबंधित क्षेत्र!',
                'geo.restricted.message': 'कृपया तुरंत बाहर निकलें। अधिकारियों को सूचित कर दिया गया है।',
                'geo.understand': 'मैं समझ गया',
                
                // Common
                'common.loading': 'लोड हो रहा है...',
                'common.save': 'सेव करें',
                'common.cancel': 'रद्द करें',
                'common.continue': 'जारी रखें',
                'common.back': 'वापस',
                'common.next': 'अगला',
                'common.language': 'भाषा',
                'common.location': 'स्थान',
                'common.time': 'समय',
                'common.status': 'स्थिति',
                'common.active': 'सक्रिय',
                'common.inactive': 'निष्क्रिय'
            },
            
            bn: {
                // Navigation
                'nav.home': 'হোম',
                'nav.tourists': 'পর্যটক',
                'nav.dashboard': 'ড্যাশবোর্ড',
                'nav.contact': 'যোগাযোগ',
                
                // Homepage
                'hero.title': 'স্মার্ট পর্যটক নিরাপত্তা',
                'hero.subtitle': 'পর্যবেক্ষণ ব্যবস্থা',
                'hero.description': 'ব্লকচেইন-ভিত্তিক ডিজিটাল আইডি, রিয়েল-টাইম ট্র্যাকিং এবং ভারত জুড়ে পর্যটকদের জন্য তাৎক্ষণিক জরুরি প্রতিক্রিয়া সহ AI-চালিত নিরাপত্তা পর্যবেক্ষণ',
                'hero.cta.primary': 'আপনার পর্যটক আইডি পান',
                'hero.cta.secondary': 'ডেমো দেখুন',
                
                // Features
                'features.digital_id': 'ডিজিটাল পর্যটক আইডি',
                'features.digital_id.desc': 'KYC যাচাইকরণ সহ ব্লকচেইন-ভিত্তিক নিরাপদ ডিজিটাল পরিচয়',
                'features.panic_button': 'প্যানিক বোতাম',
                'features.panic_button.desc': 'কর্তৃপক্ষের কাছে লাইভ অবস্থান শেয়ারিং সহ তাৎক্ষণিক SOS',
                'features.geofencing': 'জিও-ফেন্সিং',
                'features.geofencing.desc': 'উচ্চ ঝুঁকিপূর্ণ এলাকায় প্রবেশের সময় স্মার্ট সতর্কতা',
                'features.multilingual': 'বহুভাষিক',
                'features.multilingual.desc': '১০+ ভারতীয় ভাষা এবং ইংরেজির সমর্থন',
                
                // Emergency
                'emergency.title': 'জরুরি সতর্কতা পাঠানো হয়েছে!',
                'emergency.location.shared': 'আপনার অবস্থান শেয়ার করা হয়েছে:',
                'emergency.police': 'স্থানীয় পুলিশ স্টেশন',
                'emergency.medical': 'চিকিৎসা সেবা',
                'emergency.contacts': 'জরুরি যোগাযোগ',
                'emergency.close': 'বন্ধ করুন',
                'emergency.call': 'এখনই কল করুন'
            }
            // Add more languages as needed...
        };
    }

    init() {
        this.updatePageLanguage();
        this.addLanguageSelector();
        this.addVoiceSupport();
    }

    translate(key, fallback = key) {
        const translation = this.translations[this.currentLanguage];
        return translation && translation[key] ? translation[key] : (this.translations.en[key] || fallback);
    }

    changeLanguage(langCode) {
        if (this.supportedLanguages[langCode]) {
            this.currentLanguage = langCode;
            localStorage.setItem('safetour_language', langCode);
            this.updatePageLanguage();
            this.updateDirection();
            
            // Announce language change
            if ('speechSynthesis' in window) {
                const utterance = new SpeechSynthesisUtterance(
                    this.translate('common.language') + ' ' + this.supportedLanguages[langCode].name
                );
                utterance.lang = langCode;
                speechSynthesis.speak(utterance);
            }
        }
    }

    updatePageLanguage() {
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translate(key);
            
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translation;
            } else if (element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLanguage;
    }

    updateDirection() {
        const direction = this.supportedLanguages[this.currentLanguage].direction;
        document.documentElement.dir = direction;
        document.body.style.direction = direction;
    }

    addLanguageSelector() {
        // Create floating language selector
        const selector = document.createElement('div');
        selector.id = 'languageSelector';
        selector.className = 'fixed bottom-4 left-4 z-40';
        
        selector.innerHTML = `
            <div class="relative">
                <button id="langToggle" class="bg-slate-700 hover:bg-slate-600 text-slate-200 p-3 rounded-full shadow-lg border border-slate-600 transition duration-300">
                    <span class="text-lg">${this.supportedLanguages[this.currentLanguage].flag}</span>
                    <i class="fas fa-chevron-up ml-1 text-xs"></i>
                </button>
                <div id="langDropdown" class="hidden absolute bottom-full left-0 mb-2 bg-slate-700 rounded-lg shadow-2xl border border-slate-600 min-w-48 max-h-80 overflow-y-auto">
                    <div class="p-2">
                        <div class="text-xs text-slate-400 mb-2 px-2">Select Language:</div>
                        ${Object.entries(this.supportedLanguages).map(([code, lang]) => `
                            <button onclick="multilingual.changeLanguage('${code}')" 
                                    class="w-full text-left px-3 py-2 hover:bg-slate-600 rounded flex items-center justify-between transition duration-200 ${code === this.currentLanguage ? 'bg-blue-600 text-white' : 'text-slate-200'}">
                                <span class="flex items-center">
                                    <span class="text-lg mr-3">${lang.flag}</span>
                                    <span class="text-sm">${lang.name}</span>
                                </span>
                                ${code === this.currentLanguage ? '<i class="fas fa-check text-xs"></i>' : ''}
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
        
        if (document.body) {
            document.body.appendChild(selector);
        }
        
        // Toggle dropdown
        document.getElementById('langToggle').addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = document.getElementById('langDropdown');
            dropdown.classList.toggle('hidden');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', () => {
            document.getElementById('langDropdown').classList.add('hidden');
        });
    }

    addVoiceSupport() {
        // Add voice input for emergency scenarios
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            this.recognition = new SpeechRecognition();
            
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.lang = this.currentLanguage + '-IN'; // Default to Indian variants
            
            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript.toLowerCase();
                this.handleVoiceCommand(transcript);
            };
            
            // Add voice button to panic area
            this.addVoiceButton();
        }
    }

    addVoiceButton() {
        const voiceBtn = document.createElement('button');
        voiceBtn.id = 'voiceEmergency';
        voiceBtn.className = 'fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg z-40 transition duration-300';
        voiceBtn.innerHTML = '<i class="fas fa-microphone text-xl"></i>';
        voiceBtn.title = this.translate('emergency.voice', 'Voice Emergency');
        
        voiceBtn.addEventListener('click', () => {
            this.startVoiceRecognition();
        });
        
        if (document.body) {
            document.body.appendChild(voiceBtn);
        }
    }

    startVoiceRecognition() {
        if (this.recognition) {
            this.recognition.lang = this.currentLanguage + '-IN';
            this.recognition.start();
            
            // Visual feedback
            const voiceBtn = document.getElementById('voiceEmergency');
            voiceBtn.innerHTML = '<i class="fas fa-microphone-slash text-xl animate-pulse"></i>';
            voiceBtn.classList.add('animate-pulse');
            
            setTimeout(() => {
                voiceBtn.innerHTML = '<i class="fas fa-microphone text-xl"></i>';
                voiceBtn.classList.remove('animate-pulse');
            }, 5000);
        }
    }

    handleVoiceCommand(transcript) {
        const emergencyKeywords = {
            en: ['help', 'emergency', 'panic', 'police', 'medical', 'danger'],
            hi: ['मदद', 'आपातकाल', 'पुलिस', 'डॉक्टर', 'खतरा'],
            bn: ['সাহায্য', 'জরুরি', 'পুলিশ', 'ডাক্তার', 'বিপদ']
        };
        
        const keywords = emergencyKeywords[this.currentLanguage] || emergencyKeywords.en;
        const isEmergency = keywords.some(keyword => transcript.includes(keyword));
        
        if (isEmergency) {
            // Trigger panic button
            if (window.panicSystem) {
                panicSystem.triggerAlert('emergency');
            }
            
            // Speak confirmation
            this.speak(this.translate('emergency.title'));
        }
    }

    speak(text, lang = this.currentLanguage) {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang + '-IN';
            utterance.rate = 0.9;
            utterance.pitch = 1;
            speechSynthesis.speak(utterance);
        }
    }

    // RTL support for future Arabic/Urdu languages
    isRTL() {
        return this.supportedLanguages[this.currentLanguage].direction === 'rtl';
    }

    // Get formatted date/time in local language
    formatDateTime(date = new Date()) {
        try {
            return new Intl.DateTimeFormat(this.currentLanguage + '-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }).format(date);
        } catch (e) {
            return date.toLocaleString();
        }
    }

    // Number formatting for different locales
    formatNumber(number) {
        try {
            return new Intl.NumberFormat(this.currentLanguage + '-IN').format(number);
        } catch (e) {
            return number.toString();
        }
    }
}

// Initialize multilingual system
const multilingual = new MultilingualSystem();

// Add translation attributes to existing elements
document.addEventListener('DOMContentLoaded', function() {
    // Add data-translate attributes to key elements
    const translations = {
        'SafeTour360°': 'SafeTour360°',
        'Home': 'nav.home',
        'Tourists': 'nav.tourists', 
        'Dashboard': 'nav.dashboard',
        'Contact': 'nav.contact',
        'Smart Tourist Safety': 'hero.title',
        'Monitoring System': 'hero.subtitle',
        'Get Your Tourist ID': 'hero.cta.primary',
        'Watch Demo': 'hero.cta.secondary',
        'Digital Tourist ID': 'features.digital_id',
        'Panic Button': 'features.panic_button',
        'Geo-Fencing': 'features.geofencing',
        'Multilingual': 'features.multilingual'
    };
    
    // Apply translations to elements
    Object.entries(translations).forEach(([text, key]) => {
        const elements = Array.from(document.querySelectorAll('*')).filter(el => 
            el.textContent.trim() === text && !el.querySelector('*')
        );
        elements.forEach(el => {
            el.setAttribute('data-translate', key);
        });
    });
    
    // Update page language
    multilingual.updatePageLanguage();
});
