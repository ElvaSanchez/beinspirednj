import type { Article } from "@/lib/content";
import { PlaceholderImage } from "./PlaceholderImage";
import { Button } from "./Button";
export function ArticleCard({ article }: { article: Article }) { return <article className="article-card"><PlaceholderImage id={`inspiration/${article.slug}`}/><div className="card-body"><p className="eyebrow">Inspiration & Resources</p><h3>{article.slug === "starting-a-business" ? "Thinking About Starting a Business? Start With These Five Questions" : article.title}</h3><p>{article.teaser.join(" ")}</p><Button href={`/inspiration/${article.slug}`} variant="ghost">View Full Article</Button></div></article>; }
