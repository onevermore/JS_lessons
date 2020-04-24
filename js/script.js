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
    countTimer('26 april 2020');

    //menu
    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);

        menu.addEventListener('click', event => {
            const target = event.target;

            if (target.closest('menu') && !target.matches('.active-menu')) {
                handlerMenu();
            } else {
                return;
            }

        });

    };

    toggleMenu();

    //popup
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

    togglePopup();


    //tabs
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = document.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        //функция будет перебирать все табы, находить нужный и его показывать, а другие скрывать
        const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tabContent[i].classList.add('d-none');
                    tab[i].classList.remove('active');
                }

            }
        };


        tabHeader.addEventListener('click', event => {
            //получаем элемент, на который кликаем
            let target = event.target;
            target = target.closest('.service-header-tab');

            //проверяем есть ли у нашего Таргет класс service-header-tab
            if (target) {
                //проверяем на какой именно Таб кликнули

                tab.forEach((item, index) => {

                    if (item === target) {
                        toggleTabContent(index);
                    }
                });
            }
        });
    };

    tabs();


});
