import React from 'react'
import { Link , useLocation} from 'react-router-dom'
function Navbar() {
  return (
    <>
        <nav id="navbar">
            <ul>
                <li class="item"><Link to="/">STRESS CELL</Link></li>
                <li class="item"><Link to="/AWTT">AWTT</Link></li>
                <li class="item"><Link to="/DHTT">DHTT</Link></li>
                <li class="item"><Link to="/RTT">RTT</Link></li>
                <li class="item"><Link to="/RCI">RCI</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar