const programs = [
  { number: "01", title: "Empower the next generation", text: "Creating space for young people to discover their strengths, build confidence, and imagine what comes next.", category: "YOUTH & MENTORSHIP", photo: "photo-1523240795612-9a054b0db644" },
  { number: "02", title: "Show up for our neighbors", text: "Bringing people together through everyday acts of service, shared resources, and meaningful connection.", category: "COMMUNITY & CONNECTION", photo: "photo-1559027615-cd4628902d4a" },
  { number: "03", title: "Open doors to possibility", text: "Encouraging learning, personal growth, and the confidence to take the next step toward a brighter future.", category: "GROWTH & OPPORTUNITY", photo: "photo-1521737711867-e3b97375f902" },
];

function Arrow() { return <span aria-hidden="true">?</span>; }
function Mark() { return <span className="brand-mark" aria-hidden="true">?</span>; }

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="announcement">Rooted in New Jersey.   Inspired by possibility. <a href="#involved">Be part of something good <span aria-hidden="true">?</span></a></div>
      <header className="header wrap">
        <a href="#" className="brand" aria-label="Be Inspired NJ home"><Mark /><span>be inspired<span className="brand-location">NEW JERSEY</span></span></a>
        <nav aria-label="Main navigation"><a href="#about">Our story</a><a href="#programs">What we do</a><a href="#involved">Get involved</a></nav>
        <a className="button button-small" href="#support">Make a difference <Arrow /></a>
      </header>
      <main id="main">
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="small-star">?</span> GOOD STARTS WITH US.</p>
            <h1>A little inspiration.<br />A world of<br /><em>possibility.</em></h1>
            <p className="hero-description">When we lift each other up, our whole community rises. Together, we’re building a brighter, more connected New Jersey.</p>
            <div className="hero-actions"><a className="button" href="#involved">Find your way to give back <Arrow /></a><a className="text-link" href="#about">Meet Be Inspired <span aria-hidden="true">?</span></a></div>
            <div className="hero-note"><span className="note-icon" aria-hidden="true">?</span><span>Local hearts. Lasting change.</span><span className="note-line" /></div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo" role="img" aria-label="Volunteers coming together to serve their community" />
            <div className="photo-caption"><span className="live-dot" /> PEOPLE. PURPOSE. POSSIBILITY.</div>
            <div className="circle-sticker"><span>BETTER</span><span className="sticker-heart">?</span><span>TOGETHER</span></div>
            <div className="photo-card"><span className="card-spark" aria-hidden="true">?</span><div>Small acts.<br /><strong>Extraordinary impact.</strong></div></div>
          </div>
        </section>
        <div className="values-strip"><div className="wrap values-inner"><span>One community.<br /><strong>So many ways to make a difference.</strong></span><span>? <b>Inspire kindness</b></span><span>? <b>Create opportunity</b></span><span>? <b>Build belonging</b></span></div></div>
        <section className="intro wrap" id="about"><p className="eyebrow">OUR PURPOSE</p><div><h2>Stronger people.<br /><em>Stronger communities.</em></h2><p>We believe everyone has something to offer—and everyone deserves the opportunity to thrive. Be Inspired NJ brings people together around a simple idea: positive change starts when we care for one another.</p><a className="text-link" href="#programs">See how inspiration becomes action <span aria-hidden="true">?</span></a></div><div className="purpose-symbol" aria-hidden="true">?</div></section>
        <section className="programs wrap" id="programs"><div className="section-heading"><div><p className="eyebrow">INSPIRATION IN ACTION</p><h2>People first. <em>Always.</em></h2></div><p>Connecting the care in our community<br />with the places it can make a difference.</p></div><div className="program-grid">{programs.map((program) => <article className="program-card" key={program.number}><div className="program-photo" style={{ backgroundImage: `url(https://images.unsplash.com/${program.photo}?auto=format&fit=crop&w=900&q=85)` }} role="img" aria-label={program.title}><span>{program.number}</span></div><div className="program-content"><p className="eyebrow">{program.category}</p><h3>{program.title}</h3><p>{program.text}</p><a className="text-link" href="#involved">Get involved <Arrow /></a></div></article>)}</div></section>
        <section className="involved wrap" id="involved"><div className="involved-intro"><p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p><h2>You have something<br /><em>to give.</em></h2><p>Your time. Your talents. Your generosity. There’s more than one way to inspire change.</p></div><div className="involved-options"><details><summary><span><small>01 / GIVE YOUR TIME</small>Bring your heart. Lend a hand.</span><span className="expand">+</span></summary><p>Interested in volunteering? Think about the skills you’d like to share and the time you can offer. Volunteer opportunities and registration details will be published here as they become available.</p></details><details><summary><span><small>02 / BUILD CONNECTIONS</small>Let’s do good, together.</span><span className="expand">+</span></summary><p>Local businesses, community groups, and neighbors can help create meaningful opportunities together. Partnership information will be shared here as it becomes available.</p></details><details id="support"><summary><span><small>03 / SUPPORT THE MISSION</small>Help possibility grow.</span><span className="expand">+</span></summary><p>Thank you for your interest in supporting Be Inspired NJ. Online giving is not available yet. Verified donation details will be added here when ready.</p></details></div></section>
        <section className="closing"><span aria-hidden="true">?</span><p>A brighter New Jersey starts with all of us.</p><h2>Be the spark.<br /><em>Be inspired.</em></h2><a className="button button-light" href="#involved">Let’s make a difference <Arrow /></a></section>
      </main>
      <footer className="wrap footer"><a href="#" className="brand"><Mark /><span>be inspired<span className="brand-location">NEW JERSEY</span></span></a><p>Rooted in community. Growing with purpose.</p><a href="#main" className="text-link">Back to top ?</a><div className="footer-bottom"><span>© {new Date().getFullYear()} Be Inspired NJ</span><span>Made for a brighter tomorrow.</span></div></footer>
    </>
  );
}
