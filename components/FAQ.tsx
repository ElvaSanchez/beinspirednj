import { faqs } from "@/lib/content";
export function FAQ() { return <div className="faq">{faqs.map(faq => <details key={faq.question}><summary>{faq.question}<span aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div>; }
