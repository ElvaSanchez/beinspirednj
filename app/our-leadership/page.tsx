import { Copy, Heading, PageHero, Section } from "@/components/Section";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { LeadershipCards } from "@/components/LeadershipCards";
import { Button } from "@/components/Button";
import { copy } from "@/lib/content";
export const metadata = { title: "Our Leadership", description: "Meet Dr. LaToya Pryce, Founder & President of Be Inspired NJ, and the Board of Directors helping turn possibility into opportunity." };
export default function Leadership() { return <>
  <PageHero title="Meet the Founder" eyebrow="Purpose-led. Community-centered."/>
  <Section><div className="bio-layout"><PlaceholderImage id="leadership/latoya"/><div><Heading title="Dr. LaToya Pryce"/><p className="eyebrow">Founder & President, Be Inspired NJ</p><Copy name="founder"/></div></div></Section>
  <Section tone="teal"><Heading title="A Message From Our Founder"/><blockquote className="founder-quote"><Copy name="founderQuote"/></blockquote></Section>
  <Section><Heading title="Our Leadership Philosophy"/><Copy name="philosophy"/><div className="grid grid-4 section-end">{copy.principles.map(value => {const [title,text] = value.split(" — "); return <article className="value-card" key={title}><h3>{title}</h3><p>{text}</p></article>;})}</div></Section>
  <Section tone="sand"><Heading title="Board of Directors"/><LeadershipCards comingSoon/></Section>
  <Section className="center"><Heading title="Help Us Build What's Possible"/><Copy name="leadershipClose"/><div className="actions"><Button href="/get-involved">Get Involved</Button><Button href="/contact?topic=partner">Partner With Us</Button><Button href="/donate">Support Our Mission</Button><Button href="/contact?topic=programs" variant="ghost">Book a Conversation</Button></div></Section>
</>; }
