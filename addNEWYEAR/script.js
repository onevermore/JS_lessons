window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    //Timer
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds'),
            amPm = document.querySelector('#timer-ampm'),
            weekDay = document.querySelector('#dayofweek'),
            partDay = document.querySelector('#morn'),
            daysBefore = document.querySelector('#numofdays');


        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                date = new Date(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(date.getSeconds()),
                minutes = Math.floor(date.getMinutes()),
                hours = Math.floor(date.getHours()),
                days = Math.floor(timeRemaining / 60 / 60 / 24),
                am = 'AM',
                dayw = '',
                greet = '';

            // утро день вечер ночь

            if (hours > 23 || hours < 5) {
                greet = 'Доброй ночи';
            } else if (hours > 5 && hours < 12) {
                greet = 'Доброе утро';
            } else if (hours > 11 && hours < 18) {
                greet = 'Добрый день';
            } else {
                greet = 'Добрый вечер';
            }



            if (hours < 10) hours = "0" + hours;
            if (minutes < 10) minutes = "0" + minutes;
            if (seconds < 10) seconds = "0" + seconds;

            if (hours > 12) {
                am = 'PM';
            }



            switch (date.getDay()) {
            case 1:
                dayw = 'Понедельник';
                break;
            case 2:
                dayw = 'Вторник';
                break;
            case 3:
                dayw = 'Среда';
                break;
            case 4:
                dayw = 'Четверг';
                break;
            case 5:
                dayw = 'Пятница';
                break;
            case 6:
                dayw = 'Суббота';
                break;
            case 7:
                dayw = 'Воскресенье';
                break;
            }




            return {
                timeRemaining,
                hours,
                minutes,
                seconds,
                days,
                am,
                dayw,
                greet
            };

        }

        function updateClock() {

            const timer = getTimeRemaining();

            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
            daysBefore.textContent = timer.days;
            amPm.textContent = timer.am;
            weekDay.textContent = timer.dayw;
            partDay.textContent = timer.greet;

            if (timer.timeRemaining <= 0) {
                clearInterval(intervalId);

            }


        }

        const intervalId = setInterval(updateClock, 1000);
    }

    countTimer('31 december 2020');

});
