const sendForm = () => {

    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

    // получаем форму
    const forms = document.querySelectorAll('form');

    const statusMessage = document.createElement('div');
    //statusMessage.textContent = 'Тут будет сообщение';
    statusMessage.style.cssText = 'font-size: 2rem;' +
        'color:white;';

    //вешаем событие не на кнопку, а на форму

    forms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            form.appendChild(statusMessage);

            statusMessage.textContent = loadMessage;

            //получаем данные с помощью объекта формДата(содержит данные с формы)
            const formData = new FormData(form);
            //достаём значения из formData в body
            const body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });


            const resetForm = () => {
                [...form.elements].forEach(elem => {
                    if (elem.tagName.toLowerCase() === 'input')
                        elem.value = '';
                });
            };




            postData(body)
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('status not 200');
                    }
                    statusMessage.textContent = successMessage;
                    resetForm();
                })
                .catch(error => {
                    console.error(error);
                    statusMessage.textContent = errorMessage;
                });

        });
    });



    //функция запроса на сервер
    const postData = body => fetch('./server.php', {
        method: 'POST',
        mode: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        referrer: 'client',
        body: JSON.stringify(body)

    });


};

export default sendForm;