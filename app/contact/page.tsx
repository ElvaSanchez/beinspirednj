import { Heading, PageHero, Section } from "@/components/Section";
import { InquiryForm } from "@/components/Forms";
export const metadata = { title: "Contact", description: "Connect with Be Inspired NJ about programs, volunteering, partnerships, event registration, or donations. We would love to hear from you." };
export default async function Contact({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const value = (key: string) => typeof params[key] === "string" ? params[key] as string : "";
  return <><PageHero title="Contact Us" eyebrow="Opportunity starts with a conversation"/><Section><Heading title="We Would Love to Hear from You!"><p>Whether you are interested in our programs, volunteering, partnering with us, attending an event, or supporting our mission, we are here to connect and help.</p></Heading><div className="form-layout"><div><h3>Let&apos;s Connect</h3><InquiryForm topic={value("topic")} event={value("event")} amount={value("amount")}/></div><aside className="contact-card"><h3>Be Inspired NJ</h3><p>Have a question or want to learn more about Be Inspired NJ? Send us a message and a member of our team will get back to you.</p><p>Contact us here — email us at:</p><a href="mailto:info@beinspirednj.com">info@beinspirednj.com</a><hr/><p className="eyebrow">New Jersey</p><p>We appreciate your message and will respond as soon as possible.</p></aside></div></Section></>;
}
