/*
* Control.Menubar
*/

/* global $ _ map title vex */
L.Control.Menubar = L.Control.extend({
	options: {
		text:  [
			{name: _('File'), type: 'menu', menu: [{name: _('Save'), type: 'unocommand', uno: '.uno:Save'},
												{name: _('Print'), id: 'print', type: 'action'},
												{name: _('Download as'), type: 'menu', menu: [{name: _('PDF Document (.pdf)'), id: 'downloadas-pdf', type: 'action'},
																						   {name: _('ODF text document (.odt)'), id: 'downloadas-odt', type: 'action'},
																						   {name: _('Microsoft Word 2003 (.doc)'), id: 'downloadas-doc', type: 'action'},
																						   {name: _('Microsoft Word (.docx)'), id: 'downloadas-docx', type: 'action'}]}]
			},
			{name: _('Edit'), type: 'menu', menu: [{name: _('Undo'), type: 'unocommand', uno: '.uno:Undo'},
												{name: _('Redo'), type: 'unocommand', uno: '.uno:Redo'},
												{type: 'separator'},
												{name: _('Cut'), type: 'unocommand', uno: '.uno:Cut'},
												{name: _('Copy'), type: 'unocommand', uno: '.uno:Copy'},
												{name: _('Paste'), type: 'unocommand', uno: '.uno:Paste'},
												{type: 'separator'},
												{name: _('Select all'), type: 'unocommand', uno: '.uno:SelectAll'}]
			},
			{name: _('Insert'), type: 'menu', menu: [{name: _('Image'), id: 'insertgraphic', type: 'action'},
												  {name: _('Comment'), type: 'unocommand', uno: '.uno:InsertAnnotation'}]
			},
			{name: _('View'), type: 'menu', menu: [{name: _('Full screen'), id: 'fullscreen', type: 'action'},
												{type: 'separator'},
												{name: _('Zoom in'), id: 'zoomin', type: 'action'},
												{name: _('Zoom out'), id: 'zoomout', type: 'action'},
												{name: _('Reset zoom'), id: 'zoomreset', type: 'action'}]
			},
			{name: _('Tables'), type: 'menu', menu: [{name: _('Insert'), type: 'menu', menu: [{name: _('Rows before'), type: 'unocommand', uno: '.uno:InsertRowsBefore'},
																						{name: _('Rows after'), type: 'unocommand', uno: '.uno:InsertRowsAfter'},
																						{type: 'separator'},
																						{name: _('Columns left'), type: 'unocommand', uno: '.uno:InsertColumnsBefore'},
																						{name: _('Columns right'), type: 'unocommand', uno: '.uno:InsertColumnsAfter'}]},
												  {name: _('Delete'), type: 'menu', menu: [{name: _('Rows'), type: 'unocommand', uno: '.uno:DeleteRows'},
																						{name: _('Columns'), type: 'unocommand', uno: '.uno:DeleteColumns'},
																						{name: _('Table'), type: 'unocommand', uno: '.uno:DeleteTable'}]},
												  {name: _('Select'), type: 'menu', menu: [{name: _('Table'), type: 'unocommand', uno: '.uno:SelectTable'},
																						{name: _('Row'), type: 'unocommand', uno: '.uno:EntireRow'},
																						{name: _('Column'), type: 'unocommand', uno: '.uno:EntireColumn'},
																						{name: _('Cell'), type: 'unocommand', uno: '.uno:EntireCell'}]},
												  {name: _('Merge cells'), type: 'unocommand', uno: '.uno:MergeCells'}]
			}
		],

		presentation: [
			{name: _('File'), type: 'menu', menu: [{name: _('Save'), type: 'unocommand', uno: '.uno:Save'},
												{name: _('Print'), id: 'print', type: 'action'},
												{name: _('Download as'), type: 'menu', menu:  [{name: _('PDF Document (.pdf)'), id: 'downloadas-pdf', type: 'action'},
																							{name: _('ODF presentation (.odp)'), id: 'downloadas-odp', type: 'action'},
																							{name: _('Microsoft Powerpoint 2003 (.ppt)'), id: 'downloadas-ppt', type: 'action'},
																							{name: _('Microsoft Powerpoint (.pptx)'), id: 'downloadas-pptx', type: 'action'}]}]
			},
			{name: _('Edit'), type: 'menu', menu: [{name: _('Undo'), type: 'unocommand', uno: '.uno:Undo'},
												{name: _('Redo'), type: 'unocommand', uno: '.uno:Redo'},
												{type: 'separator'},
												{name: _('Cut'), type: 'unocommand', uno: '.uno:Cut'},
												{name: _('Copy'), type: 'unocommand', uno: '.uno:Copy'},
												{name: _('Paste'), type: 'unocommand', uno: '.uno:Paste'},
												{type: 'separator'},
												{name: _('Select all'), type: 'unocommand', uno: '.uno:SelectAll'}]
			},
			{name: _('Insert'), type: 'menu', menu: [{name: _('Image'), id: 'insertgraphic', type: 'action'}]
			},
			{name: _('View'), type: 'menu', menu: [{name: _('Full screen'), id: 'fullscreen', type: 'action'},
												{type: 'separator'},
												{name: _('Zoom in'), id: 'zoomin', type: 'action'},
												{name: _('Zoom out'), id: 'zoomout', type: 'action'},
												{name: _('Reset zoom'), id: 'zoomreset', type: 'action'}]
			},
			{name: _('Tables'), type: 'menu', menu: [{name: _('Insert'), type: 'menu', menu: [{name: _('Rows before'), type: 'unocommand', uno: '.uno:InsertRowsBefore'},
																						{name: _('Rows after'), type: 'unocommand', uno: '.uno:InsertRowsAfter'},
																						{type: 'separator'},
																						{name: _('Columns left'), type: 'unocommand', uno: '.uno:InsertColumnsBefore'},
																						{name: _('Columns right'), type: 'unocommand', uno: '.uno:InsertColumnsAfter'}]},
												  {name: _('Delete'), type: 'menu', menu: [{name: _('Rows'), type: 'unocommand', uno: '.uno:DeleteRows'},
																						{name: _('Columns'), type: 'unocommand', uno: '.uno:DeleteColumns'},
																						{name: _('Table'), type: 'unocommand', uno: '.uno:DeleteTable'}]},
												  {name: _('Merge cells'), type: 'unocommand', uno: '.uno:MergeCells'}]
			},
			{name: _('Slide'), type: 'menu', menu: [{name: _('New slide'), id: 'insertpage', type: 'action'},
												 {name: _('Duplicate slide'), id: 'duplicatepage', type: 'action'},
												 {name: _('Delete slide'), id: 'deletepage', type: 'action'},
												 {type: 'separator'},
												 {name: _('Fullscreen presentation'), id: 'fullscreen-presentation', type: 'action'}]
			}
		],

		spreadsheet: [
			{name: _('File'), type: 'menu', menu: [{name: _('Save'), type: 'unocommand', uno: '.uno:Save'},
												{name: _('Print'), id: 'print', type: 'action'},
												{name: _('Download as'), type: 'menu', menu: [{name: _('PDF Document (.pdf)'), id: 'downloadas-pdf', type: 'action'},
																						   {name: _('ODF spreadsheet (.ods)'), id: 'downloadas-ods', type: 'action'},
																						   {name: _('Microsoft Excel 2003 (.xls)'), id: 'downloadas-xls', type: 'action'},
																						   {name: _('Microsoft Excel (.xlsx)'), id: 'downloadas-xlsx', type: 'action'}]}]
			},
			{name: _('Edit'), type: 'menu', menu: [{name: _('Undo'), type: 'unocommand', uno: '.uno:Undo'},
												{name: _('Redo'), type: 'unocommand', uno: '.uno:Redo'},
												{type: 'separator'},
												{name: _('Cut'), type: 'unocommand', uno: '.uno:Cut'},
												{name: _('Copy'), type: 'unocommand', uno: '.uno:Copy'},
												{name: _('Paste'), type: 'unocommand', uno: '.uno:Paste'},
												{type: 'separator'},
												{name: _('Select all'), type: 'unocommand', uno: '.uno:SelectAll'}]
			},
			{name: _('Insert'), type: 'menu', menu: [{name: _('Image'), id: 'insertgraphic', type: 'action'},
												  {type: 'separator'},
												  {name: _('Row'), type: 'unocommand', uno: '.uno:InsertRows'},
												  {name: _('Column'), type: 'unocommand', uno: '.uno:InsertColumns'}]
			},
			{name: _('View'), type: 'menu', menu: [{name: _('Full screen'), id: 'fullscreen', type: 'action'},
												{type: 'separator'},
												{name: _('Zoom in'), id: 'zoomin', type: 'action'},
												{name: _('Zoom out'), id: 'zoomout', type: 'action'},
												{name: _('Reset zoom'), id: 'zoomreset', type: 'action'}]
			},
			{name: _('Cells'), type: 'menu', menu: [{name: _('Insert row'), type: 'unocommand', uno: '.uno:InsertRows'},
												 {name: _('Insert column'), type: 'unocommand', uno: '.uno:InsertColumns'},
												 {type: 'separator'},
												 {name: _('Delete row'), type: 'unocommand', uno: '.uno:DeleteRows'},
												 {name: _('Delete column'), type: 'unocommand', uno: '.uno:DeleteColumns'}]
			}
		],

		commandStates: {},

		allowedViewModeActions: ['downloadas-pdf', 'downloadas-odt', 'downloadas-doc', 'downloadas-docx',
								 'downloadas-odp', 'downloadas-ppt', 'downloadas-pptx',
								 'downloadas-ods', 'downloadas-xls', 'downloadas-xlsx',
								 'fullscreen', 'zoomin', 'zoomout', 'zoomreset']
	},

	onAdd: function (map) {
		this._initialized = false;
		var docContainer = map.options.documentContainer;
		this._menubarCont = L.DomUtil.create('ul', 'sm sm-simple', docContainer.parentElement);
		this._menubarCont.id = 'main-menu';

		map.on('updatepermission', this._onUpdatePermission, this);
		map.on('commandstatechanged', this._onCommandStateChanged, this);
	},

	_onCommandStateChanged: function(e) {
		// Store information about enabled/disabled commands
		// Used later just before showing menu to enable/disable menu items
		if (e.state === 'enabled' || e.state === 'disabled') {
			this.options.commandStates[e.commandName] = e.state;
		}
	},

	_onUpdatePermission: function() {
		if (this._initialized || !this._menubarCont) {
			return;
		}

		// Add document specific menu
		var docType = this._map.getDocType();
		if (docType === 'text') {
			this._initializeMenu(this.options.text);
		} else if (docType === 'spreadsheet') {
			this._initializeMenu(this.options.spreadsheet);
		} else if (docType === 'presentation' || docType === 'drawing') {
			this._initializeMenu(this.options.presentation);
		}

		// initialize menubar plugin
		$('#main-menu').smartmenus({
			hideOnClick: true,
			showOnClick: true,
			hideTimeout: 0,
			hideDuration: 0,
			showDuration: 0,
			showTimeout: 0,
			collapsibleHideDuration: 0,
			subIndicatorsPos: 'append',
			subIndicatorsText: '&#8250;'
		});
		this._initialized = true;

		$('#main-menu').bind('select.smapi', {self: this}, this._onItemSelected);
		$('#main-menu').bind('beforeshow.smapi', {self: this}, this._beforeShow);
	},

	_beforeShow: function(e, menu) {
		var self = e.data.self;
		var items = $(menu).children().children('a').not('.has-submenu');
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf('MSIE '); // IE 10 or older
		var trident = ua.indexOf('Trident/'); // IE 11
		$(items).each(function() {
			var aItem = this;
			var type = $(aItem).data('type');
			var id = $(aItem).data('id');
			if (id === 'fullscreen' && (msie > 0 || trident > 0)) { // Full screen works weirdly on IE 11
				$(aItem).addClass('disabled');
				var index = self.options.allowedViewModeActions.indexOf('fullscreen');
				if(index > 0) {
					self.options.allowedViewModeActions.splice(index, 1);
				}
			}
			if (!map._editlock) {
				var found = false;
				for (var i in self.options.allowedViewModeActions) {
					if (self.options.allowedViewModeActions[i] === id) {
						found = true;
						break;
					}
				}
				if (!found) {
					$(aItem).addClass('disabled');
				} else {
					$(aItem).removeClass('disabled');
				}

				return;
			}

			if (type === 'unocommand') {
				var unoCommand = $(aItem).data('uno');
				if (self.options.commandStates[unoCommand] === 'disabled') {
					$(aItem).addClass('disabled');
				} else if (self.options.commandStates[unoCommand] === 'enabled') {
					$(aItem).removeClass('disabled');
				}
			}
		});
	},

	_executeAction: function(id) {
		if (id === 'print') {
			map.print();
		} else if (id.startsWith('downloadas-')) {
			var format = id.substring('downloadas-'.length);
			// remove the extension if any
			var fileName = title.substr(0, title.lastIndexOf('.')) || title;
			// check if it is empty
			fileName = fileName === '' ? 'document' : fileName;
			map.downloadAs(fileName + '.' + format, format);
		} else if (id === 'insertgraphic') {
			L.DomUtil.get('insertgraphic').click();
		} else if (id === 'zoomin' && map.getZoom() < map.getMaxZoom()) {
			map.zoomIn(1);
		} else if (id === 'zoomout' && map.getZoom() > map.getMinZoom()) {
			map.zoomOut(1);
		} else if (id === 'zoomreset') {
			map.setZoom(map.options.zoom);
		} else if (id === 'fullscreen') {
			if (!document.fullscreenElement &&
				!document.mozFullscreenElement &&
				!document.msFullscreenElement &&
				!document.webkitFullscreenElement) {
				if (document.documentElement.requestFullscreen) {
					document.documentElement.requestFullscreen();
				} else if (document.documentElement.msRequestFullscreen) {
					document.documentElement.msRequestFullscreen();
				} else if (document.documentElement.mozRequestFullScreen) {
					document.documentElement.mozRequestFullScreen();
				} else if (document.documentElement.webkitRequestFullscreen) {
					document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
				}
			} else if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			}
		} else if (id === 'fullscreen-presentation' && map.getDocType() === 'presentation') {
			map.fire('fullscreen');
		} else if (id === 'insertpage') {
			map.insertPage();
		} else if (id === 'duplicatepage') {
			map.duplicatePage();
		} else if (id === 'deletepage') {
			vex.dialog.confirm({
				message: _('Are you sure you want to delete this slide?'),
				callback: this._onDeleteSlide
			}, this);
		}
	},

	_onDeleteSlide: function(e) {
		if (e) {
			map.deletePage();
		}
	},

	_onItemSelected: function(e, item) {
		var self = e.data.self;
		var type = $(item).data('type');
		if (type === 'unocommand') {
			var unoCommand = $(item).data('uno');
			map.sendUnoCommand(unoCommand);
		} else if (type === 'action') {
			var id = $(item).data('id');
			self._executeAction(id);
		}
		map.focus();
	},

	_createMenu: function(menu) {
		var itemList = [];
		for (var i in menu) {
			var liItem = L.DomUtil.create('li', '');
			var aItem = L.DomUtil.create('a', '', liItem);
			aItem.innerHTML = menu[i].name;

			if (menu[i].type === 'menu') {
				var ulItem = L.DomUtil.create('ul', '', liItem);
				var subitemList = this._createMenu(menu[i].menu);
				for (var j in subitemList) {
					ulItem.appendChild(subitemList[j]);
				}
			} else if (menu[i].type === 'unocommand') {
				$(aItem).data('type', 'unocommand');
				$(aItem).data('uno', menu[i].uno);
			} else if (menu[i].type === 'separator') {
				$(aItem).addClass('separator');
			} else if (menu[i].type === 'action') {
				$(aItem).data('type', 'action');
				$(aItem).data('id', menu[i].id);
			}

			itemList.push(liItem);
		}

		return itemList;
	},

	_initializeMenu: function(menu) {
		var menuHtml = this._createMenu(menu);
		for (var i in menuHtml) {
			this._menubarCont.appendChild(menuHtml[i]);
		}
	}
});

L.control.menubar = function (options) {
	return new L.Control.Menubar(options);
};
