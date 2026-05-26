'use client';

import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/siteConfig";

interface AdSlotProps {
  className?: string;
  type?: "leaderboard" | "skyscraper" | "rectangle";
}

const AdSlot = ({ className = "", type = "leaderboard" }: AdSlotProps) => {
  const bannerRef = useRef<HTMLDivElement>(null);

  if (!siteConfig.adsEnabled) return null;

  const getAdConfig = () => {
    switch (type) {
      case "leaderboard":
        return { key: "98f1204cd792be3a0facc8f76af3e4db", height: 90, width: 728 };
      case "skyscraper":
        return { key: "edcb16a97704b1ca0aae63caee548833", height: 600, width: 160 };
      case "rectangle":
        return { key: "98f1204cd792be3a0facc8f76af3e4db", height: 250, width: 300 };
      default:
        return { key: "98f1204cd792be3a0facc8f76af3e4db", height: 90, width: 728 };
    }
  };

  useEffect(() => {
    const config = getAdConfig();
    
    // Safety check: don't load if the ref isn't ready or already has content
    if (bannerRef.current && !bannerRef.current.firstChild) {
      const conf = document.createElement('script');
      const script = document.createElement('script');
      
      script.type = 'text/javascript';
      script.src = `https://www.highperformanceformat.com/${config.key}/invoke.js`;
      
      // We set atOptions directly on the window to ensure the script sees it
      conf.innerHTML = `
        atOptions = {
          'key' : '${config.key}',
          'format' : 'iframe',
          'height' : ${config.height},
          'width' : ${config.width},
          'params' : {}
        };
      `;

      bannerRef.current.append(conf);
      bannerRef.current.append(script);
    }

    // Cleanup when component unmounts
    return () => {
      if (bannerRef.current) {
        bannerRef.current.innerHTML = "";
      }
    };
  }, [type]); // Re-run if type changes

  const config = getAdConfig();

  return (
    <div 
      className={`flex justify-center items-center overflow-hidden min-h-[90px] ${className}`}
      style={{ minHeight: config.height }}
    >
      <div 
        ref={bannerRef}
        className="ad-slot-wrapper"
        style={{ width: config.width, height: config.height }}
      />
    </div>
  );
};

export default AdSlot;
