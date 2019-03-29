import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Navbar} from './Navbar.jsx'
import {About} from './About.jsx';
import {Work} from './Work.jsx';
import {Home} from './Home.jsx';


export class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Route exact path='/' component={Home}/>
                    <Route path='/view-work' component={Work}/>
                    <Route path='/about' component={About}/>
                </Router>
            </div>
        )
    }
}