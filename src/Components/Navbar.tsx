import Link from "next/link";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link className="logo" href="#home">
          THETINY.SITE
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <Link className="active-link" href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#blog">Blog</Link>
          <Link href="#terms">Terms</Link>
        </nav>

        <div className="nav-buttons">
          <Link className="login-button" href="#login">Log In</Link>
          <Link className="start-button" href="#signup">Get Started Free</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
