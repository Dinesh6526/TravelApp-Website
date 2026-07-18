document.addEventListener('DOMContentLoaded', function () {

        const navButtons = document.querySelectorAll('.Second button');
        const sectionMap = {
            'Home': document.querySelector('.container'),
            'About': document.querySelector('.about'),
            'Explore': document.querySelector('.Expolore'),
            'Contact': document.querySelector('.Contact')
        };
        navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = sectionMap[btn.textContent.trim()];
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        // ---------- Login button scrolls to login form ----------
        const loginNavBtn = document.querySelector('.Third button');
        const loginSection = document.querySelector('.login1');
        if (loginNavBtn && loginSection) {
            loginNavBtn.addEventListener('click', () => {
                loginSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }

        // ---------- Hero buttons: Explore Now / Learn More ----------
        const exploreNowBtn = document.querySelector('.B1');
        const learnMoreBtn = document.querySelector('.B2');
        const exploreSection = document.querySelector('.Expolore');
        const aboutSection = document.querySelector('.about');
        if (exploreNowBtn && exploreSection) {
            exploreNowBtn.addEventListener('click', () => {
                exploreSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }
        if (learnMoreBtn && aboutSection) {
            learnMoreBtn.addEventListener('click', () => {
                aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }

        // ---------- Search bar (Location / Check-in / Check-out / Guests) ----------
        const searchBtn = document.querySelector('.sub1 button');
        const searchInputs = document.querySelectorAll('.sub1 .item input');
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                const empty = Array.from(searchInputs).some(input => !input.value.trim());
                if (empty) {
                    alert('Please fill in all fields before searching.');
                    return;
                }
                alert('Searching for: ' + Array.from(searchInputs).map(i => i.value).join(' | '));
            });
        }

        // ---------- View More button reveals the second row of destination photos ----------
        const viewMoreBtn = document.querySelector('.B3');
        const photos3 = document.querySelector('.photos3');
        if (viewMoreBtn && photos3) {
            photos3.style.display = 'none';
            viewMoreBtn.addEventListener('click', () => {
                const hidden = photos3.style.display === 'none';
                photos3.style.display = hidden ? 'flex' : 'none';
                viewMoreBtn.textContent = hidden ? 'View Less' : 'View More';
            });
        }

        // ---------- Explore Destinations filter tabs (All / Beach / Mountains / City / Adventure) ----------
        const filterButtons = document.querySelectorAll('.E2 button');
        const destinationCards = document.querySelectorAll('.sub3 .q1, .sub3 .q2, .sub3 .q3, .sub3 .q4');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('active-filter'));
                btn.classList.add('active-filter');

                destinationCards.forEach(card => card.style.display = 'block');
            });
        });

        // ---------- Login form ----------
        const loginForm = document.querySelector('.login1');
        if (loginForm) {
            const textInputs = loginForm.querySelectorAll('input[type="text"]');
            const emailInput = textInputs[0];
            const passwordInput = textInputs[1];
            const loginSubmitBtn = loginForm.querySelector('button');
            const signUpLink = loginForm.querySelector('.L7 h6');
            const forgotPwd = loginForm.querySelector('h6');

            if (loginSubmitBtn) {
                loginSubmitBtn.addEventListener('click', () => {
                    if (!emailInput.value.trim() || !passwordInput.value.trim()) {
                        alert('Please enter both email and password.');
                        return;
                    }
                    alert('Logging in as ' + emailInput.value + ' ...');
                });
            }
            if (signUpLink) {
                signUpLink.addEventListener('click', () => alert('Redirecting to Sign Up page...'));
            }
            if (forgotPwd) {
                forgotPwd.addEventListener('click', () => alert('Password reset link sent to your email (demo).'));
            }
        }

        // ---------- Contact / message form ----------
        const contactForm = document.querySelector('.Final12');
        if (contactForm) {
            const contactInputs = contactForm.querySelectorAll('input');
            const sendBtn = contactForm.querySelector('button');
            if (sendBtn) {
                sendBtn.addEventListener('click', () => {
                    const empty = Array.from(contactInputs).some(input => !input.value.trim());
                    if (empty) {
                        alert('Please fill in all fields before sending your message.');
                        return;
                    }
                    alert('Thank you! Your message has been sent.');
                    contactInputs.forEach(input => input.value = '');
                });
            }
        }

        // ---------- Newsletter subscribe ----------
        const newsletterForm = document.querySelector('.S1');
        if (newsletterForm) {
            const newsletterInput = newsletterForm.querySelector('input[type="email"]');
            const subscribeBtn = newsletterForm.querySelector('button');
            subscribeBtn.addEventListener('click', () => {
                const value = newsletterInput.value.trim();
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(value)) {
                    alert('Please enter a valid email address.');
                    return;
                }
                alert('Subscribed with ' + value + '! Thanks for joining Wanderly.');
                newsletterInput.value = '';
            });
        }

    });

