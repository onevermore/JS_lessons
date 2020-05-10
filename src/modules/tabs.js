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

export default tabs;