import React from 'react';
import TodoPresentation from '../components/TodoPresentation';

import { insertTodo, removeTodo, toggleTodo } from '../modules/reducer';
import { useSelector, useDispatch } from 'react-redux';

function TodoContainer() {
    const reducer = useSelector(state=>state.reducer);
    const dispatch = useDispatch();
    console.log(reducer)
    const onCreate = text => dispatch(insertTodo(text));
    const onToggle = id => dispatch(toggleTodo(id));
    const onRemove = id => dispatch(removeTodo(id));
    return (
        <TodoPresentation
            reducer={reducer}
            onCreate={onCreate}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
}

export default TodoContainer;