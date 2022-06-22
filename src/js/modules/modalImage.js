const modalImage = () => {
    const imagesParent = document.querySelector('.portfolio__body'),
          images = document.querySelectorAll('.portfolio__img'),
          modal = document.querySelector('.modal');

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

                    modal.style.display = 'flex';
                    document.body.style.overflow = 'hidden';
                }
            })
        }
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal && modal.style.display !== 'none') {
            modal.style.display = '';
            modal.removeChild(modal.firstElementChild);
            document.body.style.overflow = '';
        }
    });
}

export default modalImage;