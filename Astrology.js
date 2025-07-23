// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const zodiacSelect = document.getElementById('zodiac-select');
const horoscopeContent = document.getElementById('horoscope-content');
const contactForm = document.getElementById('contact-form');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Animate hamburger bars
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (hamburger.classList.contains('active')) {
            if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) bar.style.opacity = '0';
            if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        }
    });
});

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        
        // Reset hamburger bars
        const bars = hamburger.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    });
});

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add click event listeners to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Horoscope data
const horoscopeData = {
    aries: {
        name: 'मेष राशि',
        icon: '♈',
        prediction: 'आज आपके लिए एक शुभ दिन है। करियर में नई संभावनाएं दिखाई दे सकती हैं। प्रेम जीवन में खुशियां आने वाली हैं। स्वास्थ्य का विशेष ध्यान रखें और सकारात्मक सोच बनाए रखें।',
        lucky_number: '7',
        lucky_color: 'लाल',
        lucky_time: '10:00 AM - 12:00 PM'
    },
    taurus: {
        name: 'वृषभ राशि',
        icon: '♉',
        prediction: 'आर्थिक मामलों में सुधार होगा। पारिवारिक रिश्तों में मधुरता आएगी। कोई पुराना काम पूरा हो सकता है। धैर्य रखें और अपने लक्ष्य पर केंद्रित रहें।',
        lucky_number: '3',
        lucky_color: 'हरा',
        lucky_time: '2:00 PM - 4:00 PM'
    },
    gemini: {
        name: 'मिथुन राशि',
        icon: '♊',
        prediction: 'संवाद कौशल आज आपकी सफलता की कुंजी होगा। नए लोगों से मिलना-जुलना फायदेमंद रहेगा। यात्रा की योजना बन सकती है। मानसिक तनाव से बचें।',
        lucky_number: '5',
        lucky_color: 'पीला',
        lucky_time: '11:00 AM - 1:00 PM'
    },
    cancer: {
        name: 'कर्क राशि',
        icon: '♋',
        prediction: 'घर-परिवार से जुड़े मामलों में खुशी मिलेगी। भावनात्मक संतुलन बनाए रखें। कोई अच्छी खबर मिल सकती है। अपने अंतर्मन की आवाज सुनें।',
        lucky_number: '2',
        lucky_color: 'चांदी',
        lucky_time: '6:00 PM - 8:00 PM'
    },
    leo: {
        name: 'सिंह राशि',
        icon: '♌',
        prediction: 'आत्मविश्वास में वृद्धि होगी। रचनात्मक कार्यों में सफलता मिलेगी। नेतृत्व के अवसर आ सकते हैं। अहंकार से बचें और विनम्रता बनाए रखें।',
        lucky_number: '1',
        lucky_color: 'सुनहरा',
        lucky_time: '12:00 PM - 2:00 PM'
    },
    virgo: {
        name: 'कन्या राशि',
        icon: '♍',
        prediction: 'कड़ी मेहनत का फल मिलेगा। स्वास्थ्य में सुधार होगा। व्यावहारिक सोच से काम लें। छोटी-छोटी बातों पर ध्यान दें। सफलता निश्चित है।',
        lucky_number: '6',
        lucky_color: 'नीला',
        lucky_time: '9:00 AM - 11:00 AM'
    },
    libra: {
        name: 'तुला राशि',
        icon: '♎',
        prediction: 'संतुलन और न्याय आपके साथ होगा। कलात्मक कार्यों में रुचि बढ़ेगी। रिश्तों में सामंजस्य रहेगा। निर्णय लेने में जल्दबाजी न करें।',
        lucky_number: '4',
        lucky_color: 'गुलाबी',
        lucky_time: '3:00 PM - 5:00 PM'
    },
    scorpio: {
        name: 'वृश्चिक राशि',
        icon: '♏',
        prediction: 'गहन अध्ययन और अनुसंधान में सफलता मिलेगी। छुपे हुए रहस्य खुल सकते हैं। दृढ़ संकल्प से काम लें। भावनाओं को नियंत्रित रखें।',
        lucky_number: '8',
        lucky_color: 'गहरा लाल',
        lucky_time: '7:00 PM - 9:00 PM'
    },
    sagittarius: {
        name: 'धनु राशि',
        icon: '♐',
        prediction: 'नई जगहों की यात्रा हो सकती है। ज्ञान की प्राप्ति होगी। उच्च शिक्षा में अवसर मिल सकते हैं। आशावादी दृष्टिकोण बनाए रखें।',
        lucky_number: '9',
        lucky_color: 'बैंगनी',
        lucky_time: '1:00 PM - 3:00 PM'
    },
    capricorn: {
        name: 'मकर राशि',
        icon: '♑',
        prediction: 'कड़ी मेहनत और अनुशासन से सफलता मिलेगी। करियर में प्रगति होगी। जिम्मेदारियों को संभालने में कुशलता दिखाएं। धैर्य रखें।',
        lucky_number: '10',
        lucky_color: 'काला',
        lucky_time: '8:00 AM - 10:00 AM'
    },
    aquarius: {
        name: 'कुंभ राशि',
        icon: '♒',
        prediction: 'नवाचार और तकनीक में रुचि बढ़ेगी। मित्रों से सहायता मिलेगी। सामाजिक कार्यों में भाग लेने का अवसर मिल सकता है। भविष्य की योजना बनाएं।',
        lucky_number: '11',
        lucky_color: 'आसमानी',
        lucky_time: '4:00 PM - 6:00 PM'
    },
    pisces: {
        name: 'मीन राशि',
        icon: '♓',
        prediction: 'कल्पना और सपनों को साकार करने का समय है। आध्यात्मिक गतिविधियों में रुचि बढ़ेगी। सहानुभूति और करुणा दिखाएं। अंतर्दृष्टि का उपयोग करें।',
        lucky_number: '12',
        lucky_color: 'समुद्री हरा',
        lucky_time: '5:00 PM - 7:00 PM'
    }
};

// Horoscope selector functionality
zodiacSelect.addEventListener('change', function() {
    const selectedSign = this.value;
    
    if (selectedSign && horoscopeData[selectedSign]) {
        const data = horoscopeData[selectedSign];
        
        horoscopeContent.innerHTML = `
            <div class="horoscope-result">
                <div style="text-align: center; margin-bottom: 20px;">
                    <span style="font-size: 3rem; display: block; margin-bottom: 10px;">${data.icon}</span>
                    <h3>${data.name}</h3>
                </div>
                <div style="margin-bottom: 20px;">
                    <h4 style="color: var(--accent-color); margin-bottom: 10px;">आज का राशिफल:</h4>
                    <p>${data.prediction}</p>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-top: 20px;">
                    <div style="text-align: center; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 8px;">
                        <strong style="color: var(--accent-color);">भाग्यशाली संख्या</strong>
                        <div style="font-size: 1.5rem; margin-top: 5px;">${data.lucky_number}</div>
                    </div>
                    <div style="text-align: center; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 8px;">
                        <strong style="color: var(--accent-color);">भाग्यशाली रंग</strong>
                        <div style="font-size: 1.2rem; margin-top: 5px;">${data.lucky_color}</div>
                    </div>
                    <div style="text-align: center; padding: 15px; background: rgba(255,255,255,0.1); border-radius: 8px;">
                        <strong style="color: var(--accent-color);">शुभ समय</strong>
                        <div style="font-size: 1rem; margin-top: 5px;">${data.lucky_time}</div>
                    </div>
                </div>
            </div>
        `;
    } else {
        horoscopeContent.innerHTML = `
            <div class="horoscope-placeholder">
                <i class="fas fa-star"></i>
                <p>कृपया अपनी राशि चुनें</p>
            </div>
        `;
    }
});

// Zodiac card click functionality
document.querySelectorAll('.zodiac-card').forEach(card => {
    card.addEventListener('click', function() {
        const sign = this.getAttribute('data-sign');
        if (sign) {
            // Update the dropdown
            zodiacSelect.value = sign;
            
            // Trigger the change event
            const event = new Event('change');
            zodiacSelect.dispatchEvent(event);
            
            // Scroll to horoscope section
            scrollToSection('horoscope');
        }
    });
    
    // Add hover effect
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Contact form submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.email || !data.phone || !data.service || !data.message) {
        showNotification('कृपया सभी फील्ड भरें।', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification('कृपया वैध ईमेल पता दर्ज करें।', 'error');
        return;
    }
    
    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(data.phone.replace(/\D/g, ''))) {
        showNotification('कृपया वैध फोन नंबर दर्ज करें।', 'error');
        return;
    }
    
    // Simulate form submission
    showNotification('आपका संदेश सफलतापूर्वक भेज दिया गया है। हम जल्द ही आपसे संपर्क करेंगे।', 'success');
    
    // Reset form
    this.reset();
});

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        z-index: 10000;
        max-width: 400px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        animation: slideInRight 0.3s ease-out;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        margin-left: auto;
        padding: 5px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Add CSS for notification animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.service-icon');
        icon.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.service-icon');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.zodiac-card, .service-card, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-star, .floating-moon, .floating-planet');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add click effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Current date display
function updateCurrentDate() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        weekday: 'long'
    };
    const dateString = now.toLocaleDateString('hi-IN', options);
    
    // Add date to horoscope section if needed
    const horoscopeSection = document.querySelector('.horoscope-section .section-subtitle');
    if (horoscopeSection && !horoscopeSection.textContent.includes('आज')) {
        horoscopeSection.textContent = `आज (${dateString}) आपके लिए क्या कहते हैं सितारे`;
    }
}

// Initialize date
updateCurrentDate();

// Add smooth reveal animation for sections
const revealElements = document.querySelectorAll('.section-header, .hero-content');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Add CSS for reveal animation
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    .section-header, .hero-content {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    
    .section-header.revealed, .hero-content.revealed {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(revealStyle);

console.log('ज्योतिष संसार वेबसाइट लोड हो गई है! 🌟');

