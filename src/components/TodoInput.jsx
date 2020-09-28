import React,{useState} from 'react'
import uuid from 'uuid/v4'
import {} from 'react-redux'
const TodoInput = () => {
    //todo 가 CRUD 대상(object) 입니다.
    // es6 이전 모드 var
    // es6 이후 let,const 두가지로 정의 변수, 상수
    // 함수는 const 타입에 할당
    // JSON = JavaScript Object Notation
    // object {'':'', '': () =>()}, array []
    const [todo, setTodo] = useState(0) // todo 의 타입결정함
    const submitForm = e =>{
        e.preventDefault() // default 기능은 막고, 내가 정의한 기능을 구현하라
        const newTodo ={
            todoId:'',
            name: todo,
            complete: false
        }
        addTodo(newTodo)
        setTodo("")

    }
    const handlechange = e => {
        e.preventDefault()
        setTodo(e.target.value)

    }
    const addTodo = todo =>{
        dispatch(addTodoAction) // 영속적으로 저장할 곳 state -> api -> db
    }
    return <>
    <h1>할일 등록</h1>
    <form onSubmit={submitForm} method='POST'>
        <div>
            <input type="text" name="todo" onChange={handlechange}/><br/>
            <input type="submit" value="ADD TODO"/>
        </div>
    </form>
    </>
}
export default TodoInput