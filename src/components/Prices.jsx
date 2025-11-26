const Prices = () => {
    const prices = [
        { name: "General Consultation & X-Ray", stage: "30 Mins", price: "$40 (400 MAD)" },
        { name: "Professional Teeth Cleaning", stage: "45 Mins", price: "$70 (700 MAD)" },
        { name: "Laser Teeth Whitening", stage: "1 Hour", price: "$250 (2,500 MAD)" },
        { name: "Composite Filling (Per Tooth)", stage: "45 Mins", price: "$60 (600 MAD)" },
        { name: "Simple Tooth Extraction", stage: "30 Mins", price: "$50 (500 MAD)" },
        { name: "Ceramic Veneer (Per Unit)", stage: "2 Visits", price: "$350 (3,500 MAD)" },
        { name: "Dental Implant (Titanium)", stage: "Variable", price: "$700 (7,000 MAD)" },
        { name: "Root Canal Treatment", stage: "1 Hour", price: "$150 (1,500 MAD)" },
    ]



    return (
        <section className="container">
            <table className="table">
                <thead>
                    <tr className="table-primary">
                        <th scope="col">Service names</th>
                        <th scope="col">Stage</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody className="table-secondary">
                    {prices.map((item,index)=>
                        <tr key={index}>
                            <td scope="row" >{item.name}</td>
                            <td>{item.stage}</td>
                            <td>{item.price}</td>
                        </tr>)}


                </tbody>
            </table>
        </section>
    )
}
export default Prices