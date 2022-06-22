const modalImage = () => {
    const imagesParent = document.querySelector('.portfolio__body'),
          images = document.querySelectorAll('.portfolio__img'),
          modal = document.querySelector('.modal'),
          close = document.querySelector('.modal__close');

    function calcScroll() {
        const div = document.createElement('div');
        div.style.cssText = 'width:50px;height:50px;overflow-y:scroll;visibilty:hidden;';

        document.body.append(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    function showModal() {
        modal.style.display = 'flex';
        document.body.style.paddingRight = `${calcScroll()}px`;
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = '';
        document.body.style.paddingRight = '';
        document.body.style.overflow = '';
        modal.removeChild(modal.lastElementChild);
    }

    imagesParent.addEventListener('click', (e) => {
        if (e.target && e.target.nodeName === 'IMG') {
            images.forEach(item => {
                if (e.target === item) {
                    let srcPath = e.target.src.slice(e.target.src.indexOf('img'));

                    const imageBig = document.createElement('img');

                    imageBig.setAttribute('alt', e.target.alt);
                    imageBig.setAttribute('src', srcPath);
                    imageBig.classList.add('appear');

                    modal.append(imageBig);

                    showModal();
                }
            })
        }
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target === close && modal.style.display !== 'none') {
            closeModal();
        }
    });
}

export default modalImage;