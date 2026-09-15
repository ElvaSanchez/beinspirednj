import Image from "next/image";
import heroImage from "@/public/images/home/hero.png";
import { Button } from "@/components/Button";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Copy, Heading, Section } from "@/components/Section";
import { ProgramCard } from "@/components/ProgramCard";
import { ArticleCard } from "@/components/ArticleCard";
import { Newsletter } from "@/components/Forms";
import { articles, event, programs } from "@/lib/content";
export default function Home() { return <>
  <section className="home-hero" aria-labelledby="home-title">
    <h1 id="home-title" className="sr-only">Be Inspired NJ</h1>
    <p className="sr-only">Empowering women. Strengthening communities. Creating possibilities.</p>
    <Image src={heroImage} alt="Four women laughing together outdoors at golden hour, one raising her fist in celebration." className="home-hero-image" sizes="100vw" preload />
    <div className="hero-bottom"><span>EDUCATION · MENTORSHIP · COMMUNITY</span><a href="#opportunity">Discover what’s possible <span aria-hidden="true">↓</span></a></div>
  </section>
  <Section id="opportunity" className="center home-intro"><p className="eyebrow">Inspiration is just the beginning</p><h2>Every woman deserves<br/>access to <em>opportunity.</em></h2><Copy name="homeIntro"/></Section>
  <div className="cta-band"><div className="container"><p>Your next step starts here.</p><div className="actions"><Button href="/programs" variant="secondary">Explore Our Programs</Button><Button href="/get-involved" variant="secondary">Get Involved</Button></div></div></div>
  <Section><div className="split who-section"><div className="portrait-wrap"><PlaceholderImage id="home/who-we-are"/><span className="portrait-note">Possibility begins<br/><em>with connection.</em></span></div><div><Heading eyebrow="Who We Are" title="Inspiration can open the door. Opportunity creates lasting change."/><Copy name="who"/><Button href="/about" variant="ghost">Get to Know Be Inspired NJ</Button></div></div></Section>
  <Section tone="teal" className="featured-intro"><Heading eyebrow="Featured Programs" title="Programs That Turn Inspiration Into Action"><p>Our programs are designed to provide women with practical tools, meaningful relationships, and access to resources that support personal, professional, and financial growth.</p></Heading></Section>
  <Section tone="dark" className="program-section">{programs.map((program, index) => <ProgramCard program={program} index={index} key={program.id}/>)}<div className="center"><Button href="/programs" variant="secondary">View All Programs</Button></div></Section>
  <Section tone="sand" className="center"><Heading eyebrow="Why It Matters" title="Creating Opportunities That Make a Lasting Difference"/><Copy name="why"/></Section>
  <Section><div className="event-feature"><div className="event-date"><span>OCT</span><strong>14–15</strong><span>2026</span></div><div><Heading eyebrow="Upcoming Event" title={event.title}/><p className="event-location">{event.date}<br/>{event.venue} — {event.location}</p><p>Join leaders, professionals, entrepreneurs, and changemakers for two days of leadership development, meaningful conversations, networking, and connection.</p><Button href="/events#legacy-collective">View Event & Register</Button></div></div></Section>
  <Section tone="dark"><div className="split"><PlaceholderImage id="home/impact"/><div><Heading eyebrow="Our Impact" title="Impact Begins With Opportunity"/><Copy name="impact"/><Button href="/about#impact-goals">Explore Our Impact</Button></div></div></Section>
  <Section tone="sand" className="center"><Heading eyebrow="Get Involved" title="Be Part of the Change"/><Copy name="homeInvolved"/><div className="actions"><Button href="/get-involved">Get Involved</Button><Button href="/donate" variant="ghost">Donate</Button></div></Section>
  <Section><Heading eyebrow="Latest News" title="A little inspiration for your next step"><p>Stay connected with the latest updates, community stories, events, and highlights from Be Inspired</p></Heading><div className="grid grid-2">{articles.slice(0, 2).map(article => <ArticleCard article={article} key={article.slug}/>)}</div><div className="center section-end"><Button href="/inspiration-resources" variant="ghost">Explore More Inspiration & Resources</Button></div></Section>
  <Newsletter/>
</>; }
