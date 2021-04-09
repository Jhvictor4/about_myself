import React from 'react'
import './Nav.css'
import profile from "./profile.png"

function Nav() {

        return (
            <div className="navi">
                <div className="content">
                  <img className="profile" src={ profile } alt="Profile" />
                  <p className="name"> 강지혁 | SNUCSE19 </p>
                  <p className="smoother"> Backend / Web Frontend Developing </p>
                  <p className="little"> Contact </p>
                  <ul className = "links">
                      <a href="https://www.instagram.com/kangjirm/" class="icon">
                       <i class="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                      <a href="https://www.instagram.com/kangjirm/" class="icon">
                       <i class="fa fa-github" aria-hidden="true"></i>
                      </a>
                      <a href="https://www.instagram.com/kangjirm/" class="icon">
                       <i class="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                  </ul>
                  <p className="little"> jhvictor4@wafflestudio.com </p>
                </div>
            </div>
        )
}


export default Nav
