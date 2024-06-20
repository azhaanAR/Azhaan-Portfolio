import React from 'react';
import {ReactTyped} from 'react-typed'
import '../Hero_Section/Herosection.css'

const Herosection = () => {

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6 col-md-6  col-sm-12 col-12 text-white mt-5">
                        <div className="intro-section">
                            <span style={{ color: '#ff57c3' }}>Hello, </span>
                            <span>It's me</span>
                            <h4> Azhaan Shoiab</h4>
                            <h4 >
                                 I' am
                                <span style={{color:'#ff57c3',marginLeft:'10px'}}> 
                               <ReactTyped 
                               strings={[
                                ' Full Stack Devloper',
                               ]}
                               typeSpeed={"9"}
                               backSpeed={"9"}
                               loop
                               />
                               </span>
                            </h4>
                            <p>
                                I'm a full stack web developer with extensive experience 6 months as a Internship Arfi Technology The Complete IT Solotions..
                            </p>
                        </div>

                        <div className="icon-section">
                            <ul className='d-flex'>
                                <li className=''>
                                    <i class="fa-brands fa-instagram"></i>
                                </li>
                                <li className=''>
                                    <i class="fa-brands fa-github"></i>
                                </li>
                                <li className=''>
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </li>
                                <li>
                                    <i class="fa-brands fa-whatsapp"></i>
                                </li>

                            </ul>
                        </div>

                        <div className="resume-btn">
                            <button>GET RESUME</button>
                        </div>

                    </div>


                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5 code-section ">

                        <div class="py-4 dot-section">
                            <div className='d-flex mx-2'>
                                <div className='dott' style={{ backgroundColor: '#ed6a5e' }}>
                                </div>
                                <div className='dott' style={{ backgroundColor: '#ff9f24' }}>
                                </div>
                                <div className='dott' style={{ backgroundColor: '#8eeac1' }}>
                                </div>
                            </div>
                        </div>


                        <code className="">
                            <div className=" mt-3">
                                <span className="">const</span>
                                <span className="text-white"> coder</span>
                                <span className=""> = </span>
                                <span className="">{'{'}</span>
                            </div>

                            <div className='mt-1 mx-5'>
                                <span className="text-white">name:</span>
                                <span style={{ color: '#f7cb4e' }}>'Azhaan shoaib'</span>
                            </div>

                            <div className="mt-1 mx-5">
                                <span className=" text-white">skills:</span>
                                <span style={{ color: '#f7cb4e' }}>['</span>
                                <span style={{ color: '#f7cb4e' }}>HTML</span>
                                <span style={{ color: '#f7cb4e' }}>', '</span>
                                <span style={{ color: '#f7cb4e' }}>CSS</span>
                                <span style={{ color: '#f7cb4e' }}>', '</span>
                                <span style={{ color: '#f7cb4e' }}>BOOTSTRSP</span>
                                <span style={{ color: '#f7cb4e' }}>', '</span>
                                <span style={{ color: '#f7cb4e' }}>JAVASCRIPT</span>
                                <span style={{ color: '#f7cb4e' }}>', '</span>
                                <span style={{ color: '#f7cb4e' }}>REACT</span>
                                <span style={{ color: '#f7cb4e' }}>', '</span>
                                <span style={{ color: '#f7cb4e' }}>NODE JS</span>
                                <span style={{ color: '#f7cb4e' }}>', '</span>
                                <span style={{ color: '#f7cb4e' }}>EXPRESS</span>
                                <span style={{ color: '#f7cb4e' }}>', '</span>
                                <span style={{ color: '#f7cb4e' }}>MONGODB</span>
                                <span style={{ color: '#f7cb4e' }}>'],</span>
                            </div>

                            <div className='mt-1 mx-5'>
                                <span className="text-white">hardWorker:</span>
                                <span className="">true</span>
                                <span className="text-gray-400">,</span>
                            </div>

                            <div className='mt-1 mx-5'>
                                <span className=" text-white">quickLearner:</span>
                                <span className="">true</span>
                                <span className="">,</span>
                            </div>

                            <div className='mt-1 mx-5'>
                                <span className="text-white">problemSolver:</span>
                                <span className="">true</span>
                                <span className="">,</span>
                            </div>

                            <div className='mt-1 mx-5'>
                                <span className="">hireable:</span>
                                <span className="">function</span>
                                <span className=""> () {'{'}</span>
                            </div>


                            <div className='mx-5 mt-2'>
                                <span className="">return</span>
                                <span className="">(</span>
                            </div>


                            <div className="return mx-5">
                                <div className='mx-5 mt-1'>
                                    <span className="">this.</span>
                                    <span className=" text-white">hardWorker</span>
                                    <span className="">&amp;&amp;</span>
                                </div>
                                <div className='mx-5 mt-1'>
                                    <span className="">this.</span>
                                    <span className="text-white">problemSolver</span>
                                    <span className="">&amp;&amp;</span>
                                </div>
                                <div className='mx-5 mt-1'>
                                    <span className="">this.</span>
                                    <span className="text-white">skills.length</span>
                                    <span className="">&gt;=</span>
                                    <span className="">5</span>
                                </div>
                            </div>

                            <div className='mx-5 mt-1'>
                                <span className="mx-4">);</span>
                            </div>
                            <div>
                                <span className="mx-5 mt-1">{'}'};</span>
                            </div>
                            <div className='mb-3'>
                                <span className="mx-3 mt-1">{'}'};</span>
                            </div>
                        </code>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Herosection
