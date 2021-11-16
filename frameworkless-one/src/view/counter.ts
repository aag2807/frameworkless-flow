import { Todo } from "../models/todo";

const getTodoCount = (todos: Todo[]) => {
    const notCompleted = todos
        .filter(todo => !todo.completed)

    const { length } = notCompleted

    if (length == 1) {
        return '1 item left';
    }
    return `${length} Items left`
}

export default (targetElement:any, {todos}:any) => {
    const newCounter = targetElement.cloneNode(true);
    newCounter.textContent = getTodoCount(todos);
    return newCounter;
}