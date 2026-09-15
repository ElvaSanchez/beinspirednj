export type FormKind = "contact" | "program" | "volunteer" | "newsletter";
// Replace this adapter with your endpoint. The preview does not persist personal data.
export async function submitForm(kind: FormKind, data: FormData): Promise<string> {
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
  if (endpoint) {
    data.set("formType", kind);
    const response = await fetch(endpoint, { method: "POST", body: data });
    if (!response.ok) throw new Error("Your message could not be sent. Please try again or email info@beinspirednj.com.");
  }
  return kind === "newsletter" ? "Thank you for subscribing." : kind === "program" ? "We'd love to hear from you — thank you. A member of our team will follow up." : "Thank you for your interest in Be Inspired NJ.";
}
