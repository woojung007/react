import RouterPage from 'React-2305/project/router/RouterPage';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const App = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RouterPage />,
            errorElement: <p>Not Found😅</p>,
        },
        {
            path: '/videos',
            element: <p>dfsdf</p>,
        },
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
