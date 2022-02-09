export interface Todo {
    id: string;
    todo: string;
    priority: string;
    date: string;
    assignTo: string;
    isDone: boolean;
}

export interface List {
    id: string;
    title: string;
    items : Todo[];
}