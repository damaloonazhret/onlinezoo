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
// const slidesTop = [
// 	{
// 		name: 'Gorilla in Congo',
// 		id: 11,
// 		idi: 'lastClone',
// 		status: 'active',
// 		src: "images/gorilla.png",
// 		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Chinese Alligator',
// 		id: 12,

// 		status: 'active',
// 		src: "images/aligator.png",
// 		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Giant Panda',
// 		id: 13,

// 		status: 'not-active',
// 		src: "images/panda.png",
// 		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Chinese Alligator',
// 		id: 16,
// 		status: 'not-active',
// 		src: "images/aligator.png",
// 		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Giant Panda',
// 		id: 1,
// 		status: 'not-active',
// 		src: "images/panda.png",
// 		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Madagascarian Lemur',
// 		id: 2,

// 		status: 'not-active',
// 		src: "images/lemur.png",
// 		description: 'Lemurs are considered the world’s most endangered group of mammals.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Gorilla in Congo',
// 		id: 3,
// 		idi: 'firstClone',
// 		status: 'not-active',
// 		src: "images/gorilla.png",
// 		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Chinese Alligator',
// 		id: 4,
// 		status: 'not-active',
// 		src: "images/aligator.png",
// 		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Giant Panda',
// 		id: 9,
// 		status: 'active',
// 		src: "images/panda.png",
// 		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Madagascarian Lemur',
// 		id: 10,
// 		status: 'active',
// 		src: "images/lemur.png",
// 		description: 'Lemurs are considered the world’s most endangered group of mammals.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Giant Panda',
// 		id: 1,

// 		status: 'not-active',
// 		src: "images/panda.png",
// 		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Gorilla in Congo',
// 		id: 11,
// 		status: 'active',
// 		src: "images/gorilla.png",
// 		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Chinese Alligator',
// 		id: 16,
// 		status: 'not-active',
// 		src: "images/aligator.png",
// 		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Giant Panda',
// 		id: 1,

// 		status: 'not-active',
// 		src: "images/panda.png",
// 		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Madagascarian Lemur',
// 		id: 14,
// 		status: 'not-active',
// 		src: "images/lemur.png",
// 		description: 'Lemurs are considered the world’s most endangered group of mammals.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Gorilla in Congo',
// 		id: 15,
// 		status: 'not-active',
// 		src: "images/gorilla.png",
// 		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Chinese Alligator',
// 		id: 12,

// 		status: 'active',
// 		src: "images/aligator.png",
// 		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Giant Panda',
// 		id: 13,

// 		status: 'not-active',
// 		src: "images/panda.png",
// 		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Chinese Alligator',
// 		id: 16,
// 		status: 'not-active',
// 		src: "images/aligator.png",
// 		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Giant Panda',
// 		id: 1,

// 		status: 'not-active',
// 		src: "images/panda.png",
// 		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Madagascarian Lemur',
// 		id: 14,
// 		status: 'not-active',
// 		src: "images/lemur.png",
// 		description: 'Lemurs are considered the world’s most endangered group of mammals.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Gorilla in Congo',
// 		id: 15,
// 		status: 'not-active',
// 		src: "images/gorilla.png",
// 		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
// 		link: 'VIEW LIVE CAM'
// 	},
// ];

// const slidesBottom = [
// 	{
// 		name: 'Gorilla in Congo',
// 		id: 11,
// 		idi: 'lastClone',
// 		status: 'active',
// 		src: "images/gorilla.png",
// 		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Chinese Alligator',
// 		id: 12,
// 		status: 'active',
// 		src: "images/aligator.png",
// 		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Giant Panda',
// 		id: 13,
// 		status: 'not-active',
// 		src: "images/panda.png",
// 		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'West End Bald Eagles',
// 		id: 5,
// 		status: 'not-active',
// 		src: "images/eagles.png",
// 		description: 'Pair of eagle parents lay and protect eggs, feed their chicks and teach them to hunt and fly.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Australian Koala',
// 		id: 6,
// 		status: 'not-active',
// 		src: "images/koala.png",
// 		description: 'The elevated walkways bring you to eye level with the koalas as they perch in their forest.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'African Lion',
// 		id: 7,

// 		status: 'not-active',
// 		src: "images/lion.png",
// 		description: 'Lions roam the savannas and grasslands of Africa, hunting and raising cubs in the pride.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Sumatran Tiger',
// 		id: 8,
// 		idi: 'firstClone',
// 		status: 'not-active',
// 		src: "images/tiger.png",
// 		description: 'Sumatran Tigers are the smallest of the five sub-species, and are found in Indonesia.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Chinese Alligator',
// 		id: 4,
// 		status: 'not-active',
// 		src: "images/aligator.png",
// 		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Giant Panda',
// 		id: 9,
// 		status: 'active',
// 		src: "images/panda.png",
// 		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Madagascarian Lemur',
// 		id: 10,
// 		status: 'active',
// 		src: "images/lemur.png",
// 		description: 'Lemurs are considered the world’s most endangered group of mammals.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'West End Bald Eagles',
// 		id: 5,
// 		status: 'not-active',
// 		src: "images/eagles.png",
// 		description: 'Pair of eagle parents lay and protect eggs, feed their chicks and teach them to hunt and fly.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Australian Koala',
// 		id: 6,
// 		status: 'not-active',
// 		src: "images/koala.png",
// 		description: 'The elevated walkways bring you to eye level with the koalas as they perch in their forest.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'African Lion',
// 		id: 7,
// 		status: 'not-active',
// 		src: "images/lion.png",
// 		description: 'Lions roam the savannas and grasslands of Africa, hunting and raising cubs in the pride.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Sumatran Tiger',
// 		id: 8,
// 		status: 'not-active',
// 		src: "images/tiger.png",
// 		description: 'Sumatran Tigers are the smallest of the five sub-species, and are found in Indonesia.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Australian Koala',
// 		id: 6,
// 		status: 'not-active',
// 		src: "images/koala.png",
// 		description: 'The elevated walkways bring you to eye level with the koalas as they perch in their forest.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Gorilla in Congo',
// 		id: 11,
// 		status: 'active',
// 		src: "images/gorilla.png",
// 		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Chinese Alligator',
// 		id: 12,

// 		status: 'active',
// 		src: "images/aligator.png",
// 		description: 'From nose to tail, belly to back, hard scales protect this petite alligator.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Giant Panda',
// 		id: 13,

// 		status: 'not-active',
// 		src: "images/panda.png",
// 		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'West End Bald Eagles',
// 		id: 5,
// 		status: 'not-active',
// 		src: "images/eagles.png",
// 		description: 'Pair of eagle parents lay and protect eggs, feed their chicks and teach them to hunt and fly.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Australian Koala',
// 		id: 6,
// 		status: 'not-active',
// 		src: "images/koala.png",
// 		description: 'The elevated walkways bring you to eye level with the koalas as they perch in their forest.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'African Lion',
// 		id: 7,
// 		status: 'not-active',
// 		src: "images/lion.png",
// 		description: 'Lions roam the savannas and grasslands of Africa, hunting and raising cubs in the pride.',
// 		link: 'VIEW LIVE CAM'
// 	},
// 	{
// 		name: 'Sumatran Tiger',
// 		id: 8,
// 		status: 'not-active',
// 		src: "images/tiger.png",
// 		description: 'Sumatran Tigers are the smallest of the five sub-species, and are found in Indonesia.',
// 		link: 'VIEW LIVE CAM'
// 	},
// ];

const slidesTop = [
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
		name: 'Gorilla in Congo',
		id: 3,
		idi: 'firstClone',
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
		name: 'Giant Panda',
		id: 1,
		src: "images/panda.png",
		description: 'Native to central China, giant pandas have come to symbolize vulnerable species.',
		link: 'VIEW LIVE CAM'
	},
	{
		name: 'Gorilla in Congo',
		id: 3,
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
		name: 'Gorilla in Congo',
		id: 3,
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
		name: 'Gorilla in Congo',
		id: 3,
		src: "images/gorilla.png",
		description: 'Variety of snacks very important for the healthy life of gorillas and his plenty of babies.',
		link: 'VIEW LIVE CAM'
	},
];

const slidesBottom = [
	{
		name: 'West End Bald Eagles',
		id: 5,
		idi: 'lastClone',
		src: "images/eagles.png",
		description: 'Pair of eagle parents lay and protect eggs, feed their chicks and teach them to hunt and fly.',
		link: 'VIEW LIVE CAM'
	},
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
		name: 'Sumatran Tiger',
		id: 8,
		idi: 'firstClone',
		src: "images/tiger.png",
		description: 'Sumatran Tigers are the smallest of the five sub-species, and are found in Indonesia.',
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
		name: 'Sumatran Tiger',
		id: 8,
		src: "images/tiger.png",
		description: 'Sumatran Tigers are the smallest of the five sub-species, and are found in Indonesia.',
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
		name: 'Sumatran Tiger',
		id: 8,
		src: "images/tiger.png",
		description: 'Sumatran Tigers are the smallest of the five sub-species, and are found in Indonesia.',
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
		name: 'Sumatran Tiger',
		id: 8,
		src: "images/tiger.png",
		description: 'Sumatran Tigers are the smallest of the five sub-species, and are found in Indonesia.',
		link: 'VIEW LIVE CAM'
	},
];
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

// const size = box.clientWidth + 40;

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