import React from 'react';
import { MdDone, MdDelete } from 'react-icons/md';
import './Todo.scss';
import { useState } from 'react';

function TodoPresentation({reducer, onCreate, onRemove, onToggle}) {

    // 날짜
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR',{
        year: 'numeric',
        month:'long',
        day: 'numeric'
    })
    const dayname = today.toLocaleDateString('ko-KR',{
        weekday:'long'
    })

    // 인풋에 입력되는 값을 관리하는 상태
    const [ text, setText ] = useState("");
    // 인풋의 입력값이 변경될 때 실행하는 함수
    const onChange = e => {
        setText(e.target.value);
        console.log(e.target.value);
        console.log(reducer)
    }
    const onSubmit = e => {
        e.preventDefault();
        onCreate(text);
        setText('');
    }
    return (
        <div id='template'>
            <div id='header'>
                <h1>{dateString}</h1>
                <div className="day">{dayname}</div>
                <div className="tasks-left">할일 : 1개 남음</div>
            </div>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} placeholder='할 일 추가하기' />
                <button><MdDone/></button>
            </form>
            <ul>
                <li>할 일</li>
                {/* {
                    reducer.map(todo=><li style={{ textDecoration: todo.done ? 'line-through' : 'none', cursor:'pointer'}}
                    key={todo.id} onClick={()=>{onToggle(todo.id)}}>{todo.text}
                        <button style={{ outline:'none', border:'none',background:'#fff', paddingLeft:'30px'}} onClick={()=>{onRemove(todo.id)}}>
                            <MdDelete/>
                        </button>
                    </li>)
                } */}
            </ul>
        </div>
    );
}

export default TodoPresentation;