import React from 'react'
import '../Navbar/Navbar.css'
import LazyLoad from 'react-lazyload'
const Navbar = () => {
  return (
    <>

      <nav class="navbar navbar-expand-sm  navbar-dark">
        <div class="container-fluid">
          <div className="logo text-white ">
            <LazyLoad>
            <svg class=" mt-2 mx-1" xmlns="http://www.w3.org/2000/svg" width="50" height="45" fill="none" viewBox="0 0  40"><path fill="#fff" fill-rule="evenodd" d="M16.011 20.03c-1.807 1.989-2.52 4.901 1.391 6.798 5.51 2.672 18.958 9.383 24.763 12.104 5.36 2.513 5.69-.752 4.662-5.46l-6.13-28.203C39.752 1.302 38.419.31 36.956.205c-2.089-.15-4.488 2.017-6.731 4.342C26.459 8.442 18.235 17.59 16.01 20.03z" clip-rule="evenodd"></path>
              <path fill="#C21A82" fill-rule="evenodd" d="M31.276 20.03c1.808 1.988 2.52 4.896-1.39 6.793-1.561.756-3.761 1.84-6.242 3.062a1159.767 1159.767 0 00-6.242-3.062c-3.91-1.897-3.198-4.81-1.39-6.793 1.254-1.382 4.429-4.9 7.632-8.406 3.203 3.505 6.377 7.03 7.632 8.406z" clip-rule="evenodd"></path>
              <path fill="#FF57C3" fill-rule="evenodd" d="M31.28 20.03c1.807 1.989 2.52 4.901-1.392 6.798-5.51 2.672-18.957 9.384-24.763 12.104-5.36 2.513-5.689-.751-4.662-5.46L6.593 5.27C7.54 1.302 8.872.31 10.336.205c2.088-.15 4.487 2.017 6.73 4.342C20.832 8.442 29.056 17.59 31.28 20.03z" clip-rule="evenodd"></path>
              <path fill="#8244FF" fill-rule="evenodd" d="M16.011 20.03c-1.807 1.989-2.52 4.901 1.391 6.798 5.51 2.672 18.958 9.383 24.763 12.104 5.36 2.513 5.69-.752 4.662-5.46l-6.13-28.203C39.752 1.302 38.419.31 36.956.205c-2.089-.15-4.488 2.017-6.731 4.342C26.459 8.442 18.235 17.59 16.01 20.03z" clip-rule="evenodd"></path>
            </svg>
            <span>AZHAAN</span><span>SHOAIB</span> 
            </LazyLoad>
           
          </div>

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          
           <div class="collapse navbar-collapse text-white " id="collapsibleNavbar">
            <ul class="navbar-nav mx-5"> 
              <a href="#about" className='nav-link active'>
              <li class="nav-item mx-4">
                ABOUT
              </li>
              </a>
              <a href="#experience" className='nav-link active'>
              <li class="nav-item mx-4">
                PROJECTS
              </li>
              </a>
              <a href="#skills" className='nav-link active'>
              <li class="nav-item mx-4">
                SKILLS
              </li>
              </a>
              <a href="#education" className='nav-link active'>
              <li class="nav-item mx-4">
                EDUCATION
              </li>
              </a>
              <a href="" className='nav-link active'>
              <li class="nav-item mx-4">
                EXPERIENCE
              </li>
              </a>
              <a className=' nav-item nav-link active'  href="#contact">
              <li class="  mx-4"  >
                CONTACT
              </li>
              </a>
            
             
            </ul>
          </div> 
        </div>
      </nav>

    </>
  )
}

export default Navbar
