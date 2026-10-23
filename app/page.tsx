import Nav from "@/components/Nav";
import Board from "@/components/Board";

const steps = [
  ["Discover", "Search by niche, platform, audience and location. Save shortlists you can reuse."],
  ["Reach out", "Message creators on WhatsApp, Instagram and email, with every reply and follow-up in one history."],
  ["Close", "See who is interested, negotiating or confirmed, with fees and deliverables beside each name."],
  ["Launch", "Write the brief, assign creators and set deadlines in one campaign."],
  ["Deliver", "Collect drafts, send feedback, approve content and record usage rights."],
  ["Measure", "Review content, clicks, attributed orders and commissions, then plan the next campaign."],
];

const problems = [
  "Creators found in one tool, chased in three others.",
  "Nobody can say who is confirmed and who went quiet.",
  "Revisions and approvals buried in chat threads.",
  "Affiliate sales and commissions reconciled by hand.",
];

const ai = [
  ["Creator recommendations", "Shortlists matched to your brand and campaign."],
  ["Message drafts", "Outreach and follow-ups written for each creator."],
  ["Campaign briefs", "A first draft of goals, deliverables and timeline."],
  ["Performance summaries", "Plain-language readouts of what worked."],
];

const channels = [
  ["Creator management", "Build your network, run outreach, track negotiations and keep relationships on record."],
  ["UGC marketplace", "Commission videos, photos and reviews with briefs, revisions and approvals built in."],
  ["Affiliate commerce", "Give creators tracking links or codes and see eligible sales and commissions."],
];

const audiences = [
  ["Brands", "Run your own creator programme end to end."],
  ["Agencies", "Manage many clients and campaigns without losing track."],
  ["Freelancers", "Organise outreach, clients and deliverables solo."],
  ["Creators", "Find eligible campaigns and manage agreed deliverables."],
];

const tools: [string, boolean][] = [
  ["WhatsApp Business", true], ["Instagram", true], ["Email", true],
  ["Shopify", true], ["WooCommerce", false], ["YouTube", false],
];

const faqs = [
  ["What is Infloro?", "An AI-assisted platform for creator discovery, outreach, CRM, campaigns, UGC and affiliate commerce, built for brands, agencies and creators."],
  ["Can I message creators on WhatsApp, Instagram and email?", "Yes, where the integration is connected and the platform's official permissions allow it."],
  ["Can creators earn affiliate commissions?", "Yes, in eligible campaigns. Commissions follow the campaign terms and the tracking you have set up."],
  ["Does Infloro guarantee sales or ROI?", "No. Results depend on audience fit, content, offer and execution. Infloro helps you organise the work and read the data."],
  ["Are all AI features live today?", "Only features enabled in the product are shown as available. Planned ones are labelled Coming soon."],
];

export default function Home() {
  return (
    <>
      <div className="bar">The smarter way to manage creator marketing</div>
      <Nav />
      <main>
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="kicker">Creator marketing and commerce platform</p>
            <h1>From finding creators to final deliverables, in one place.</h1>
            <p className="lead">
              Discover creators, run outreach, close collaborations, launch campaigns and track
              results without moving between six tools.
            </p>
            <div className="actions">
              <a className="btn btn-violet" href="#cta">Get started</a>
              <a className="btn btn-line" href="#cta">Book a demo</a>
            </div>
          </div>
          <Board />
        </section>

        <section className="wrap split" id="problem">
          <h2>Creator marketing shouldn&apos;t be a puzzle of disconnected tools.</h2>
          <ul className="plain">
            {problems.map((p) => <li key={p}>{p}</li>)}
          </ul>
        </section>

        <section className="wrap split" id="journey">
          <div className="sticky">
            <h2>One journey, from first search to final report.</h2>
            <p className="muted">Each stage hands its work to the next, so nothing is retyped or lost.</p>
          </div>
          <ol className="steps">
            {steps.map(([t, d], i) => (
              <li key={t}>
                <span className="num">{i + 1}</span>
                <div><h3>{t}</h3><p>{d}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="band">
          <div className="wrap split">
            <div className="sticky">
              <h2>AI inside the workflow, not beside it.</h2>
              <p className="muted">Assistance at the points where teams lose the most time.</p>
            </div>
            <div className="ai-grid">
              {ai.map(([t, d]) => (
                <div key={t}><h3>{t}</h3><p>{d}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap" id="channels">
          <h2 className="center">Three ways to grow, one platform.</h2>
          <div className="trio">
            {channels.map(([t, d]) => (
              <article key={t}><h3>{t}</h3><p>{d}</p></article>
            ))}
          </div>
        </section>

        <section className="wrap" id="audiences">
          <h2 className="center">Built for the people who run creator programmes.</h2>
          <div className="aud">
            {audiences.map(([t, d]) => (
              <a href="#cta" key={t}><h3>For {t.toLowerCase()}</h3><p>{d}</p><span aria-hidden>→</span></a>
            ))}
          </div>
        </section>

        <section className="wrap split">
          <div className="sticky">
            <h2>Connect the tools you already use.</h2>
            <p className="muted">Availability depends on your account and official platform permissions.</p>
          </div>
          <ul className="tools">
            {tools.map(([n, live]) => (
              <li key={n}>{n}{!live && <em>Coming soon</em>}</li>
            ))}
          </ul>
        </section>

        <section className="wrap split" id="faq">
          <h2>Questions, answered.</h2>
          <div className="faq">
            {faqs.map(([q, a]) => (
              <details key={q}><summary>{q}</summary><p>{a}</p></details>
            ))}
          </div>
        </section>

        <section className="cta wrap" id="cta">
          <h2>Stop managing creator marketing in pieces.</h2>
          <p>Discover creators, build relationships, launch campaigns and see results, all in one place.</p>
          <div className="actions center-a">
            <a className="btn btn-white" href="#">Get started</a>
            <a className="btn btn-ghost" href="#">Book a demo</a>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-row">
          <div>
            <a href="#" className="logo"><span className="logo-mark" aria-hidden />infloro</a>
            <p>AI-assisted creator marketing and commerce.</p>
          </div>
          <nav aria-label="Footer">
            <a href="#journey">Features</a><a href="#audiences">Solutions</a><a href="#faq">Resources</a>
            <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a>
          </nav>
        </div>
        <p className="wrap copy">© 2026 Infloro. All rights reserved.</p>
      </footer>
    </>
  );
}
