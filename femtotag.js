/**
 * For grateful descendants
 * https://github.com/Maksio/femtotag.git
 */
const CLASS_HIDDEN = 'hidden';

const $new = (tag) => document.createElement(tag);
const $tag = (id) => document.getElementById(id);
const $text = (id, val) => document.getElementById(id).textContent = val;
const $texts = (arr) => arr.forEach(el => $text(el[0], el[1]));
const $css = (id) => $tag(id).style;
const $add = (id, className) => $tag(id).classList.add(className);
const $rem = (id, className) => $tag(id).classList.remove(className);
const $hide = (...ids) => ids.forEach(id => $add(id, CLASS_HIDDEN));
const $show = (...ids) => ids.forEach(id => $rem(id, CLASS_HIDDEN));
const $display = (...ids) => ids.forEach(id => $css(id).display = 'block');
const $disapear = (...ids) => ids.forEach(id => $css(id).display = 'none');
const $tbody = (id) => $tag(id).getElementsByTagName('tbody')[0];
