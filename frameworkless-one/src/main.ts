document.addEventListener('DOMContentLoaded', () => {
  init()
})

import './style.css'

import appView from './view/app';
import todosView from './view/todos';
import counterView from './view/counter';
import filtersView from './view/filters';

import init from './fps';
import { State } from './models/todo';

import registry from './registry';
import applyDiff from './applyDiff';

registry.add('app', appView)
registry.add('todos', todosView)
registry.add('counter', counterView)
registry.add('filters', filtersView)

const state: State = {
  todos:[],
  currentFilter: 'All'
}
  const events = {
      deleteItem: (index: number) => {
        state.todos.splice(index, 1);
      },
      addItem: (text:string) => {
        state.todos.push({
          text,
          completed: false,
        })
        render();
      }
  }

const render = () => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector('#root')
    const newMain = registry.renderRoot(main, state, events)
    applyDiff(document.body, main, newMain)
  })
}
render()