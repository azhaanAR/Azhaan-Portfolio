import React from 'react'
import '../About_Section/AboutSection.css'

const AboutSection = () => {
    return (
        <>
            <div className="container" id='about'>
                <div className="row mt-5">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="about-me text-white">
                            <span style={{color:'#ff57c3'}}> WHO I AM ? </span>
                            <p className='mt-2'>
                            My name is AZHAAN SHOAIB. I' m Full Stack Developer Dynamic and dedicated Frontend Developer with 6 months of professional experience at Arfi Technology, a leading IT solutions company. Demonstrated proficiency in developing responsive and user-friendly web applications. Skilled in HTML, CSS, JavaScript, and various frontend frameworks like React.js. Proven ability to collaborate effectively within multidisciplinary teams to deliver high-quality projects within deadlines. Passionate about staying updated with the latest trends and technologies in the frontend development domain, contributing to innovative and impactful solutions
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="img-section">
                            <img src="" alt="" />
                        </div>

                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default AboutSection
