import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [isDesktopView, setDesktopView] = useState(true);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (screenWidth >= 1024) {
      setDesktopView(true);
    } else {
      setDesktopView(false);
    }
  }, [screenWidth]);

  return {
    isDesktopView,
  };
};

export default useScreenSize;
