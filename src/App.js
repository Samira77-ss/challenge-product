import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              src="https://xoxosonja.com/wp-content/uploads/2017/09/DSC09169.jpg"
              className="img-fluid rounded "
              alt="perfume-product"
            />
          </div>
          <div className="col-6 perfume-info">
            <h4>PERFUME </h4>
            <h1>Gabrielle Essence Eau De Parfum</h1>
            <p>
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.{" "}
            </p>
            <span className="price">$149.99 </span>
            <span className="discount">$169.99</span>
            <br />
            <button className="btn">🛒Add to Cart</button>
          </div>
        </div>
      </div>
      <footer>
        This page was coded by Samira Seyfi{" "}
        <a
          href="https://github.com/Samira77-ss/Challenge1"
          target="_blank"
          alt="GithHub Profile"
        >
          open-source-code on GitHub
        </a>
        , and hosted on{" "}
        <a
          href="https://calm-khapse-b18156.netlify.app/"
          alt="Netlify link"
          target="_blank"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
