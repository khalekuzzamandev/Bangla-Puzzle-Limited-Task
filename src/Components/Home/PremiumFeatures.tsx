const PremiumFeatures = () => {
  return (
    <section className="premium-section" id="premium">
      <div className="premium-container">
        <div className="premium-copy">
          <p className="premium-eyebrow">Premium</p>
          <h2>Unlock powerful tools for serious growth.</h2>
          <p className="premium-description">
            Go beyond basic shortening with a full suite of marketing and
            developer tools — custom branded links, UTM builders, deep
            analytics, QR codes, and a REST API for your apps.
          </p>

          <ul className="premium-features">
            <li>Custom branded short links</li>
            <li>UTM parameter builder</li>
            <li>Powerful analytics dashboard</li>
            <li>QR Code generator (PNG/SVG)</li>
            <li>REST API with full documentation</li>
          </ul>
        </div>

        <div className="analytics-card" aria-label="Link analytics dashboard preview">
          <h3>Link Analytics Dashboard</h3>
          <div className="analytics-list">
            <div className="analytics-row">
              <div className="analytics-row-heading">
                <span>shorturl.bd/ig9Kp2</span>
                <strong>1,247</strong>
              </div>
              <div className="analytics-track"><span style={{ width: "100%" }} /></div>
            </div>
            <div className="analytics-row">
              <div className="analytics-row-heading">
                <span>shorturl.bd/yt3Nm8</span>
                <strong>589</strong>
              </div>
              <div className="analytics-track"><span style={{ width: "47%" }} /></div>
            </div>
            <div className="analytics-row">
              <div className="analytics-row-heading">
                <span>shorturl.bd/1k7Rv1</span>
                <strong>312</strong>
              </div>
              <div className="analytics-track"><span style={{ width: "25%" }} /></div>
            </div>
            <div className="analytics-row">
              <div className="analytics-row-heading">
                <span>shorturl.bd/fb2Wx9</span>
                <strong>198</strong>
              </div>
              <div className="analytics-track"><span style={{ width: "16%" }} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;