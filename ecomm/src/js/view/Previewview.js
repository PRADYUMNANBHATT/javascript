import View from "./View";
class PreviewView extends View {
  _parentElement = "";
  _generatemokup() {
    return `
    <div class="product-box" id="${this._data.idDrink}" onClick="showProduct(this.id)">
    <picture id="${this._data.idDrink}">
    <source/>
    <img src="${this._data.strDrinkThumb}" alt="product" class="img-fluid"/>
    </picture>
    <div class="flex">

    <h4 class="product-name">${this._data.strDrink}</h4>
    <p class="rating-tub"><span class="rating"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="star">
    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
  </svg>
  ${this._data.strMeasure3}</span> <span class="t_s">(${this._data.strMeasure2})</span></p>

    </div>
    </div>
    `;
  }
}
export default new PreviewView();
{
  /* <p class="price"><strong class="product-price">₹${
  e.strMeasure3
</strong><span class="mrp">₹${e.strMeasure3}</span><span class="off">${(
  100 -
  (e.strMeasure3 / e.strMeasure3) * 100
).toFixed(0)}% off</span></p> */
}
