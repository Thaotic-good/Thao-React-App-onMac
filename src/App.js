import avatar from './img.png';
import './App.css';
import UserProfileForm from "./UserProfileForm";
import RedPillBluePillChoice from "./RedPillBluePillChoice";
import OnlineStatusChecker from "./OnlineStatusChecker";
import StarRating from "./StarRating";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={avatar} className="App-logo" alt="logo"/>
                <StarRating/>
                <OnlineStatusChecker/>
                <RedPillBluePillChoice/>
                <UserProfileForm/>
                <p>
                    Edit <code>src/App.js</code> and SAVE to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}


export default App;

