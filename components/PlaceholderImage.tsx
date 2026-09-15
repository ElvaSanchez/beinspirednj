import { images } from "@/lib/images";
import Image from "next/image";

export function PlaceholderImage({ id, aspect, label, alt, className = "", shape }: { id?: string; aspect?: string; label?: string; alt?: string; className?: string; shape?: "rect" | "circle" }) {
  const image = images.find(image => image.id === id);
  const caption = label ?? image?.subject ?? "Community photography";
  if (image?.available) return <div data-image-path={image.path} className={`placeholder photo-slot ${(shape ?? image.shape) === "circle" ? "placeholder-circle" : ""} ${className}`} style={{ aspectRatio: aspect ?? image.aspect }}>
    <Image src={image.path} alt={alt ?? caption} fill sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) 45vw, 550px" style={{ objectFit: "cover" }}/>
  </div>;
  return <div role="img" aria-label={alt ?? caption} data-image-path={image?.path} className={`placeholder ${(shape ?? image?.shape) === "circle" ? "placeholder-circle" : ""} ${className}`} style={{ aspectRatio: aspect ?? image?.aspect ?? "16/9" }}>
    <div className="placeholder-caption"><svg aria-hidden="true" width="30" height="30" viewBox="0 0 32 32" fill="none"><path d="M4 10h6l2-4h8l2 4h6v16H4V10Z" stroke="currentColor" strokeWidth="1.3"/><circle cx="16" cy="17" r="5" stroke="currentColor" strokeWidth="1.3"/></svg><span>{caption}</span><small>IMAGE PLACEHOLDER</small></div>
  </div>;
}
