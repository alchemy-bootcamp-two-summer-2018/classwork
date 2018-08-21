# Bootcamp I Project Review

Overall level of projects was outstanding. Most issues were level appropriate.

## Be Consistent

Indicate a lack of attention to detail in work product, not technical knowledge:

* css classes should be `kebob-cased`, for example "radio-label" not "radiolabel"
* JavaScript variables are **always** `camelCase`, not `camelcase`. Even classes are `TitleCase`, not `Titlecase`
* Component file names should match component name (except for casing)
* With event handlers. Don't use `onclick=""`, use `.addEventListener`

## Misc

* No `'use strict';` with es modules, already _always_ in strict mode!
* Hacking outside the component DOM tree is dangerous. 
* Any time doing repetitive `obj.prop.prop` use variables!

## Modularity and Organization

* In general, hard coding things (versus making them dynamic) makes for more code and work in the long run.
* Create child components to deal with complexity when parent has to do "too much"