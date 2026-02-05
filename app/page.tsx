
import Link from "next/link";
import Image from "next/image";
import "./home.css";

type BriefingItem = {
  tag: "News" | "Training" | "Safety" | "Student Life" | "Updates";
  title: string;
  date: string;
  excerpt: string;
  href?: string;
};

export default async function HomePage() {
  const briefing: BriefingItem[] = [
    {
      tag: "Training",
      title: "Start with a Plan, Not Guesswork",
      date: "Updated weekly",
      excerpt:
        "Your first weeks matter most. Learn how we structure training to build confidence fast—without skipping fundamentals.",
      href: "/book-orientation",
    },
    {
      tag: "Safety",
      title: "Standards Before Hours",
      date: "Ongoing",
      excerpt:
        "Proficiency-based training builds safer pilots. We don’t rush milestones—we build mastery.",
      href: "/transparency",
    },
    {
      tag: "Updates",
      title: "Instructor Standards & Selection",
      date: "Now available",
      excerpt:
        "Our instructor team is selected for discipline, standardization, and mentorship. See what we require from every instructor.",
      href: "/instructors",
    },
    {
      tag: "Student Life",
      title: "What to Expect During Orientation",
      date: "New",
      excerpt:
        "A short, focused session that clarifies your path, timeline, and next steps so you can start with confidence.",
      href: "/book-orientation",
    },
  ];

  // Local gallery images (put these in /public/images/gallery/)
  const gallery = [
    "/images/gallery/01.jpg",
    "/images/gallery/02.jpg",
    "/images/gallery/03.jpg",
    "/images/gallery/04.jpg",
    "/images/gallery/05.jpg",
    "/images/gallery/06.jpg",
  ];

  return (
    <main className="home">
      {/* HERO */}
      <section className="hero" id="top">
        <div className="heroBg" aria-hidden="true" />
        <div className="container heroGrid">
          <div className="heroCopy">
            <div className="kicker">Royal International Flight School</div>
            <h1>Train Like a Professional Pilot — From Day One.</h1>
            <p className="heroLead">
              Structured training. Safety-first culture. International standards.
              Start your journey with clarity, discipline, and the right plan.
            </p>

            <div className="heroActions">
              <Link className="btn btnPrimary" href="/book-orientation">
                Book Orientation
              </Link>
              <Link className="btn btnSecondary" href="/contact">
                Contact Admissions
              </Link>
            </div>

            <div className="heroBadges">
              <span className="badge">Safety First</span>
              <span className="badge">Structured Syllabus</span>
              <span className="badge">Mentorship Focused</span>
            </div>
          </div>

          <div className="heroVisual" aria-label="Hero Visual">
            <div className="heroCard">
              <div className="heroCardTop">
                <div className="chip">Royal Briefing</div>
                <div className="chip chipSoft">Admissions Open</div>
              </div>

              <div className="heroImage">
                <Image
                  src="/images/home/hero.jpg"
                  alt="Flight training"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 42vw"
                />
              </div>

              <div className="heroCardBottom">
                <div className="stat">
                  <div className="statTop">Focus</div>
                  <div className="statVal">Proficiency</div>
                </div>
                <div className="stat">
                  <div className="statTop">Culture</div>
                  <div className="statVal">Discipline</div>
                </div>
                <div className="stat">
                  <div className="statTop">Standard</div>
                  <div className="statVal">Professional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust">
        <div className="container trustGrid">
          {[
            { title: "Safety-first operations", sub: "Standards guide every decision" },
            { title: "Structured progression", sub: "Clear milestones and debriefs" },
            { title: "Professional mindset", sub: "Train like your career depends on it" },
            { title: "Global perspective", sub: "Prepare for international pathways" },
          ].map((x) => (
            <div key={x.title} className="trustCard">
              <div className="trustTitle">{x.title}</div>
              <div className="trustSub">{x.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ROYAL BRIEFING */}
      <section className="briefing">
        <div className="container">
          <div className="sectionHead">
            <div>
              <h2>Royal Briefing</h2>
              <p className="muted">
                News, training insights, updates, and highlights—designed like a gallery.
              </p>
            </div>
            <div className="sectionActions">
              <Link className="btn btnSmall" href="/transparency">
                Standards
              </Link>
              <Link className="btn btnSmall btnOutline" href="/book-orientation">
                Start Here
              </Link>
            </div>
          </div>

          <div className="briefingGrid">
            {briefing.map((b) => (
              <article key={b.title} className="briefCard">
                <div className="briefMeta">
                  <span className={`tag tag${b.tag.replace(" ", "")}`}>{b.tag}</span>
                  <span className="date">{b.date}</span>
                </div>
                <h3>{b.title}</h3>
                <p>{b.excerpt}</p>
                {b.href ? (
                  <Link className="link" href={b.href}>
                    Read more →
                  </Link>
                ) : (
                  <span className="link disabled">Coming soon</span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL + GALLERY */}
      <section className="social">
        <div className="container">
          <div className="sectionHead">
            <div>
              <h2>Gallery & Updates</h2>
              <p className="muted">
                Follow our training moments, milestones, and the culture we build.
              </p>
            </div>

            {/* DIRECT PROFILE LINKS */}
            <div className="sectionActions">
              <a
                className="btn btnSmall btnOutline"
                href="https://www.instagram.com/royalinternationalflight"
                target="_blank"
                rel="noreferrer"
              >
                Instagram →
              </a>

              <a
                className="btn btnSmall btnOutline"
                href="https://www.tiktok.com/@royalinternationalflight"
                target="_blank"
                rel="noreferrer"
              >
                TikTok →
              </a>
            </div>
          </div>

          {/* LOCAL GALLERY (NO API) */}
          <div className="masonry">
            {gallery.map((src) => (
              <div className="tile" key={src}>
                <Image
                  src={src}
                  alt="Training gallery"
                  fill
                  sizes="(max-width: 900px) 50vw, 33vw"
                />
                <div className="tileOverlay">Gallery</div>
              </div>
            ))}
          </div>

          <div className="socialNote">
            Follow us for training updates, student milestones, and day-to-day life at Royal International.
          </div>
        </div>
      </section>

      {/* BIG CTA */}
      <section className="bigCta">
        <div className="container bigCtaGrid">
          <div>
            <h2>Start Your Dream With a Real Plan.</h2>
            <p>
              Book an orientation to map your timeline, answer your questions,
              and begin training with confidence.
            </p>
          </div>
          <div className="bigCtaActions">
            <Link className="btn btnPrimary" href="/book-orientation">
              Book Orientation
            </Link>
            <Link className="btn btnSecondary" href="/contact">
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
