import { CodeProvider } from './context/CodeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AppRouter from './router/AppRouter';


const App = () => {


    return (
        <div>
            <CodeProvider>
                <AppRouter />
            </CodeProvider>
        </div>
    )
}

export default App