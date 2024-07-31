// src/AdComponent.js
import React, { useEffect } from "react";

const AdComponent = ({ adSlot }) => {
  useEffect(() => {
    // Ensure that the adsbygoogle array is initialized
    if (window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error("AdSense error:", error);
      }
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-7429575667747219" 
      data-ad-slot={adSlot}                   
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default AdComponent;
