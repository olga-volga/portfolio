const tabs = () => {
    const tabHeadersParent = document.querySelector('.portfolio__tabs'),
          tabHeaders = document.querySelectorAll('.portfolio__tab'),
          tabContentItems = document.querySelectorAll('.portfolio__item'),
          tabActiveClass = 'portfolio__tab_active';

    function hideTabContent() {
        tabContentItems.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('appear');
        });
        tabHeaders.forEach(item => {
            item.classList.remove(tabActiveClass);
        });
    }

    function showTabContent(type) {
        tabContentItems.forEach(item => {
            if (item.classList.contains(type)) {
                item.classList.add('appear');
                item.style.display = 'block';
            }
        });
        tabHeaders.forEach(item => {
            if (item.getAttribute('data-tab') === type) {
                item.classList.add(tabActiveClass);
            }
        });
    }

    tabHeadersParent.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('portfolio__tab')) {
            tabHeaders.forEach(item => {
                if (e.target === item) {
                    let contentType = e.target.getAttribute('data-tab');
                    hideTabContent();
                    showTabContent(contentType);
                }
            });
        }
    });
    
}

export default tabs;