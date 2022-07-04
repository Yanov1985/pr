// Работа с фильтром

const filters = document.querySelectorAll('.fill');


const handleClick = (event) => {
	console.log(event.target)
}


filters.forEach(filter => {
filter.addEventListener('click', handleClick)
})



// Показать все профессии

const profMore = document.querySelector('.professiums_main_more_btn');

function profClick() {
	console.log('Профессии');
}

profMore.addEventListener('click', profClick)

// Показать все курсы

const courseMore = document.querySelector('.courses_more_btn')

function courseClick() {
	console.log('Курсы');
}

courseMore.addEventListener('click', courseClick)