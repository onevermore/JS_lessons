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

export default slider;