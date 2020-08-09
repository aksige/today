const
	menu = document.querySelector('.navigation'),
	noneDefault = document.querySelector('.nav-ul')


menu.addEventListener("click",function () {
	noneDefault.classList.toggle('none-default');
});