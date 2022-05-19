import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import NavBar from '../components/NavBar';
import AboutScreen from '../screens/AboutScreen';
import AnalizadorScreen from '../screens/AnalizadorScreen';
import QueryScreen from '../screens/QueryScreen';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <div className='contenedor'>

            <Routes>
                <Route path="/" element={<AnalizadorScreen />} />
                <Route path="/about" element={<AboutScreen />} />
                <Route path="/query" element={<QueryScreen />} />
                <Route path="/*" element={ <Navigate to={'/'} /> } />
            </Routes>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter