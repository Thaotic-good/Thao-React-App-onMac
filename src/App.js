import logo from './img.png';
import {useState} from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Greeting />
          <UserProfileForm/>
        <p>
          Edit <code>src/App.js</code> and SAVE to reload. I am Thao.
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

function Greeting() {
  const [message, setMessage] = useState('I am tired.');

  return (
      <div>
          <div className="message-style">{message}</div>
          <button className="blue-pill" onClick={() => setMessage('Hello, world!')}>Expectations button</button>
          <button className="red-pill" onClick={() => setMessage('I am tired.')}>Reality button</button>
      </div>
  );
}

const profileFields = ['firstName', 'lastName', 'email', 'jobTitle', 'bio'];

function UserProfileForm() {
    return (
        <form>
            {profileFields.map(field =>
                <input key={field} type="text" name={field} placeholder={field.charAt(0).toUpperCase() + field.slice(1)} />
            )}
            <button type="submit">Save Changes</button>
        </form>
    );
}

export default App;

