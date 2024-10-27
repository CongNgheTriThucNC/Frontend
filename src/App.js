import RouteComponent from "./routes/routes";
import '../src/scss/styles.scss';
import './input.css'

function App() {
    const routeElement = RouteComponent();
    return <div>{routeElement}</div>;
}

export default App;

