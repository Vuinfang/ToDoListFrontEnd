import React, {useState} from "react";
import AddTask from "./components/AddTask";
import Form from "./components/Form";
import clock from "./image/clock.png";
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
import {HeartTwoTone, CalendarTwoTone, FileExclamationTwoTone, ContainerTwoTone, EditTwoTone, ApiTwoTone} from "@ant-design/icons";

export default function App() {
    const [task, setTask] = useState([])
    const [complete, setComplete] = useState([])
    return(
        
            <div className='box'>
                <header className='header'>
                    <span>To Do</span>
                </header>
                <Router>
                <div className='container'>
                    <nav className='nav'>
                        {/* <div><img src={clock} alt="clock" style={{width:'40%'}}/></div> */}
                        <ul>
                            <li>
                                <CalendarTwoTone /> 
                                <Link to='/' > My Day</Link>
                            </li >
                            <li>
                                <FileExclamationTwoTone />
                                <Link to ='/important' > Important</Link>
                            </li>
                            <li>
                                <ContainerTwoTone />
                                <Link to = '/planned'> Planned</Link>
                            </li>
                            <li>
                                <EditTwoTone />
                                <Link to = '/register'> Register</Link>
                            </li>
                            <li>
                                <ApiTwoTone />
                                <Link to = '/login'> Login</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='component'>
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
            </div>
    )
}
