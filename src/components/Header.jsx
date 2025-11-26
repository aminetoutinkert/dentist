const Header = () => {
    return (
        <header className="container-fluid px-lg-3">
            <nav className="navbar bg-white navbar-expand-lg justify-content-center">
                <i className="navbar-brand">
                    <img src="../src/assets/logo.png"></img>
                </i>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="collapse navbar-collapse navbar-nav px-5 gap-3 justify-content-center" id="navmenu">
                    <li className="nav-item"><a href="" className="nav-link">HOME</a></li>
                    <li className="nav-item dropdown"><a href="" className="nav-link dropdown-toggle" id="dropmenu1" role="button"
                        data-bs-toggle="dropdown">PAGES</a>
                        <ul className="dropdown-menu" id="dropmenu1">
                            <li className="dropdown-item"><a href="#" className="dropdown-link nav-link">page-1</a></li>
                            <li className="dropdown-item"><a href="#" className="dropdown-link nav-link">page-2</a></li>
                            <li className="dropdown-item"><a href="#" className="dropdown-link nav-link">page-3</a></li>
                            <li className="dropdown-item"><a href="#" className="dropdown-link nav-link">page-4</a></li>
                        </ul>
                    </li>
                    <li className="nav-item"><a href="" className="nav-link">ABOUT</a></li>
                    <li className="nav-item"><a href="" className="nav-link">SERVICES</a></li>
                    <li className="nav-item"><a href="" className="nav-link">PRICING</a></li>
                    <li className="nav-item dropdown"><a href="" className="nav-link dropdown-toggle" id="dropmenu1" role="button"
                        data-bs-toggle="dropdown">BLOG</a>
                        <ul className="dropdown-menu" id="dropmenu1">
                            <li className="dropdown-item"><a href="#" className="dropdown-link nav-link">page-1</a></li>
                            <li className="dropdown-item"><a href="#" className="dropdown-link nav-link">page-2</a></li>
                            <li className="dropdown-item"><a href="#" className="dropdown-link nav-link">page-3</a></li>
                            <li className="dropdown-item"><a href="#" className="dropdown-link nav-link">page-4</a></li>
                        </ul>
                    </li>
                    <li className="nav-item"><a href="" className="nav-link">CONTACT</a></li>
                </ul>
                <button className="btn btn-primary ">BOOKING NOW</button>

            </nav>
        </header>
    )
}
export default Header