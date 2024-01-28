"use strict";

const storedData = localStorage.getItem('trainerData');
// const DATA = storedData ? JSON.parse(storedData) : [
	const DATA = [
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m1.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "8 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f1.png",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m2.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Тетяна",
		"last name": "Мороз",
		photo: "./img/trainers/trainer-f2.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
	},
	{
		"first name": "Сергій",
		"last name": "Коваленко",
		photo: "./img/trainers/trainer-m3.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
	},
	{
		"first name": "Олена",
		"last name": "Лисенко",
		photo: "./img/trainers/trainer-f3.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
	},
	{
		"first name": "Андрій",
		"last name": "Волков",
		photo: "./img/trainers/trainer-m4.jpg",
		specialization: "Бійцівський клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
	},
	{
		"first name": "Наталія",
		"last name": "Романенко",
		photo: "./img/trainers/trainer-f4.jpg",
		specialization: "Дитячий клуб",
		category: "спеціаліст",
		experience: "3 роки",
		description:
			"Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
	},
	{
		"first name": "Віталій",
		"last name": "Козлов",
		photo: "./img/trainers/trainer-m5.jpg",
		specialization: "Тренажерний зал",
		category: "майстер",
		experience: "10 років",
		description:
			"Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
	},
	{
		"first name": "Юлія",
		"last name": "Кравченко",
		photo: "./img/trainers/trainer-f5.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
	},
	{
		"first name": "Олег",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-m6.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "12 років",
		description:
			"Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
	},
	{
		"first name": "Лідія",
		"last name": "Попова",
		photo: "./img/trainers/trainer-f6.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
	},
	{
		"first name": "Роман",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m7.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
	},
	{
		"first name": "Анастасія",
		"last name": "Гончарова",
		photo: "./img/trainers/trainer-f7.jpg",
		specialization: "Басейн",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
	},
	{
		"first name": "Валентин",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-m8.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
	},
	{
		"first name": "Лариса",
		"last name": "Петренко",
		photo: "./img/trainers/trainer-f8.jpg",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "7 років",
		description:
			"Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
	},
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m9.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "11 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f9.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m10.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Наталія",
		"last name": "Бондаренко",
		photo: "./img/trainers/trainer-f10.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "8 років",
		description:
			"Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
	},
	{
		"first name": "Андрій",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m11.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
	},
	{
		"first name": "Софія",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-f11.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "6 років",
		description:
			"Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
	},
	{
		"first name": "Дмитро",
		"last name": "Ковальчук",
		photo: "./img/trainers/trainer-m12.png",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
	},
	{
		"first name": "Олена",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-f12.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "5 років",
		description:
			"Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
	},
];


DATA.forEach((trainer, index) => {
	trainer.id = index++;
  });

  const saveDataToStorage = (data) => {
	localStorage.setItem('trainerData', JSON.stringify(data));
  };
  
const trainersCardsContainer = document.querySelector('.trainers-cards__container');
const trainerCardTemplate = document.querySelector('#trainer-card').content; 

const sortItem = document.querySelector(".sorting");
const filterItem = document.querySelector(".filters");
const trainerModalTemplate = document.querySelector("#modal-template").content;
const trainerShowBtn = document.querySelector('.trainer__show-more');
const modal = document.querySelector(".modal");


// LOADER -------------------------------------------------------------------------------
const pageHeader = document.querySelector(".page-header");
const loaderContainer = document.createElement('div');
const loader = document.createElement('div');

loaderContainer.classList.add('loader-container');
loader.classList.add('loader');

pageHeader.after(loaderContainer);
loaderContainer.appendChild(loader);

function showLoader() {
	const scrollTop = window.scrollY || document.documentElement.scrollTop;
	const loaderContainer = document.querySelector('.loader-container');
	const pageWrapper = document.querySelector('.page-wrapper');
	pageWrapper.classList.add('hide')
	loaderContainer.style.display = 'flex';

	setTimeout(() => {
		loaderContainer.style.display = 'none';
		pageWrapper.classList.remove('hide');
	}, 2000);

  	window.scrollTo(0, scrollTop);
  };

showLoader();

document.querySelector(".sorting").removeAttribute("hidden");
document.querySelector(".sidebar").removeAttribute("hidden");

// RENDER TRAINERS CARDS -------------------------------------------------------------------------------
const renderTrainerCard = (card) => {
	trainersCardsContainer.innerHTML = "";
  
	card.forEach(trainer => {
		const trainerCard = trainerCardTemplate.cloneNode(true);
		trainerCard.querySelector('.trainer__img').src = trainer.photo;
		trainerCard.querySelector(".trainer__img").alt = `${trainer['last name']}`;
		trainerCard.querySelector('.trainer__name').innerText = `${trainer['last name']} ${trainer['first name']}`;
		
		trainerCard.querySelector(".trainer").setAttribute("data-id", trainer.id);
		
		trainersCardsContainer.append(trainerCard);	
	});
}

renderTrainerCard(DATA);

// SCROLL DISABLING ------------------------------------------------------------------------
let scrollPosition;

const disableScroll = () => {
  const body = document.body;
  scrollPosition = window.scrollY;

  body.style.overflow = 'hidden';
  body.style.position = 'fixed';
  body.style.width = '100%';
  body.style.top = `-${scrollPosition}px`;
}

const enableScroll = () => {
  const body = document.body;

  body.style.overflow = '';
  body.style.position = '';
  body.style.width = 'auto';
  body.style.top = '';

  window.scrollTo(0, scrollPosition);
}

// SHOW AND CLOSE MODAL ------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
	document.body.addEventListener("click", (event) => {
	  if (event.target.classList.contains("trainer__show-more")) {
		const modalContent = trainerModalTemplate.cloneNode(true);
  
		const card = event.target.closest('.trainer');
		const trainer = DATA.find(el => el.id === +card.dataset.id);

		modalContent.querySelector('.modal__img').src = trainer.photo;
		modalContent.querySelector(".modal__img").alt = `${trainer['last name']}`;
		modalContent.querySelector('.modal__name').innerText = `${trainer['last name']} ${trainer['first name']}`;
		modalContent.querySelector('.modal__point--category').innerText = trainer.category;
		modalContent.querySelector('.modal__point--experience').innerText = trainer.experience;
		modalContent.querySelector('.modal__point--specialization').innerText = trainer.specialization;
		modalContent.querySelector('.modal__text').innerText = trainer.description;
  
		modalContent.querySelector('.modal__close').addEventListener("click", () => {
      		document.querySelector(".modal").remove();
      		enableScroll();
    	});

		document.body.append(modalContent);
		disableScroll();
	  }
	});
});

// SORTING BUTTONS
const sortArray = (element, array) => {
	if (element.innerText === 'ЗА ПРІЗВИЩЕМ') {
		array.sort((a, b) => a['last name'].localeCompare(b['last name']));
	} else if (element.innerText === 'ЗА ДОСВІДОМ') {
		array.sort((a, b) => parseInt(b.experience) - parseInt(a.experience));
	} 

	renderTrainerCard(array);
	// saveDataToStorage(array);
} 

const sortingButtons = document.querySelectorAll('.sorting__btn');
sortingButtons.forEach(button => {
    button.addEventListener('click', () => {
        sortingButtons.forEach(btn => btn.classList.remove('sorting__btn--active'));

		const sortingArray = [...DATA];
        button.classList.add('sorting__btn--active');

       	sortArray(button, sortingArray);
    });
});

// FILTERING FORM
const filtersForm = document.querySelector('.filters');
filtersForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const direction = document.querySelector('input[name="direction"]:checked').value;
    const category = document.querySelector('input[name="category"]:checked').value;

// const directionFilter = localStorage.getItem('directionFilter');
// const categoryFilter = localStorage.getItem('categoryFilter');

// if (directionFilter) {
//   document.querySelector(`input[name="direction"][value="${directionFilter}"]`).checked = true;
// }

// if (categoryFilter) {
//   document.querySelector(`input[name="category"][value="${categoryFilter}"]`).checked = true;
// }

	const filteredData = DATA.filter(trainer => {
		if ((direction === 'all' || trainer.specialization.toLowerCase() === direction) &&
		    (category === 'all' || trainer.category.toLowerCase() === category)) {
			return true;
		}
	});

	showLoader();
	const sotringActiveBtn = document.querySelector('.sorting__btn--active');
	sortArray(sotringActiveBtn, filteredData);
	// saveDataToStorage(filteredData);
});