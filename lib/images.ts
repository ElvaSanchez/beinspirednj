import { articles, programs } from "./content";

export interface ImageSlot { id: string; aspect: string; page: string; subject: string; path: string; shape?: "rect" | "circle"; available?: boolean }
const slot = (id: string, aspect: string, subject: string, shape?: "rect" | "circle"): ImageSlot => ({ id, aspect, subject, shape, page: id.split("/")[0], path: `/images/${id}.jpg` });
const programSubjects = ["Two professional women in conversation", "Woman presenting at a whiteboard to a small team", "Coins with a rising red ladder — financial growth", "Smiling woman business owner in a plant shop"];
export const images: ImageSlot[] = [
  slot("brand/logo", "176/138", "Be Inspired NJ butterfly mark — teal, violet, and rose wings"),
  { ...slot("home/hero", "1537/1023", "Four women outdoors at golden hour, laughing together, one fist raised in joy"), path: "/images/home/hero.png" },
  { ...slot("home/who-we-are", "1/1", "Two women greeting one another warmly in a sunlit community space", "circle"), available: true },
  ...programs.flatMap((p, i) => [{ ...slot(`home/program-${p.id}`, "2/1", ["Two women sharing a mentorship conversation beside a sunlit window", "A woman leading a discussion with workshop participants", "A woman reviewing her budget with a planner and calculator", "A woman arranging a bouquet in a neighborhood flower studio"][i]), available: true }, slot(`programs/${p.id}`, "2/1", programSubjects[i])]),
  { ...slot("home/impact", "3/2", "A woman helping another woman learn a digital skill on a laptop"), available: true },
  ...["Woman speaking on stage from behind, in a spotlight", "Woman with a lanyard presenting in front of colorful slides", "Two women in conversation in lounge chairs before an audience", "Woman with a lanyard in front of a giant WELCOME! wall", "Two women collaborating at a table with a laptop", "Woman in a red blazer speaking on stage, smiling"].map((subject, i) => slot(`about/mosaic-${i + 1}`, "4/3", subject)),
  slot("about/founder", "3/4", "Portrait of Dr. LaToya Pryce, Founder"),
  slot("about/tatiana", "1/1", "Portrait of Tatiana Lopez, Board Member"),
  slot("about/angie", "1/1", "Portrait of Andreau ‘Angie’ Todd, Board Member"),
  slot("programs/hero", "16/9", "Woman presenting to a diverse seated group, viewed from behind"),
  ...Array.from({ length: 4 }, (_, i) => slot(`programs/gallery-${i + 1}`, "4/3", `Program and workshop photography ${i + 1}`)),
  slot("events/hero", "21/9", "Women smiling and clapping — community energy"),
  slot("events/legacy-collective", "16/9", "The Legacy Collective Conference — leadership gathering"),
  ...Array.from({ length: 3 }, (_, i) => slot(`events/recap-${i + 1}`, "4/3", "Photos coming after October 15, 2026")),
  ...Array.from({ length: 3 }, (_, i) => slot(`events/gallery-${i + 1}`, "4/3", `Community event photography ${i + 1}`)),
  slot("inspiration/hero", "21/9", "Women sharing ideas, resources, and stories"),
  ...articles.flatMap(a => [slot(`inspiration/${a.slug}`, "16/9", a.title), slot(a.image, "16/9", a.title)]),
  ...Array.from({ length: 3 }, (_, i) => slot(`inspiration/volunteer-${i + 1}`, "1/1", "Volunteer portrait — coming soon", "circle")),
  ...Array.from({ length: 4 }, (_, i) => slot(`inspiration/partner-${i + 1}`, "2/1", "Community partner logo — coming soon")),
  slot("involved/hero", "16/9", "Two women in VOLUNTEER t-shirts outdoors, smiling, one handing a water bottle"),
  slot("donate/hero", "16/9", "Open hands holding a red heart — care and giving"),
  slot("leadership/latoya", "3/4", "Portrait of Dr. LaToya Pryce, Founder & President"),
  ...Array.from({ length: 3 }, (_, i) => slot(`leadership/coming-soon-${i + 1}`, "1/1", "Board member portrait — coming soon")),
  slot("board/tatiana", "3/4", "Portrait of Tatiana Lopez"),
  slot("board/angie", "3/4", "Portrait of Andreau ‘Angie’ Todd"),
  slot("social/og", "1200/630", "Be Inspired NJ social sharing image"),
];
