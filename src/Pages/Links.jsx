import React from 'react'
import "./Links.css"
import { Github, LinkedinIcon, MoveUpRight, NotebookText, UserSearchIcon } from 'lucide-react';
import CinematrixIcon from '../Assets/ProjectICON/image-removebg-preview (1).png';
import NewsChronIcon from '../Assets/ProjectICON/TripIcon.png';
import LiveTransIcon from '../Assets/ProjectICON/Ghar.png';

function Links() {
    return (
        <div>
            <div name="links" className='AboutPage'>
                <div className="screenSize">
                    <div class="main-gradient left-0 top-96"></div>
                    <div class="main-gradient right-0 top-10"></div>
                    <div class="main-gradient right-0 top-unit-9xl"></div>
                </div>
                <h1 className='gradientText LinkHeading text-4xl text-center font-medium my-unit-3xl'>Links</h1>

                <div className="linkContainer">

                    <div className="featuredLinks">
                        <h2 className='KnowMore my-5 text-pretty font-semibold  text-slate-600 text-center'>KNOW MORE ABOUT ME</h2>
                        <a href="mohdumair.vercel.app"><div className="LinkBox my-3 flex align-middle">
                            <h3 className='MyProfile flex gap-2 font-semibold'><UserSearchIcon /> mohdumair</h3> <MoveUpRight className='linkArrow w-4 flex' />
                        </div></a>

                        <h2 className='featproject my-5 text-pretty font-semibold  text-slate-600 text-center'>FEATURED PROJECT</h2>
                        <a href="https://movie-recommender-henna.vercel.app/"><div className="LinkBox my-3 flex align-middle">
                            <h3 className='Linkedin flex gap-2 font-semibold'> <img className='LinkIconImg' src={CinematrixIcon} alt="" /> CinemaHub</h3><MoveUpRight className='linkArrow w-4 flex' />
                        </div></a>
                        <a href="https://my-traveling-duniya.vercel.app"><div className="LinkBox my-3 flex align-middle">
                            <h3 className='Linkedin flex gap-2 font-semibold'><img className='LinkIconImg' src={NewsChronIcon} alt="" />TripOnWeekend</h3><MoveUpRight className='linkArrow w-4 flex' />
                        </div></a>
                        <a href="https://github.com/Umairlari786/Job-portal"><div className="LinkBox my-3 flex align-middle">
                            <h3 className='Linkedin flex gap-2 font-semibold'><NotebookText /> Indeed Backend</h3><MoveUpRight className='linkArrow w-4 flex' />
                        </div></a>
                        <a href="https://ghar-dekho-x.vercel.app/"><div className="LinkBox my-3 flex align-middle">
                            <h3 className='Linkedin flex gap-2 font-semibold'><img className='LinkIconImg' src={LiveTransIcon} alt="" />GharDekho</h3><MoveUpRight className='linkArrow w-4 flex' />
                        </div></a>

                        <h2 className='SocialLinks my-5 text-pretty font-semibold  text-slate-600 text-center'>SOCIAL LINKS</h2>
                        <a href="https://www.linkedin.com/in/umair-lari/"><div className="LinkBox my-3 flex align-middle">
                            <h3 className='Linkedin flex gap-2 font-semibold'> <LinkedinIcon /> Linkedin</h3>  <MoveUpRight className='linkArrow w-4 flex' />
                        </div></a>
                        <a href="https://github.com/Umairlari786"><div className="LinkBox my-3 flex align-middle">
                            <h3 className='github flex gap-2 font-semibold'> <Github /> Github</h3>     <MoveUpRight className='linkArrow w-4 flex' />
                        </div></a>
                        {/*<a href="https://twitter.com/mohdhadi01"><div className="LinkBox my-3 flex align-middle">
                            <h3 className='github flex gap-2 font-semibold'> <TwitterIcon /> X (Twitter)</h3>     <MoveUpRight className='linkArrow w-4 flex' />
                         </div></a>*/}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Links