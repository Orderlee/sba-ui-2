import React from 'react'
const TodoInput = () => {
    //todo 가 CRUD 대상(object) 입니다.
    
    return <>
    <h1>할일 등록</h1>
    <form action="">
        <div>
            <input type="text" name="todo"/>
            <input type="submit" value="SUBMIT"/>
        </div>
    </form>
    </>
}
export default TodoInput