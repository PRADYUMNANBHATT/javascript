import View from "./View";
import PreviewView from "./Previewview";

class featuredProductView extends View {
  _parentElement = document.getElementById("feature-prd");
  _addHandlerFeaturedProduct(handler) {
    addEventListener("load", function () {
      handler();
    });
  }
  _generatemokup() {
    return this._data
      .map((element) => PreviewView.render(element, false))
      .join(" ");
  }
}
export default new featuredProductView();
