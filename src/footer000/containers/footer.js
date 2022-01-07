import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>FOR ATHLETES</Footer.Title>
                {/* <div className="socialFav"> */}
                
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" /> Facebook</Footer.Link>  
                {/* </div> */}
                     <h4  style={{ color: "#fff"}}>Contact Us</h4>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Categories</Footer.Title>
                    <Footer.Link href="#">Athletes</Footer.Link>
                    <Footer.Link href="#">Sports</Footer.Link>
                    <Footer.Link href="#">Nutrition</Footer.Link>
                    <Footer.Link href="#">Supplements</Footer.Link>
                    <Footer.Link href="#">Recovery & Sleep</Footer.Link>
                    <Footer.Link href="#">Training</Footer.Link>
                    <Footer.Link href="#">Mental Performance</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Other Pages</Footer.Title>
                    <Footer.Link href="#">Charities</Footer.Link>
                    <Footer.Link href="#">About Us</Footer.Link>
                    <Footer.Link href="#">Terms & Conditions</Footer.Link>
                    <Footer.Link href="#">Privacy policy</Footer.Link>
                    <Footer.Link href="#">Return Policy</Footer.Link>
                    <Footer.Link href="#">FAQ</Footer.Link>
                    <Footer.Link href="#">Why Partner With Us</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>My Page</Footer.Title>
                    <Footer.Link href="#">My Cart</Footer.Link>
                    <Footer.Link href="#">Wishlist</Footer.Link>
                    <Footer.Link href="#">My Account</Footer.Link>
                    <Footer.Link href="#">My Orders</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
           
            <hr  style={{
                         borderTop: "3px solid #fff "
                  }}/>
                           
	<h6 style={{ color: "#fff",
				textAlign: "center",
				marginBottom:"30px",
				marginTop: "30px" }}>
		&copy;{new Date().getFullYear()} forAthletes | All rights reserved
	    </h6>
        
        </Footer>
    )
}