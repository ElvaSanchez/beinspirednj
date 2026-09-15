import type { MetadataRoute } from "next";
import { articles, nav } from "@/lib/content";
export default function sitemap(): MetadataRoute.Sitemap {return [...nav.map(n=>n.href),"/contact","/our-leadership","/board/tatiana-lopez","/board/angie-todd",...articles.map(a=>`/inspiration/${a.slug}`)].map(path=>({url:`https://beinspirednj.org${path}`,changeFrequency:"monthly",priority:path === "/" ? 1 : 0.7}));}
