import '../styles/testimonial.css';

export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-content">
          <div className="testimonial-quote">
            {'\u201CG2 has been a great place for me to both '}
            <span className="testimonial-highlight">find</span>
            {' and '}
            <span className="testimonial-highlight">review</span>
            {' software\u2026it\u2019s actually been fun to see my reviews go up, get marked helpful\u2026\u201D'}
          </div>
          <div className="testimonial-mobile-portrait">
            <img src={`${import.meta.env.BASE_URL}images/reviewer_image1.png`} alt="Matthew Gardner" />
          </div>
          <div className="testimonial-author">
            <span className="testimonial-author-name">Matthew Gardner</span>
            <span className="testimonial-author-title">Co-founder, RouteThis</span>
            <span className="testimonial-author-title">G2 Reviewer</span>
          </div>
        </div>
        <div className="testimonial-image-wrapper">
          <img src={`${import.meta.env.BASE_URL}images/reviewer_image1.png`} alt="Matthew Gardner" className="testimonial-image" />
        </div>
      </div>
    </section>
  );
}
