/* eslint-disable strict */
window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    //Timer
    const countTimer = deadline => {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');


        const getTimeRemaining = () => {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000;
            let seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            if (hours < 10) hours = "0" + hours;
            if (minutes < 10) minutes = "0" + minutes;
            if (seconds < 10) seconds = "0" + seconds;
            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };

        };

        const updateClock = () => {
            const timer = getTimeRemaining();
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
            if (timer.timeRemaining <= 0) {
                //setTimeout(updateClock, 1000);
                clearInterval(intervalId);
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        };
        const intervalId = setInterval(updateClock, 1000);
        //updateClock();
    };
    countTimer('24 april 2020');

    //menu

    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));
    };

    toggleMenu();


    //popup
    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close');

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

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };

    togglePopup();


});
