// Smooth scrolling for navigation links
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

// Create floating hearts animation
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts');
    const heartEmojis = ['💕', '💖', '💗', '💘', '💝', '💞', '💟', '❤️'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '100vh';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.opacity = '0.7';
        heart.style.pointerEvents = 'none';
        heart.style.animation = `floatHearts ${Math.random() * 5 + 8}s linear infinite`;
        
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 13000);
    }, 2000);
}

// Start the journey with smooth scroll and effects
function startJourney() {
    // Add a beautiful transition effect
    document.body.style.animation = 'pulse 1s ease-in-out';
    
    // Scroll to memories section
    setTimeout(() => {
        document.querySelector('#memories').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 500);
    
    // Remove animation class
    setTimeout(() => {
        document.body.style.animation = '';
    }, 1000);
}

// Send Love Message function - Creative replacement for audio
function showLoveMessage() {
    const messages = [
        "💕 Sakshi, you are the sunshine in my cloudy days!",
        "🌟 Every moment with you feels like magic!",
        "💖 You make my heart skip a beat every single day!",
        "🌹 In a world full of ordinary, you are my extraordinary!",
        "💝 You are not just my girlfriend, you are my best friend and soulmate!",
        "✨ With you, every day is Valentine's Day!",
        "💘 You are the reason I believe in love stories!",
        "🦋 You give me butterflies even after all this time!",
        "🌙 You are my moon, my stars, and my entire universe!",
        "💗 Loving you is the easiest thing I've ever done!"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Create a beautiful floating message
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = randomMessage;
    messageDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #ff6b9d, #c44569);
        color: white;
        padding: 20px 30px;
        border-radius: 15px;
        font-size: 1.2rem;
        font-weight: 600;
        box-shadow: 0 10px 30px rgba(255, 107, 157, 0.3);
        z-index: 10000;
        animation: loveMessageFloat 4s ease-in-out forwards;
        text-align: center;
        max-width: 80%;
        backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(messageDiv);
    
    // Add CSS animation for the message
    const style = document.createElement('style');
    style.textContent = `
        @keyframes loveMessageFloat {
            0% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5) rotateY(-180deg);
            }
            20% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1.05) rotateY(0deg);
            }
            80% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1) rotateY(0deg);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.8) rotateY(180deg);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Create floating hearts around the message
    createLoveHeartBurst();
    
    // Remove message after animation
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.parentNode.removeChild(messageDiv);
        }
        if (style.parentNode) {
            style.parentNode.removeChild(style);
        }
    }, 4000);
}

// Create a burst of hearts around the love message
function createLoveHeartBurst() {
    const heartEmojis = ['�', '💖', '💗', '💘', '💝', '💞', '💟', '❤️', '🧡', '💛', '💚', '💙', '💜'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                font-size: ${Math.random() * 30 + 20}px;
                pointer-events: none;
                z-index: 9999;
                animation: heartBurst 2s ease-out forwards;
            `;
            
            // Random direction for heart burst
            const angle = (i / 15) * Math.PI * 2;
            const distance = Math.random() * 200 + 100;
            const endX = Math.cos(angle) * distance;
            const endY = Math.sin(angle) * distance;
            
            heart.style.setProperty('--endX', endX + 'px');
            heart.style.setProperty('--endY', endY + 'px');
            
            document.body.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 2000);
        }, i * 100);
    }
    
    // Add CSS for heart burst animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes heartBurst {
            0% {
                opacity: 1;
                transform: translate(-50%, -50%) scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: translate(calc(-50% + var(--endX)), calc(-50% + var(--endY))) scale(1.2) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: translate(calc(-50% + var(--endX)), calc(-50% + var(--endY))) scale(0.5) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Remove style after use
    setTimeout(() => {
        if (style.parentNode) {
            style.parentNode.removeChild(style);
        }
    }, 3000);
}

// Create mini heart burst for interactive elements
function createMiniHeartBurst(element) {
    const rect = element.getBoundingClientRect();
    const heartEmojis = ['💕', '💖', '💗', '💘'];
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.cssText = `
                position: fixed;
                top: ${rect.top + rect.height/2}px;
                left: ${rect.left + rect.width/2}px;
                font-size: ${Math.random() * 15 + 15}px;
                pointer-events: none;
                z-index: 9999;
                animation: miniHeartFloat 1.5s ease-out forwards;
            `;
            
            document.body.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 1500);
        }, i * 100);
    }
    
    // Add CSS for mini heart animation if not exists
    if (!document.querySelector('#miniHeartStyle')) {
        const style = document.createElement('style');
        style.id = 'miniHeartStyle';
        style.textContent = `
            @keyframes miniHeartFloat {
                0% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(0) rotate(0deg);
                }
                50% {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1.2) rotate(180deg);
                }
                100% {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.5) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Show notification function
function showNotification(message, duration = 3000) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #ff6b7d, #ff8e92);
        color: white;
        padding: 20px 40px;
        border-radius: 50px;
        font-size: 1.2rem;
        font-weight: 600;
        z-index: 10000;
        box-shadow: 0 10px 30px rgba(255, 107, 125, 0.3);
        animation: fadeInScale 0.5s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOutScale 0.5s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 500);
    }, duration);
}

// Flip card function for reasons section
function flipCard(card) {
    card.classList.toggle('flipped');
    
    // Visual feedback instead of sound
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
        card.style.transform = 'scale(1)';
    }, 150);
    
    // Add a little celebration effect
    if (card.classList.contains('flipped')) {
        createCelebrationEffect(card);
        // Visual heart effect when card is flipped
        createMiniHeartBurst(card);
    }
}

// Create celebration effect
function createCelebrationEffect(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.cssText = `
            position: fixed;
            left: ${centerX}px;
            top: ${centerY}px;
            font-size: 20px;
            pointer-events: none;
            z-index: 1000;
            animation: sparkleOut 1s ease-out forwards;
            animation-delay: ${i * 0.1}s;
        `;
        
        // Set random direction for each sparkle
        const angle = (i / 8) * 360;
        sparkle.style.setProperty('--angle', angle + 'deg');
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 1000 + (i * 100));
    }
}

// Open letter function
function openLetter() {
    const envelope = document.querySelector('.envelope');
    envelope.classList.toggle('opened');
    
    // Visual feedback instead of sound
    envelope.style.transform = 'scale(0.95)';
    setTimeout(() => {
        envelope.style.transform = 'scale(1)';
    }, 150);
    
    if (envelope.classList.contains('opened')) {
        showNotification('💌 A love letter just for Sakshi! 💌', 2000);
        // Visual heart effect when letter opens
        createMiniHeartBurst(envelope);
        setTimeout(() => playHeartSound(), 300);
    }
}

// Generate random reason function
function generateReason() {
    const reasons = [
        "Because your eyes sparkle like stars in the night sky ✨",
        "Because you make ordinary moments feel magical 🌟",
        "Because your voice is my favorite melody 🎵",
        "Because you believe in me even when I don't believe in myself 💪",
        "Because you make me want to be a better person every day 🌱",
        "Because your hugs feel like home 🏠",
        "Because you laugh at my terrible jokes 😂",
        "Because you see beauty in everything, including me 🌸",
        "Because you're brave, kind, and absolutely incredible 💎",
        "Because loving you is the easiest thing I've ever done ❤️",
        "Because you make every day feel like an adventure 🗺️",
        "Because you're not just my girlfriend, you're my best friend 👫",
        "Because you inspire me to dream bigger 🚀",
        "Because you have the most beautiful soul I've ever known 👼",
        "Because you make me feel like the luckiest person alive 🍀",
        "Because you're perfect just the way you are 💯",
        "Because you turn my world from black and white to full color 🌈",
        "Because you make even the simple things feel special 💝",
        "Because you're my favorite person to share silence with 🤫",
        "Because you make me believe in forever 💍"
    ];
    
    const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
    const reasonElement = document.getElementById('random-reason');
    
    // Visual feedback instead of sound
    const button = event.target;
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 150);
    
    // Add fade out effect
    reasonElement.classList.remove('show');
    
    setTimeout(() => {
        reasonElement.textContent = randomReason;
        reasonElement.classList.add('show');
        
        // Add some sparkles around the reason
        createCelebrationEffect(reasonElement);
        // Visual heart effect
        createMiniHeartBurst(reasonElement);
    }, 200);
}

// Add intersection observer for animations
function setupScrollAnimations() {
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
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// Add typing effect for hero title
function addTypingEffect() {
    const title = document.querySelector('.hero-title');
    const text = title.textContent;
    title.textContent = '';
    title.style.borderRight = '3px solid #fff';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Remove cursor after typing
            setTimeout(() => {
                title.style.borderRight = 'none';
            }, 1000);
        }
    };
    
    // Start typing after a short delay
    setTimeout(typeWriter, 1000);
}

// Add CSS animations dynamically
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.02); }
            100% { transform: scale(1); }
        }
        
        @keyframes fadeInScale {
            0% { 
                opacity: 0; 
                transform: translate(-50%, -50%) scale(0.5); 
            }
            100% { 
                opacity: 1; 
                transform: translate(-50%, -50%) scale(1); 
            }
        }
        
        @keyframes fadeOutScale {
            0% { 
                opacity: 1; 
                transform: translate(-50%, -50%) scale(1); 
            }
            100% { 
                opacity: 0; 
                transform: translate(-50%, -50%) scale(0.5); 
            }
        }
        
        @keyframes sparkleOut {
            0% {
                opacity: 1;
                transform: translate(0, 0) scale(1);
            }
            100% {
                opacity: 0;
                transform: translate(
                    calc(cos(var(--angle)) * 100px),
                    calc(sin(var(--angle)) * 100px)
                ) scale(0);
            }
        }
        
        .navbar {
            animation: slideDown 0.8s ease-out;
        }
        
        @keyframes slideDown {
            from {
                transform: translateY(-100%);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
}

// Add particles effect
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -2;
    `;
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: rgba(255, 107, 125, 0.3);
            border-radius: 50%;
            animation: floatParticle ${Math.random() * 20 + 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 5}s;
        `;
        particlesContainer.appendChild(particle);
    }
    
    // Add particle animation
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes floatParticle {
            0% {
                transform: translateY(0) translateX(0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) translateX(50px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(particleStyle);
}

// Add interactive cursor effect
function addCursorEffect() {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: rgba(255, 107, 125, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Add hover effects for interactive elements
    document.querySelectorAll('button, .reason-card, .envelope, .nav-link').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.background = 'rgba(255, 107, 125, 0.8)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'rgba(255, 107, 125, 0.5)';
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add dynamic styles
    addDynamicStyles();
    
    // Setup scroll animations
    setupScrollAnimations();
    
    // Create floating hearts
    createFloatingHearts();
    
    // Create particles effect
    createParticles();
    
    // Add typing effect to hero title
    addTypingEffect();
    
    // Add cursor effect
    addCursorEffect();
    
    // Add welcome message
    setTimeout(() => {
        showNotification('Welcome to our love story, Sakshi! 💕', 3000);
    }, 2000);
    
    console.log('💖 Website loaded with love for Sakshi! 💖');
});

// Add special effects for special dates
function checkSpecialDate() {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    
    // Add your special dates here (format: MM-DD)
    const specialDates = {
        '02-14': 'Happy Valentine\'s Day, my love! 💕',
        '12-25': 'Merry Christmas, beautiful! 🎄',
        '01-01': 'Happy New Year! Here\'s to more love in the new year! 🎊'
    };
    
    const dateKey = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    
    if (specialDates[dateKey]) {
        setTimeout(() => {
            showNotification(specialDates[dateKey], 5000);
        }, 3000);
    }
}

// Check for special dates
checkSpecialDate();

// Add keyboard shortcuts for fun
document.addEventListener('keydown', function(e) {
    // Press 'L' for love
    if (e.key.toLowerCase() === 'l') {
        generateReason();
    }
    
    // Press 'H' for hearts
    if (e.key.toLowerCase() === 'h') {
        createCelebrationEffect(document.querySelector('.hero'));
    }
    
    // Press 'M' for music
    if (e.key.toLowerCase() === 'm') {
        playLoveSound();
    }
});

// Add secret message (Konami code style)
let secretSequence = [];
const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];

document.addEventListener('keydown', function(e) {
    secretSequence.push(e.key);
    secretSequence = secretSequence.slice(-secretCode.length);
    
    if (secretSequence.join(',') === secretCode.join(',')) {
        showNotification('🎉 Secret unlocked, Sakshi! You found the hidden message: "I love you more than words can express!" 🎉', 8000);
        createCelebrationEffect(document.body);
        secretSequence = [];
    }
});

// Make the website responsive to window resize
window.addEventListener('resize', function() {
    // Recalculate positions for floating elements if needed
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
        console.log('Responsive adjustments made!');
    }, 250);
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
