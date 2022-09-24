import { createSlice } from '@reduxjs/toolkit'

const initial = [
    { id: 1, name: 'Learn HTML/CSS', priorty: 'Low', completed: true },
    { id: 2, name: 'Learn Javascript', priorty: 'Medium', completed: true },
    { id: 3, name: 'Learn ReactJS', priorty: 'High', completed: false },
    { id: 4, name: 'Learn NodeJS', priorty: 'High', completed: false },
]

const todoListSlice = createSlice({
    name: 'todoList',
    initialState: initial,
    reducers: {
        addTodoList(state, action) {
            state.push(action.payload)
        },
        toggleCompleted(state, action) {
            const currentTodo = state.find(todo => todo.id === action.payload)
            currentTodo.completed = !currentTodo.completed
        }
    }
})


export const { addTodoList, toggleCompleted } = todoListSlice.actions
export default todoListSlice