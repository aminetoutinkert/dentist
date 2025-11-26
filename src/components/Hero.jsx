const Hero = () => {
    return (
    <section className="bg-image" style={{ backgroundImage: 'url("../src/assets/1043.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className="bg-dark bg-opacity-25 p-0 m-0">
            <div className="container text-center min-vh-100 align-content-center w-50 py-5">
                <h1 className="text-light pb-3 fw-bold fs-1">We Believe Everyone Should Have Easy Access To Great Dental Care
                </h1>
                <p className="lead text-light py-5 fw-bold fs-3">As Morocco’s leading dental center, Dento combines state-of-the-art technology with warm hospitality. 
                    Whether you need a cosmetic transformation or routine care, our international specialists are here to help.</p>
                <button className="btn btn-lg btn-primary px-5 py-3 shadow">GET STARTED</button>
                <button className="btn btn-lg btn-outline-primary px-5 py-3 shadow">CONTACT US</button>
            </div>
        </div>

    </section>

    )
}
export default Hero