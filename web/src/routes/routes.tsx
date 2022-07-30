import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import { Login } from '../pages';
// import {Home, Login, Register, NotFound} from '../pages';

export const Router = () => <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/register" element={<Register/>} />
    <Route path="*" element={<NotFound/>} /> */}
    </Routes>
</BrowserRouter>;
