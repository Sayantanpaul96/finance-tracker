import "./Orb.css";
import { useWindowSize } from "../../utils/useWindowSize";
import { useEffect } from "react";

const Orb = () => {
  const { width, height } = useWindowSize();

  useEffect(() => {
    const root = document.documentElement;
    const widthRatio = width;
    const heightRatio = height;

    root.style.setProperty("--width-ratio", `${widthRatio}px`);
    root.style.setProperty("--height-ratio", `${heightRatio}px`);
  }, [height, width]);

  return <div className="orb-style"></div>;
};

export default Orb;
