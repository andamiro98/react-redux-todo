import React from "react";
import { delTodo, toggleStatusTodo } from "../redux/modules/todos";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from 'styled-components'


const List = function(){
    const {todos} = useSelector((state) => state.todos);
    const  dispatch = useDispatch();
    
    return(

    <ST_listcontain>
        <div>
            <div>
                <h2 style ={{color: "#395B64"}}>
                My List 🔥
                </h2>
                <ST_listwrapper >
                {todos.map((todo) =>{
                    if(todo.isDone === false){
                        return(
                    <ST_todocontainer key={todo.id}>
                        <Link to ={`/detail/${todo.id}`} >
                        상세보기
                        </Link>
                        <h2>🖍 {todo.title}</h2>
                        <div>{todo.content}</div>
                        <ST_buttonset>
                            <ST_deletebutton
                            onClick={() => {
                                dispatch(delTodo(todo))
                                }}
                            >
                            삭제하기
                            </ST_deletebutton>

                            <ST_completebutton
                            onClick={() => {
                                todo.isDone = !todo.isDone 
                                dispatch(toggleStatusTodo(todo))
                                }}
                                > 
                                {todo.isDone ? "취소" : "완료"}
                            </ST_completebutton>
                        </ST_buttonset>
                    </ST_todocontainer>
                    )
                }else{
                    return null
                }
                })}
                </ST_listwrapper>
            </div>
                
            <div>
                <h2 style ={{color: "#395B64"}} >
                Complete  🎉
                </h2>
                <ST_listwrapper>
                {todos.map((todo) =>{
                if(todo.isDone === true){
                return(
                    <ST_todocontainer key={todo.id}>
                        <Link to ={`/detail/${todo.id}`} >
                        상세보기
                        </Link>
                        <h2>🖍 {todo.title}</h2>
                        <div>{todo.content}</div>
                        <ST_buttonset>
                            <ST_deletebutton
                            onClick={() => {
                                dispatch(delTodo(todo))
                                }}
                                >
                                삭제하기
                            </ST_deletebutton>

                            <ST_completebutton
                                onClick={() => {
                                    todo.isDone = !todo.isDone 
                                    dispatch(toggleStatusTodo(todo))
                                    }}> 
                                    {todo.isDone ? "취소" : "완료"}
                            </ST_completebutton>
                        </ST_buttonset>
                    </ST_todocontainer>
                    )
                    }else{
                        return null
                    }
                    })}
                </ST_listwrapper>
            </div>
                
        </div>
    </ST_listcontain>
    );
};
export default List;

const ST_listcontain = styled.div`
    padding: 0 10px;
`
const ST_listwrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`
const ST_todocontainer = styled.div`
    border: 4px solid #395B64;
    background-color: #286d85;
    color: #F7ECDE;
    border-radius: 12px;
    padding: 12px 24px 24px;
    width: 270px;
`
const ST_buttonset = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 24px;
`
const ST_deletebutton = styled.button`
    background-color: #E9DAC1;
    border: 2px solid #a1785f;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    height: 40px;
    width: 50%;
`

const ST_completebutton = styled.button`
    background-color: #9ED2C6;
    border: 2px solid #54BAB9;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    height: 40px;
    width: 50%;
`
