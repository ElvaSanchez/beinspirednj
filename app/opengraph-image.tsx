import { ImageResponse } from "next/og";
export const alt = "Be Inspired NJ — empowering women, creating possibilities. Social image placeholder.";
export const size = {width:1200,height:630};
export const contentType = "image/png";
export default function Image() { return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",background:"#0A5C5A",color:"white",fontFamily:"serif"}}><div style={{fontSize:76}}>Be Inspired NJ</div><div style={{fontSize:28,marginTop:28}}>Empowering women. Creating possibilities.</div><div style={{fontSize:16,marginTop:90,letterSpacing:4}}>SOCIAL IMAGE PLACEHOLDER</div></div>,size); }
