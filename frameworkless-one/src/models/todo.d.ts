export interface Todo {
    text: string;
    completed: boolean;
}

export interface State {
    currentFilter: any;
    todos: Todo[];
}