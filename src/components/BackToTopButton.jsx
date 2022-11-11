import React from "react";
import { useEffect, useState } from "react";

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };
  return (
    <div className="App">
      {backToTopButton && (
        <i class="fa-solid fa-circle-up backToTop fade-in-right " onClick={scrollUp}></i>
      )}
    </div>
  );
}

export default BackToTopButton;
