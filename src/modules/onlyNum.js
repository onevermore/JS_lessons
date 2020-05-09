const onlyNum = () => {

    const inputs = document.querySelectorAll('input[type=number]');

    inputs.forEach(elem => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/\D/g, '');
        });
    });
};

export default onlyNum;
