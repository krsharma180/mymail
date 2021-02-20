import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Mail from "./components/Mail";
import MailList from "./components/MailList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from 'history'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header></Header>

        <div className="app_body">
          <Sidebar></Sidebar>
          <Switch>
          <Route exact path='/Mails'>
              <Mail></Mail>
            </Route>
          <Route exact path='/:id'>
              <MailList></MailList>
            </Route>
            
            <Route exact path='/'>
              <MailList></MailList>
            </Route>
           
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
