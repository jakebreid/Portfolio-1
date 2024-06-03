import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "A Junior Computer Science student at UMass Amherst!",
          "Devoted to powering the future with Data!"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        delay: 40 
      }}
    />
  );
}
export default Type;
