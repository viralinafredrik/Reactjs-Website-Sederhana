import '../styles/Navbar.css'

function Navbar() {
  return (
     <nav>
        <div className="wrapper">
            <div className="logo"><a href=''>Rumah Coding</a></div>
            <div className="menu">
                <ul>
                    <li><a href="#home" className="tbl">Home</a></li>
                    <li><a href="#courses" className="tbl">Courses</a></li>
                    <li><a href="#tutors" className="tbl">Tutors</a></li>
                    <li><a href="#partners" className="tbl">Partners</a></li>
                    <li><a href="#contact" className="tbl">Contact</a></li>
                    <li><a href="" className="tbl-biru">Sign Up</a></li>
                </ul>
            </div>
        </div>
    </nav>    
    )
}

export default Navbar
