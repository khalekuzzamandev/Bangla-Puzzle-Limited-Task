import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <div className="trust-badge">
          <span aria-hidden="true">↗</span>
          Trusted by thousands of users
        </div>

        <h1>
          Shorten Your URL
          <span>in seconds</span>
        </h1>

        <p className="hero-description">
          Create short, memorable links that you can share anywhere.
          <br />
          Track every click with powerful analytics.
        </p>

        <div className="login-card">
          <span className="lock-icon" aria-hidden="true"></span>
          <h2>Login to make your URL short</h2>
          <p>
            Sign in or create Link free account to start shortening links,
            <br className="desktop-break" />
            generating QR codes, and tracking every click in real time.
          </p>
          <div className="card-buttons">
            <Link className="make-url-button" href="#login">
              <span className="button-lock" aria-hidden="true"></span>
              Login to Make URL
            </Link>
            <Link className="signup-button" href="#signup">
              Sign Up Free <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
