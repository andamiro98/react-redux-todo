const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";
const TOGGEL_STATUS = "TOGGEL_STATUS"

export const addTodo = (payload) => {
    return {type: ADD_TODO, payload };
};

export const delTodo = (payload) => {
    return {type: DEL_TODO, payload};
};

export const toggleStatusTodo = (payload) => {
    return {type: TOGGEL_STATUS, payload };
};


const initialState = {
    todos : [
        {id: 1, title: "React 공부하기", content: "React 1강 학습", isDone: true},
        {id: 2, title: "React 공부하기", content: "React 2강 학습", isDone: true},
        {id: 3, title: "React 공부하기", content: "React 3강 학습", isDone: false},
    ],
};

const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case DEL_TODO:
            return{
                ...state,
                todos:[...state.todos.filter((todo) => todo.id !== action.payload.id)]
            };
        case TOGGEL_STATUS:
            return{
                ...state,
                todos:[...state.todos.filter((todo) => todo.id !== action.payload.id), action.payload]
            }

            default:
                return state;
    };
};

export default todos;