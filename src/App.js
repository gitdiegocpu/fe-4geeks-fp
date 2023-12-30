// dependencies first
import { useState } from 'react';

//local files
import { Login, Home } from './components/Pages/index.jsx';

//styles
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminEmail = 'diego@diego.com';
    const adminPasword = '1234';
    const inputEmail = e.nativeEvent.target[0].value;
    const inputPassword = e.nativeEvent.target[1].value;

    if (inputEmail === adminEmail && inputPassword === adminPasword) {
      setLoggedIn(true)
    } else {
      alert('Wrong email or password')
    }
  }

  return (
    <div className="App">
      {!loggedIn ? (
        <Login onSubmit={handleSubmit} />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
