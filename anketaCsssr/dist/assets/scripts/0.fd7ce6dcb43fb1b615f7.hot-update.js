webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function (document) {
		(0, _svg4everybody2.default)();
	
		(0, _jquery2.default)('input:checkbox').styler();
	
		var txt = (0, _jquery2.default)('.about-text'),
		    hiddenDiv = (0, _jquery2.default)(document.createElement('div')),
		    content = null;
	
		txt.addClass('noscroll');
		hiddenDiv.addClass('hiddendiv');
	
		(0, _jquery2.default)('body').append(hiddenDiv);
	
		txt.bind('keyup', function () {
			content = txt.val();
			content = content.replace(/\n/g, '<br>');
			hiddenDiv.html(content);
			txt.css('height', hiddenDiv.height());
		});
	});

/***/ }
])
//# sourceMappingURL=0.fd7ce6dcb43fb1b615f7.hot-update.js.map