import React from 'react'

const Footer = () => {
    return (
        <>

           <div class="container">
            <hr></hr>
        <div class="row pt-3 px-5">
            <div class="col-12 col-lg-2 center">
                <h4>Contact Us</h4>
                <p>If you have any question, 
                <br></br>please contact us at<br></br> 
                support@example.com</p>
            </div>
            <div class="col-12 col-lg-4 center">
                <h4>Store Location</h4>
                <p>Address: 25 West 21th Street, Miami FL, USA </p>
                <h4>Open Hours</h4>
                <p>Monday-Saturday: 8:00am-4:00pm
                    Sunday: Close</p>
    
            </div>
            <div class="col-12 col-lg-2 center">
                <h4>Quick Links</h4>
                <ul>
                    <li>Shipping & Returns</li>
                    <li>Privacy Policy</li>
                    <li>Term Of Use</li>
                    <li>Wishlist</li>
                    <li>Compare</li>
                    <li>Subscribe</li>
                </ul>
    
            </div>
            <div class="col-12 col-lg-4 center">
                <h4>Sign Up for Our Newsletter</h4>
                <p>Leave your email to get all hot deals & news 
                    <br></br>
                    which benefit you most!</p>
                    <div className=''>
                    <i className="topIcon fab fa-facebook"></i>
                    <i className="topIcon fab fa-instagram"></i>
                    <i className="topIcon fab fa-pinterest-p"></i>
                    <i className="topIcon fab fa-twitter"></i>
                    </div>
                    
            </div>
    
        </div>
        <div class="row pt-3">
            <hr></hr>
            <p class="pt-1 text-center">Copyright © 2021 Apple. All Rights Reserved.</p>
        </div>
    </div>
    </>
    );
};

export default Footer