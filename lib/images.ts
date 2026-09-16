import { articles, programs } from "./content";

export interface ImageSlot { id: string; aspect: string; page: string; subject: string; path: string; shape?: "rect" | "circle"; available?: boolean }
const slot = (id: string, aspect: string, subject: string, shape?: "rect" | "circle"): ImageSlot => ({ id, aspect, subject, shape, page: id.split("/")[0], path: `/images/${id}.jpg` });
const programSubjects = ["A young woman discussing her goals with a mentor in a library", "A young woman guiding a collaborative leadership exercise", "An educator reviewing financial worksheets with two women", "A young entrepreneur and her mentor reviewing a handmade tote and packaging"];
const articleImages: Record<string, { path: string; subject: string }> = {
  "ready-to-lead": { path: "/ImagesOfBeInspired/FiveSings.png", subject: "A young woman guiding a group discussion around a table" },
  "your-next-chapter": { path: "/YourNextChapter.png", subject: "A young woman writing in a notebook beside her laptop in a sunlit workspace" },
  "financial-wellness": { path: "/ImagesOfBeInspired/FinantialWellness.png", subject: "Two women reviewing financial paperwork with a notebook and calculator" },
  "power-of-community": { path: "/ImagesOfBeInspired/ThePowerOfCommunity.png", subject: "Women from different generations connecting outside a community center" },
  "starting-a-business": { path: "/ThinkingAboutStarting.png", subject: "Two women reviewing fabric samples and business planning notes in a creative studio" },
  "protecting-your-peace": { path: "/ImagesOfBeInspired/ProtectingYourPeace.png", subject: "A young woman resting with a warm drink beside a window and a closed laptop" },
};
export const images: ImageSlot[] = [
  { ...slot("brand/logo", "256/201", "Be Inspired NJ logo"), path: "/images/brand/logo.ico" },
  { ...slot("home/hero", "1537/1023", "Four women outdoors at golden hour, laughing together, one fist raised in joy"), path: "/images/home/hero.png" },
  { ...slot("home/who-we-are", "1/1", "Two women greeting one another warmly in a sunlit community space", "circle"), available: true },
  ...programs.flatMap((p, i) => [{ ...slot(`home/program-${p.id}`, "2/1", ["Two women sharing a mentorship conversation beside a sunlit window", "A woman leading a discussion with workshop participants", "A woman reviewing her budget with a planner and calculator", "A woman arranging a bouquet in a neighborhood flower studio"][i]), available: true }, { ...slot(`programs/${p.id}`, "2/1", programSubjects[i]), available: true }]),
  { ...slot("home/impact", "3/2", "A woman helping another woman learn a digital skill on a laptop"), available: true },
  ...["A young woman speaking to an audience of women from different generations", "A young woman sharing an idea beside a workshop pinboard", "A young woman and an older woman having a thoughtful conversation before an audience", "A young volunteer welcoming an attendee with a name badge", "Three young women collaborating on a project at a shared table", "A woman in a brick-red blazer encouraging a participant during a community discussion"].map((subject, i) => ({ ...slot(`about/mosaic-${i + 1}`, "4/3", subject), available: true, path: `/images/about/mosaic-${i + 1}.${i === 5 ? "png" : "jpg"}` })),
  { ...slot("about/founder", "1/1", "Dr. LaToya Pryce, Founder of Be Inspired NJ", "circle"), path: "/ImagesOfBeInspired/Dr.LaToya.png", available: true },
  { ...slot("about/tatiana", "1/1", "Tatiana Lopez, Board Member of Be Inspired NJ", "circle"), path: "/images/about/tatiana.png", available: true },
  { ...slot("about/angie", "1/1", "Andreau ‘Angie’ Todd, Board Member of Be Inspired NJ", "circle"), path: "/images/about/angie.png", available: true },
  { ...slot("programs/hero", "16/9", "Women from different generations participating in a sunlit community workshop"), available: true },
  ...["Three women making a new connection during a workshop break", "A woman learning a digital skill with guidance at a laptop", "A woman reflecting and writing in her notebook after a workshop", "Women assembling educational resource packets together"].map((subject, i) => ({ ...slot(`programs/gallery-${i + 1}`, "4/3", subject), available: true })),
  { ...slot("events/hero", "21/9", "Women of different generations listening and applauding at a leadership gathering"), path: "/EventsHero.png", available: true },
  { ...slot("events/legacy-collective", "16/9", "Women sharing ideas around a table during a leadership discussion"), path: "/ImagesOfBeInspired/FeatureConference.png", available: true },
  { ...slot("events/recap-1", "4/3", "A woman presenting on stage to an attentive audience"), path: "/RecapCo.png", available: true },
  { ...slot("events/recap-2", "4/3", "Three women connecting during an evening networking reception"), path: "/ImagesOfBeInspired/RecapConcept.png", available: true },
  { ...slot("events/recap-3", "4/3", "Women exchanging ideas and taking notes during a collaborative workshop"), path: "/ShareLearning.png", available: true },
  { ...slot("events/gallery-1", "4/3", "An attendee receiving a warm welcome and a badge at the registration table"), path: "/ImagesOfBeInspired/WarmWelcome.png", available: true },
  { ...slot("events/gallery-2", "4/3", "Three women talking over coffee at a networking breakfast"), path: "/NetworkingBreakfast.png", available: true },
  { ...slot("events/gallery-3", "4/3", "Women from different generations smiling and talking in a conference foyer"), path: "/ImagesOfBeInspired/ConnectionAcrossGeneration.png", available: true },
  { ...slot("inspiration/hero", "21/9", "A young woman reflecting and writing in a notebook at a sunlit desk"), path: "/ImagesOfBeInspired/inspiration-resources-hero.png", available: true },
  ...articles.flatMap(a => [`inspiration/${a.slug}`, a.image].map(id => ({ ...slot(id, "16/9", a.title), ...articleImages[a.slug], available: Boolean(articleImages[a.slug]) }))),
  ...Array.from({ length: 3 }, (_, i) => slot(`inspiration/volunteer-${i + 1}`, "1/1", "Volunteer portrait — coming soon", "circle")),
  ...Array.from({ length: 4 }, (_, i) => slot(`inspiration/partner-${i + 1}`, "2/1", "Community partner logo — coming soon")),
  { ...slot("involved/hero", "16/9", "A young volunteer offering a water bottle as volunteers prepare a community gathering outdoors"), path: "/ImagesOfBeInspired/GetInvolvedHero.png", available: true },
  { ...slot("involved/volunteer", "4/3", "Three young women packing notebooks and pencils into canvas bags for a community workshop"), path: "/ImagesOfBeInspired/Volunteer.png", available: true },
  { ...slot("involved/expertise", "4/3", "A woman helping a young adult learn a computer skill in a library"), path: "/ImagesOfBeInspired/ShareYourExpertise.png", available: true },
  { ...slot("involved/partner", "4/3", "Three women discussing a community collaboration in a creative studio"), path: "/ImagesOfBeInspired/PartnerWithUs.png", available: true },
  slot("donate/hero", "16/9", "Open hands holding a red heart — care and giving"),
  slot("leadership/latoya", "3/4", "Portrait of Dr. LaToya Pryce, Founder & President"),
  ...Array.from({ length: 3 }, (_, i) => slot(`leadership/coming-soon-${i + 1}`, "1/1", "Board member portrait — coming soon")),
  slot("board/tatiana", "3/4", "Portrait of Tatiana Lopez"),
  slot("board/angie", "3/4", "Portrait of Andreau ‘Angie’ Todd"),
  slot("social/og", "1200/630", "Be Inspired NJ social sharing image"),
];
