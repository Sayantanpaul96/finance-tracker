import "./Orb.css";
import { useWindowSize } from "../../utils/useWindowSize";
import { useEffect } from "react";

const Orb = () => {
  const { width, height } = useWindowSize();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--width-ratio",
      `${width / 1.2}px`
    );
    document.documentElement.style.setProperty(
      "--height-ratio",
      `${height / 2}px`
    );
  }, [height, width]);
  return <div className="orb-style"></div>;
};

export default Orb;
