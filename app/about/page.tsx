import { Copy, Heading, Section } from "@/components/Section";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Button } from "@/components/Button";
import { LeadershipCards } from "@/components/LeadershipCards";
import { copy } from "@/lib/content";
export const metadata = { title: "About", description: "Our story, mission, values, and 2024–2027 impact goals. Discover how Be Inspired NJ turns inspiration into opportunity for women." };
export default function About() { return <>
  <section className="about-hero dark"><div className="container"><p className="eyebrow">Our purpose. Our people. Our possibility.</p><div className="mosaic">{[1,2,3,4,5,6].map(i => <PlaceholderImage id={`about/mosaic-${i}`} key={i}/>)}</div><div className="center"><h1>Where Purpose Meets Possibility</h1><Copy name="purpose"/></div></div></section>
  <Section><div className="editorial"><Heading eyebrow="Our Story" title="Inspiration can open the door."/><Copy name="story"/></div></Section>
  <Section tone="sand"><div className="editorial"><Heading eyebrow="Our Approach" title="Your future. Defined by you."/><Copy name="approach"/></div></Section>
  <Section><Heading title="What We Believe"/><div className="beliefs">{copy.beliefs.map((text, i) => <p key={text}><span>0{i+1}</span>{text}</p>)}</div></Section>
  <Section tone="teal"><Heading title="Mission & Vision"/><div className="grid grid-2">{["mission","vision"].map(key => <article className="outlined-card" key={key}><h3>{key === "mission" ? "Mission" : "Vision"}</h3><Copy name={key}/></article>)}</div></Section>
  <Section id="impact-goals" className="center"><Heading eyebrow="Present 2024–2027 impact goals" title="Building toward lasting impact"/><div className="grid grid-3 stats">{[["150+","Women Empowered"],["10+","Community Partnerships"],["$150K","Funding Goal"]].map(([value,label]) => <div key={label}><strong>{value}</strong><p>{label}</p></div>)}</div><p className="muted">First Annual Impact Report.</p><p className="form-note">These figures represent our 2024–2027 goals.</p></Section>
  <Section tone="sand"><Heading title="Our Core Values"/><div className="grid grid-3">{copy.values.map((value,i) => { const [title, text] = value.split(" — "); return <article className="value-card" key={title}><span className="eyebrow">0{i+1}</span><h3>{title}</h3><p>{text}</p></article>; })}</div></Section>
  <Section><div className="split"><PlaceholderImage id="about/founder"/><div><Heading eyebrow="Our Leadership" title="Dr. LaToya Pryce"/><p className="eyebrow">Founder</p><p>Be Inspired NJ is guided by leadership committed to creating opportunities for women, strengthening communities, and turning inspiration into meaningful action.</p><Button href="/our-leadership">Meet the Founder</Button></div></div></Section>
  <Section tone="sand"><Heading title="Board of Directors"><p>Be Inspired NJ&apos;s Board of Directors helps guide the organization&apos;s mission, growth, accountability, and long-term community impact.</p></Heading><LeadershipCards/></Section>
  <Section tone="dark" className="center"><Heading title="What Makes Us Different"/><Copy name="different"/><Button href="/get-involved">Be Part of the Change</Button></Section>
</>; }
