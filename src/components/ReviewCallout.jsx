import '../styles/callout.css';

export default function ReviewCallout() {
  return (
    <section className="callout-section">
      <div className="callout-container">
        <div className="callout-image-col">
          <img src="/images/homepage_reviews_screenshot.png" alt="Leave a review screenshot" />
        </div>
        <div className="callout-content-col">
          <h2 className="callout-title">Using software?</h2>
          <h2 className="callout-title">Leave a review.</h2>
          <p className="callout-body">
            Help over 5 million monthly Buyers on G2 make the right choice for their business.
          </p>
          <a href="#" className="callout-cta">Leave a Review</a>
        </div>
      </div>
    </section>
  );
}
