import React, {useState} from "react";
import AddTask from "./components/AddTask";
import Form from "./components/Form";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MyDay from "./pages/MyDay";
import Important from './pages/Important';
import Planned from './pages/Planned';
import Register from "./pages/Register";
import Login from "./pages/Login";
import './App.css';
import 'antd/dist/antd.css';
import {DiffOutlined} from "@ant-design/icons";

export default function App() {
    const [task, setTask] = useState([])
    const [complete, setComplete] = useState([])
    return(
        <Router>
            <div className='box'>
                <header className='header'>
                    <span>To Do</span>
                </header>
                <div className='container'>
                    <nav className='home'>
                        <div>V_V</div>
                        <ul>
                            <li className='aaa'>
                                
                                <Link to='/'>My Day</Link>
                            </li>
                            <li>
                                <Link to ='/important'>Important</Link>
                            </li>
                            <li>
                                <Link to = '/planned'>Planned</Link>
                            </li>
                            <li>
                                <Link to = '/register'>Register</Link>
                            </li>
                            <li>
                                <Link to = '/login'>Login</Link>
                            </li>
                        </ul>
                    </nav>

                
                
                <Switch className='content'>
                    <Route path = '/important'>
                        <Important />
                    </Route>
                    <Route path = '/planned'>
                        <Planned />
                    </Route>
                    <Route path = '/register'>
                        <Register />
                    </Route>
                    <Route path = '/login'>
                        <Login />
                    </Route>
                    <Route exact path = '/'>
                        <MyDay />
                    </Route>
                </Switch>
                </div>
            </div>
        </Router>
    )
}
