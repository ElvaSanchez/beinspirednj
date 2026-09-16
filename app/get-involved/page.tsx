import { Copy, Heading, PageHero, Section } from "@/components/Section";
import { InquiryForm } from "@/components/Forms";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { copy } from "@/lib/content";
export const metadata = { title: "Get Involved", description: "Volunteer, share your expertise, partner, donate, or attend an event. Help Be Inspired NJ create more opportunities for women." };
export default function GetInvolved() { return <>
  <PageHero title="Be Part of Something Meaningful" eyebrow="There is a place for you here" image="involved/hero"/>
  <Section className="center"><Heading title="Creating stronger communities takes all of us."><p>There are many ways to support the mission of Be Inspired NJ—whether you have time to give, expertise to share, resources to contribute, or simply want to help us open more doors for women.</p></Heading><div className="grid grid-4">{[["Volunteer","Share your time, expertise, or talents","#volunteer"],["Partner","Collaborate with us to expand community impact","#partner"],["Donate","Help create more opportunities for women","/donate"],["Attend","Participate in workshops, programs, and community events","/events"]].map(([title,text,href],i) => <article className="pathway-card" key={title}><span className="pathway-number">0{i+1}</span><h3>{title}</h3><p>{text}</p><Button href={href} variant="ghost">{title}</Button></article>)}</div></Section>
  <Section id="volunteer" tone="sand"><div className="split"><PlaceholderImage id="involved/volunteer"/><div><Heading eyebrow="Volunteer" title="Your Time and Talents Can Make an Impact"/><Copy name="volunteer"/><Button href="#volunteer-form">Become a Volunteer</Button></div></div></Section>
  <Section><div className="split"><div><Heading eyebrow="Share Your Expertise" title="Your Knowledge Can Help Someone Move Forward"/><Copy name="expertise"/><Button href="/contact?topic=expertise">Share Your Expertise</Button></div><PlaceholderImage id="involved/expertise"/></div></Section>
  <Section id="partner" tone="teal"><div className="split"><PlaceholderImage id="involved/partner"/><div><Heading title="Partner With Us"/><Copy name="partner"/><Button href="/contact?topic=partner" variant="secondary">Contact to Partner With Us</Button></div></div></Section>
  <Section><Heading title="Volunteer Expectations"/><ul className="expectations">{copy.expectations.map(text => <li key={text}>{text}</li>)}</ul></Section>
  <Section id="volunteer-form" tone="sand"><Heading title="Volunteer Interest Form"/><div className="form-layout"><InquiryForm kind="volunteer"/><aside className="contact-card"><h3>Thank You / What Happens Next</h3><Copy name="nextSteps"/><p className="form-note">The form currently provides a local preview confirmation. Email our team to submit your interest.</p><a href="mailto:info@beinspirednj.com">info@beinspirednj.com</a></aside></div></Section>
  <Section><div className="editorial"><Heading eyebrow="A few things to know" title="Frequently Asked Questions"/><div><FAQ/><p>Can’t find the answer you’re looking for? Contact us and we’ll be happy to help.</p><a href="mailto:info@beinspirednj.com">info@beinspirednj.com</a></div></div></Section>
</>; }
