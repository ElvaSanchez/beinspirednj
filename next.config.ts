import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      ["/get-involved-1", "/get-involved"], ["/contact-us", "/contact"],
      ["/inspiration-%26-resources", "/inspiration-resources"], ["/inspiration-&-resources", "/inspiration-resources"],
      ["/tatiana-bio", "/board/tatiana-lopez"], ["/angie-bio", "/board/angie-todd"],
      ...["ready-to-lead", "your-next-chapter", "financial-wellness", "power-of-community", "starting-a-business", "protecting-your-peace"].map(slug => [`/${slug}`, `/inspiration/${slug}`]),
    ].map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
