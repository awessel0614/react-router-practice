import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                <h1 className="App-title">GitHub Student List</h1>
                </header>
                <br/>
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/allStudents">All Students</Link></li>
                    </ul>
                </nav>
                <Route exact path="/home">
                    <StudentForm />
                </Route>

                <Route exact path="/about">
                    <p>This is a website! Woohoo!</p>
                </Route>

                <Route exact path="/allStudents">
                    <p>Student list:</p>
                    <StudentList />
                </Route>
            </div>
        </Router>
    );
}

export default App;
