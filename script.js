// ===== TAB FUNCTIONALITY =====
// Get all tab triggers and content
const tabTriggers = document.querySelectorAll('.tab-trigger');
const tabContents = document.querySelectorAll('.tab-content');

// Add click event to each tab trigger
tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        // Remove active class from all triggers and contents
        tabTriggers.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked trigger
        trigger.classList.add('active');
        
        // Show corresponding content
        const tabId = trigger.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// ===== ROLE TEXT ANIMATION =====
// Array of roles to cycle through
const roles = ['Web Developer', 'Graphic Designer'];
let roleIndex = 0;
const roleElement = document.getElementById('role');

// Function to change role text with fade effect
function changeRole() {
    // Fade out
    roleElement.style.opacity = 0;
    
    // Change text and fade in after transition
    setTimeout(() => {
        roleIndex = (roleIndex + 1) % roles.length;
        roleElement.textContent = roles[roleIndex];
        roleElement.style.opacity = 1;
    }, 700); // Match this with the CSS transition time
}

// Start the role animation
setInterval(changeRole, 2000);