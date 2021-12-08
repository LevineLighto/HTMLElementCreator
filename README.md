# HTML Element Creator
A simple javascript function to create a new HTML element

## Usage

#### First Example
```javascript
CreateElement({tagname: 'a', classnames: 'display-1 fw-light', content: 'I am a link'});
```
#### Output
```html
<a class="display-1 fw-light">I am a link</a>

```

#### Second Example
```javascript
CreateElement({classnames: 'display-1', content: 'I am a display'});
```
#### Output
```html
<div class="display-1">I am a display</div>

```
