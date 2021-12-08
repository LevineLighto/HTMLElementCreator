const createElement = ({tagname, classnames, content}) => {
    let elem;

    if(tagname)
        elem = document.createElement(tagname);
    else 
        elem = document.createElement('div');

    if(classnames)
        elem.className = classnames;
    if(content)
        elem.innerHTML = content;

    return elem;
}

export {createElement};