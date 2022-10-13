import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../components/Detail";
import Layout from "../components/Layout";



const Router =() => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}/>
                <Route path='/detail/:id' element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
};
export default Router