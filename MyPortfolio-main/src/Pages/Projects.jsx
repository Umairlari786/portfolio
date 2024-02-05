import React from 'react'
import "./Projects.css"
import Cinematrix from "../Assets/Projects SS/GharDekho.png"
import NewsChron from "../Assets/Projects SS/Trip.png"
import Notes from "../Assets/Projects SS/TMBDSS.png"
import LiveTranslator from "../Assets/Projects SS/jobss1.png"
import Github from "../Assets/Skills/icons8-github-96.png"
import LinkImg from "../Assets/LinkImg.png"
function Projects() {
    return (<>
        <div name="projects" className='ProjectPage'>
            <div className="screenSize">
                <div class="main-gradient1 left-1 top-unit-7xl"></div>
                <div class="main-gradient1 right-1 top-unit-4xl"></div>
                <div class="main-gradient1 right-0 top-unit-9xl"></div>
            </div>
            <h1 className='gradientText Projectname text-4xl text-center font-medium my-unit-4xl'>Projects</h1>
            <div className="Myprojects grid">
                <div className="project">
                    <img className='projectImg' src={Cinematrix} alt="" />
                    <div className="writtenText">
                        <h1 className='Cinematrix text-center text-lg text-slate-50  font-medium my-4'>GharDekho</h1>
                        <h3 className='gradientText Heading font-semibold text-center my-1'>React.js |  Tailwind CSS |  Next UI</h3>
                        <hr className='Hr my-5 w-40 mx-20' />
                        <p className='ProjectDesc  text-gray-400 text-xs'>Revolutionizing home buying: a seamless digital platform streamlining the process, making your dream home just a click away with simplicity and convenience at its core.</p>
                        <div className="linktoProject flex justify-center gap-3 cursor-pointer">
                            <a href="https://github.com/Umairlari786/GharDekhoX/tree/Test"><img className='GitLink w-10 my-4 cursor-pointer' src={Github} alt="" /></a>
                            <a href="https://ghar-dekho-x.vercel.app/"><img className='LinkImg w-10 my-4 cursor-pointer' src={LinkImg} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="project ">
                    <img className='projectImg' src={NewsChron} alt="" />
                    <div className="writtenText">
                        <h1 className='NewsChron text-center text-lg text-slate-50  font-medium my-4'>TripOnWeekend</h1>
                        <h3 className='gradientText Heading font-semibold text-center my-1'>React.js |  Javascript | React Router |  CSS</h3>
                        <hr className='Hr my-5 w-40 mx-20' />
                        <p className='ProjectDesc text-gray-400 text-xs'>Designed and implemented a dynamic travel exploration platform, "TripOnWeekend," utilizing advanced web
                        development techniques and hosted on Vercel. </p>
                        <div className="linktoProject flex justify-center gap-3">
                            <a href="https://github.com/Umairlari786/my-traveling-duniya"><img className='GitLink w-10 my-4 cursor-pointer' src={Github} alt="" /></a>
                            <a href="https://my-traveling-duniya.vercel.app"><img className='LinkImg w-10 my-4 cursor-pointer' src={LinkImg} alt="" /></a>
                        </div>
                    </div>
                </div>

                <div className="project ">
                    <img className='projectImg' src={Notes} alt="" />
                    <div className="writtenText">
                        <h1 className='Notes text-center text-lg text-slate-50 font-medium my-4'>CinemaHub</h1>
                        <h3 className='gradientText Heading font-semibold text-center my-1'>React.js |  Javascript | HTML |  CSS</h3>
                        <hr className='Hr my-5 w-40 mx-20' />
                        <p className='ProjectDesc text-gray-400 text-xs'>Built CinemaHub WebApp with React, TMDb API integration, and Ant Design for engaging movie exploration. Emphasized clean code and collaboration.</p>
                        <div className="linktoProject flex justify-center gap-3">
                            <a href="https://github.com/Umairlari786/Movie-Recommender"><img className='GitLink w-10 my-4 cursor-pointer' src={Github} alt="" /></a>
                            <a href="https://movie-recommender-henna.vercel.app/"><img className='LinkImg w-10 my-4 cursor-pointer' src={LinkImg} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="project ">
                    <img className='projectImg' src={LiveTranslator} alt="" />
                    <div className="writtenText">
                        <h1 className='LiveTranslator text-center text-lg text-slate-50  font-medium my-4'>Indeed Backend</h1>
                        <h3 className='gradientText Heading font-semibold text-center my-1'>Java |  SpringBoot | MongoDB</h3>
                        <hr className='Hr my-5 w-40 mx-20' />
                        <p className='ProjectDesc text-gray-400 text-xs'>Developed APIs to handle job listing, search functionality, and application
                        submissions. Designed and optimized the database schema to efficiently store and retrieve job data.</p>
                        <div className="linktoProject flex justify-center gap-3">
                            <a href="https://github.com/Umairlari786/Job-portal"><img className='GitLink w-10 my-4 cursor-pointer' src={Github} alt="" /></a>
                            <a href="https://github.com/Umairlari786/Job-portal"><img className='LinkImg w-10 my-4 cursor-pointer' src={LinkImg} alt="" /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>)
}

export default Projects