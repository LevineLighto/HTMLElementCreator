import { CreateElementParams } from "./types";

export const createElement = <T = Element> ({
    tagname = 'div',
    classnames,
    content,
    attributes
} : CreateElementParams) : T => {
    const elem = document.createElement(tagname);

    if(classnames) {
        elem.className = classnames;
    }

    if(content) {
        elem.innerHTML = content;
    }

    if(
        attributes 
        &&
        typeof attributes == 'object'
        &&
        Object.keys(attributes).length
    ) {
        for (const name in attributes) {
            if (!Object.hasOwnProperty.call(attributes, name)) {
                continue;
            }

            elem.setAttribute(name, attributes[name]);
        }
    }

    return elem as T;
}