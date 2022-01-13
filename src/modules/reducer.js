import React from 'react';

// 1. 액션 타입 선언
const INSERT_TODO = 'reducer/INSERT';
const TOGGLE_TODO = 'reducer/TOGGLE';
const REMOVE_TODO = 'reducer/REMOVE';
let nextId = 1;

// 2. 액션 생성 함수
export const insertTodo = text => ({
    type: INSERT_TODO,
    todo: {
        id:nextId++,
        text,
        done: false
    }
})
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})
export const removeTodo = id => ({
    type: REMOVE_TODO,
    id
})

// 3. 초기 상태 지정
const initialState = [
    {
        id:1,
        text: '집가기',
        done: false
    }
]

// 4. 리듀서 만들기
function reducer(state=initialState, action) {
    switch (action.type) {
        case TOGGLE_TODO:
            return state.map(
                todo=>
                todo.id === action.id
                ? { ...todo, done: !todo.done }
                : todo
            )
        case INSERT_TODO :
            return state.concat(action.todo)
        case REMOVE_TODO :
            return state.filter(todo=>todo.id !== action.id)
        default:
            return state;
    }
}

export default reducer;