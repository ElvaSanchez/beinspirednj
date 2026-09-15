import { notFound } from "next/navigation";
import { Copy, PageHero, Section } from "@/components/Section";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { Button } from "@/components/Button";
const members = [{slug:"tatiana-lopez",name:"Tatiana Lopez",key:"tatiana"},{slug:"angie-todd",name:"Andreau “Angie” Todd",key:"angie"}];
export function generateStaticParams() {return members.map(({slug}) => ({slug}));}
export async function generateMetadata({params}: {params:Promise<{slug:string}>}) { const {slug} = await params; const member = members.find(m => m.slug === slug); return {title:member?.name,description:`Meet ${member?.name}, Board Member of Be Inspired NJ.`}; }
export default async function Board({params}: {params:Promise<{slug:string}>}) { const {slug} = await params; const member = members.find(m => m.slug === slug); if (!member) notFound(); return <><PageHero title={member.name} eyebrow="Board Member, Be Inspired NJ"/><Section><div className="bio-layout"><PlaceholderImage id={`board/${member.key}`}/><div><Copy name={member.key}/><div className="actions"><Button href="/about" variant="ghost">Back to About</Button><Button href="/our-leadership" variant="ghost">Our Leadership</Button></div></div></div></Section></>; }
