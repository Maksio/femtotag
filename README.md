# FemtoTag
FemtoTag DOM library is a smalliest (femto, 1e-15) set of DOM manipulation's functions.

## Getting started
First of all initialize `CLASS_HIDDEN` constant with your own classname which will hide elements.

**List of functions**

* `$new(tagName)` Creates a new tag with name `tagName`.

* `$tag(id)` Return document element by `id`.

* `$text(id,val)` Get or set text value of tag by `id`.

* `$texts(array)` Set texts to array of elements. Array must contain pairs `[id, text]`.

* `$add(id, className)` Add `className` to tag with `id`.

* `$rem(id, className)` Remove `className` from tag with `id`.

* `$show(id)` Show tag with `id` (removes class defined in CLASS_HIDDEN).

* `$hide(id)` Hide tag with `id` (adds class defined in CLASS_HIDDEN).

* `$tbody(id)` Returns tbody element of table with `id`.
