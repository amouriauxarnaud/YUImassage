// Language toggle functionality
let currentLang = 'ja';

function toggleLanguage() {
    currentLang = currentLang === 'ja' ? 'en' : 'ja';
    updateLanguageDisplay();
    updateContentLanguage();
}

function updateLanguageDisplay() {
    const indicator = document.getElementById('lang-indicator');
    if (indicator) {
        indicator.textContent = currentLang === 'ja' ? 'EN' : 'JP';
    }
}

function updateContentLanguage() {
    const elements = document.querySelectorAll('[data-ja][data-en]');
    elements.forEach(element => {
        if (currentLang === 'ja') {
            element.textContent = element.getAttribute('data-ja');
        } else {
            element.textContent = element.getAttribute('data-en');
        }
    });
}

// Mobile navigation toggle
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Initialize language display
    updateLanguageDisplay();
    updateContentLanguage();
});

// LINE chat function
function openLineChat() {
    // For LINE, you might want to open a specific LINE URL or show instructions
    alert('LINEでお問い合わせください。QRコードをスキャンして友達追加をお願いします。');
}

function openWhatsAppChat() {
    // For WhatsApp, you might want to open a specific WhatsApp URL or show instructions
    alert('WhatsAppでお問い合わせください。QRコードをスキャンして友達追加をお願いします。');
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

    // Clean slate: no chat-specific DOM observers/branding removals
});