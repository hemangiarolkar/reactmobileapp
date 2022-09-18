import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-dark fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        Apple Inc. is an American multinational technology company that specializes in consumer electronics, 
                        software and online services headquartered in Cupertino, California, United States. Apple is the largest 
                        technology company by revenue (totaling US$365.8 billion in 2021) and as of June 2022, is the world's biggest 
                        company by market capitalization, the fourth-largest personal computer vendor by unit sales and second-largest 
                        mobile phone manufacturer. It is one of the Big Five American information technology companies, alongside Alphabet,
                         Amazon, Meta, and Microsoft.Apple was founded as Apple Computer Company on April 1, 1976, by Steve Jobs, Steve Wozniak 
                         and Ronald Wayne to develop and sell Wozniak's Apple I personal computer. It was incorporated by Jobs and Wozniak as Apple
                          Computer, Inc. in 1977 and the company's next computer, the Apple II, became a best seller and one of the first 
                          mass-produced microcomputers. Apple went public in 1980 to instant financial success. The company developed computers 
                          featuring innovative graphical user interfaces, including the 1984 original Macintosh, announced that year in a critically
                           acclaimed advertisement. By 1985, the high cost of its products and power struggles between executives caused problems.
                            Wozniak stepped back from Apple amicably and pursued other ventures, while Jobs resigned bitterly and founded NeXT, 
                            taking some Apple employees with him.
                            </p>
                        <NavLink to="/contact" className="btn btn-outline-dark px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center pt-5">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About