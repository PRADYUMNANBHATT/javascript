import "core-js/stable";
import { async } from "regenerator-runtime/runtime";
import "regenerator-runtime/runtime";

import * as model from "./model";
import FeatureProductView from "./view/FeatureProductView";

const controlFeaturedProduct = async () => {
  try {
    FeatureProductView.renderSpinner();

    await model.featuredProduct();

    FeatureProductView.render(model.state.featured_product);
  } catch (err) {
    // debugger;
    console.log(err);
    FeatureProductView.renderError(err);
  }
};
const init = () => {
  FeatureProductView._addHandlerFeaturedProduct(controlFeaturedProduct);
};
init();
