import React from "react";
import styled from 'styled-components'
import Form from "./Form";
import List from "./List";


const Layout = function() {

    return(
        <div>
        <ST_layout>
            <Form/>
            <List/>
        </ST_layout>
        </div>
    );
};
export default Layout

const ST_layout = styled.div`
    margin: 0 auto;
    max-width: 1200px;
    min-width: 800px;
`