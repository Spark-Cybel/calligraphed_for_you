import * as React from "react";
import { Spinner, Worker } from "@react-pdf-viewer/core";
import { SpecialZoomLevel, Viewer } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";
import findLinksPlugin from "./findLinksPlugin";
import Lottie from "react-lottie";
import animation from "../assets/LoadingAnimation.json";

const RenderPdf = ({ fileUrl }) => {
  const findLinksPluginInstance = findLinksPlugin();
  const [pdfOpacity, setPdfOpacity] = React.useState(0);
  const showPDF = () => {
    setTimeout(() => {
      setPdfOpacity(1);
    }, 1000);
  };
  return (
    <>
      {pdfOpacity < 1 && (
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            width: window.innerWidth,
            height: window.innerHeight,
          }}
        >
          <Lottie options={{ animationData: animation }} width={150} />
        </div>
      )}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          opacity: pdfOpacity,
        }}
      >
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
          <Viewer
            fileUrl={fileUrl}
            defaultScale={SpecialZoomLevel.PageWidth}
            viewMode="SinglePage"
            onDocumentLoad={() => {
              showPDF();
            }}
            // plugins={[findLinksPluginInstance]}
          />
        </Worker>
      </div>
    </>
  );
};

export default RenderPdf;
