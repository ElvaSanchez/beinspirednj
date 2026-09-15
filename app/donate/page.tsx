import { Copy, Heading, PageHero, Section } from "@/components/Section";
import { Giving } from "@/components/Forms";
import { copy } from "@/lib/content";
export const metadata = { title: "Donate", description: "Help turn inspiration into opportunity. Explore ways your gift can support education, mentorship, and community programs for women in New Jersey." };
export default function Donate() { return <>
  <PageHero title="Help Turn Inspiration Into Opportunity" eyebrow="A gift today. Possibilities tomorrow." image="donate/hero"/>
  <Section className="center"><Heading title="Support Our Mission"/><Copy name="support"/></Section>
  <Section tone="sand"><div className="editorial"><Heading eyebrow="Why Your Support Matters" title="Your Support Creates Possibilities"/><Copy name="supportMatters"/></div></Section>
  <Section><div className="editorial"><Heading title="Where Your Support Goes"><p>Donations to Be Inspired NJ go toward:</p></Heading><ul className="expectations">{copy.supportGoes.map(text => <li key={text}>{text}</li>)}</ul></div></Section>
  <Section tone="sand"><Heading eyebrow="Choose your impact" title="Every Gift Matters"/><Giving/></Section>
  <Section tone="teal" className="center"><Heading title="Help Us Inspire What's Possible"/><Copy name="givingClose"/></Section>
</>; }
