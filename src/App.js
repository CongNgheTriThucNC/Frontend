import RouteComponent from "./routes/routes";
import '../src/scss/styles.scss';
import './input.css';
import { UserProvider } from "./context";

function App() {
    const routeElement = RouteComponent();

    return (
        <UserProvider>
            <div>
                {routeElement}
            </div>
        </UserProvider>
    );
}

export default App;
