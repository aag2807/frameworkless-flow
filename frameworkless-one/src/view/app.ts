import { State, Todo } from "../models/todo";

let template: any;

const allTodosCompleted = (todos: Todo[]) => {
	if (todos.length === 0) {
		return false
	}
	return !todos.find(t => !t.completed)
}

const noCompletedItemIsPresent = (todos: Todo[]) => !todos.find(t => t.completed)

const getTemplate = () => {
	if (!template) {
		template = document.getElementById('todo-app')
	}

	return template
		.content
		.firstElementChild
		.cloneNode(true)
}

const addEvents = (targetElement: any, events: any) => {
	const { clearCompleted, completeAll, addItem } = events

	targetElement
		.querySelector('.new-todo')
		.addEventListener('keypress', (e: KeyboardEvent | any) => {
			if (e.key === 'Enter') {
				addItem(e.target.value)
				e.target.value = ''
			}
		})

	targetElement
		.querySelector('input.toggle-all')
		.addEventListener('click', completeAll)

	targetElement
		.querySelector('.clear-completed')
		.addEventListener('click', clearCompleted)
}

export default (targetElement: HTMLElement | any, state: State, events: any) => {
	const newApp = targetElement.cloneNode(true)

	newApp.innerHTML = ''
	newApp.appendChild(getTemplate())

	if (noCompletedItemIsPresent(state.todos)) {
		newApp
			.querySelector('.clear-completed')
			.classList
			.add('hidden')
	} else {
		newApp
			.querySelector('.clear-completed')
			.classList
			.remove('hidden')
	}

	newApp
		.querySelector('input.toggle-all')
		.checked = allTodosCompleted(state.todos)

	addEvents(newApp, events)

	return newApp
}

