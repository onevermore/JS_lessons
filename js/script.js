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


    //slider
    const slider = () => {

        const slide = document.querySelectorAll('.portfolio-item'),
            slider = document.querySelector('.portfolio-content'),
            dots = document.querySelector('.portfolio-dots');
        let currentSlide = 0,
            interval;

        slide.forEach((elem, index) => {
            const newDot = document.createElement('li');
            newDot.classList.add('dot');
            if (index === 0) {
                newDot.classList.add('dot-active');
            }
            dots.append(newDot);

        });

        const dot = document.querySelectorAll('.dot');


        //функция принимает элемент, у кот. нужно удалить класс, индекс(каррентСлайд) и класс, кот. мы хотим удалить
        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            //у текущего слайда убираем класс active, а следующему слайду добавлять класс active
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            currentSlide++;
            // ограничиваем currentSlide количеством слайдов, возвращаем к 1-ому слайду
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 2000) => {

            interval = setInterval(autoPlaySlide, time);

        };
        //при наведении на стрелочки и точки останавливать слайдер
        const stopSlide = () => {
            clearInterval(interval);
        };


        slider.addEventListener('click', event => {
            event.preventDefault();
            const target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                // elem - точки, index -их индекс
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', event => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', event => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                startSlide();
            }
        });
        startSlide(1500);
    };

    slider();


    //change Image
    const toggleImage = () => {

        const images = document.querySelector('.command');

        const changeImg = event => {
            const target = event.target;
            const src = target.src;
            target.src = target.dataset.img;
            target.dataset.img = src;
        };

        images.addEventListener('mouseover', event => {

            if (!event.target.matches('.command__photo')) {
                return;
            }
            changeImg(event);
        });

        images.addEventListener('mouseout', event => {
            if (!event.target.matches('.command__photo')) {
                return;
            }
            changeImg(event);
        });
    };

    toggleImage();


    //check input for num value
    const onlyNum = () => {

        const inputs = document.querySelectorAll('input[type=number]');

        inputs.forEach(elem => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/\D/g, '');
            });
        });
    };

    onlyNum();

    //calculator
    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }


            totalValue.textContent = total;


        };

        calcBlock.addEventListener('change', event => {
            const target = event.target;

            //if (target.matches('.calc-type') ||  target.matches('.calc-square') ||
            //target.matches('.calc-day') || target.matches('.calc-count')  ) {
            //}
            if (target.matches('select') || target.matches('input')) {
                countSum();
            }
        });
    };

    
    calc(100);






});