import React from 'react'

import './Welcome.css'
import Logo from '../../assets/images/logo.svg'
import About from './About'
import './Cards.css'
import Cards from './Cards';

const Welcome = ({element}) => {
    return (
            <main>
                <section className='welcome text-white'>
                    <div id="home" ref={element}>
                        <img src={Logo} alt='logo' className='welcome--logo' />
                        <h1>Joe Drozd : Front-end Developer</h1>
                        <p>Focusing mainly on Front end development, I am currently working on a passion project.</p>
                        <p>I am studying for a MSc in Engineering Management at the University of Leeds. I have a BEng degree in Chemical Engineering with honours.
                        </p>
                        <p>
                        I have been developing websites as a hobby for a long time but want to further explore a career in web development.
                        </p>
                        <Cards />
                    </div>
                </section>
                <About />
                
            </main>
    )
}

export default Welcome
