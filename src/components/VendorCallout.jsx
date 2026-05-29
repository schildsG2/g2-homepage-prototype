import '../styles/callout.css';

export default function VendorCallout() {
  return (
    <section className="callout-section">
      <div className="callout-container is-reversed">
        <div className="callout-image-col">
          <img src={`${import.meta.env.BASE_URL}images/profile_screenshots.png`} alt="G2 product profile" />
        </div>
        <div className="callout-content-col">
          <h2 className="callout-title">Selling software?</h2>
          <h2 className="callout-title">Reach more buyers.</h2>
          <p className="callout-body">
            Your future customers are researching their next purchase on G2. Make sure they can find you.
          </p>
          <a href="#" className="callout-cta">Claim Your G2 Profile</a>
        </div>
      </div>
    </section>
  );
}
