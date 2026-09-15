import { Copy, Heading, PageHero, Section } from "@/components/Section";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ArticleCard } from "@/components/ArticleCard";
import { Newsletter } from "@/components/Forms";
import { Button } from "@/components/Button";
import { articles } from "@/lib/content";
export const metadata = { title: "Inspiration & Resources", description: "Ideas, resources, and stories to support leadership, personal growth, financial wellness, entrepreneurship, and stronger communities." };
export default function Resources() { return <>
  <PageHero title="Ideas, Resources & Stories to Help You Move Forward" eyebrow="Inspiration & Resources" image="inspiration/hero"><Copy name="resourcesIntro"/></PageHero>
  <Section className="center"><Heading title="Learn. Grow. Be Inspired."/><Copy name="resourcesWelcome"/></Section>
  <Section tone="sand"><div className="grid grid-3">{articles.map(article => <ArticleCard article={article} key={article.slug}/>)}</div></Section>
  <Section tone="teal"><div className="split"><Heading title="Event Recaps"><p>Highlights, lessons, photos, and memorable moments from Be Inspired NJ programs and community events.</p></Heading><div><Button href="/events#recaps" variant="secondary">View Event Recaps</Button></div></div></Section>
  <Section><Heading title="Volunteer Spotlights"><p>Meet the people who give their time, talents, and energy to support our mission and strengthen our community.</p></Heading><div className="grid grid-3">{[1,2,3].map(i => <article className="volunteer-card center" key={i}><PlaceholderImage id={`inspiration/volunteer-${i}`}/><h3>Coming soon</h3><p className="eyebrow">Name / Position</p></article>)}</div></Section>
  <Section tone="sand"><Heading title="Partner Highlights"><p>Celebrate the organizations, businesses, and community leaders working with Be Inspired NJ to expand opportunities for women.</p></Heading><div className="grid grid-4">{[1,2,3,4].map(i => <PlaceholderImage id={`inspiration/partner-${i}`} key={i}/>)}</div></Section>
  <Section className="center"><Heading title="Stay Inspired. Stay Connected."><p>Receive new resources, community stories, program updates, upcoming events, and opportunities to get involved with Be Inspired NJ.</p></Heading><Button href="#subscribe">Stay Connected</Button></Section><Newsletter/>
</>; }
