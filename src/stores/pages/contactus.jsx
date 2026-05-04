import Navbar from "../components/navbar";

function Contact() {
  return (
    <div>
      <div id="contact-page">
            <Navbar/>
        <h2>Contact Us</h2>

        <div id="contact-wrapper">

          {/* LEFT SIDE - INFO */}
          <div id="contact-info">
            <h3>Get in Touch</h3>
            <p>Email: support@primenest.com</p>
            <p>Phone: +91 8639054882</p>
            <p>
              Address:<br />
              Prime Nest Pvt Ltd,<br />
              Tech Park Road,<br />
              Madanapalle, India
            </p>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div id="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message"></textarea>
            <button>Send Message</button>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact