(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _dom = require('../../utils/dom.js');

var name = 'yellowBlueColorBlindness';
var url = chrome.extension.getURL('/simulations/' + name + '/img/filters.svg');

var css = null;

function start() {

  var cssUrl = chrome.extension.getURL('/simulations/' + name + '/css/main.css');

  css = (0, _dom.addCss)(cssUrl);

  if (document.getElementById('wds-colorBlindnessFilter') == null) {
    fetch(url).then(function (response) {
      return response.text();
    }).then(function (text) {
      (0, _dom.appendHTML)(document.body, text);
    });
  }
}

function stop() {
  var filter = document.getElementById('wds-colorBlindnessFilter');
  if (filter) {
    (0, _dom.removeElement)(filter);
  }

  if (css) {
    (0, _dom.removeElement)(css);
  }
}

chrome.runtime.onMessage.addListener(function (request) {
  if (request.action === 'startSimulation' && request.simulation === name) {
    start(request.simulation);
  } else if (request.action === 'stopSimulation' && request.simulation === name) {
    stop();
  }
});


},{"../../utils/dom.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCss = addCss;
exports.addScript = addScript;
exports.addStyle = addStyle;
exports.appendHTML = appendHTML;
exports.getTextNodes = getTextNodes;
exports.removeElement = removeElement;
exports.setStyle = setStyle;
function addCss(href, callback) {
  var l = document.createElement('link');
  l.setAttribute('href', href);
  l.setAttribute('rel', 'stylesheet');
  l.onload = callback;
  document.getElementsByTagName('head')[0].appendChild(l);
  return l;
}

function addScript(src, callback) {
  var s = document.createElement('script');
  s.setAttribute('src', src);
  s.onload = callback;
  document.getElementsByTagName('head')[0].appendChild(s);
  return s;
}

function addStyle(str) {
  var s = document.createElement('style');
  s.innerText = str;
  document.getElementsByTagName('head')[0].appendChild(s);
  return s;
}

function appendHTML(el, html) {
  var tmpEl = document.createElement('div');
  tmpEl.innerHTML = html;

  while (tmpEl.firstChild) {
    el.appendChild(tmpEl.firstChild);
  }
}

function getTextNodes(node) {
  var all = [];
  for (node = node.firstChild; node; node = node.nextSibling) {
    if (node.nodeType == 3) all.push(node);else all = all.concat(getTextNodes(node));
  }
  return all;
}

function removeElement(el) {
  el.parentNode.removeChild(el);
}

function setStyle(element, style) {
  for (var s in style) {
    element.style[s] = style[s];
  }
}


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJidWlsZFxcanNcXGJhYmVsXFxzaW11bGF0aW9uc1xceWVsbG93Qmx1ZUNvbG9yQmxpbmRuZXNzXFxjb250ZW50LmpzIiwiYnVpbGRcXGpzXFxiYWJlbFxcdXRpbHNcXGRvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOztBQUVBLElBQUksT0FBTyxRQUFRLG9CQUFSLENBQVg7O0FBRUEsSUFBSSxPQUFPLDBCQUFYO0FBQ0EsSUFBSSxNQUFNLE9BQU8sU0FBUCxDQUFpQixNQUFqQixDQUF3QixrQkFBa0IsSUFBbEIsR0FBeUIsa0JBQWpELENBQVY7O0FBRUEsSUFBSSxNQUFNLElBQVY7O0FBRUEsU0FBUyxLQUFULEdBQWlCOztBQUVmLE1BQUksU0FBUyxPQUFPLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0Isa0JBQWtCLElBQWxCLEdBQXlCLGVBQWpELENBQWI7O0FBRUEsUUFBTSxDQUFDLEdBQUcsS0FBSyxNQUFULEVBQWlCLE1BQWpCLENBQU47O0FBRUEsTUFBSSxTQUFTLGNBQVQsQ0FBd0IsMEJBQXhCLEtBQXVELElBQTNELEVBQWlFO0FBQy9ELFVBQU0sR0FBTixFQUFXLElBQVgsQ0FBZ0IsVUFBVSxRQUFWLEVBQW9CO0FBQ2xDLGFBQU8sU0FBUyxJQUFULEVBQVA7QUFDRCxLQUZELEVBRUcsSUFGSCxDQUVRLFVBQVUsSUFBVixFQUFnQjtBQUN0QixPQUFDLEdBQUcsS0FBSyxVQUFULEVBQXFCLFNBQVMsSUFBOUIsRUFBb0MsSUFBcEM7QUFDRCxLQUpEO0FBS0Q7QUFDRjs7QUFFRCxTQUFTLElBQVQsR0FBZ0I7QUFDZCxNQUFJLFNBQVMsU0FBUyxjQUFULENBQXdCLDBCQUF4QixDQUFiO0FBQ0EsTUFBSSxNQUFKLEVBQVk7QUFDVixLQUFDLEdBQUcsS0FBSyxhQUFULEVBQXdCLE1BQXhCO0FBQ0Q7O0FBRUQsTUFBSSxHQUFKLEVBQVM7QUFDUCxLQUFDLEdBQUcs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QixFQUFrQztBQUNoQyxPQUFLLElBQUksQ0FBVCxJQUFjLEtBQWQsRUFBcUI7QUFDbkIsWUFBUSxLQUFSLENBQWMsQ0FBZCxJQUFtQixNQUFNLENBQU4sQ0FBbkI7QUFDRDtBQUNGO0FBQ0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2RvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbS5qcycpO1xuXG52YXIgbmFtZSA9ICd5ZWxsb3dCbHVlQ29sb3JCbGluZG5lc3MnO1xudmFyIHVybCA9IGNocm9tZS5leHRlbnNpb24uZ2V0VVJMKCcvc2ltdWxhdGlvbnMvJyArIG5hbWUgKyAnL2ltZy9maWx0ZXJzLnN2ZycpO1xuXG52YXIgY3NzID0gbnVsbDtcblxuZnVuY3Rpb24gc3RhcnQoKSB7XG5cbiAgdmFyIGNzc1VybCA9IGNocm9tZS5leHRlbnNpb24uZ2V0VVJMKCcvc2ltdWxhdGlvbnMvJyArIG5hbWUgKyAnL2Nzcy9tYWluLmNzcycpO1xuXG4gIGNzcyA9ICgwLCBfZG9tLmFkZENzcykoY3NzVXJsKTtcblxuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dkcy1jb2xvckJsaW5kbmVzc0ZpbHRlcicpID09IG51bGwpIHtcbiAgICBmZXRjaCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICgwLCBfZG9tLmFwcGVuZEhUTUwpKGRvY3VtZW50LmJvZHksIHRleHQpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0b3AoKSB7XG4gIHZhciBmaWx0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2RzLWNvbG9yQmxpbmRuZXNzRmlsdGVyJyk7XG4gIGlmIChmaWx0ZXIpIHtcbiAgICAoMCwgX2RvbS5yZW1vdmVFbGVtZW50KShmaWx0ZXIpO1xuICB9XG5cbiAgaWYgKGNzcykge1xuICAgICgwLCBfZG9tLnJlbW92ZUVsZW1lbnQpKGNzcyk7XG4gIH1cbn1cblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gJ3N0YXJ0U2ltdWxhdGlvbicgJiYgcmVxdWVzdC5zaW11bGF0aW9uID09PSBuYW1lKSB7XG4gICAgc3RhcnQocmVxdWVzdC5zaW11bGF0aW9uKTtcbiAgfSBlbHNlIGlmIChyZXF1ZXN0LmFjdGlvbiA9PT0gJ3N0b3BTaW11bGF0aW9uJyAmJiByZXF1ZXN0LnNpbXVsYXRpb24gPT09IG5hbWUpIHtcbiAgICBzdG9wKCk7XG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29udGVudC5qcy5tYXBcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYWRkQ3NzID0gYWRkQ3NzO1xuZXhwb3J0cy5hZGRTY3JpcHQgPSBhZGRTY3JpcHQ7XG5leHBvcnRzLmFkZFN0eWxlID0gYWRkU3R5bGU7XG5leHBvcnRzLmFwcGVuZEhUTUwgPSBhcHBlbmRIVE1MO1xuZXhwb3J0cy5nZXRUZXh0Tm9kZXMgPSBnZXRUZXh0Tm9kZXM7XG5leHBvcnRzLnJlbW92ZUVsZW1lbnQgPSByZW1vdmVFbGVtZW50O1xuZXhwb3J0cy5zZXRTdHlsZSA9IHNldFN0eWxlO1xuZnVuY3Rpb24gYWRkQ3NzKGhyZWYsIGNhbGxiYWNrKSB7XG4gIHZhciBsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICBsLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICBsLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgbC5vbmxvYWQgPSBjYWxsYmFjaztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChsKTtcbiAgcmV0dXJuIGw7XG59XG5cbmZ1bmN0aW9uIGFkZFNjcmlwdChzcmMsIGNhbGxiYWNrKSB7XG4gIHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHMuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpO1xuICBzLm9ubG9hZCA9IGNhbGxiYWNrO1xuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHMpO1xuICByZXR1cm4gcztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUoc3RyKSB7XG4gIHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgcy5pbm5lclRleHQgPSBzdHI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQocyk7XG4gIHJldHVybiBzO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRIVE1MKGVsLCBodG1sKSB7XG4gIHZhciB0bXBFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0bXBFbC5pbm5lckhUTUwgPSBodG1sO1xuXG4gIHdoaWxlICh0bXBFbC5maXJzdENoaWxkKSB7XG4gICAgZWwuYXBwZW5kQ2hpbGQodG1wRWwuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VGV4dE5vZGVzKG5vZGUpIHtcbiAgdmFyIGFsbCA9IFtdO1xuICBmb3IgKG5vZGUgPSBub2RlLmZpcnN0Q2hpbGQ7IG5vZGU7IG5vZGUgPSBub2RlLm5leHRTaWJsaW5nKSB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT0gMykgYWxsLnB1c2gobm9kZSk7ZWxzZSBhbGwgPSBhbGwuY29uY2F0KGdldFRleHROb2Rlcyhub2RlKSk7XG4gIH1cbiAgcmV0dXJuIGFsbDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbCkge1xuICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbn1cblxuZnVuY3Rpb24gc2V0U3R5bGUoZWxlbWVudCwgc3R5bGUpIHtcbiAgZm9yICh2YXIgcyBpbiBzdHlsZSkge1xuICAgIGVsZW1lbnQuc3R5bGVbc10gPSBzdHlsZVtzXTtcbiAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZG9tLmpzLm1hcFxuIl19
