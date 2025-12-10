import React, { useEffect, useRef, useState } from "react";

export default function LogoCarousel() {
  const logosRef = useRef(null);
  const [bannerOpen, setBannerOpen] = useState(true);

  useEffect(() => {
    if (logosRef.current) {
      const ul = logosRef.current;
      const clone = ul.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      ul.insertAdjacentElement("afterend", clone);
    }
  }, []);

  return (

  );
}
