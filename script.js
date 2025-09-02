document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const closeBtns = document.querySelectorAll('.close');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const lostItemForm = document.getElementById('lostItemForm');
    const parkingForm = document.getElementById('parkingForm');
    const sosButton = document.getElementById('sosButton');
    
    // Initialize dynamic background
    initDynamicBackground();
    
    // SOS Button functionality
    if (sosButton) {
        sosButton.addEventListener('click', function() {
            alert('EMERGENCY: Help is on the way! Security and medical teams have been notified of your location.');
            // In a real application, this would trigger emergency services notification
        });
    }

    // Show login modal
    document.querySelectorAll('#showLogin').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            loginModal.style.display = 'flex';
            signupModal.style.display = 'none';
        });
    });
    
    // Show signup modal
    document.querySelectorAll('#showSignup').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            signupModal.style.display = 'flex';
            loginModal.style.display = 'none';
        });
    });
    
    // Close modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            loginModal.style.display = 'none';
            signupModal.style.display = 'none';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
        if (e.target === signupModal) {
            signupModal.style.display = 'none';
        }
    });
    
    // Form submissions
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simple validation
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // Extract username from email (everything before @)
            const username = email.split('@')[0];
            
            // Simulate successful login
            alert('Hello ' + username + '! Login successful!');
            loginModal.style.display = 'none';
            
            // Update header to show welcome message
            const authButtons = document.querySelector('.auth-buttons');
            if (authButtons) {
                authButtons.innerHTML = '<div class="welcome-user">Hello ' + username + '</div>';
            }
        });
    }
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Simple validation
            if (!fullName || !email || !password || !confirmPassword) {
                alert('Please fill in all fields');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            // Simulate successful signup
            alert('Account created successfully! Please log in.');
            signupModal.style.display = 'none';
            loginModal.style.display = 'flex';
        });
    }
    
    if (lostItemForm) {
        lostItemForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const itemName = document.getElementById('itemName').value;
            const lostLocation = document.getElementById('lostLocation').value;
            
            // Simple validation
            if (!itemName || !lostLocation) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate successful submission
            alert('Your lost item report has been submitted. We will contact you if we find it.');
            lostItemForm.reset();
        });
    }
    
    if (parkingForm) {
        parkingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const eventSelect = document.getElementById('eventSelect').value;
            const parkingDate = document.getElementById('parkingDate').value;
            
            // Validate selection
            if (!eventSelect) {
                alert('Please select an event.');
                return;
            }
            
            if (!parkingDate) {
                alert('Please select a date.');
                return;
            }
            
            // Simulate successful reservation
            alert('Your parking spot has been reserved successfully!');
            parkingForm.reset();
        });
    }
    
    // Ticket buttons functionality
    const ticketButtons = document.querySelectorAll('.event-details .btn');
    
    ticketButtons.forEach(button => {
        button.addEventListener('click', function() {
            const eventName = this.closest('.event-details').querySelector('h3').textContent;
            alert(`You are about to purchase tickets for ${eventName}. In a real application, this would take you to a payment page.`);
        });
    });
    
    // Explore Events button functionality
    const exploreEventsBtn = document.querySelector('.hero-content .btn');
    
    if (exploreEventsBtn) {
        exploreEventsBtn.addEventListener('click', function() {
            document.querySelector('#events').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
    
    // Function to create dynamic background
    function initDynamicBackground() {
        const bgAnimation = document.getElementById('bgAnimation');
        if (!bgAnimation) return;
        
        // Create grid lines
        for (let i = 0; i < 20; i++) {
            // Horizontal lines
            const hLine = document.createElement('div');
            hLine.classList.add('grid-line', 'grid-line-horizontal');
            hLine.style.top = `${i * 5}%`;
            bgAnimation.appendChild(hLine);
            
            // Vertical lines
            const vLine = document.createElement('div');
            vLine.classList.add('grid-line', 'grid-line-vertical');
            vLine.style.left = `${i * 5}%`;
            bgAnimation.appendChild(vLine);
        }
        
        // Create particles
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.width = `${Math.random() * 5 + 2}px`;
            particle.style.height = particle.style.width;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 8}s`;
            particle.style.animationDuration = `${Math.random() * 10 + 8}s`;
            bgAnimation.appendChild(particle);
        }
        
        // Create glow effects
        for (let i = 0; i < 5; i++) {
            const glow = document.createElement('div');
            glow.classList.add('glow');
            glow.style.width = `${Math.random() * 300 + 100}px`;
            glow.style.height = glow.style.width;
            glow.style.left = `${Math.random() * 100}%`;
            glow.style.top = `${Math.random() * 100}%`;
            glow.style.background = i % 2 === 0 ? 'var(--glow-color-1)' : 'var(--glow-color-2)';
            glow.style.animationDelay = `${Math.random() * 5}s`;
            bgAnimation.appendChild(glow);
        }
    }
});