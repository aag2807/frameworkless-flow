import { State, Todo } from "../models/todo"

let template:any

const createNewTodoNode = () => {
  if (!template) {
    template = document.getElementById('todo-item')
  }

  return template
    .content
    .firstElementChild
    .cloneNode(true)
}

const getTodoElement = (todo:Todo, index:number) => {
  const {
    text,
    completed
  } = todo

  const element = createNewTodoNode()

  element.querySelector('input.edit').value = text
  element.querySelector('label').textContent = text

  if (completed) {
    element.classList.add('completed')
    element
      .querySelector('input.toggle')
      .checked = true
  }

  element
    .querySelector('button.destroy')
    .dataset
    .index = index

  return element
}

export default (targetElement:any, state:State, events:any) => {
  const { todos } = state
  const { deleteItem } = events
  const newTodoList = targetElement.cloneNode(true)

  newTodoList.innerHTML = ''

  todos
    .map((todo, index) => getTodoElement(todo, index))
    .forEach(element => {
      newTodoList.appendChild(element)
    })

  newTodoList.addEventListener('click', (e:any) => {
    if (e.target.matches('button.destroy')) {
      deleteItem(e.target.dataset.index)
    }
  })

  return newTodoList
}