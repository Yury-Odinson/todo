function createToDoCheck() {
    return createElement('input', [], {
        cssClass: ['todo-elem__check'],
        attrs: {
            type: 'checkbox'
        }
    })
}

function createToDoText() {
    return createElement('textarea', [], {
        cssClass: ['todo-elem__text'],
        attrs: {
            readonly: '', // check this!!!!!!
            placeholder: 'Text Task'
        }
    })
}

function delTask() {
    // return todoElement.removeChilde(todoElement)
}

function createToDoElementMenu() {
    let todoDel = createElement('button', [
        document.createTextNode('X')
    ], {
        cssClass: ['button', 'button__delTask'],
        events: {
            click: () => {
                delTask()
            }
        }
    })
    let todoDate = createElement('input', [], {
        cssClass: ['date__todo'],
        attrs: {
            type: 'date'
        }
    })
    return createElement('div', [
        todoDel,
        todoDate
    ], {
        cssClass: ['todo-elem-menu']
    })
}

// function deleteAllToDo() {
//     return document.querySelectorAll('todo-elem').remove()
// }

const buttonDellAll = createElement('button', [
    document.createTextNode('Delete All')
], {
    cssClass: ['button', 'button__del'],
    events: {
        click: () => {
            // deleteAllToDo()
            // document.getElementsByClassName('todo-elem').remove()
        }
    }
});





const inputToDo = createElement('input', [], {
    cssClass: ['input__todo'],
    attrs: {
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
            todoElement.setAttribute('id', generateRandomId())
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

render(headerElement)
render(bodyElement)
