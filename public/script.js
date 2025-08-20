// Track phone calls with source parameter
function trackPhoneCall(source) {
    // Google Ads conversion tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'YOUR_CONVERSION_ID',
            'event_category': 'phone_call',
            'event_label': source,
            'value': 5.0,
            'currency': 'EUR'
        });
    }
    
    // Microsoft Clarity event tracking
    if (typeof clarity !== 'undefined') {
        clarity('set', 'phone_call_source', source);
        clarity('event', 'phone_call');
    }
    
    // Bing Ads conversion tracking
    if (window.uetq) {
        window.uetq.push('event', 'phone_call', {
            'event_category': 'conversion',
            'event_label': source,
            'revenue_value': 5.0,
            'currency': 'EUR'
        });
    }
    
    console.log('Phone call tracked:', source);
}

// Mobile Navigation Toggle
// Show cookie banner immediately for new visitors
const cookieBanner = document.getElementById('cookie-banner');
if (!localStorage.getItem('cookieConsent') && cookieBanner) {
    cookieBanner.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });
    }

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all other answers
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.style.maxHeight = null;
            });
            
            // Toggle current answer
            if (!isActive) {
                this.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Here you would normally send the data to your server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.');
            
            // Reset form
            this.reset();
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading="lazy" to images for better performance
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });

    // Performance: Defer non-critical CSS
    const deferredStyles = document.querySelectorAll('link[rel="stylesheet"][data-defer]');
    deferredStyles.forEach(link => {
        link.removeAttribute('data-defer');
    });

    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Optimize for Google Ads & Bing Ads - Track phone clicks
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Track conversion for Google Ads
            if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                    'send_to': 'YOUR_CONVERSION_ID',
                    'value': 1.0,
                    'currency': 'EUR'
                });
            }
            
            // Track conversion for Bing Ads
            if (window.uetq) {
                window.uetq.push('event', 'phone_call', {
                    'event_category': 'conversion',
                    'revenue_value': 1.0,
                    'currency': 'EUR'
                });
            }
            
            console.log('Phone call initiated:', this.href);
        });
    });

    // Lazy load Google Fonts for better performance
    const fontLink = document.querySelector('link[href*="fonts.googleapis.com"]');
    if (fontLink) {
        fontLink.media = 'print';
        fontLink.onload = function() {
            this.media = 'all';
        };
    }

    // Add schema.org structured data for better SEO
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "KundenserviceKomfort",
        "url": "https://kundenservicekomfort.de",
        "telephone": "+4930123456789",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "DE"
        },
        "sameAs": [],
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "20:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "18:00"
            }
        ]
    });
    document.head.appendChild(schemaScript);


    // Cookie Consent Management
    const acceptAllBtn = document.getElementById('cookie-accept-all');
    const essentialBtn = document.getElementById('cookie-essential');

    // Accept all cookies
    if (acceptAllBtn) {
        acceptAllBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'all');
            localStorage.setItem('cookieConsentDate', new Date().toISOString());
            
            // Initialize Google Ads tracking if available
            if (typeof gtag !== 'undefined') {
                gtag('consent', 'update', {
                    'ad_storage': 'granted',
                    'analytics_storage': 'granted'
                });
            }
            
            // Initialize Bing Ads tracking
            if (window.uetq) {
                window.uetq.push('consent', 'granted');
            }
            
            hideCookieBanner();
        });
    }

    // Accept only essential cookies
    if (essentialBtn) {
        essentialBtn.addEventListener('click', function() {
            localStorage.setItem('cookieConsent', 'essential');
            localStorage.setItem('cookieConsentDate', new Date().toISOString());
            
            // Deny Google Ads tracking
            if (typeof gtag !== 'undefined') {
                gtag('consent', 'update', {
                    'ad_storage': 'denied',
                    'analytics_storage': 'denied'
                });
            }
            
            // Deny Bing Ads tracking
            if (window.uetq) {
                window.uetq.push('consent', 'denied');
            }
            
            hideCookieBanner();
        });
    }

    function hideCookieBanner() {
        if (cookieBanner) {
            cookieBanner.style.display = 'none';
        }
    }

    // Initialize Google Ads and Bing Ads consent based on stored preference
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (cookieConsent === 'all') {
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted'
            });
        }
        if (window.uetq) {
            window.uetq.push('consent', 'granted');
        }
    } else if (cookieConsent === 'essential') {
        if (typeof gtag !== 'undefined') {
            gtag('consent', 'update', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied'
            });
        }
        if (window.uetq) {
            window.uetq.push('consent', 'denied');
        }
    }
});