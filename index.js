function createDivChild(divClass, parentClass, listenerFunction) {
    if (typeof parentClass == String) {
        parent = document.querySelector(parentClass);
    }
    
    child = document.createElement('div');
    child.classList.add(divClass);

    if (listenerFunction) {
        child.addEventListener('click', listenerFunction);
    }

    parent.appendChild(child);

}