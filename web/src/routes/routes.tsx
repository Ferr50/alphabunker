import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import { Login } from '../pages';
import { Home } from '../pages'
// import {Home, Login, Register, NotFound} from '../pages';

export const Router = () => <BrowserRouter>
    <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<Login />} />
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} /> */}
    </Routes>
</BrowserRouter>;
