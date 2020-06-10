'use strict'

let userButtons = document.querySelectorAll('.user__btns');
let userButtonsArray = [...userButtons];

let navBar = document.getElementById('navbar');
let navButtons = navBar.querySelectorAll('.nav__btn');
let navButtonsArray = [...navButtons];
console.log(navButtonsArray);

let usersBtn = document.querySelector('#users');
let videoChatBtn = document.querySelector('#videoChat');
let messegesBtn = document.querySelector('#messeges');

/* sections */
let usersSection = document.querySelector('.members__block');
let videoChatSection = document.querySelector('.video__block');
let messegesSection = document.querySelector('.messages__block');

let windowWidth = document.documentElement.clientWidth;
let windowHeight = document.documentElement.clientHeight;

if(windowWidth>700 && windowHeight>600){
	usersBtn.addEventListener('click', () => {
		if(messegesSection.classList.contains('disabled')){
			videoChatSection.classList.toggle('maxVideoWidth');
		}else if(videoChatSection.classList.contains('disabled') &&
			messegesSection.classList.contains('maxMessWidth')){
			messegesSection.classList.remove('maxMessWidth')
		}else if(videoChatSection.classList.contains('disabled')){
			messegesSection.classList.add('maxMessWidth');
		}
		usersSection.classList.toggle('disabled');
		messegesSection.classList.toggle('midMessWidth');
	})
	videoChatBtn.addEventListener('click', () => {
		videoChatSection.classList.toggle('disabled');
		usersSection.classList.toggle('halfWidth');
		messegesSection.classList.toggle('halfWidth');
		if(messegesSection.classList.contains('maxMessWidth') || 
			usersSection.classList.contains('maxMessWidth')){
			messegesSection.classList.remove('maxMessWidth');
			usersSection.classList.remove('maxMessWidth');
		}else if(messegesSection.classList.contains('disabled') || 
			usersSection.classList.contains('disabled')){
			messegesSection.classList.add('maxMessWidth');
			usersSection.classList.add('maxMessWidth');
		}
	})
	messegesBtn.addEventListener('click', () => {
		if(usersSection.classList.contains('disabled')){
			videoChatSection.classList.toggle('maxVideoWidth');
		}else if(videoChatSection.classList.contains('disabled') &&
			usersSection.classList.contains('maxMessWidth')){
			usersSection.classList.remove('maxMessWidth')
		}else if(videoChatSection.classList.contains('disabled')){
			usersSection.classList.add('maxMessWidth');
		}
		messegesSection.classList.toggle('disabled');
		usersSection.classList.toggle('midMessWidth');
	})
}

if(windowWidth<700 || windowHeight<600){
	usersBtn.addEventListener('click', () => {
		if(messegesSection.classList.contains('disabled')){
			videoChatSection.classList.toggle('maxVideoheight');
		}else if(videoChatSection.classList.contains('disabled') &&
			messegesSection.classList.contains('maxMessHeight')){
			messegesSection.classList.remove('maxMessHeight')
		}else if(videoChatSection.classList.contains('disabled')){
			messegesSection.classList.add('maxMessHeight');
		}
		usersSection.classList.toggle('disabled');
		messegesSection.classList.toggle('midMessheight');
	})
	videoChatBtn.addEventListener('click', () => {
		videoChatSection.classList.toggle('disabled');
		usersSection.classList.toggle('halfheight');
		messegesSection.classList.toggle('halfheight');
		if(messegesSection.classList.contains('maxMessHeight') || 
			usersSection.classList.contains('maxMessHeight')){
			messegesSection.classList.remove('maxMessHeight');
			usersSection.classList.remove('maxMessHeight');
		}else if(messegesSection.classList.contains('disabled') || 
			usersSection.classList.contains('disabled')){
			messegesSection.classList.add('maxMessHeight');
			usersSection.classList.add('maxMessHeight');
		}
	})
	messegesBtn.addEventListener('click', () => {
		if(usersSection.classList.contains('disabled')){
			videoChatSection.classList.toggle('maxVideoheight');
		}else if(videoChatSection.classList.contains('disabled') &&
			usersSection.classList.contains('maxMessHeight')){
			usersSection.classList.remove('maxMessHeight')
		}else if(videoChatSection.classList.contains('disabled')){
			usersSection.classList.add('maxMessHeight');
		}
		messegesSection.classList.toggle('disabled');
		usersSection.classList.toggle('midMessheight');
	})
}



/*let lines = document.querySelector('.lines');
console.log(lines);
let lineSpans = lines.querySelectorAll('span');
let lineSpansArray = [...lineSpans];
console.log(lineSpansArray);*/

let monitor = document.getElementById('monitor');

navButtonsArray.forEach(navBtn => {
	navBtn.addEventListener('click', () => {
		let innerSvg = navBtn.querySelector('svg');
		navBtn.classList.toggle('active');
		innerSvg.classList.toggle('activeSvg');
	})
});

/*lines.addEventListener('click', () => {
	lines.classList.toggle('active');
	lineSpansArray.forEach(sp => {
		sp.classList.toggle('activeLinesSpan');
	})
});*/

userButtonsArray.forEach( btn => {
	btn.addEventListener('click', () => {
		let muteItem = btn.querySelector('.mute__span');
		let muteSvg = btn.querySelector('svg');
		if (muteItem.classList.contains('mute')){
			muteItem.classList.remove('mute');
			btn.classList.add('unmute');
			muteSvg.classList.add('unmuteSvg');
		}else if(!muteItem.classList.contains('mute')){
			muteItem.classList.add('mute');
			btn.classList.remove('unmute');
			muteSvg.classList.remove('unmuteSvg');
		}
	})	
});

monitor.addEventListener('click', () => {
	let muteSvg = monitor.querySelector('svg');
	monitor.classList.toggle('unmute');
	muteSvg.classList.toggle('unmuteSvg');
})

