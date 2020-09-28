import React from 'react'
const TodoInput = () => {
    //todo 가 CRUD 대상(object) 입니다.
    // es6 이전 모드 var
    // es6 이후 let,const 두가지로 정의 변수, 상수
    // 함수는 const 타입에 할당
    const [todo, setTodo] = useState(0)
    return <>
    <h1>할일 등록</h1>
    <form onSubmit={submitForm} method='POST'>
        <div>
            <input type="text" name="todo" onChange={}/><br/>
            <input type="submit" value="SUBMIT"/>
        </div>
    </form>
    </>
}
export default TodoInput