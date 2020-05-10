const formValid = () => {

    const userinfo = document.querySelectorAll('input[name=user_name],input[name=user_message]'),
        userPhone = document.querySelectorAll('input[name=user_phone]');


    userPhone.forEach(elem => {
        elem.addEventListener('input', () => {
            elem.value = elem.value.replace(/[^0-9+]/g, '');
        });

        userinfo.forEach(elem => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[^ А-Яа-я]/g, '');
            });


        });



    });
};

export default formValid;