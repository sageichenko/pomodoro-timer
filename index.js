const notifier = require('node-notifier');
const pluralize = require('./pluralize.js');

const interval = 25;
const ends = ['минута', 'минуты', 'минут'];
const minute = 60000;
let counter = 0;

console.log(`Работа началась в ${new Date().toLocaleTimeString()}`);

notifier.notify({
	title: 'Work',
	message: 'Its time to work',
	icon: 'icons/icon_work.png'
});

setTimeout(function timer() {
	counter++;

	console.log(`Прошло ${counter} ${pluralize(counter, ends)}.`);

	if (counter < interval) {
		setTimeout(timer, minute);
		return;
	}

	notifier.notify({
		title: 'Stop',
		message: 'Its time to relax',
		icon: 'icons/icon_rest.png'
	});
	console.log('Время работы закончилось.')
}, minute);
