'use strict'

let userButtons = document.querySelectorAll('.user__btns');
let userButtonsArray = [...userButtons];

let navBar = document.getElementById('navbar');
let navButtons = navBar.querySelectorAll('.nav__btn');
let navButtonsArray = [...navButtons];

let lines = document.querySelector('.lines');
console.log(lines);
let lineSpans = lines.querySelectorAll('span');
let lineSpansArray = [...lineSpans];
console.log(lineSpansArray);

let monitor = document.getElementById('monitor');

navButtonsArray.forEach(navBtn => {
	navBtn.addEventListener('click', () => {
		let innerSpan = navBtn.querySelector('span');
		navBtn.classList.toggle('active');
		innerSpan.classList.toggle('activeSpan');
	})
});

lines.addEventListener('click', () => {
	lines.classList.toggle('active');
	lineSpansArray.forEach(sp => {
		sp.classList.toggle('activeLinesSpan');
	})
});

userButtonsArray.forEach( btn => {
	btn.addEventListener('click', () => {
		let muteItem = btn.querySelector('.mute__span');
		if (muteItem.classList.contains('mute')){
			muteItem.classList.remove('mute');
			btn.classList.add('unmute');
		}else if(!muteItem.classList.contains('mute')){
			muteItem.classList.add('mute');
			btn.classList.remove('unmute');
		}
	})	
});

monitor.addEventListener('click', () => {
	monitor.classList.toggle('unmute');
})

