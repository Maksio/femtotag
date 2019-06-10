const CLASS_HIDDEN = 'hidden';

const $new = (tag) => document.createElement(tag);
const $tag = (id) => document.getElementById(id);
const $text = (id, val) => document.getElementById(id).textContent = val;
const $texts = (arr) => arr.forEach(el => $text(el[0], el[1]));
const $add = (id, className) => $tag(id).classList.add(className);
const $rem = (id, className) => $tag(id).classList.remove(className);
const $hide = (...ids) => ids.forEach(id => $add(id, CLASS_HIDDEN));
const $show = (...ids) => ids.forEach(id => $rem(id, CLASS_HIDDEN));
const $tbody = (id) => $tag(id).getElementsByTagName('tbody')[0];
