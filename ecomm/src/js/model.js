import { AJEX } from "./helper";
import { URL } from "./config";
import { async } from "regenerator-runtime";

export const state = {
  slider: {},
  featured_product: {},
};
const createObject = function (data) {
  return {
    strDrink: data.strDrink,
    strDrinkThumb: data.strDrinkThumb,
    strInstructions: data.strInstructions,
  };
};
export const featuredProduct = async function () {
  const data = await AJEX(URL);

  state.featured_product = data.drinks;

  // state.featured_product = data.featured_product;
};
