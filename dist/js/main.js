'use strict';

window.onload = function () {
	var preload = setTimeout(function () {
		var preloader = document.getElementById('preloader');
		if (!preloader.classList.contains('preloader__ready')) {
			preloader.classList.add('preloader__ready');
		}
	}, 1000);

	var items = document.querySelectorAll('.item');
	var fourRandomItems = Array.from(items).sort(function () {
		return Math.random() > 0.5 ? -1 : 1;
	}).slice(0, 4);
	var panel = document.getElementById('panel');
	var itemList = document.getElementById('item-list');

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = fourRandomItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var i = _step.value;

			var span = document.createElement('span');
			span.innerHTML = i.dataset.name;
			panel.append(span);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var panelList = Array.from(panel.querySelectorAll('span'));
	var panelNamelist = panelList.map(function (i) {
		return i.innerHTML;
	});

	var illumination = setTimeout(illuminateFirst, 5000);

	itemList.addEventListener('click', function (event) {
		var targ = event.target;
		var targName = targ.dataset.name;
		if (targ.tagName != 'LI') return;

		var position = fourRandomItems.indexOf(targ);
		if (position === -1) return;
		targ.classList.add('dissapear');
		setTimeout(function () {
			return targ.remove();
		}, 990);
		fourRandomItems.splice(position, 1);

		panelList[panelNamelist.indexOf(targName)].classList.add('crossed-out');
		clearTimeout(illumination);
		illumination = setTimeout(illuminateFirst, 5000);

		var end = document.getElementById('end');
		if (fourRandomItems.length === 0) {
			setTimeout(function () {
				return end.classList.add('end__showed');
			}, 1000);
		};
	});

	function illuminateFirst() {
		if (fourRandomItems.length > 0) {
			fourRandomItems[0].classList.add('illumination');
		}
	}
};