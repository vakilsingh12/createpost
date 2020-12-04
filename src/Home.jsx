import React from 'react'
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="main_div">
    <div className="main">
            <div>
                <h1>My awesome Posting Site!!</h1>
            </div>
            <div className="btn">
                <button><Link to="/login">Login</Link></button>
                <button><Link to="/signup"> Signup</Link></button>
            </div>
        </div>
        <div className="post">
         <h1 style={{float:"left"}}>Hello</h1>
         <p className="para" style={{float:"right"}}>Submitted by user 001</p><br/><br/>
         <p className="para1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ipsum excepturi exercitationem nesciunt dignissimos porro, assumenda a, placeat nam rem reiciendis eligendi quo nulla itaque, laboriosam esse doloremque veniam tempore.</p>
         <div className="icon">
         <a href=""><i class="fa fa-sticky-note-o" aria-hidden="true"></i></a>
         <a href=""><i class="fa fa-edit" aria-hidden="true"></i></a>
         <a href=""><i class="fa fa-trash" aria-hidden="true"></i></a>
         </div>
         </div>
         </div>
        
  )
}

export default Home
