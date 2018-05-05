window.onload = function() {
		const preloader = document.getElementById('preloader');
		if (!preloader.classList.contains('preloader__ready')) {
			preloader.classList.add('preloader__ready');
		}

	const items = document.querySelectorAll('.item');
	const fourRandomItems = Array.from(items).sort(() => Math.random() > 0.5 ?  -1 : 1).slice(0,4);
	const panel = document.getElementById('panel');
	const itemList = document.getElementById('item-list');

	for (let i of fourRandomItems) {
		let span = document.createElement('span');
		span.innerHTML = i.dataset.name;
		panel.append(span);
	}
	const panelList = Array.from(panel.querySelectorAll('span'));
	const panelNamelist = panelList.map((i) => i.innerHTML);

	let illumination = setTimeout(illuminateFirst, 30000);

	itemList.addEventListener('click', (e) => {
		const targ = event.target
		const targName = targ.dataset.name;
		if (targ.tagName != 'LI') return;
		
		const position = fourRandomItems.indexOf(targ);
		if (position === -1) return;
		targ.classList.add('dissapear');
		setTimeout(() => targ.remove(), 900);
		fourRandomItems.splice(position, 1);

		panelList[panelNamelist.indexOf(targName)].classList.add('crossed-out');
		clearTimeout(illumination);
		illumination = setTimeout(illuminateFirst, 30000);

		const end = document.getElementById('end');
		if (fourRandomItems.length === 0) {
			setTimeout(() => end.classList.add('end__showed'), 1000);
		};
	});

	function illuminateFirst() {
		if (fourRandomItems.length > 0) {
			fourRandomItems[0].classList.add('illumination');
		}
	}
}
