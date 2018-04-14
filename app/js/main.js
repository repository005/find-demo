window.onload = function() {
	const items = document.querySelectorAll('.item');
	const fourRandomItems = Array.from(items).sort(() => Math.random() > 0.5 ?  -1 : 1).slice(0,4);
	const panel = document.getElementById('panel');
	const itemList = document.getElementById('item-list');

	for (let i of fourRandomItems) {
		let span = document.createElement('span');
		span.innerHTML = i.dataset.name;
		panel.append(span);
	}

	itemList.addEventListener('click', (event) => {
		let targ = event.target
		let targName = targ.dataset.name;
		if (targ.tagName != 'LI') return;
		
		let position = fourRandomItems.indexOf(targ);
		if (position === -1) return;
		targ.remove();
		fourRandomItems.splice(position, 1);

		let panelList = Array.from(panel.querySelectorAll('span'));
		let panelNamelist = panelList.map((i) => i.innerHTML);
		panelList[panelNamelist.indexOf(targName)].style.textDecoration = 'line-through';

		if (fourRandomItems.length === 0) {
			setTimeout(() => alert('end of the game'), 1000);
		};
	});

}

// Основа:
// Будем брать массив со всеми итемами
// Рандомно выбираем 4 штуки и помещаем их в новый массив
// Выводим надписи этих массивов в панель
// Начинаем щелкать по предметам и если предмет есть в списке четырех, он зачеркивается или пропадает
// После каждого щелчка проверяем пуст ли массив, если пуст то игра закончена

// Далее добавляем анимации, подсветку, задержка перед появлением окончания игры, меняем бэкграунд на блур1