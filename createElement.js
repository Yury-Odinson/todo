function createElement(type, children=[], options = {}) {
    const cssClass = options.cssClass || [];
    const attrs = options.attrs || {};
    const events = options.events || [];
    const element = document.createElement(type);
    
    element.classList.add(...cssClass);
    Object.keys(attrs).forEach(key => {
        element.setAttribute(key, attrs[key])
    });

    Object.keys(events).forEach(eventName => {
        element.addEventListener(eventName, events[eventName])
    })

    element.append(...children);
    return element
}
