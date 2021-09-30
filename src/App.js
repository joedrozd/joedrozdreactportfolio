import React from 'react';
import useSticky from './hooks/useSticky.js';
import Welcome from './components/Header/Welcome';
import Navbar from './components/Header/Navbar';
import Skillset from './components/Header/Skillset';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGrowth from './components/growthcard';
import CardVGG from './components/vggcard';
import { Helmet } from 'react-helmet';
import img_avatar from './components/Header/img_avatar.png';
import Footer from './components/footer';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);



function App() {
    const { isSticky, element } = useSticky()
    return (
        <>
        <Helmet>
        <title>Joe Drozd - Front End Dev</title>
        <meta name="image" content={img_avatar}/>
        <meta property="og:image" content="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"></meta>
        <meta name="description" content="Check it out! I created a portfolio in ReactJS!" />
    </Helmet>
            <Navbar sticky={isSticky} />
           
            <Welcome element={element} />
            <div class="text-black">
            <Skillset element={element} />
            </div>
            <div class="sm-flex text-black ">
        <div class="container h-100">
            <h2 class="text-center text-black">Example Websites:</h2>
            <div class="row">
                <div class="col text-black">
                <CardVGG element={element} />
                </div>
                <div class="col text-black">
                 <CardGrowth element={element} />
                </div>
            </div>
        </div>  </div>
        <div class="sm-flex"><Footer /></div>
        
         </>
    )
}

export default App
