import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              src="	https://classy-pavlova-fd5c93.netlify.app/images/image-product-desktop.jpg
"
              className="img-fluid rounded "
              alt="perfume-product"
            />
          </div>
          <div className="col-6 perfume-info">
            <h4>P&nbsp;E&nbsp;R&nbsp;F&nbsp;U&nbsp;M&nbsp;E </h4>
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
          href="https://github.com/Samira77-ss/challenge-product"
          target="_blank"
          alt="GithHub Profile"
          rel="noreferrer"
        >
          open-source-code on GitHub
        </a>
        , and hosted on{" "}
        <a
          href="https://tranquil-klepon-bd88fd.netlify.app"
          alt="Netlify link"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
