// checkbox
function createToDoCheck() {
    return createElement('input', [], {
        cssClass: ['todo-elem__check'],
        attrs: {
            type: 'checkbox'
        }
    })
}

// text area in todo element
function createToDoText() {
    return createElement('textarea', [
        document.createTextNode(inputToDo.value)
    ], {
        cssClass: ['todo-elem__text'],
        attrs: {
            id: createIdText(),
            readonly: '', // check this!!!!!!
            placeholder: 'Text Task'
        }
    })
}

// right menu in todo element
function createToDoElementMenu() {

    // find id todo
    function idToDo() {
        let thisTodo = todoDel.parentNode.parentNode.id;
        return thisTodo;
    }

    // delete todo dy id
    function delTask() {
        document.getElementById(idToDo()).remove();
    }

    // pass date in todo element
    let date = new Date()
    let thisDate = date.getFullYear() + '-' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) 
    + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()));
    // let thisDate2 = '2013-01-01' // year month day

    let todoDel = createElement('button', [
        document.createTextNode('X')
    ], {
        cssClass: ['button', 'button__delTask'],
        events: {
            click: () => {
                idToDo(),
                delTask()
            }
        }
    })

    let todoDate = createElement('input', [], {
        cssClass: ['date__todo'],
        attrs: {
            type: 'date',
            value: thisDate 
        }
    })
    
    return createElement('div', [
        todoDel,
        todoDate
    ], {
        cssClass: ['todo-elem-menu']
    })
}


// create id for elements todo and text todo
let idElem = 0
let idText = 0

function createIdElement() {
    idElem++;
    return `idToDoElement_${idElem}`
}

function createIdText() {
    idText++;
    return `idToDoText_${idText}`
}
// -------

function deleteAllToDo() {
    const allTodoElements = document.querySelectorAll('.todo-elem');
    allTodoElements.forEach((todoElement) => {
        todoElement.remove('todo-elem');
    });
}

const buttonDellAll = createElement('button', [
    document.createTextNode('Delete All')
], {
    cssClass: ['button', 'button__del'],
    events: {
        click: () => {
            deleteAllToDo()
        }
    }
});

const inputToDo = createElement('input', [], {
    cssClass: ['input__todo'],
    attrs: {
        id: 'input__todo',
        type: 'text',
        placeholder: 'Enter todo...'
    }
});

const buttonAdd = createElement('button', [
    document.createTextNode('Add')
], {
    cssClass: ['button', 'button__add'],
    events: {
        click: () => {
            bodyElement.append(                
                todoElement = createElement('div', [
                    createToDoCheck(),
                    createToDoText(),
                    createToDoElementMenu()
                ], {
                    cssClass: ['todo-elem']
                })
            ),
            todoElement.setAttribute('id', createIdElement());
        }
    }
});

const headerElement = createElement('div', [
    buttonDellAll,
    inputToDo,
    buttonAdd
], {
    cssClass: ['header']
});

let bodyElement = createElement('div', [], {
    cssClass: ['body']
});

const containerElement = createElement('div', [
], {
    cssClass: ['container']
});

// create all elements in window
const rootElement = document.getElementById('root');
rootElement.append(containerElement);

function render(element) {
    containerElement.append(element)
}
render(headerElement);
render(bodyElement);
