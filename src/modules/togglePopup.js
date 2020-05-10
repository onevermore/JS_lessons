const togglePopup = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn');

    const showPopup = () => {

        if (window.innerWidth > 768) {
            popup.style.opacity = 0;
            popup.style.display = 'block';

            const intervalId = setInterval(() => {

                popup.style.opacity = +popup.style.opacity + 0.05;
                if (+popup.style.opacity >= 1)
                    clearInterval(intervalId);
            }, 20);
        } else {
            popup.style.display = 'block';
        }
    };

    popupBtn.forEach(elem => elem.addEventListener('click', showPopup));

    popup.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';

        } else {
            target = target.closest('.popup-content');

            if (!target) {
                popup.style.display = 'none';
            }
        }



    });

};

export default togglePopup;