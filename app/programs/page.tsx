import { Copy, Gallery, Heading, PageHero, Section } from "@/components/Section";
import { ProgramCard } from "@/components/ProgramCard";
import { InquiryForm } from "@/components/Forms";
import { Button } from "@/components/Button";
import { programs } from "@/lib/content";
export const metadata = { title: "Programs", description: "Explore mentorship, leadership development, financial wellness, and entrepreneurship programs for women at Be Inspired NJ." };
export default function Programs() { return <>
  <PageHero title="Our Programs" eyebrow="Practical tools. Meaningful connections." image="programs/hero"/>
  <Section className="center"><Heading title="Programs That Turn Inspiration Into Action"/><Copy name="programIntro"/><div className="anchor-nav">{programs.map(p => <a href={`#${p.id}`} key={p.id}>{p.title} ↓</a>)}</div></Section>
  <Section tone="sand">{programs.map((program,index) => <ProgramCard key={program.id} program={program} index={index} expanded/>)}</Section>
  <Section tone="teal" className="center"><Heading title="Interested in Participating?"/><Copy name="participate"/><div className="actions"><Button href="/get-involved" variant="secondary">Get Involved</Button><Button href="/get-involved#partner" variant="secondary">Partner With Us</Button><Button href="/contact" variant="secondary">Contact Us</Button></div></Section>
  <Gallery prefix="programs/gallery" count={4} title="Photos"/>
  <Section tone="sand"><Heading title="Voices From Our Community"><p>Real participant experiences and testimonials will be shared here as Be Inspired NJ continues to grow.</p></Heading><div className="grid grid-3">{[1,2,3].map(i => <article className="testimonial" key={i}><span aria-hidden="true">“</span><p>Participant story coming soon</p><h3>Coming soon</h3><p className="eyebrow">Name / Role</p></article>)}</div></Section>
  <Section id="program-inquiry"><Heading eyebrow="Drop us a line!" title="Interested in the Program?"/><div className="form-layout"><InquiryForm kind="program"/><aside className="contact-card"><h3>We&apos;d love to hear from you</h3><p>Want to learn more about a Be Inspired NJ program or upcoming opportunity?</p><h4>Contact Be Inspired NJ</h4><a href="mailto:info@beinspirednj.com">info@beinspirednj.com</a></aside></div></Section>
</>; }
