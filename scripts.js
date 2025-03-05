// Анимации при прокрутке
const animateOnScroll = () => {
    const sections = document.querySelectorAll('.section');
    const teamMembers = document.querySelectorAll('.team-member');
    const matches = document.querySelectorAll('.match');

    const checkVisibility = (elements, animation) => {
        elements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.classList.add('animate__animated', animation);
            }
        });
    };

    checkVisibility(sections, 'animate__fadeInUp');
    checkVisibility(teamMembers, 'animate__fadeInLeft');
    checkVisibility(matches, 'animate__fadeInRight');
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);