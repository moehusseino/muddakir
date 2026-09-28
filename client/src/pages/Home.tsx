import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Clock3,
  Globe2,
  HeartHandshake,
  Menu,
  MessageCircle,
  Play,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
  Zap,
} from "lucide-react";
import BrandLogo from "@/components/BrandLogo";
import { registrationLinkProps } from "@/const";
import { SITE_IMAGES } from "@/siteImages";

const subjects = [
  {
    number: "01",
    title: "Holy Quran",
    copy: "Build confident recitation, tajweed, and memorization habits with a teacher who knows how to make progress feel joyful.",
    tag: "Recitation · Tajweed · Hifz",
    tone: "saffron",
  },
  {
    number: "02",
    title: "Arabic Language",
    copy: "From first letters to fluent conversation, learn Modern and Classical Arabic through practical, age-appropriate lessons.",
    tag: "Reading · Speaking · Writing",
    tone: "sage",
  },
  {
    number: "03",
    title: "Islamic Studies",
    copy: "Explore the pillars of faith, seerah, fiqh, adab, and the stories of the prophets — always connected to everyday life.",
    tag: "Aqeedah · Seerah · Adab",
    tone: "clay",
  },
];

const faqs = [
  {
    question: "Who are the lessons for?",
    answer: "MUDDAKIR is for children, teens, adults, and whole families. We meet each learner where they are — from a first Quran lesson to an advanced Arabic goal.",
  },
  {
    question: "What does a free trial include?",
    answer: "You will meet a teacher, share your learning goals, and experience a real live lesson. There is no pressure to subscribe afterward.",
  },
  {
    question: "Can I choose the teacher and schedule?",
    answer: "Yes. We match you with a qualified teacher based on age, goals, preferred language, and availability. You can request a different teacher anytime.",
  },
  {
    question: "How do small-group halaqahs work?",
    answer: "Small groups gather around a shared goal — sisters, brothers, siblings, or friends. They stay intimate enough for every learner to be seen and supported.",
  },
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="container nav-wrap">
          <BrandLogo />
          <nav className={`main-nav ${mobileOpen ? "is-open" : ""}`} aria-label="Main navigation">
            <a href="#approach" onClick={closeMobile}>Our approach</a>
            <a href="#subjects" onClick={closeMobile}>What we teach</a>
            <a href="#how-it-works" onClick={closeMobile}>How it works</a>
            <a href="#faq" onClick={closeMobile}>FAQs</a>
            <a className="mobile-cta button button-primary" {...registrationLinkProps} onClick={closeMobile}>
              Book a free trial <ArrowRight size={16} />
            </a>
          </nav>
          <div className="nav-actions">
            <a className="nav-login" {...registrationLinkProps}>Parent portal</a>
            <a className="button button-primary nav-cta" {...registrationLinkProps}>
              Book a free trial <ArrowRight size={16} />
            </a>
            <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> Live Quran · Arabic · Islamic Studies</div>
              <h1>A better way to grow in <em>faith.</em></h1>
              <p className="hero-lede">Personalized tutoring for the people you love — taught live by thoughtful Arabic-speaking educators who make every lesson feel like it belongs to your family.</p>
              <div className="hero-actions">
                <a className="button button-dark button-large" {...registrationLinkProps}>
                  Start with a free trial <ArrowRight size={18} />
                </a>
                <a className="text-link" href="#approach"><span className="play-button"><Play size={12} fill="currentColor" /></span> See how it works</a>
              </div>
              <div className="hero-assurance"><ShieldCheck size={17} /> First class is free · cancel anytime</div>
            </div>
            <div className="hero-visual">
              <img src={SITE_IMAGES.heroFamily} alt="A Muslim family learning together around a table" />
              <div className="hero-card hero-card-top">
                <span className="hero-card-icon"><Sparkles size={17} /></span>
                <span><strong>Real progress.</strong><small>Real connection.</small></span>
              </div>
              <div className="hero-card hero-card-bottom">
                <span className="avatar-stack"><i>AA</i><i>SM</i><i>RK</i></span>
                <span><strong>4.9 / 5</strong><small>from 100+ families</small></span>
              </div>
              <span className="hero-scribble" aria-hidden="true">✦</span>
            </div>
          </div>
          <div className="hero-foot container">
            <div className="hero-foot-item"><Clock3 size={19} /><span><strong>Flexible scheduling</strong><small>Weekday, weeknight, or weekend</small></span></div>
            <div className="hero-foot-item"><UsersRound size={19} /><span><strong>All ages welcome</strong><small>From first letters to fluent Arabic</small></span></div>
            <div className="hero-foot-item"><Globe2 size={19} /><span><strong>Made for real life</strong><small>Learn from anywhere in the world</small></span></div>
            <div className="hero-foot-note">01 <span /> 04</div>
          </div>
        </section>

        <section className="marquee-section" aria-label="MUDDAKIR values">
          <div className="marquee-track">
            <span>Learn with intention</span><i>✦</i><span>Grow with confidence</span><i>✦</i><span>Stay connected</span><i>✦</i><span>Learn with intention</span><i>✦</i><span>Grow with confidence</span><i>✦</i>
          </div>
        </section>

        <section className="approach-section section-pad" id="approach">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <div className="eyebrow">A gentler kind of learning</div>
                <h2>Where good teaching<br />meets <em>real life.</em></h2>
              </div>
              <div className="section-heading-side">
                <p>Learning deen shouldn&apos;t feel like one more thing to squeeze in. MUDDAKIR gives your family a warm, flexible rhythm that grows with you.</p>
                <a className="arrow-link" href="#how-it-works">Our approach <ArrowDownRight size={18} /></a>
              </div>
            </div>

            <div className="service-grid">
              <article className="service-card service-card-featured">
                <div className="service-card-topline"><span className="service-number">01</span><span className="service-label">Most flexible</span></div>
                <div className="service-card-content">
                  <div>
                    <h3>Private tutoring</h3>
                    <p>A dedicated teacher, a plan built around your goals, and the full attention your learner deserves.</p>
                    <ul className="check-list"><li><Check size={14} /> One-on-one live lessons</li><li><Check size={14} /> Your pace, your schedule</li><li><Check size={14} /> Quran, Arabic, or Islamic Studies</li></ul>
                    <a className="service-link" {...registrationLinkProps}>Explore private tutoring <ArrowRight size={16} /></a>
                  </div>
                  <div className="service-illustration private-illustration"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><span className="illustration-book"><BookOpen size={38} /></span><span className="illustration-star">✦</span></div>
                </div>
              </article>

              <article className="service-card service-card-group">
                <div className="service-card-topline"><span className="service-number">02</span><span className="service-label">Learn together</span></div>
                <div className="service-card-content">
                  <div>
                    <h3>Small-group halaqah</h3>
                    <p>Meaningful learning with sisters, brothers, siblings, or friends in a small and supportive circle.</p>
                    <ul className="check-list"><li><Check size={14} /> Groups small enough to be seen</li><li><Check size={14} /> Shared goals and gentle accountability</li><li><Check size={14} /> A place to belong</li></ul>
                    <a className="service-link" {...registrationLinkProps}>Find your circle <ArrowRight size={16} /></a>
                  </div>
                  <div className="halaqah-art" aria-hidden="true"><span className="halaqah-sun">✦</span><div className="person p1" /><div className="person p2" /><div className="person p3" /><div className="person p4" /><div className="halaqah-ring" /></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="subjects-section section-pad" id="subjects">
          <div className="container">
            <div className="section-heading subjects-heading">
              <div>
                <div className="eyebrow">The MUDDAKIR curriculum</div>
                <h2>Three doors in.<br /><em>One beautiful</em> mission.</h2>
              </div>
              <p>Whether you&apos;re building a foundation or returning to something you once knew, our teachers help turn intention into a practice that lasts.</p>
            </div>
            <div className="subject-grid">
              {subjects.map((subject) => (
                <article className={`subject-card ${subject.tone}`} key={subject.number}>
                  <div className="subject-top"><span>{subject.number}</span><ArrowUpRightIcon /></div>
                  <div className="subject-icon">{subject.number === "01" ? <BookOpen size={24} /> : subject.number === "02" ? <MessageCircle size={24} /> : <HeartHandshake size={24} />}</div>
                  <h3>{subject.title}</h3>
                  <p>{subject.copy}</p>
                  <div className="subject-tag">{subject.tag}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="story-section section-pad">
          <div className="container story-grid">
            <div className="story-image-wrap">
              <img src={SITE_IMAGES.tutorSession} alt="A tutor guiding a student through an online lesson" />
              <div className="story-image-note"><span className="note-line" /><strong>Care in<br />every lesson.</strong></div>
            </div>
            <div className="story-copy">
              <div className="eyebrow">Not just a teacher</div>
              <h2>Your learner deserves a teacher who <em>sees them.</em></h2>
              <p>We choose teachers for their knowledge, yes — but also for their patience, warmth, and ability to make a child feel capable. Every session is live, personal, and built around a relationship.</p>
              <div className="story-points">
                <div><span className="story-point-icon"><ShieldCheck size={18} /></span><span><strong>Qualified & thoughtful</strong><small>Trained in teaching, child development, and the art of encouragement.</small></span></div>
                <div><span className="story-point-icon"><Zap size={18} /></span><span><strong>Progress you can feel</strong><small>Clear goals, gentle feedback, and small wins worth celebrating.</small></span></div>
              </div>
              <a className="arrow-link" href="#how-it-works">Meet the MUDDAKIR way <ArrowDownRight size={18} /></a>
            </div>
          </div>
        </section>

        <section className="numbers-section">
          <div className="container numbers-grid">
            <div className="numbers-intro"><div className="eyebrow">Small details. Big difference.</div><h2>The things families <em>notice.</em></h2></div>
            <div className="number-item"><strong>30–60</strong><span>minute sessions<br />that fit your day</span></div>
            <div className="number-item"><strong>24/7</strong><span>availability across<br />time zones</span></div>
            <div className="number-item"><strong>100%</strong><span>money-back guarantee<br />in your first week</span></div>
          </div>
        </section>

        <section className="steps-section section-pad" id="how-it-works">
          <div className="container">
            <div className="section-heading split-heading steps-heading">
              <div><div className="eyebrow">Simple by design</div><h2>Start where you are.<br /><em>We&apos;ll meet you there.</em></h2></div>
              <p>From your first hello to your first lesson, we keep the process clear, human, and completely pressure-free.</p>
            </div>
            <div className="steps-grid">
              <div className="step-item"><span className="step-number">01</span><div className="step-icon"><MessageCircle size={21} /></div><h3>Tell us what matters</h3><p>Share your learner&apos;s age, goals, and the rhythm that works for your family.</p><span className="step-line" /></div>
              <div className="step-item"><span className="step-number">02</span><div className="step-icon"><UsersRound size={21} /></div><h3>Meet your teacher</h3><p>We introduce you to a warm, qualified teacher and set up your free trial lesson.</p><span className="step-line" /></div>
              <div className="step-item"><span className="step-number">03</span><div className="step-icon"><Sparkles size={21} /></div><h3>Find your rhythm</h3><p>Love the fit? Keep going with a plan that makes learning feel natural and lasting.</p><span className="step-line" /></div>
            </div>
            <div className="steps-cta"><a className="button button-primary button-large" {...registrationLinkProps}>Book my free trial <ArrowRight size={18} /></a><span>It takes less than 2 minutes.</span></div>
          </div>
        </section>

        <section className="reviews-section section-pad">
          <div className="container">
            <div className="reviews-top"><div><div className="eyebrow">Words from our community</div><h2>Families come for a class.<br /><em>They stay for the feeling.</em></h2></div><div className="review-score"><div className="stars">★★★★★</div><strong>4.9</strong><span>from 100+ family reviews</span></div></div>
            <div className="reviews-grid">
              <blockquote><div className="quote-mark">“</div><p>My daughter was so shy about reading Arabic. Within a few weeks, she was asking to practice on her own. Her teacher made her feel like she could do anything.</p><footer><span className="review-avatar avatar-amber">NA</span><span><strong>Nour A.</strong><small>Parent of a 9-year-old</small></span><span className="quote-stars">★★★★★</span></footer></blockquote>
              <blockquote className="review-featured"><div className="quote-mark">“</div><p>The flexibility is everything for our family. We can keep our daughter connected to Quran even during the busiest seasons of life.</p><footer><span className="review-avatar avatar-green">ZA</span><span><strong>Zainab A.</strong><small>Parent of three</small></span><span className="quote-stars">★★★★★</span></footer></blockquote>
              <blockquote><div className="quote-mark">“</div><p>It feels less like an online class and more like a real relationship. My son looks forward to seeing his teacher every week.</p><footer><span className="review-avatar avatar-clay">OM</span><span><strong>Omar M.</strong><small>Parent of a 6-year-old</small></span><span className="quote-stars">★★★★★</span></footer></blockquote>
            </div>
          </div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro"><div className="eyebrow">Good questions welcome</div><h2>We&apos;re here to make this <em>easy.</em></h2><p>Still wondering about the details? Send us a note — a real person will get back to you.</p><a className="arrow-link arrow-button" {...registrationLinkProps}>Talk to our team <ArrowRight size={18} /></a></div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div className={`faq-item ${openFaq === index ? "is-open" : ""}`} key={faq.question}>
                  <button type="button" className="faq-question" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                    <span><small>0{index + 1}</small>{faq.question}</span><ChevronDown size={19} />
                  </button>
                  <div className="faq-answer"><p>{faq.answer}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta" id="trial">
          <div className="final-cta-orb orb-left" /><div className="final-cta-orb orb-right" />
          <div className="container final-cta-content"><span className="final-spark">✦</span><div className="eyebrow eyebrow-light">A meaningful next step</div><h2>Make room for what<br /><em>matters most.</em></h2><p>Your first lesson is free. Your next chapter starts whenever you&apos;re ready.</p><a className="button button-light button-large" {...registrationLinkProps}>Book your free trial <ArrowRight size={18} /></a><span className="final-note"><ShieldCheck size={15} /> No card required · 100% money-back guarantee</span></div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand"><BrandLogo /><p>Live Quran, Arabic, and Islamic Studies for Muslim families everywhere.</p><div className="socials"><a href="#top" aria-label="Instagram">ig</a><a href="#top" aria-label="Facebook">f</a><a href="#top" aria-label="YouTube">▶</a></div></div>
          <div className="footer-links"><div><strong>Explore</strong><a href="#approach">Our approach</a><a href="#subjects">What we teach</a><a href="#how-it-works">How it works</a></div><div><strong>For families</strong><a {...registrationLinkProps}>Book a free trial</a><a href="#faq">FAQs</a><a {...registrationLinkProps}>Parent portal</a></div><div><strong>Say hello</strong><a href="mailto:miss.doaa.hussien.96@gmail.com">miss.doaa.hussien.96@gmail.com</a><span>Everywhere · Online</span></div></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 MUDDAKIR. Made with intention.</span><span>Private tutoring & small-group learning only.</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </div>
  );
}

function ArrowUpRightIcon() {
  return <ArrowRight size={18} className="subject-arrow" />;
}
