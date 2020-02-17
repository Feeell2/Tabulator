import React from 'react';
import './css/App.css';
import Logo from "./photo/logo.png";
import Form from "./Form";
import List from "./List";

function App() {
  return (
    <div className="App">
     <header className={"header"}>
         <img className={"header__logo"} src={Logo} alt="logo"/>
     </header>
        <main className={"main"}>
            <div className={"wrapper"}>
                <Form/>
                <List/>
            </div>

        </main>

        <footer className={"footer"}>
        <p>created by tomus</p>
        </footer>
    </div>
  );
}

export default App;
