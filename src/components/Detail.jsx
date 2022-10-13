import React from "react";
import { useParams,useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import styled from 'styled-components'


const Detail = () => {

    const navigate = useNavigate();
    const todo = useSelector((state) => state.todos.todos);
    const { id } = useParams();
    const todoid = todo.filter((todo) => todo.id === Number(id))[0];
    
    return(
        <ST_box>
            <ST_block>
            <ST_inbox>
                <ST_topbox>
                    <div>id: {todoid.id}</div>
                    <ST_button
                    onClick={() => {
                        navigate("/");
                        }}>이전으로</ST_button>
                </ST_topbox>

                
                    <ST_h1>🖍 {todoid.title}</ST_h1>
                    <ST_h3>{todoid.content}</ST_h3>
                
            </ST_inbox>
            </ST_block>
        </ST_box>
    )

};
export default Detail;

const ST_box = styled.div`
    border: 2px solid rgb(238, 238, 238);
    width: 100%;
    height: 100vh;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
`

const ST_inbox = styled.div`
    width: 600px;
    height: 400px;
    border: 4px solid #395B64;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
`
const ST_topbox = styled.div`
    display: flex;
    height: 80px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px 24px;
    -webkit-box-align: center;
    align-items: center;
`
const ST_h1 = styled.h1`
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    padding: 0px 24px;
`
const ST_h3 = styled.h4`
    padding: 0px 24px;
    display: block;

`
const ST_block = styled.div`
    display: block;
`
const ST_button = styled.button`
    background-color: #9ED2C6;
    border: 2px solid #395B64;
    border-radius: 8px;
    cursor: pointer;
    height: 40px;
    width: 50%;
`

