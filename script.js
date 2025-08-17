// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language (default: Japanese)
    let currentLanguage = 'ja';
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .policy-card, .contact-card, .credential-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Phone number click tracking
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            // You can add analytics tracking here if needed
            console.log('Phone number clicked:', this.href);
        });
    });
});

// Language Toggle Functionality
function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'ja' ? 'en' : 'ja';
    
    // Update HTML lang attribute
    document.documentElement.lang = newLang;
    
    // Update language indicator
    const langIndicator = document.getElementById('lang-indicator');
    langIndicator.textContent = newLang === 'ja' ? 'EN' : 'JA';
    
    // Update page title and meta description
    if (newLang === 'en') {
        document.title = 'YUI massage - 結 | A New Sensation for Myofascial Release';
        document.querySelector('meta[name="description"]').content = 'YUI massage specializes in health and beauty treatments with 18 years of luxury spa experience. Located in Chatan, Sunabe, Okinawa.';
    } else {
        document.title = 'YUI massage - 結 | 筋膜リリースの新感覚';
        document.querySelector('meta[name="description"]').content = 'YUI massageは18年の高級スパ経験を持つ健康と美容の専門サロンです。沖縄県北谷町砂辺にございます。';
    }
    
    // Update all elements with data attributes
    const elementsToTranslate = document.querySelectorAll('[data-ja][data-en]');
    elementsToTranslate.forEach(element => {
        const text = element.getAttribute(`data-${newLang}`);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Update duration labels in pricing
    const durationElements = document.querySelectorAll('.duration');
    durationElements.forEach(element => {
        if (newLang === 'en') {
            element.textContent = element.textContent.replace('分', ' min');
        } else {
            element.textContent = element.textContent.replace(' min', '分');
        }
    });
    
    // Store language preference
    localStorage.setItem('preferredLanguage', newLang);
}

// Load saved language preference
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && savedLang !== 'ja') {
        toggleLanguage();
    }
});

// QR Code and Social Media Functions
function openChat() {
    // Scroll to QR code section instead of opening chat
    const qrSection = document.getElementById('qr-section');
    if (qrSection) {
        qrSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// LINE chat function
function openLineChat() {
    // You can customize this to open LINE app or specific LINE contact
    // For now, it will show a message about LINE contact
    const lineMessage = document.documentElement.lang === 'ja' 
        ? 'LINEでお気軽にお問い合わせください。\n\nLINE ID: YUI_MASSAGE\nまたは\nQRコードをスキャンしてください。'
        : 'Please contact us via LINE.\n\nLINE ID: YUI_MASSAGE\nor\nScan the QR code.';
    
    alert(lineMessage);
}

// Utility function to format phone numbers
function formatPhoneNumber(phoneNumber) {
    // Remove all non-digit characters
    const cleaned = phoneNumber.replace(/\D/g, '');
    
    // Format as Japanese phone number
    if (cleaned.length === 11) {
        return cleaned.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    }
    
    return phoneNumber;
}

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity for fade-in effect
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // If image is already loaded (cached)
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Create scroll to top button
document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #8B7355;
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        font-size: 1.2rem;
    `;
    
    document.body.appendChild(scrollButton);
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.visibility = 'visible';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    scrollButton.addEventListener('click', scrollToTop);
});