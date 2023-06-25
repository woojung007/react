import MainProducts from 'React-2305/project/query/components/MainProducts';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <MainProducts />
        </QueryClientProvider>
    );
};

export default App;
