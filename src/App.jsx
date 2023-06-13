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
import ClassPage from 'React-2305/deepdive/class/ClassPage';
import AppCss from 'React-2305/css-libraries/AppCss';
import TodoPage from 'React-2305/project/todo/TodoPage';
import SwiperTest01 from 'React-2305/project/swiper/test-01/SwiperTest01';
import SwiperTest02 from 'React-2305/project/swiper/test-02/SwiperTest02';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<TodoPage />} />
                    <Route path='/swiper/02' element={<SwiperTest02 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
