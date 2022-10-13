import React from "react";
import styled from "styled-components";

const Header = function () { 
    return(
        
        <div>
            <ST_container>
                <h1 style ={{color: "#395B64"}}>My Todo List</h1>
                <div style ={{color: "#395B64"}}>React</div>
            </ST_container>
            <br/>
        </div>
    );
};
export default Header;

const ST_container = styled.div`
    align-items: center;
    display: flex;
    height: 50px;
    justify-content: space-between;
    padding: 0 20px;

`