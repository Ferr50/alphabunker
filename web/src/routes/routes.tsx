import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

// import {Home, Login, Register, NotFound} from '../pages';
import {Home} from '../pages';

export const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="*" element={<NotFound/>} /> */}
        </Routes>
    </BrowserRouter>
);