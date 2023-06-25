import NotFound from 'React-2305/project/router/pages/NotFound';
import Root from 'React-2305/project/router/pages/Root';
import Videos from 'React-2305/project/router/pages/Videos';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from 'React-2305/project/router/pages/Home';
import VideoDetail from 'React-2305/project/router/pages/VideoDetail';

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root />,
            errorElement: <NotFound />,
            children: [
                { index: true, element: <Home /> },
                { path: '/videos', element: <Videos /> },
                { path: '/videos/:videoId', element: <VideoDetail /> },
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;