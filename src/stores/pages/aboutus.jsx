import Navbar from "../components/navbar";


function About() {
  return (
    <div>
      <Navbar/>

      <div id="about-page">

        <h2>About PrimeNest</h2>

        {/* HERO IMAGE */}
        <div id="about-banner">
          <img
            src="https://i.pinimg.com/1200x/f0/f9/e4/f0f9e45724771f16745ad3f6f640d3ce.jpg"
            alt="shopping"
          />
        </div>

        {/* Intro */}
        <section id="about-intro">
          <p>
            Welcome to <b>PrimeNest</b>, your trusted online shopping destination.
            We provide a wide range of products including electronics, fashion,
            furniture, and more — all at affordable prices.
          </p>
        </section>

        {/* Mission + Image */}
        <section id="about-flex">
          <div>
            <h3>Our Mission</h3>
            <p>
              Our mission is to make online shopping simple, fast, and reliable.
              We aim to deliver quality products with excellent customer service
              and a seamless user experience.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
            alt="mission"
          />
        </section>

        {/* Vision + Image */}
        <section id="about-flex">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="vision"
          />

          <div>
            <h3>Our Vision</h3>
            <p>
              To become one of the most trusted e-commerce platforms by offering
              innovative solutions, great deals, and customer satisfaction.
            </p>
          </div>
        </section>

        {/* Features */}
        <section id="about-features">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>✔ Wide range of products</li>
            <li>✔ Affordable prices</li>
            <li>✔ Fast delivery</li>
            <li>✔ Secure payments</li>
            <li>✔ 24/7 customer support</li>
          </ul>
        </section>

      </div>

     
    </div>
  );
}

export default About