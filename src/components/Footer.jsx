const Footer = () => {
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-left">
                    <img src="../src/assets/logo.png" className="logo"></img>
                    <p>Providing world-class dental care in Morocco since 2005. Your smile is our priority.</p>
                    <p>123 Avenue Mohammed V, Casablanca, Morocco (or Marrakech/Rabat)</p>
                    <p>+212 5 22 00 00 00</p>
                    <p>info@dentomorocco.com</p>
                </div>
                <div className="footer-grid">
                    <h1>onening hours</h1>
                    <h2>quick link</h2>
                    <ul className="ul1">
                        <li>Mon-Wed</li>
                        <li>Thu-Fri</li>
                        <li>Sat</li>
                        <li>Sun</li>
                        <li>Holiday</li>
                    </ul>
                    <ul className="ul2">
                        <li>8:00-18:00</li>
                        <li>8:00-18:00</li>
                        <li>8:00-18:00</li>
                        <li>8:00-18:00</li>
                        <li>8:00-18:00</li>
                    </ul>
                    <ul className="ul3">
                        <li>About</li>
                        <li>Contact</li>
                        <li>News</li>
                        <li>Policy</li>
                        <li>Services</li>
                    </ul>
                    <ul className="ul4">
                        <li>FQA</li>
                        <li>POLICY</li>
                        <li>ADVISORS</li>
                        <li>CAREERS</li>
                        <li>LEGALS</li>
                    </ul>
                </div>
                <div className="footer-right">
                    <h1>Newsletter</h1>
                    <p>We will send out weekly newest article and some great offers</p>
                    <div className="footer-right-btn">
                        <input className="inputSubscribe" type="text" placeholder="Subscribe with you mail"/><button type="submit" className="footer-btn">📧</button>
                    </div>

                    <div className="footer-socials">
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-linkedin"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-gmail"></i>
                    </div>
                </div>


            </div>
            <hr className="footerhr"></hr>
            <p>Copyright @ 2025 ALL RIGHT RESERVED ! This template is made with sweat by Amine</p>

        </footer>
    )
}
export default Footer