import React from "react";
import { StylingProvider } from "./StylingContext";
import TextComponent from "./TextComponent";

function App3() {
  return (
    <div>
      <StylingProvider>
        <TextComponent>
          Change the color and font of the text using the Context API concept(12
          Feb)
        </TextComponent>
      </StylingProvider>
    </div>
  );
}

export default App3;
