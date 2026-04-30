// Page transition 
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        // Only trigger transition if it's an internal link
        if (link.hostname === window.location.hostname && !link.hash) {
            e.preventDefault();
            const targetUrl = link.href;

            if (targetUrl === window.location.href) {
                alert("You are already on this page!");
                return;
            }

            document.body.classList.add('is-exiting');
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 500);
        }
    });
});

// Welcome pop up
window.onload = function() {
    const timeGreetingElement = document.getElementById("time-greeting");
    const modal = document.getElementById("welcomeModal");
    const closeBtn = document.querySelector(".close-btn");

    if (modal) {
        modal.style.display = "block"; 
    }
    
    // Switch statement depending on the day
    if (timeGreetingElement) {
        const day = new Date().getDay();
        let greeting;

        switch (day) {
            case 0: greeting = "Happy Sunday! Get a head start on your week."; break;
            case 1: greeting = "Happy Monday! Let's kick off the week with fresh clothes."; break;
            case 5: greeting = "Happy Friday! Time to clean up for the weekend."; break;
            case 6: greeting = "Happy Saturday! Enjoy your day off while we do the wash."; break;
            default: greeting = "Happy Mid-week! Keep your wardrobe fresh and ready."; break;
        }
        timeGreetingElement.innerText = greeting;
    }

    // for closing pop up
    if (closeBtn && modal) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
        };

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }
};

//Card toggle for description
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', function(e) {
        // Create the ripple element
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);

        // Position of the ripple
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Position styles
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        // Ripple animation ending
        setTimeout(() => ripple.remove(), 600);
        
        const content = this.querySelector('.hidden');
        
        if (content) {
            // Close other open cards
            document.querySelectorAll('.hidden').forEach(p => {
                if (p !== content) {
                    p.classList.remove('show-text');
                }
            });

            content.classList.toggle('show-text');
        }
    });
});