import weatherInfo from "./components/weatherInfo";
import "./App.css";

console.log(weatherInfo);
function App() {
    return (
       <div className="forecast">{weatherInfo}</div> 
    )};

export default App;