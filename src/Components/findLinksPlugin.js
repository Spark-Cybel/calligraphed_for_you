import { LayerRenderStatus } from "@react-pdf-viewer/core";
import linkifyElement from "linkify-element";

const findLinksPlugin = () => {
  const findLinks = (e) => {
    if (e.status !== LayerRenderStatus.DidRender) {
      return;
    }

    // `e.ele` represents the element containing all text elements in each page
    // Find all text elements
    e.ele
      // `rpv-core__text-layer-text` is the CSS class of each text element
      .querySelectorAll(".rpv-core__text-layer-text")
      .forEach((textEle) => {
        linkifyElement(textEle, {
          attributes: {
            // Custom styles
            style: "color: red; text-decoration: none;",
            // Open link in new tab
            target: "_blank"
          }
        });
      });
  };

  const findLinksAnnotations = (e) => {
    e.container
      .querySelectorAll(".rpv-core__annotation--link a")
      .forEach((link) => {
        link.setAttribute("target", "_blank");
      });
  };

  return {
    onTextLayerRender: findLinks,
    onAnnotationLayerRender: findLinksAnnotations
  };
};

export default findLinksPlugin;
