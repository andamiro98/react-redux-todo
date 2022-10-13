import React, { useState,useRef } from "react";
import { addTodo } from "../redux/modules/todos";
import { useDispatch,useSelector } from 'react-redux'; 
import Header from "./Header";
import styled from 'styled-components';

const Form = () => {

    const [post,setPost] = useState({title:'', content:'',});
    
    const {title, content} = post;
    
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);

    const onS = (e) => {
        e.preventDefault();
        console.log(title)
        if(title ==="" && content ===""){
            return alert("제목과 내용을 입력해주세요") 
        }
        if (title ===""){
            return alert("제목을 입력해주세요")
        }else if (content === ""){
            return alert("내용을 입력해주세요")
        }
        
        setPost({title:'', content:'',});

        dispatch(
            addTodo({
                id: NewId.current++,
                title: post.title,
                content: post.content,
                isDone: false,
            }))
        };

    const NewId = useRef(4);
    const onSubmitHandler = (title, content) => {
        const todo ={
            id: NewId.current,
            title,
            content,
            isDone: false,
        };
        todos.concat(todo);
    };

    const onChange = (e) =>{    
        const {value, name} = e.target; 
        setPost({
            ...post, 
            [name]: value, 
        });
    };

    return(
        <div>
        <Header/>
        <ST_addform onSubmit={onS}>
                <ST_inputgroup>
                    <label id="title">제목</label>
                    <ST_addinput  type="text" name ="title" value={title||''} onChange={onChange}></ST_addinput>

                    <label id="infor">내용</label>
                    <ST_addinput  type="text" name ="content" value={content||''} onChange={onChange}></ST_addinput>
                </ST_inputgroup>
                <ST_addbutton onClick={onSubmitHandler}> 추가하기 </ST_addbutton>
        </ST_addform>
        
        </div>

    );


};
export default Form;


const ST_addform = styled.form`
    align-items: center;
    display: flex;
    gap: 20px;
    background-color: #E9DAC1;
    border-radius: 12px;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
` 

const ST_inputgroup = styled.div`
    align-items: center;
    display: flex;
    gap: 20px;
`
const ST_addinput = styled.input`
    border: none;
    border: 2px solid #a1785f;
    border-radius: 12px;
    height: 40px;
    padding: 0 12px;
    width: 240px;
`
const ST_addbutton = styled.button`
    background-color:#256D85;
    border: 2px solid #395B64;
    border-radius: 10px;
    color: #F7ECDE;
    font-weight: 700;
    height: 40px;
    width: 140px;
`
