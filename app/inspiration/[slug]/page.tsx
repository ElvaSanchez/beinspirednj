import { notFound } from "next/navigation";
import { articles } from "@/lib/content";
import { PageHero, Section, Heading } from "@/components/Section";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/Button";
export function generateStaticParams() { return articles.map(({slug}) => ({slug})); }
export async function generateMetadata({params}: {params: Promise<{slug:string}>}) { const {slug} = await params; const found = articles.find(a => a.slug === slug); return {title:found?.title,description:found?.teaser.join(" ")}; }
export default async function ArticlePage({params}: {params: Promise<{slug:string}>}) { const {slug} = await params; const article = articles.find(a => a.slug === slug); if (!article) notFound(); return <><PageHero title={article.title} eyebrow="Inspiration & Resources" image={article.image}/><Section><div className="reading article-body"><Button href="/inspiration-resources" variant="ghost">Back to Inspiration & Resources</Button>{article.body.map((text,i) => /^\d\. |^Financial Wellness Starts|^Community Is More|^Protecting Your Peace Does/.test(text) ? <h2 key={i}>{text}</h2> : <p key={i}>{text}</p>)}<Button href={article.href}>{slug === "ready-to-lead" ? "Explore leadership programs" : "Take Your Next Step"}</Button></div></Section><Section tone="sand"><Heading title="Keep exploring"/><div className="grid grid-3">{articles.filter(a => a.slug !== slug).slice(0,3).map(a => <ArticleCard article={a} key={a.slug}/>)}</div></Section></>; }

