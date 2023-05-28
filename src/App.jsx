import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './React-Query/Login/LoginPage';
import PostPage from './React-Query/Post/PostPage';
import SignUpPage from './React-Query/SignUp/SignupPage';
import CssPage from './React-CSS/CssPage';
import MentorsImmer from './React-2305/deepdive/object/mentor/MentorsImmer';
import MentorsReducer from './React-2305/deepdive/object/mentor/MentorsReducer';
import Mentors from './React-2305/deepdive/object/mentor/Mentors';
import Mentor from './React-2305/deepdive/object/mentor/Mentor';
import XY from './React-2305/deepdive/object/position/XY';
import ProductPage from './React-2305/basic/useEffect/ProductPage';
import CounterPage from './React-2305/basic/state/CounterPage';
import ProfilePage from './React-2305/basic/props/ProfilePage';
import Form from 'React-2305/deepdive/object/form/Form';
import Wrapper from 'React-2305/deepdive/component/layout/Wrapper';
import CardPage from 'React-2305/deepdive/component/card/CardPage';
import Theme from 'React-2305/deepdive/theme/Theme';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Theme />} />
                    <Route path='/deepdive/compoennt-card' element={<CardPage />} />
                    <Route path='/deepdive/component' element={<Wrapper />} />
                    <Route path='/deepdive/form' element={<Form />} />
                    <Route path='/deepdive/object/mentors-immer' element={<MentorsImmer />} />
                    <Route path='/deepdive/object/mentors-reducer' element={<MentorsReducer />} />
                    <Route path='/deepdive/object/mentors' element={<Mentors />} />
                    <Route path='/deepdive/object/mentor' element={<Mentor />} />
                    <Route path='/deepdive/object/position' element={<XY />} />
                    <Route path='/basic/useEffect' element={<ProductPage />} />
                    <Route path='/basic/state' element={<CounterPage />} />
                    <Route path='/basic/props' element={<ProfilePage />} />
                    <Route path='/react-query/login' element={<LoginPage />} />
                    <Route path='/react-query/signup' element={<SignUpPage />} />
                    <Route path='/react-query/post' element={<PostPage />} />
                    <Route path='/css' element={<CssPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
