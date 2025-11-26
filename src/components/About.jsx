const About = () => {
    return (
        <section className="about container py-5">
        <div className="row flex-column flex-lg-row align-content-center">
            <div className="col-6 container">
                <img className="img-fluid" src="../src/assets/15.jpg.webp"></img>
            </div>
            <div className="col-6 d-flex flex-column justify-content-evenly text-lg-start">
                <h1 className="fw-bold">About Us</h1>
                <p className="lead fs-4">Welcome to Dento, located in the heart of the city. We are dedicated to redefining the dental experience in Morocco by blending modern science with comfort. 
                    Our clinic is equipped with the latest European dental technology, ensuring precise diagnoses and pain-free treatments. 
                    From dental implants to the perfect "Hollywood Smile," our certified team treats every patient like family.</p>
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <h4>Experience Dentist</h4>
                        <h4>80%</h4>
                    </div>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="80"
                        aria-valuemin="0" aria-valuemax="100">
                        <label htmlFor="progress-bar"></label>
                        <div className="progress-bar" style={{width: '80%'}}></div>
                    </div>
                    <div className="d-flex justify-content-between pt-2">
                        <h4>Modern equipement</h4>
                        <h4>65%</h4>
                    </div>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="65"
                        aria-valuemin="0" aria-valuemax="100">
                        <label htmlFor="progress-bar"></label>
                        <div className="progress-bar" style={{width: '65%'}}></div>
                    </div>
                    <div className="d-flex justify-content-between pt-2">
                        <h4>Friendly Staff</h4>
                        <h4>85%</h4>
                    </div>
                    <div className="progress my-" role="progressbar" aria-label="Basic example" aria-valuenow="85"
                        aria-valuemin="0" aria-valuemax="100">
                        <label htmlFor="progress-bar"></label>
                        <div className="progress-bar" style={{width: '85%'}}></div>
                    </div>
                </div>

            </div>
        </div>


    </section>
    )
}
export default About