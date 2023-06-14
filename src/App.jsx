import SwiperTest02 from 'React-2305/project/swiper/test-02/SwiperTest02';
import TodoPage from 'React-2305/project/todo/TodoPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

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
