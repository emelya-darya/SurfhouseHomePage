const langArrow = document.querySelector('.languages__arrow');
const languages = document.querySelector('.languages>ul');
//!--------------------------------Languages--------------------------------------------------------------
document.addEventListener('click', () => {
	if ((event.target.closest('.languages__arrow')) || (event.target.closest('.languages>ul'))) {
		langArrow.classList.toggle('_active')
		languages.classList.toggle('_active')
		console.log()
	} else {
		langArrow.classList.remove('_active')
		languages.classList.remove('_active')
	}
})
//!---------------------Menu--------------------------------------------
const menuArrow = document.querySelector('.menu__arrow');
const menuList = document.querySelector('.menu-inner ul')

menuArrow.addEventListener('click', () => {
	menuArrow.classList.toggle('_active');
	menuList.classList.toggle('_active')
})

//!-----------------------------------Main face------------------------------------------------------------
const mainFace = document.querySelector('.main__face');

mainFace.addEventListener('click', () => {
	const faceSlides = document.querySelector('.face__sliders');
	const activeSlide = faceSlides.querySelector('._active');
	const faceStrips = document.querySelector('.face__slider-strips');
	const activeStrip = faceStrips.querySelector('._active');

	if (event.target.closest('.face__button-prev')) {
		if (activeSlide.previousElementSibling) {
			activeSlide.classList.remove('_active')
			activeSlide.previousElementSibling.classList.add('_active')

			activeStrip.classList.remove('_active')
			activeStrip.previousElementSibling.classList.add('_active')
		}
	}
	if (event.target.closest('.face__button-next')) {
		if (activeSlide.nextElementSibling) {
			activeSlide.classList.remove('_active')
			activeSlide.nextElementSibling.classList.add('_active')

			activeStrip.classList.remove('_active')
			activeStrip.nextElementSibling.classList.add('_active')
		}
	}
})

//!-----------------------New products slider--------------------------------------
// окошко, которое ограничивает по ширине
const sectionNP = document.querySelector('.main__new-products');
// блок с товарами
const npItems = document.querySelector('.new-products__items')
// console.log(npItems.offsetWidth*1.034)
// смещение блока main__new-products по х
let npOffset = 0;
// счетчик прокрутки (прокручиваться будет только 3 экрана)
let npCounter = 0



sectionNP.addEventListener('click', () => {

	if (document.documentElement.clientWidth > 640) {
		if (event.target.closest('.products-top__button-next')) {
			if (npCounter < 2) {
				npCounter++
				console.log(npCounter)
				npOffset += (npItems.offsetWidth * 1.034)
				npItems.style.cssText = `
				transform: translateX(-${npOffset}px)`
			} else {
				npCounter = 0
				npOffset = 0
				console.log(npCounter)
				npItems.style.cssText = `
				transform: translateX(${npOffset}px)`
			}
		}
		if (event.target.closest('.products-top__button-prev')) {
			if (npCounter > 0) {
				npCounter--
				console.log(npCounter)
				npOffset -= (npItems.offsetWidth * 1.034)
				npItems.style.cssText = `
				transform: translateX(-${npOffset}px)`
			} else {
				npCounter = 2
				npOffset = 2 * (npItems.offsetWidth * 1.034)
				console.log(npCounter)
				npItems.style.cssText = `
				transform: translateX(-${npOffset}px)`
			}
		}
	}
	if ((500 <= document.documentElement.clientWidth) && (document.documentElement.clientWidth <= 640)) {
		if (event.target.closest('.products-top__button-next')) {
			if (npCounter < 3) {
				npCounter++
				console.log(npCounter)
				npOffset += (npItems.offsetWidth * 1.034)
				npItems.style.cssText = `
				transform: translateX(-${npOffset}px)`
			} else {
				npCounter = 0
				npOffset = 0
				console.log(npCounter)
				npItems.style.cssText = `
				transform: translateX(${npOffset}px)`
			}
		}
		if (event.target.closest('.products-top__button-prev')) {
			if (npCounter > 0) {
				npCounter--
				console.log(npCounter)
				npOffset -= (npItems.offsetWidth * 1.034)
				npItems.style.cssText = `
				transform: translateX(-${npOffset}px)`
			} else {
				npCounter = 3
				npOffset = 3 * (npItems.offsetWidth * 1.034)
				console.log(npCounter)
				npItems.style.cssText = `
				transform: translateX(-${npOffset}px)`
			}
		}
	}
	if (document.documentElement.clientWidth<500) {
		if (event.target.closest('.products-top__button-next')) {
			if (npCounter < 10) {
				npCounter++
				console.log(npCounter)
				npOffset += (npItems.offsetWidth * 1.034)
				npItems.style.cssText = `
				transform: translateX(-${npOffset}px)`
			} else {
				npCounter = 0
				npOffset = 0
				console.log(npCounter)
				npItems.style.cssText = `
				transform: translateX(${npOffset}px)`
			}
		}
		if (event.target.closest('.products-top__button-prev')) {
			if (npCounter > 0) {
				npCounter--
				console.log(npCounter)
				npOffset -= (npItems.offsetWidth * 1.034)
				npItems.style.cssText = `
				transform: translateX(-${npOffset}px)`
			} else {
				npCounter = 10
				npOffset = 10 * (npItems.offsetWidth * 1.034)
				console.log(npCounter)
				npItems.style.cssText = `
				transform: translateX(-${npOffset}px)`
			}
		}
	}
}
)

//!-----------------------Top products slider--------------------------------------
// окошко, которое ограничивает по ширине
const sectionTP = document.querySelector('.main__top-products');
// блок с товарами
const tpItems = document.querySelector('.top-products__items')
// console.log(npItems.offsetWidth*1.034)
// смещение блока main__new-products по х
let tpOffset = 0;
// счетчик прокрутки (прокручиваться будет только 3 экрана)
let tpCounter = 0

sectionTP.addEventListener('click', () => {
	if (document.documentElement.clientWidth > 640) {
		if (event.target.closest('.products-top__button-next')) {
			if (tpCounter < 2) {
				tpCounter++
				console.log(tpCounter)
				tpOffset += (tpItems.offsetWidth * 1.034)
				tpItems.style.cssText = `
			transform: translateX(-${tpOffset}px)`
			} else {
				tpCounter = 0
				tpOffset = 0
				console.log(tpCounter)
				tpItems.style.cssText = `
			transform: translateX(${tpOffset}px)`
			}
		}
		if (event.target.closest('.products-top__button-prev')) {
			if (tpCounter > 0) {
				tpCounter--
				console.log(tpCounter)
				tpOffset -= (tpItems.offsetWidth * 1.034)
				tpItems.style.cssText = `
			transform: translateX(-${tpOffset}px)`
			} else {
				tpCounter = 2
				tpOffset = 2 * (tpItems.offsetWidth * 1.034)
				console.log(tpCounter)
				tpItems.style.cssText = `
			transform: translateX(-${tpOffset}px)`
			}
		}
	}
	if ((500 <= document.documentElement.clientWidth) && (document.documentElement.clientWidth <= 640)) {
		if (event.target.closest('.products-top__button-next')) {
			if (tpCounter < 3) {
				tpCounter++
				console.log(tpCounter)
				tpOffset += (tpItems.offsetWidth * 1.034)
				tpItems.style.cssText = `
			transform: translateX(-${tpOffset}px)`
			} else {
				tpCounter = 0
				tpOffset = 0
				console.log(tpCounter)
				tpItems.style.cssText = `
			transform: translateX(${tpOffset}px)`
			}
		}
		if (event.target.closest('.products-top__button-prev')) {
			if (tpCounter > 0) {
				tpCounter--
				console.log(tpCounter)
				tpOffset -= (tpItems.offsetWidth * 1.034)
				tpItems.style.cssText = `
			transform: translateX(-${tpOffset}px)`
			} else {
				tpCounter = 3
				tpOffset = 3 * (tpItems.offsetWidth * 1.034)
				console.log(tpCounter)
				tpItems.style.cssText = `
			transform: translateX(-${tpOffset}px)`
			}
		}
	}
	if (document.documentElement.clientWidth < 500) {
		if (event.target.closest('.products-top__button-next')) {
			if (tpCounter < 4) {
				tpCounter++
				console.log(tpCounter)
				tpOffset += (tpItems.offsetWidth * 1.034)
				tpItems.style.cssText = `
			transform: translateX(-${tpOffset}px)`
			} else {
				tpCounter = 0
				tpOffset = 0
				console.log(tpCounter)
				tpItems.style.cssText = `
			transform: translateX(${tpOffset}px)`
			}
		}
		if (event.target.closest('.products-top__button-prev')) {
			if (tpCounter > 0) {
				tpCounter--
				console.log(tpCounter)
				tpOffset -= (tpItems.offsetWidth * 1.034)
				tpItems.style.cssText = `
			transform: translateX(-${tpOffset}px)`
			} else {
				tpCounter = 4
				tpOffset = 4 * (tpItems.offsetWidth * 1.034)
				console.log(tpCounter)
				tpItems.style.cssText = `
			transform: translateX(-${tpOffset}px)`
			}
		}
	}
}
)

//!-----------------------Sale products slider--------------------------------------
// окошко, которое ограничивает по ширине
const sectionSP = document.querySelector('.main__sale-products');
// блок с товарами
const spItems = document.querySelector('.sale-products__items')
// console.log(npItems.offsetWidth*1.034)
// смещение блока main__new-products по х
let spOffset = 0;
// счетчик прокрутки (прокручиваться будет только 3 экрана)
let spCounter = 0;

sectionSP.addEventListener('click', () => {
	if (document.documentElement.clientWidth > 640) {
		if (event.target.closest('.products-top__button-next')) {
			if (spCounter < 1) {
				spCounter++
				console.log(spCounter)
				spOffset += (spItems.offsetWidth * 1.034)
				spItems.style.cssText = `
			transform: translateX(-${spOffset}px)`
			} else {
				spCounter = 0
				spOffset = 0
				console.log(spCounter)
				spItems.style.cssText = `
			transform: translateX(${spOffset}px)`
			}
		}
		if (event.target.closest('.products-top__button-prev')) {
			if (spCounter > 0) {
				spCounter--
				console.log(spCounter)
				spOffset -= (spItems.offsetWidth * 1.034)
				spItems.style.cssText = `
			transform: translateX(-${spOffset}px)`
			} else {
				spCounter = 1
				spOffset = spItems.offsetWidth * 1.034
				console.log(spCounter)
				spItems.style.cssText = `
			transform: translateX(-${spOffset}px)`
			}
		}
	}

	if ((500 <= document.documentElement.clientWidth) && (document.documentElement.clientWidth <= 640)) {
		if (event.target.closest('.products-top__button-next')) {
			if (spCounter < 2) {
				spCounter++
				console.log(spCounter)
				spOffset += (spItems.offsetWidth * 1.034)
				spItems.style.cssText = `
			transform: translateX(-${spOffset}px)`
			} else {
				spCounter = 0
				spOffset = 0
				console.log(spCounter)
				spItems.style.cssText = `
			transform: translateX(${spOffset}px)`
			}
		}
		if (event.target.closest('.products-top__button-prev')) {
			if (spCounter > 0) {
				spCounter--
				console.log(spCounter)
				spOffset -= (spItems.offsetWidth * 1.034)
				spItems.style.cssText = `
			transform: translateX(-${spOffset}px)`
			} else {
				spCounter = 2
				spOffset = 2*spItems.offsetWidth * 1.034
				console.log(spCounter)
				spItems.style.cssText = `
			transform: translateX(-${spOffset}px)`
			}
		}
	}
	if (document.documentElement.clientWidth < 500) {
		if (event.target.closest('.products-top__button-next')) {
			if (spCounter < 4) {
				spCounter++
				console.log(spCounter)
				spOffset += (spItems.offsetWidth * 1.034)
				spItems.style.cssText = `
			transform: translateX(-${spOffset}px)`
			} else {
				spCounter = 0
				spOffset = 0
				console.log(spCounter)
				spItems.style.cssText = `
			transform: translateX(${spOffset}px)`
			}
		}
		if (event.target.closest('.products-top__button-prev')) {
			if (spCounter > 0) {
				spCounter--
				console.log(spCounter)
				spOffset -= (spItems.offsetWidth * 1.034)
				spItems.style.cssText = `
			transform: translateX(-${spOffset}px)`
			} else {
				spCounter = 4
				spOffset = 4 * spItems.offsetWidth * 1.034
				console.log(spCounter)
				spItems.style.cssText = `
			transform: translateX(-${spOffset}px)`
			}
		}
	}
}
)

//!-----------Popup--------------------------------------------------------

//?--------------Пишем функции для обработчиков-------------------------------------------

const popupLinks = document.querySelectorAll('.popup__link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
let unlock = true;
const timeout = 500;


const bodyLock = () => {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	lockPadding.forEach((el) => {
		el.style.paddingRight = lockPaddingValue;
	})

	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');
	unlock = false;
	setTimeout(() => {
		unlock = true;
	}, timeout)
}


const bodyUnlock = () => {
	setTimeout(() => {
		lockPadding.forEach((el) => {
			el.style.paddingRight = '0px';
		})

		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(() => {
		unlock = true;
	}, timeout);
}

const popupClose = (popupActive, doUnlock = true) => {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnlock();
		}
	}
}

const popupOpen = (elm) => {
	if (elm && unlock) {
		const popupActive = document.querySelector('.popup.open')
		if (popupActive) {
			popupClose(popupActive, false)
		} else {
			bodyLock();
		}
		elm.classList.add('open');
		elm.addEventListener('click', () => {
			if (!event.target.closest('.popup__content')) {
				popupClose(event.target.closest('.popup'))
			}
		})
	}
}




//? вешаем события
popupLinks.forEach((el) => {
	const popupLink = el
	el.addEventListener('click', () => {
		const popupName = el.getAttribute('href').replace('#', '');
		const curentPopup = document.getElementById(popupName);
		popupOpen(curentPopup);
		event.preventDefault();
	})
});

const popupCloseIcon = document.querySelectorAll('.close-popup');
popupCloseIcon.forEach((el) => {
	el.addEventListener('click', () => {
		popupClose(el.closest('.popup'));
		event.preventDefault();
	})
})

document.addEventListener('keydown', () => {
	if (event.code === 'Escape') {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive)
	}
});