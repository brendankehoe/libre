/*
 * L.Handler.Scroll is used by L.Map to enable mouse scroll wheel zoom on the map.
 */

L.Map.mergeOptions({
	scrollHandler: true,
	wheelDebounceTime: 40
});

L.Map.Scroll = L.Handler.extend({
	addHooks: function () {
		L.DomEvent.on(this._map._container, {
			mousewheel: this._onWheelScroll,
			MozMousePixelScroll: L.DomEvent.preventDefault
		}, this);

		this._delta = 0;
	},

	removeHooks: function () {
		L.DomEvent.off(this._map._container, {
			mousewheel: this._onWheelScroll,
			MozMousePixelScroll: L.DomEvent.preventDefault
		}, this);
	},

	_onWheelScroll: function (e) {
		var delta = L.DomEvent.getWheelDelta(e);
		var debounce = this._map.options.wheelDebounceTime;

		this._delta += delta;
		this._lastMousePos = this._map.mouseEventToContainerPoint(e);

		if (!this._startTime) {
			this._startTime = +new Date();
		}

		var left = Math.max(debounce - (+new Date() - this._startTime), 0);

		clearTimeout(this._timer);
		this._timer = setTimeout(L.bind(this._performScroll, this), left);

		L.DomEvent.stop(e);
	},

	_performScroll: function () {
		var map = this._map,
		    delta = -this._delta,
		    scrollAmount = Math.round(map.getSize().y / 4);

		this._delta = 0;
		this._startTime = null;

		if (!delta) { return; }
		map.fire('scrollby', {x: 0, y: delta * scrollAmount});
	}
});

L.Map.addInitHook('addHandler', 'scrollHandler', L.Map.Scroll);
