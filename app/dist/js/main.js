const iconMenu = document.querySelector('.menu__btn');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle('active');
	});
}

const btnMenu = document.querySelector(".menu__btn");
const menu = document.querySelector(".header-page__box-contact");
const background = document.querySelector(".menu__btn-overlay");
const toggleMenu = function () {
	menu.classList.toggle("active");
	background.classList.toggle("active");
	btnMenu.classList.toggle("active");
};

btnMenu.addEventListener("click", function (e) {
	e.stopPropagation();
	toggleMenu();
	btnMenu.classList.toggle("active");
});

document.addEventListener("click", function (e) {
	const target = e.target;
	const itsMenu = target == menu || menu.contains(target);
	const itsBtnMenu = target == btnMenu;
	const menuIsActive = menu.classList.contains("active");
	if (!itsMenu && !itsBtnMenu && menuIsActive) {
		toggleMenu();
	}
});

const svg = document.querySelectorAll('svg path');

svg.forEach(el => {
    el.style.transition = '0.4s ease-in-out';
});
const slidesTop = [
	{
		name: 'Gorilla in Congo',
		id: 3,
		idi: 'lastClone',
		src: "images/gorilla.png",
		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
		link: 'VIEW LIVE CAM',
		href: 'camgorillas.html'
	},
	{
		name: 'Chinese Alligator',
		id: 4,
		src: "images/aligator.png",
		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'Giant Panda',
		id: 1,
		src: "images/panda.png",
		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'Chinese Alligator',
		id: 4,
		src: "images/aligator.png",
		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'Giant Panda',
		id: 1,
		src: "images/panda.png",
		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'Madagascarian Lemur',
		id: 2,
		src: "images/lemur.png",
		description: 'Lemurs are considered the world’s most endangered group of mammals.',
		link: 'VIEW LIVE CAM',
		href: 'camlemur.html'
	},
	{
		name: 'Gorilla in Congo',
		id: 3,
		idi: 'firstClone',
		src: "images/gorilla.png",
		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
		link: 'VIEW LIVE CAM',
		href: 'camgorillas.html'
	},
	{
		name: 'Chinese Alligator',
		id: 4,
		src: "images/aligator.png",
		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'Giant Panda',
		id: 1,
		src: "images/panda.png",
		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'Madagascarian Lemur',
		id: 2,
		src: "images/lemur.png",
		description: 'Lemurs are considered the world’s most endangered group of mammals.',
		link: 'VIEW LIVE CAM',
		href: 'camlemur.html'
	},
	{
		name: 'Giant Panda',
		id: 1,
		src: "images/panda.png",
		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'Gorilla in Congo',
		id: 3,
		src: "images/gorilla.png",
		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
		link: 'VIEW LIVE CAM',
		href: 'camgorillas.html'
	},
	{
		name: 'Chinese Alligator',
		id: 4,
		src: "images/aligator.png",
		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'Giant Panda',
		id: 1,
		src: "images/panda.png",
		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'Madagascarian Lemur',
		id: 2,
		src: "images/lemur.png",
		description: 'Lemurs are considered the world’s most endangered group of mammals.',
		link: 'VIEW LIVE CAM',
		href: 'camlemur.html'
	},
	{
		name: 'Gorilla in Congo',
		id: 3,
		src: "images/gorilla.png",
		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
		link: 'VIEW LIVE CAM',
		href: 'camgorillas.html'
	},
	{
		name: 'Chinese Alligator',
		id: 4,
		src: "images/aligator.png",
		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'Giant Panda',
		id: 1,
		src: "images/panda.png",
		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'Chinese Alligator',
		id: 4,
		src: "images/aligator.png",
		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'Giant Panda',
		id: 1,
		src: "images/panda.png",
		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'Madagascarian Lemur',
		id: 2,
		src: "images/lemur.png",
		description: 'Lemurs are considered the world’s most endangered group of mammals.',
		link: 'VIEW LIVE CAM',
		href: 'camlemur.html'
	},
	{
		name: 'Gorilla in Congo',
		id: 3,
		src: "images/gorilla.png",
		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
		link: 'VIEW LIVE CAM',
		href: 'camgorillas.html'
	},
];

const slidesBottom = [
	{
		name: 'West End Bald Eagles',
		id: 5,
		idi: 'lastClone',
		src: "images/eagles.png",
		description: 'Pair of eagle parents lay and protect eggs, feed their chicks and teach them to hunt and fly.',
		link: 'VIEW LIVE CAM',
		href: 'camseagles.html'
	},
	{
		name: 'Australian Koala',
		id: 6,
		src: "images/koala.png",
		description: 'The elevated walkways bring you to eye level with the koalas as they perch in their forest.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'African Lion',
		id: 7,
		src: "images/lion.png",
		description: 'Lions roam the savannas and grasslands of Africa, hunting and raising cubs in the pride.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'West End Bald Eagles',
		id: 5,
		src: "images/eagles.png",
		description: 'Pair of eagle parents lay and protect eggs, feed their chicks and teach them to hunt and fly.',
		link: 'VIEW LIVE CAM',
		href: 'camseagles.html'
	},
	{
		name: 'Australian Koala',
		id: 6,
		src: "images/koala.png",
		description: 'The elevated walkways bring you to eye level with the koalas as they perch in their forest.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'African Lion',
		id: 7,
		src: "images/lion.png",
		description: 'Lions roam the savannas and grasslands of Africa, hunting and raising cubs in the pride.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'Sumatran Tiger',
		id: 8,
		idi: 'firstClone',
		src: "images/tiger.png",
		description: 'Sumatran Tigers are the smallest of the five sub-species, and are found in Indonesia.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'West End Bald Eagles',
		id: 5,
		src: "images/eagles.png",
		description: 'Pair of eagle parents lay and protect eggs, feed their chicks and teach them to hunt and fly.',
		link: 'VIEW LIVE CAM',
		href: 'camseagles.html'
	},
	{
		name: 'Australian Koala',
		id: 6,
		src: "images/koala.png",
		description: 'The elevated walkways bring you to eye level with the koalas as they perch in their forest.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'African Lion',
		id: 7,
		src: "images/lion.png",
		description: 'Lions roam the savannas and grasslands of Africa, hunting and raising cubs in the pride.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'Sumatran Tiger',
		id: 8,
		src: "images/tiger.png",
		description: 'Sumatran Tigers are the smallest of the five sub-species, and are found in Indonesia.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'West End Bald Eagles',
		id: 5,
		src: "images/eagles.png",
		description: 'Pair of eagle parents lay and protect eggs, feed their chicks and teach them to hunt and fly.',
		link: 'VIEW LIVE CAM',
		href: 'camseagles.html'
	},
	{
		name: 'Australian Koala',
		id: 6,
		src: "images/koala.png",
		description: 'The elevated walkways bring you to eye level with the koalas as they perch in their forest.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'African Lion',
		id: 7,
		src: "images/lion.png",
		description: 'Lions roam the savannas and grasslands of Africa, hunting and raising cubs in the pride.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'Sumatran Tiger',
		id: 8,
		src: "images/tiger.png",
		description: 'Sumatran Tigers are the smallest of the five sub-species, and are found in Indonesia.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'West End Bald Eagles',
		id: 5,
		src: "images/eagles.png",
		description: 'Pair of eagle parents lay and protect eggs, feed their chicks and teach them to hunt and fly.',
		link: 'VIEW LIVE CAM',
		href: 'camseagles.html'
	},
	{
		name: 'Australian Koala',
		id: 6,
		src: "images/koala.png",
		description: 'The elevated walkways bring you to eye level with the koalas as they perch in their forest.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'African Lion',
		id: 7,
		src: "images/lion.png",
		description: 'Lions roam the savannas and grasslands of Africa, hunting and raising cubs in the pride.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'West End Bald Eagles',
		id: 5,
		src: "images/eagles.png",
		description: 'Pair of eagle parents lay and protect eggs, feed their chicks and teach them to hunt and fly.',
		link: 'VIEW LIVE CAM',
		href: 'camseagles.html'
	},
	{
		name: 'Australian Koala',
		id: 6,
		src: "images/koala.png",
		description: 'The elevated walkways bring you to eye level with the koalas as they perch in their forest.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'African Lion',
		id: 7,
		src: "images/lion.png",
		description: 'Lions roam the savannas and grasslands of Africa, hunting and raising cubs in the pride.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
	{
		name: 'Sumatran Tiger',
		id: 8,
		src: "images/tiger.png",
		description: 'Sumatran Tigers are the smallest of the five sub-species, and are found in Indonesia.',
		link: 'VIEW LIVE CAM',
		href: 'cams.html'
	},
];

const slidesBottomMin = [
	{
		name: 'Australian Koala',
		id: 6,
		src: "images/koala.png",
		description: 'The elevated walkways bring you to eye level with the koalas as they perch in their forest.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'African Lion',
		id: 7,
		src: "images/lion.png",
		description: 'Lions roam the savannas and grasslands of Africa, hunting and raising cubs in the pride.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'West End Bald Eagles',
		id: 5,
		src: "images/eagles.png",
		description: 'Pair of eagle parents lay and protect eggs, feed their chicks and teach them to hunt and fly.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Sumatran Tiger',
		id: 8,
		idi: 'firstClone',
		src: "images/tiger.png",
		description: 'Sumatran Tigers are the smallest of the five sub-species, and are found in Indonesia.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Gorilla in Congo',
		id: 3,
		idi: 'lastClone',
		src: "images/gorilla.png",
		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Chinese Alligator',
		id: 4,
		src: "images/aligator.png",
		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Giant Panda',
		id: 1,
		src: "images/panda.png",
		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Madagascarian Lemur',
		id: 2,
		src: "images/lemur.png",
		description: 'Lemurs are considered the world’s most endangered group of mammals.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Australian Koala',
		id: 6,
		src: "images/koala.png",
		description: 'The elevated walkways bring you to eye level with the koalas as they perch in their forest.',
		link: 'VIEW LIVE CAM'
	},
];

const sliderWidthTop = (document.querySelector('.pets-choose').clientWidth);
if (sliderWidthTop > 980) {

	const animalPlaceholder = document.querySelector(".pets-bottom");

	const mapCards = (animal) => {
		return `
		<div class="pets-bottom__card card-${animal.id} ${animal.status}" style="left:0" id="${animal.idi}">
			<div class="pets-bottom__card-img">
			<img src="${animal.src}">
			</div>
				<div class="pets-bottom__card-info">
					<div class="pets-bottom__card-info-head">${animal.name}</div>
					<div class="pets-bottom__card-info-text">${animal.description}</div>
					<div class="pets-bottom__card-info-live">
    			<a href="${animal.href}">VIEW LIVE CAM
                    <svg class="pets-bottom__card-info-live-svg" width="28" height="25" viewBox="0 0 28 25" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path class="pets-bottom__card-info-live-svg" fill-rule="evenodd" clip-rule="evenodd"
                        d="M15.2039 0.24596C14.9987 0.335165 14.8124 0.465905 14.6555 0.630691C14.4982 
						0.795061 14.3735 0.990325 14.2883 1.2053C14.2032 1.42027 14.1594 1.65074 14.1594 
						1.88349C14.1594 2.11623 14.2032 2.3467 14.2883 2.56167C14.3735 2.77665 14.4982 
						2.97191 14.6555 3.13628L21.4444 10.2474H2.12822C1.65029 10.2474 1.19193 10.4847 
						0.85398 10.9071C0.51603 11.3296 0.326172 11.9025 0.326172 12.4999C0.326172 13.0973 
						0.51603 13.6703 0.85398 14.0927C1.19193 14.5152 1.65029 14.7525 2.12822 
						14.7525H21.4453L14.6555 21.8645C14.3384 22.1967 14.1603 22.6474 14.1603 
						23.1173C14.1603 23.5872 14.3384 24.0378 14.6555 24.3701C14.9726 24.7023 
						15.4027 24.889 15.8511 24.889C16.2995 24.889 16.7296 24.7023 17.0467 
						24.3701L27.1786 13.7532C27.3359 13.5888 27.4607 13.3935 27.5458 13.1786C27.6309 
						12.9636 27.6748 12.7331 27.6748 12.5004C27.6748 12.2676 27.6309 12.0372 27.5458 
						11.8222C27.4607 11.6072 27.3359 11.412 27.1786 11.2476L17.0467 0.630691C16.8898 
						0.465905 16.7034 0.335165 16.4983 0.24596C16.2931 0.156756 16.0732 0.11084 15.8511 
						0.11084C15.629 0.11084 15.409 0.156756 15.2039 0.24596Z"
                        fill="#F58021" />
                    </svg>
                </a>
                </div>
				</div>
		</div>`;
	};

	const createListWithInnerHTML = (slidesTop, slidesBottom) => {
		const rowsTop = slidesTop.map(mapCards);
		const rowsBottom = slidesBottom.map(mapCards);

		const html = `<div class="pets-bottom__row-1" >${rowsTop.join(' ')}</div>
	<div class="pets-bottom__row-2" >${rowsBottom.join(' ')}</div>`;
		animalPlaceholder.innerHTML = html;
	};

	createListWithInnerHTML(slidesTop, slidesBottom);

	let doc = document,
		index = 1;

	const box = doc.querySelector('.pets-top'),
		slidesBox = doc.querySelector('.pets-bottom__row-1'),
		slidesBoxBottom = doc.querySelector('.pets-bottom__row-2'),
		slides = doc.querySelectorAll('.pets-bottom__card'),
		btnLeft = doc.querySelector('.pets-bottom__arrow--left'),
		btnRight = doc.querySelector('.pets-bottom__arrow--right'),
		sizeTransform = (box.clientWidth + 40),
		slidesss = doc.querySelector('.pets-bottom__card'),
		sizeWidth = (slidesss.clientWidth),
		marginRight = parseInt(getComputedStyle(slidesss, true).marginRight),
		slidesThree = ((sizeWidth * 3) + (marginRight * 3)),
		size = ((sizeWidth * 3) + (marginRight * 3)),
		slidesTwo = ((sizeWidth * 2) + (marginRight * 2));







	if (box.clientWidth > slidesThree) {
		slidesBox.style.transform = 'translateX(' + (-index * ((sizeWidth * 2) + (marginRight * 2))) + 'px';
		slidesBoxBottom.style.transform = 'translateX(' + (-index * ((sizeWidth * 2) + (marginRight * 2))) + 'px';
	} else {
		slidesBox.style.transform = 'translateX(' + (-index * ((sizeWidth * 3) + (marginRight * 3))) + 'px';
		slidesBoxBottom.style.transform = 'translateX(' + (-index * ((sizeWidth * 3) + (marginRight * 3))) + 'px';
	}

	const onButtonClick = (direction) => () => {
		switch (direction) {
			case 'left':
				index > 0 && index--;
				break;
			case 'right':
				index < 6 && index++;
				break;
			default:
				break;
		}
		slidesBox.style.transition = "transform .9s ease-in-out";
		slidesBoxBottom.style.transition = "transform .9s ease-in-out";
		slidesBox.style.transform = "translateX(" + (-index * size) + 'px';
		slidesBoxBottom.style.transform = "translateX(" + (-index * size) + 'px';
		btnRight.setAttribute("disabled", "disabled");
		btnLeft.setAttribute("disabled", "disabled");
	};

	const onSlidesBoxTransitionEnd = () => {
		switch (slides[index].id) {
			case 'lastClone':
				index = (slides.length / 2) - 17;
				break;
			case 'firstClone':
				index = 1;
				break;
			default:
				break;
		}
		slidesBox.style.transition = "none";
		slidesBoxBottom.style.transition = "none";
		slidesBox.style.transform = "translateX(" + (-index * size) + 'px';
		slidesBoxBottom.style.transform = "translateX(" + (-index * size) + 'px';
		btnRight.removeAttribute('disabled');
		btnLeft.removeAttribute('disabled');
	};


	btnRight.addEventListener('click', onButtonClick('right'));
	btnLeft.addEventListener('click', onButtonClick('left'));

	slidesBox.addEventListener('transitionend', onSlidesBoxTransitionEnd);
	slidesBoxBottom.addEventListener('transitionend', onSlidesBoxTransitionEnd);
}


else {
	const animalPlaceholder = document.querySelector(".pets-bottom");

	const mapCards = (animal) => {
		return `
		<div class="pets-bottom__card card-${animal.id} ${animal.status}" style="left:0" id="${animal.idi}">
			<div class="pets-bottom__card-img">
			<img src="${animal.src}">
			</div>
				<div class="pets-bottom__card-info">
					<div class="pets-bottom__card-info-head">${animal.name}</div>
					<div class="pets-bottom__card-info-text">${animal.description}</div>
					<div class="pets-bottom__card-info-live">
    			<a href="#">VIEW LIVE CAM
                    <svg class="pets-bottom__card-info-live-svg" width="28" height="25" viewBox="0 0 28 25" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path class="pets-bottom__card-info-live-svg" fill-rule="evenodd" clip-rule="evenodd"
                        d="M15.2039 0.24596C14.9987 0.335165 14.8124 0.465905 14.6555 0.630691C14.4982 
						0.795061 14.3735 0.990325 14.2883 1.2053C14.2032 1.42027 14.1594 1.65074 14.1594 
						1.88349C14.1594 2.11623 14.2032 2.3467 14.2883 2.56167C14.3735 2.77665 14.4982 
						2.97191 14.6555 3.13628L21.4444 10.2474H2.12822C1.65029 10.2474 1.19193 10.4847 
						0.85398 10.9071C0.51603 11.3296 0.326172 11.9025 0.326172 12.4999C0.326172 13.0973 
						0.51603 13.6703 0.85398 14.0927C1.19193 14.5152 1.65029 14.7525 2.12822 
						14.7525H21.4453L14.6555 21.8645C14.3384 22.1967 14.1603 22.6474 14.1603 
						23.1173C14.1603 23.5872 14.3384 24.0378 14.6555 24.3701C14.9726 24.7023 
						15.4027 24.889 15.8511 24.889C16.2995 24.889 16.7296 24.7023 17.0467 
						24.3701L27.1786 13.7532C27.3359 13.5888 27.4607 13.3935 27.5458 13.1786C27.6309 
						12.9636 27.6748 12.7331 27.6748 12.5004C27.6748 12.2676 27.6309 12.0372 27.5458 
						11.8222C27.4607 11.6072 27.3359 11.412 27.1786 11.2476L17.0467 0.630691C16.8898 
						0.465905 16.7034 0.335165 16.4983 0.24596C16.2931 0.156756 16.0732 0.11084 15.8511 
						0.11084C15.629 0.11084 15.409 0.156756 15.2039 0.24596Z"
                        fill="#F58021" />
                    </svg>
                </a>
                </div>
				</div>
		</div>`;
	};

	const createListWithInnerHTML = (slidesBottom) => {
		const rowsBottom = slidesBottom.map(mapCards);

		const html = `<div class="pets-bottom__row-3" >${rowsBottom.join(' ')}</div>`;
		animalPlaceholder.innerHTML = html;
	};
	createListWithInnerHTML(slidesBottomMin);
}

const cardWidth = (document.querySelector('.pets-bottom__card').clientWidth);
const cardMiniRow = document.querySelector('.pets-bottom__row-3');


let indexVVS = 0;
const misiSliderTop = (direction) => () => {
	switch (direction) {
		case 'left':
			indexVVS > -1 && indexVVS--;
			break;
		case 'right':
			indexVVS < 6 && indexVVS++;
			break;
		default:
			break;
	}
	if (indexVVS == 6) {
		indexVVS = 0;
	} 
	if (indexVVS == -1) {
		indexVVS = 5;
	}
	cardMiniRow.style.transition = "transform .5s ease-in-out";
	cardMiniRow.style.transform = "translateX(" + (-indexVVS * (cardWidth + 20)) + 'px';
};




const sliderTouchTop = document.querySelector(".pets-bottom");
let startPointTop;
let movedTop = false;
function touchTop(e) {
	startPointTop = e.changedTouches[0].pageX;
}
function moveTop(e) {
	if (movedTop) {
		return;
	}
	e.preventDefault();
	if (e.changedTouches[0].pageX > startPointTop + sliderTouchTop.offsetWidth / 15) {
		misiSliderTop('left')();
		movedTop = true;
	}
	if (e.changedTouches[0].pageX < startPointTop - sliderTouchTop.offsetWidth / 15) {
		misiSliderTop('right')();
		movedTop = true;
	}
}
sliderTouchTop.addEventListener("touchmove", moveTop);
sliderTouchTop.addEventListener("touchstart", touchTop);
sliderTouchTop.addEventListener("touchend", () => {
	setTimeout(() => {
		movedTop = !movedTop;
	}, 200);
});





function slideList () {
    const range = document.getElementById('range'),
    boxSlide = document.querySelector('.pets-think__box-slider-box'),
    boxContainer = document.querySelector('.pets-think__box-slider-container'),
    gap = (boxContainer.clientWidth - (boxSlide.clientWidth * 2)),
    translateWidth = (boxSlide.clientWidth + (gap));

    let indexR = range.value;
    boxContainer.style.transition = "transform .7s ease-in-out";
    boxContainer.style.transform = "translateX(" + (-indexR * translateWidth) + 'px';
}








// sliderStrip.style.transform = 'translateX(' + (-indexR * translateWidth) + 'px';

// const onButtonClickReview = (direction) => () => {
// 	switch (direction) {
// 		case 'left':
// 			indexR > 0 && indexR--;
// 			break;
// 		case 'right':
// 			indexR < 4 && indexR++;
// 			break;
// 		default:
// 			break;
// 	}
//     console.log(indexR);
// 	sliderStrip.style.transition = "transform .9s ease-in-out";
//     sliderStrip.style.transform = "translateX(" + (-indexR * translateWidth) + 'px';
//     arrowRightReviev.setAttribute("disabled", "disabled");
// 	arrowLeftReview.setAttribute("disabled", "disabled");
// };

// const onSlidesBoxTransitionEndReview = () => {
//     switch (slidesReview[indexR].id) {
//         case '0':
//             indexR = 3;
// 			break;
//             case '4':
//                 indexR = 1;
//                 break;
//                 default:
//                     break;
//                 }
//     sliderStrip.style.transition = "none";
// 	sliderStrip.style.transform = "translateX(" + (-indexR * translateWidth) + 'px';
// 	arrowRightReviev.removeAttribute('disabled');
// 	arrowLeftReview.removeAttribute('disabled');
// };

// arrowRightReviev.addEventListener('click', onButtonClickReview('right'));
// arrowLeftReview.addEventListener('click', onButtonClickReview('left'));
// sliderStrip.addEventListener('transitionend', onSlidesBoxTransitionEndReview);
const openPanels = document.querySelectorAll('.popup-link-not-close');
const menuPanel = document.querySelectorAll('.donation__popup-choise-content');
const overlay = document.querySelectorAll('.menu__list-overlay');
const btnMenuPanel = document.querySelectorAll('.donation__popup-input');
const popups = document.querySelectorAll('.donation__popup-choise');
const arrowBox = document.querySelectorAll('.donation__popup-input-container-box');
const buttonDollars = document.querySelectorAll('.donation__popup-price input');
const clearInput = document.querySelector('.donation__popup-clear-block');
const donationInformationSelect = document.querySelector('#donation_information');
const donationInformationSelectTwo = document.querySelector('#donation_information_2');
const donationInformationSelectThree = document.querySelector('#donation_information_3');
const donationInformationInput = donationInformationSelect.querySelector('input[data-input]');
const donationInformationInputTwo = donationInformationSelectTwo.querySelector('input[data-input]');
const donationInformationInputThree = donationInformationSelectThree.querySelector('input[data-input]');
const linkBottomPopup = document.querySelectorAll('.donation__popup-live-info-button a');
const inputParent = document.querySelector('.donation-box__right-amount-don');
const inputLink = document.querySelector('.donation-box__right-amount a');
const otherAmountBlock = document.querySelector('.donation__popup-other-block');

// console.log(donationInformationInput);

otherAmountBlock.addEventListener('click', function () {
    asyncTimeoutInput();
});

inputLink.addEventListener('click', function () {
    // buttonDollars.forEach(el => {
    //     if (!el.classList.contains('active')) {
    //         buttonDollars[0].classList.add('active');
    //     }
    // });
    if (inputParent.value == '') {
        clearInput.value = inputParent.value;
        inputParent.value = '';
        asyncTimeoutInput();
    } else {
        searchButton();
        asyncTimeoutInput();
        clearInput.value = inputParent.value;
        otherBlock.classList.add('active');
        inputParent.value = '';
    }
});

function asyncTimeoutInput() {
    setTimeout(() => {
        clearInput.focus();
    }, 100);
}

buttonDollars.forEach(el2 => {
    linkBottomPopup.forEach(el => {
        el.addEventListener('click', function () {
            if (el.textContent == 'Other amount') {
                asyncTimeoutInput();
            }
            if (el.textContent == el2.value) {
                searchButton();
                el2.classList.add('active');
                // el2.setAttribute('name', 'donationAmount');
                clearInput.value = '';
                clearInput.value = el2.value.replace(/\D/g, "");
                otherBlock.classList.add('active');
            }
        });
        el2.addEventListener('click', function () {
            clearInput.value = '';
            clearInput.value = el2.value.replace(/\D/g, "");
            clearInput.style.border = '1px solid #000000';
            otherBlock.classList.add('active');
            firstPageInput.classList.remove('active');
            firstPageSpecBlock.classList.remove('activeBtn');
        });
    });
});


buttonDollars.forEach(el => {
    el.addEventListener('click', function () {
        if (!el.classList.contains('active')) {
            searchButton();
            el.classList.add('active');
            // el.setAttribute('name', 'donationAmount');
        }
    });
});

function searchButton() {
    buttonDollars.forEach(el => {
        if (el.classList.contains('active')) {
            el.classList.remove('active');
            // el.removeAttribute('name');
            // clearInput.removeAttribute('name');
        }
    });
}

clearInput.addEventListener('click', function () {
    // clearInput.setAttribute('name', 'donationAmount');
    searchButton();
});





function serializeForm(formNode) {
    console.log(formNode.elements);
}


function handleFormSubmit(event) {
    event.preventDefault();
    serializeForm(applicantForms);
}

const applicantForms = document.querySelector('form');
applicantForms.addEventListener('submit', handleFormSubmit);



// function serializeForm(formNode) {
//     const { elements } = formNode;

//     const data = Array.from(elements)
//         .map((element) => {
//             const { name, type } = element;
//             const value = type === 'checkbox' ? element.checked : element.value;

//             return { name, value };
//         })
//         .filter((item) => !!item.name);
//     const obj = Object.assign({}, data);
//     console.log(obj);
// }



function serializeForm(formNode) {
    const { elements } = formNode;

    Array.from(elements)
    .filter((item) => !!item.name)
        .map((element) => {
            const { name, type } = element;
            const value = type === 'checkbox' ? element.checked : element.value;
            formData[name] = value;
            return { name, value };
        })
    console.log(formData);
}


// function serializeForm(formNode) {
//     const { elements } = formNode;

//     Array.from(elements)
//     .forEach((element) => {
//             console.log(element);
//             const { name, value } = element;
//             formData[name] = value;
//         });
//     console.log(formData);
// }

const selectItem = (popup, input) => {
    popup.addEventListener('click', (e) => {
        const target = e.target;
        if (target.tagName === 'P') {
            input.value = target.textContent;
            input.placeholder = '';
        }
    });
};
selectItem(donationInformationSelect, donationInformationInput);
selectItem(donationInformationSelectTwo, donationInformationInputTwo);
selectItem(donationInformationSelectThree, donationInformationInputThree);

const formData = {
    // donationAmount: '',
    // specialPet: '',
    // isGift: false,
    // fullName: '',
    // email: '',
    // cardNumber: '',
    // cvv: '',
    // expMonth: '',
    // expYear: '',
};




for (let i = 0; i < openPanels.length; i++) {
    const openPanelActive = openPanels[i],
        overlayActive = overlay[i],
        arrowBoxActive = arrowBox[i];

    openPanelActive.addEventListener("click", function (e) {
        const openPanelName = openPanelActive.getAttribute('href').replace('#', ''),
            curentopenPanel = document.getElementById(openPanelName);

        openPanel(curentopenPanel, overlayActive, arrowBoxActive);
        e.preventDefault();
    });
}

function openPanel(curentopenPanel, overlayActive, arrowBoxActive) {
    curentopenPanel.classList.add('open');
    overlayActive.classList.add('active');
    arrowBoxActive.classList.add('active');
    overlayActive.addEventListener('click', function () {
        curentopenPanel.classList.remove('open');
        overlayActive.classList.remove('active');
        arrowBoxActive.classList.remove('active');
    });
    curentopenPanel.addEventListener('click', function () {
        curentopenPanel.classList.remove('open');
        overlayActive.classList.remove('active');
        arrowBoxActive.classList.remove('active');
    });
}





const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('html');
const lockPadding = document.querySelectorAll('.lock-padding');
const popupBottomBtn = document.querySelector('.pets-paf__info-box-moreinfo-btn');
const popupBottom = document.getElementById('popup_bottom');
const allPopups = document.querySelectorAll('.donation__popup');

const checkBoxFirst = document.querySelector('.donation__popup-checkbox-daw');
const checkBoxName = document.querySelector('.donation__popup-name-input');
const checkBoxEmail = document.querySelector('.donation__popup-email-input');
const checkBoxCard = document.querySelector('.donation__popup-card-input');
const checkBoxCVV = document.querySelector('.donation__popup-cvv-input');
const checkDate = document.querySelectorAll('.donation__popup-input');
const inputBorder = document.querySelectorAll('.input-border');
const closePopapWhite = document.querySelector('.donation__popup-close-modal');






let unlock = true;

const timeout = 400;

// popupBottomBtn.addEventListener('click', function (e) {
//     popupBottom.classList.add('open');
//     e.preventDefault();
// });

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            e.preventDefault();
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
        });
    }
}

function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
        const popupActive = document.querySelector('.donation__popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        curentPopup.classList.add('open');
        curentPopup.addEventListener("mousedown", function (e) {
            if (!e.target.closest('.donation__popup-box')) {
                popupClose(e.target.closest('.donation__popup'));
            }
        });
    }
}


function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        setTimeout(() => {
                if (!allPopups[0].classList.contains('open') &&
                !allPopups[1].classList.contains('open') && 
                !allPopups[2].classList.contains('open') && 
                !allPopups[3].classList.contains('open')) {
                    checkDate[0].placeholder = 'Choose your favourite';
                    checkDate[1].placeholder = 'Month';
                    checkDate[2].placeholder = 'Year';
                    checkDate[0].value = '';
                    checkDate[1].value = '';
                    checkDate[2].value = '';
                    clearInput.value = '';
                    checkBoxFirst.checked = false;
                    checkBoxName.value = '';
                    checkBoxEmail.value = '';
                    checkBoxCard.value = '';
                    checkBoxCVV.value = '';
                    searchButton();
                    spanAll.forEach(el => {
                        el.classList.remove('active');
                    });
                    inputBorder.forEach(el => {
                        el.style.border = '1px solid #000000';
                    });
                    expirationError.classList.remove('donation__popup-expiration-error');
                    creditError.classList.remove('donation__popup-credit-error');
                    firstPageCheckBlock.classList.remove('activeBtn');
                    firstPageSpecBlock.classList.remove('activeBtn');
                    bodyTwoPopup.classList.remove('active');
                }
        }, 100);

        if (doUnlock) {
            bodyUnLock();
        }
    }
}



function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';

    if (true) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
        body.style.paddingRight = lockPaddingValue;
        body.classList.add('lock');

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);

    }
}

function bodyUnLock() {
    setTimeout(function () {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.donation__popup.open');
        popupClose(popupActive);
    }
});

closePopapWhite.addEventListener('click', function() {
    popupBottom.classList.remove('open');
});
const inputPopupValidate = document.querySelectorAll('.donation__popup-input');
const buttonBlock = document.querySelectorAll('.block');
const popupFirstValidate = document.getElementById('popup');
const popupTwoValidate = document.getElementById('popup_2');
const popupThreeValidate = document.getElementById('popup_3');
const inputName = document.querySelector('.donation__popup-name-input');
const inputEmail = document.querySelector('.donation__popup-email-input');
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const htmll = document.querySelector('html');
const firstPageInput = document.querySelector('.donation__popup-clear-block-container span');
const firstPageSelect = document.querySelector('.donation__popup-input-container-box-content span');
const secondPageName = document.querySelector('.donation__popup-name span');
const secondPageEmail = document.querySelector('.donation__popup-email span');
const firstPageSpecBlock = document.querySelector('.donation__popup-special-block');
const firstPageCheckBlock = document.querySelector('.donation__popup-checkbox');
const creditError = document.querySelector('.donation__popup-credit');
const expirationError = document.querySelector('.donation__popup-expiration');
const cardInputContainer = document.querySelector('.donation__popup-card-input-container span');
const CVVInputContainer = document.querySelector('.donation__popup-cvv-input-container span');
const inputContainer = document.querySelectorAll('.donation__popup-input-container span');
const popupCard = document.querySelector('.donation__popup-card');
const popupCVV = document.querySelector('.donation__popup-cvv');
const donationInformation = document.querySelector('.donation__popup-information');
const disabledButton = document.querySelector('.donation__popup-btn-three');
const specialBlock = document.querySelector('.donation__popup-special-block');
const otherBlock = document.querySelector('.donation__popup-other-block');
const bodyTwoPopup = document.querySelector('.donation__popup-body-two');

const choise = document.querySelectorAll('.donation__popup-choise');


const spanAll = [
    firstPageInput,
    firstPageSelect,
    secondPageName,
    secondPageEmail,
    cardInputContainer,
    CVVInputContainer,
    inputContainer[1],
    inputContainer[2],
    disabledButton,
    specialBlock,
    otherBlock
];

popupFirstValidate.addEventListener('click', function () {
    if (inputPopupValidate[0].placeholder !== 'Choose your favourite') {
        btnMenuPanel[0].style.border = '1px solid #000000';
        firstPageSelect.classList.remove('active');
        firstPageCheckBlock.classList.remove('activeBtn');
        specialBlock.classList.add('active');
    }
    if (inputPopupValidate[0].placeholder !== 'Choose your favourite' && clearInput.value !== '') {
        buttonBlock[0].classList.add('hidden');
    }
});

popupFirstValidate.addEventListener('keyup', function () {
    if (clearInput.value !== '') {
        clearInput.style.border = '1px solid #000000';
        firstPageInput.classList.remove('active');
        firstPageSpecBlock.classList.remove('activeBtn');
        otherBlock.classList.add('active');
    }
    if (inputPopupValidate[0].placeholder !== 'Choose your favourite' && clearInput.value !== '') {
        buttonBlock[0].classList.add('hidden');
    }
});


buttonBlock[0].addEventListener('click', function () {
    if (inputPopupValidate[0].placeholder == 'Choose your favourite') {
        btnMenuPanel[0].style.border = '2px solid #ff8400';
        firstPageSelect.classList.add('active');
        firstPageCheckBlock.classList.add('activeBtn');
    } if (clearInput.value == '') {
        clearInput.style.border = '2px solid #ff8400';
        asyncTimeoutInput();
        firstPageSpecBlock.classList.add('activeBtn');
        firstPageInput.classList.add('active');
    }
});

popupFirstValidate.addEventListener('mousemove', function () {
    if (inputPopupValidate[0].placeholder == 'Choose your favourite' || clearInput.value == '') {
        buttonBlock[0].classList.remove('hidden');
    }
});




function validateEmail(email) {
    return EMAIL_REGEXP.test(email.value);
}
function validateName(name) {
    return name.value.length > 1;
}

popupTwoValidate.addEventListener('mousemove', function () {
    if (!validateEmail(inputEmail) || !validateName(inputName)) {
        buttonBlock[1].classList.remove('hidden');
    }
});

popupTwoValidate.addEventListener('keyup', function () {
    if (validateName(inputName)) {
        inputName.style.border = '1px solid #000000';
        secondPageName.classList.remove('active');
        bodyTwoPopup.classList.remove('active');
    }
    if (validateEmail(inputEmail)) {
        inputEmail.style.border = '1px solid #000000';
        donationInformation.style.marginTop = '';
        secondPageEmail.classList.remove('active');
    }
    if (inputName.value !== '' && inputEmail.value !== '') {
        buttonBlock[1].classList.add('hidden');
    }
});

buttonBlock[1].addEventListener('click', function () {
    if (!validateName(inputName)) {
        inputName.style.border = '2px solid #ff8400';
        secondPageName.classList.add('active');
        bodyTwoPopup.classList.add('active');


    } if (!validateEmail(inputEmail)) {
        inputEmail.style.border = '2px solid #ff8400';
        donationInformation.style.marginTop = '20px';
        secondPageEmail.classList.add('active');
    }
});

function validateCard(checkBoxCard) {
    return checkBoxCard.value.length < 16;
};

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    return true;
};

function validateCVV() {
    return checkBoxCVV.value.length < 3;
}

function validateMonth() {
    return inputPopupValidate[1].placeholder == 'Month';
}

function validateYear() {
    return inputPopupValidate[2].placeholder == 'Year';
}

popupThreeValidate.addEventListener('mousemove', function () {
    if (validateCard(checkBoxCard) ||
        validateCVV(checkBoxCVV) ||
        validateMonth(inputPopupValidate[1]) ||
        validateYear(inputPopupValidate[2])) {
        buttonBlock[2].classList.remove('hidden');
    }
    if (!validateCard(checkBoxCard) &&
        !validateCVV(checkBoxCVV) &&
        !validateMonth(inputPopupValidate[1]) &&
        !validateYear(inputPopupValidate[2])) {
        buttonBlock[2].classList.add('hidden');
        disabledButton.classList.add('active');
    }
});

buttonBlock[2].addEventListener('click', function () {
    if (validateCard(checkBoxCard)) {
        checkBoxCard.style.border = '2px solid #ff8400';
        cardInputContainer.classList.add('active');
    }
    if (validateCVV(checkBoxCVV)) {
        checkBoxCVV.style.border = '2px solid #ff8400';
        CVVInputContainer.classList.add('active');
    }
    if (validateMonth(inputPopupValidate[1])) {
        inputPopupValidate[1].style.border = '2px solid #ff8400';
        inputContainer[1].classList.add('active');
    }
    if (validateYear(inputPopupValidate[2])) {
        inputPopupValidate[2].style.border = '2px solid #ff8400';
        inputContainer[2].classList.add('active');
    }
});



for (let i = 4; i < 6; i++) {
    inputBorder[i].addEventListener('keyup', function () {
        if (!validateCard(checkBoxCard)) {
            checkBoxCard.style.border = '1px solid #000000';
            cardInputContainer.classList.remove('active');
        }
        if (!validateCVV(checkBoxCVV)) {
            checkBoxCVV.style.border = '1px solid #000000';
            CVVInputContainer.classList.remove('active');
        }
        if (!validateCard(checkBoxCard) && 
        !validateCVV(checkBoxCVV) && 
        !validateMonth(inputPopupValidate[1]) && 
        !validateYear(inputPopupValidate[2])){
            buttonBlock[2].classList.add('hidden');
        }
    });
}

popupThreeValidate.addEventListener('click', function () {
    if (!validateMonth(inputPopupValidate[1])) {
        inputPopupValidate[1].style.border = '1px solid #000000';
        inputContainer[1].classList.remove('active');
    }
    if (!validateYear(inputPopupValidate[2])) {
        inputPopupValidate[2].style.border = '1px solid #000000';
        inputContainer[2].classList.remove('active');
    }
    if(!validateMonth(inputPopupValidate[1]) && 
    !validateYear(inputPopupValidate[2]) && 
    !validateCard(checkBoxCard) && 
    !validateCVV(checkBoxCVV)) {
        buttonBlock[2].classList.add('hidden');
    }
});


disabledButton.addEventListener('click', function() {
    popupClose(document.getElementById('popup_3'));
});




const mobileSlider = document.querySelector('.care-animals__mobile-slider');
const mobileSliderBox = document.querySelector('.care-animals__mobile-box');
const mobilePoints = document.querySelectorAll('.care-animals__mobile-points div');



// mobileSlider.addEventListener('click', function() {
//     mobileSlider.style.transform += "translateX(" + (-mobileSliderBox.clientWidth - 40) + 'px';
// });
mobilePoints.forEach(div => {
    div.addEventListener('click', function () {
        mobileSlider.style.transform = "translateX(" + ((-mobileSliderBox.clientWidth - 40) * div.id) + 'px';
        checkPointActive();
        div.classList.add('active');
    });
});

let indexVHS = 0;

function pointSlider(direction) {
    if (direction == 'left'){
        indexVHS > 0 && indexVHS--;
    } 
    if (direction == 'right') {
        indexVHS < 3 && indexVHS++;
    }
    checkPointActive();
    mobilePoints[indexVHS].classList.add('active');
    mobileSlider.style.transform = "translateX(" + ((-mobileSliderBox.clientWidth - 40) * indexVHS) + 'px';
}

const sliderTouch = document.querySelector(".care-animals__mobile");
let startPoint;
let moved = false;
function touch(e) {
	startPoint = e.changedTouches[0].pageX;
}
function move(e) {
	if (moved) {
		return;
	}
	e.preventDefault();
	if (e.changedTouches[0].pageX > startPoint + sliderTouch.offsetWidth / 14) {
        pointSlider('left');
		moved = true;
	}
	if (e.changedTouches[0].pageX < startPoint - sliderTouch.offsetWidth / 14) {
        pointSlider('right');
		moved = true;
	}
}
sliderTouch.addEventListener("touchmove", move);
sliderTouch.addEventListener("touchstart", touch);
sliderTouch.addEventListener("touchend", () => {
	setTimeout(() => {
		moved = !moved;
	}, 200);
});

function checkPointActive() {
    mobilePoints.forEach(el => {
        if (el.classList.contains('active')) {
            el.classList.remove('active');
        }
    });
}
