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
        return { key: "c150883978eb66d3d0857fe3f238b8ba", height: 90, width: 728 };
      case "skyscraper":
        return { key: "6a89c6f0a494803f73c9d5253387b774", height: 600, width: 160 };
      case "rectangle":
        return { key: "11d4c4f86bb62bc513d5504cd0518d12", height: 250, width: 300 };
      default:
        return { key: "c150883978eb66d3d0857fe3f238b8ba", height: 90, width: 728 };
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
