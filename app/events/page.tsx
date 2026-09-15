import { Copy, Gallery, Heading, PageHero, Section } from "@/components/Section";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Button } from "@/components/Button";
import { event, tickets } from "@/lib/content";
export const metadata = { title: "Events", description: "Connect, learn, and lead at the Legacy Collective Conference, October 14–15, 2026, and explore Be Inspired NJ community events." };
const schedule = [
  {date:"October 14, 2026",title:"VIP Reception & Networking Experience",time:"6:00 pm – 8:00 pm",location:event.venue,text:"Connect with speakers, sponsors, and fellow attendees during an evening focused on conversation, networking, and relationship-building."},
  {date:"October 15, 2026",title:event.title,time:"8:00 am – 4:00 pm",location:event.venue,text:"A full day of leadership, learning, networking, and meaningful conversations designed to inspire lasting impact."},
  {date:"October 15, 2026",title:"Networking Breakfast",time:"8:00 am – 8:50 am",location:"The Collective Lounge",text:""},
  {date:"October 15, 2026",title:"Opening Remarks & Welcome",time:"9:00 am – 9:15 am",location:"Main Ballroom",text:"Conference hosts Amira Davis and Dr. LaToya Pryce welcome attendees and set the stage for a day of leadership, connection, and impact."},
  {date:"October 15, 2026",title:"Morning Keynote Address",time:"9:15 am – 10:00 am",location:"Main Ballroom",text:"Hear from distinguished leaders as they share insights on leadership, innovation, and creating meaningful impact."},
];
export default function Events() { return <>
  <PageHero title="Connect. Learn. Lead. Be Inspired." eyebrow="Events & Experiences" image="events/hero"><Copy name="eventIntro"/></PageHero>
  <Section id="legacy-collective"><Heading eyebrow="Upcoming Event" title={event.title}/><div className="split"><PlaceholderImage id="events/legacy-collective"/><div><h3>Leadership That Leaves a Legacy</h3><p className="event-location">{event.date}<br/>{event.venue}<br/>{event.location}</p><Button href={event.href}>Reserve Your Seat</Button></div></div><div className="reading section-end"><Copy name="conference"/></div></Section>
  <Section tone="sand"><Heading title="Two Days. One Powerful Experience"/><div className="timeline">{schedule.map(item => <details key={item.title} open><summary><span className="schedule-time">{item.date}<strong>{item.time}</strong></span><span><strong>{item.title}</strong><small>{item.location}</small></span><span aria-hidden="true">+</span></summary>{item.text && <p>{item.text}</p>}</details>)}</div><p className="agenda-note">Full agenda to be announced.</p></Section>
  <Section><Heading eyebrow="Make room for your next chapter" title="Registration Options"/><div className="grid grid-3">{tickets.map(ticket => <article className="ticket-card" key={ticket.title}><h3>{ticket.title}</h3><span className="ticket-price">{ticket.price}</span><p>{ticket.description}</p><Button href={event.href}>Reserve Your Seat</Button></article>)}</div></Section>
  <Section tone="teal" className="center"><Heading title="Register for an Upcoming Event"><p>Ready to join us? Explore upcoming Be Inspired NJ events and reserve your place.</p></Heading><h3>{event.title}</h3><p>{event.date} · {event.venue} · {event.location}</p><Button href={event.href} variant="secondary">Register for Upcoming Event</Button></Section>
  <Section id="recaps"><Heading eyebrow="Event Recaps" title="Event Photos & Recap"><p>Following the conference, Be Inspired NJ will share highlights, photos, and reflections from the Legacy Collective Conference.</p><p>Check back after October 15 for updates.</p></Heading><div className="grid grid-3">{[1,2,3].map(i => <PlaceholderImage id={`events/recap-${i}`} key={i}/>)}</div></Section>
  <Section tone="sand"><Heading title="Past Events & Community Impact"/><div className="table-scroll"><table><thead><tr>{["Event","Date","Location","Brief description","Image"].map(label => <th key={label}>{label}</th>)}</tr></thead><tbody><tr><td colSpan={5} className="empty-state">Coming soon</td></tr></tbody></table></div></Section>
  <Gallery title="Event Photos" prefix="events/gallery" count={3}/>
</>; }
