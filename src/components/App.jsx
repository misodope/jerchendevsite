import React from 'react';
import {Navbar} from './Navbar.jsx'
import {About} from './About.jsx';
import {Work} from './Work.jsx';
import {Home} from './Home.jsx';
import {Contact} from './Contact.jsx';

import './App.scss'

export class App extends React.Component {
    constructor () {
        super();

        this.homeRef = React.createRef();
    }

    scrollToRef = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    };

    
    renderParticles = () => {
        let particles = [];
        
        for (let i = 0; i < 30; i++) {
            particles.push(<div key={i} className='particle'></div>)
        }

        return (
            <div id='particle-container'>{particles}</div>
        )
    }

    render() {
        return (
            <div className='react-app container'>
                <Home homeRef={this.homeRef} />
                <About aboutRef={this.aboutRef} />
                {/* <Work workRef={this.workRef} />
                <Contact contactRef={this.contactRef} /> */}
                <Navbar
                    scrollToHome={() => this.scrollToRef(this.homeRef)}
                />
            </div>
        )
    }
}