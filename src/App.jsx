import CardPage from 'React-2305/deepdive/component/card/CardPage';
import Wrapper from 'React-2305/deepdive/component/layout/Wrapper';
import ProductPageExceptions from 'React-2305/deepdive/exceptions/ProductPageExceptions';
import MentorsButton from 'React-2305/deepdive/memoization/MentorsButton';
import Form from 'React-2305/deepdive/object/form/Form';
import Theme from 'React-2305/deepdive/theme/Theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProfilePage from './React-2305/basic/props/ProfilePage';
import CounterPage from './React-2305/basic/state/CounterPage';
import ProductPage from './React-2305/basic/useEffect/ProductPage';
import Mentor from './React-2305/deepdive/object/mentor/Mentor';
import Mentors from './React-2305/deepdive/object/mentor/Mentors';
import MentorsImmer from './React-2305/deepdive/object/mentor/MentorsImmer';
import MentorsReducer from './React-2305/deepdive/object/mentor/MentorsReducer';
import XY from './React-2305/deepdive/object/position/XY';
import CssPage from './React-CSS/CssPage';
import LoginPage from './React-Query/Login/LoginPage';
import PostPage from './React-Query/Post/PostPage';
import SignUpPage from './React-Query/SignUp/SignupPage';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ProductPageExceptions />} />
                    <Route path='/deepdive/memoization' element={<MentorsButton />} />
                    <Route path='/deepdive/theme' element={<Theme />} />
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
