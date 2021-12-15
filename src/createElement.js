const createElement = ({tagname, classnames, content, attributes}) => {
    let elem;

    if(tagname)
        elem = document.createElement(tagname);
    else 
        elem = document.createElement('div');

    if(classnames)
        elem.className = classnames;
    if(content)
        elem.innerHTML = content;

    if(attributes && Object.keys(attributes).length !== 0 && Object.getPrototypeOf(attributes) === Object.prototype){
        for (const name in attributes) {
            if (Object.hasOwnProperty.call(attributes, name)) {
                const value = attributes[name];
                elem.setAttribute(name, value);
            }
        }
    }

    return elem;
}

export {createElement};