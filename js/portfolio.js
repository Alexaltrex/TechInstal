window.onload = () => {
    let portfolioMenuItem = document.querySelectorAll('.portfolio__menu-item');
    let portfolioSliderItem = document.querySelectorAll('.portfolio__slider-item');

    //console.log(portfolioMenuItem);
    iActive = 0;

    for (let i = 0; i < portfolioMenuItem.length; i++) {

        portfolioMenuItem[i].addEventListener('click', () => {
            if (i !== iActive) {
                portfolioMenuItem[i].classList.toggle('active');
                portfolioMenuItem[iActive].classList.toggle('active');
                iActive = i;
            }

            for (let j = 0; j < portfolioSliderItem.length; j++) {
                if (!portfolioSliderItem[j].classList.contains('slider-item-class' + i)) {
                    //portfolioSliderItem[j].style.display = 'none';
                    portfolioSliderItem[j].classList.add('hide');
                } else {
                    //portfolioSliderItem[j].style.display = 'block';
                    portfolioSliderItem[j].classList.remove('hide');
                }
            }


        });
    }

    let portfolioMenuItemHoverTitle = document.querySelectorAll('.portfolio__menu-item-hover-title');
    let portfolioMenuItemHoverButton = document.querySelectorAll('.portfolio__menu-item-hover-button');

    for (let i = 0; i < portfolioSliderItem.length; i++) {
        portfolioSliderItem[i].addEventListener('mouseover', () => {
            portfolioMenuItemHoverTitle[i].classList.toggle('anim');
            portfolioMenuItemHoverButton[i].classList.toggle('anim');
        });
        portfolioSliderItem[i].addEventListener('mouseout', () => {
            portfolioMenuItemHoverTitle[i].classList.toggle('anim');
            portfolioMenuItemHoverButton[i].classList.toggle('anim');
        });
    }

    let portfolioModal = document.querySelector('.portfolio-modal');
    let portfolioModalImg = document.querySelector('.portfolio-modal img');

    for (let i = 0; i < portfolioMenuItemHoverButton.length; i++) {
        portfolioMenuItemHoverButton[i].addEventListener('click', () => {
            portfolioModal.classList.toggle('active');
            portfolioModalImg.src = 'img/portfolio__slider' + (i + 1) + '.jpg';
            console.log(i);
        });
    }

    let portfolioModalClose = document.querySelector('.portfolio__modal-close');
    portfolioModalClose.addEventListener('click', () => {
        portfolioModal.classList.toggle('active');
    });

    let video = document.querySelector('.about-inner__video video');
    let videoSuper = document.querySelector('.about-inner__video-super');
    let videoButton = document.querySelector('.about-inner__video-button');
    videoButton.addEventListener('click', () => {
        //console.log('test');
        video.play();
        videoSuper.classList.toggle('hide');

    });

    video.addEventListener('ended', () => {
        videoSuper.classList.toggle('hide');
    })




}