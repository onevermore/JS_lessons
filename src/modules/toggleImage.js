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

export default toggleImage;