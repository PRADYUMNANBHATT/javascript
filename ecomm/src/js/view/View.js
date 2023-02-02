export default class View {
  _data;
  constructor() {}
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this._renderError("no data");
    this._data = data;

    const mokup = this._generatemokup();

    if (!render) return mokup;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", mokup);
  }
  update(data) {
    this._data = data;
    const newMokup = this._generatemokup(this._data);
    const newDom = document.createRange().createContextualFragment(newMokup);
    const newElement = Array.from(newDom.querySelectorAll("*"));
    const curEl = Array.from(this._parentElement.querySelectorAll("*"));
    if (
      !newElement.isEqualNode(curEl) &&
      newElement.firstChild?.nodeValue.trim() !== ""
    ) {
      curEl.textContent = newElement.textContent;
    }
    if (!newElement.isEqualNode(curEl)) {
      Array.from(newElement.attributes).forEach((attr) => {
        curEl.setAttribute(attr.name, attr.value);
      });
    }
  }
  _clear() {
    this._parentElement.innerHTML = "";
  }
  renderSpinner() {}
  renderError(error = this._errormessage) {
    const mokup = ` <div class="error-msg">
        <i>Erroricon</i>
        <p>${error}</p>
      </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", mokup);
  }
  renderMessage(message = this._message) {
    const mokup = ` <div class="error-msg">
    <i>Erroricon</i>
    <p>${message}</p>
  </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", mokup);
  }
}
