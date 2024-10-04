const input = document.getElementById('todo-input');
const button = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

const editTodo = (pElement, liElement) => {
    pElement.addEventListener('dblclick', () => {
        const inputItem = document.createElement('input');
        inputItem.type = 'text';
        inputItem.value = pElement.textContent
        liElement.replaceChild(inputItem, pElement);

        inputItem.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                if (!validateInput(inputItem.value)) return;
                pElement.textContent = inputItem.value;
                liElement.replaceChild(pElement, inputItem);
            }
        })
    })
}

const validateInput = (todoItem) => {
    if (todoItem.trim() === "") {
        alert("Debes escribir una tarea");
        return false;
    }
    return true
}

const appendElementoToTodoList = (todoItem) => {
    const element = document.createElement('li');
    const text = document.createElement('p');
    const deleteButton = document.createElement('button');
    const completedButton = document.createElement('button');

    deleteButton.textContent = "Eliminar"
    completedButton.textContent = "Completado"

    text.textContent = todoItem;
    element.appendChild(text);
    element.appendChild(completedButton);
    element.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        element.remove();
    })

    completedButton.addEventListener('click', () => {
        element.classList.toggle('completed');
        if(completedButton.textContent === "Completado"){
            completedButton.textContent = "Pendiente"
    }else{
        completedButton.textContent = "Completado"
    }
    })

    editTodo(text, element)

    todoList.appendChild(element);

}

const addTodo = () => {


    const todoItem = input.value

    if (!validateInput(todoItem)) return;

    appendElementoToTodoList(todoItem);

    input.value = "";
}

button.addEventListener('click', addTodo);