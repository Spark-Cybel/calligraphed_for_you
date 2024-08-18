import React from "react";
import pdf from "./assets/Calligraphed_For_You.pdf";
import RenderPdf from "./Components/RenderPdf";

function App() {
  return (
    <div>
      <RenderPdf fileUrl={pdf} />
    </div>
  );
}

export default App;
