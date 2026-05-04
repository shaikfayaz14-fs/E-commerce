import { Link } from "react-router-dom";


function Footer()
 {
  return (
    <div id="footer">
      
      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-section">
          <h4>ABOUT</h4>
          <Link to={"/Contact"}>
          <p>Contact Us</p>
          </Link>
          <Link to={"/About"}>
          <p>About Us</p>
          </Link>
          <p>Careers</p>
          <p>Prime Nest Stories</p>
          <p>Corporate Information</p>
        </div>

        {/* GROUP COMPANIES */}
        <div className="footer-section">
          <h4>GROUP COMPANIES</h4>
          <p>Brandzz</p>
          <p>PrimeNest</p>
          <p>BuyNest</p>
        </div>

        {/* HELP */}
        <div className="footer-section">
          <h4>HELP</h4>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellation & Returns</p>
          <p>FAQ</p>
        </div>

        {/* POLICY */}
        <div className="footer-section">
          <h4>CONSUMER POLICY</h4>
          <p>Cancellation & Returns</p>
          <p>Terms Of Use</p>
          <p>Security</p>
          <p>Privacy</p>
          <p>Sitemap</p>
          <p>Grievance Redressal</p>
        </div>

        {/* MAIL */}
        <div className="footer-section">
          <h4>Mail Us:</h4>
          <p>
            Prime Nest Pvt Ltd,<br />
            Alyssa Building,<br />
            Tech Park Road,<br />
            Madanapalle, India
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Prime Nest. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;