// Wait for page to load

const insertHere = document.getElementById("insertere");
const loading = document.getElementById("load");
// const afterLoading = document.getElementById("afterload");

document.addEventListener("DOMContentLoaded", function (event) {
  quickMenu();
});

async function quickMenu() {
  let url =
    "https://opensheet.elk.sh/1PA7LmNrl3pEs8hJlfl4CUy48fvEms_NYFLud39aZNmY/sheet1";
  await fetch(url)
    .then((response) => response.json())
    .then((json) => {
      try {
        // afterLoading.style.display = "block";
        loading.style.opacity = 0;
        let html = "";
        json.map((element) => {
          html += `	
		
		<div class="col-2 ">
		<h3 class="cat-text ">${element.menu}</h3>
		</div>
		<div class="col-2">
		<h5 class="mb-4 mt-2  menu"> ${element.submenu}</h5>
		
		</div>
		<div class="col-8 ">
		
				<div class="category">
				
					<ul class="list-unstyled cat-text  ">
						<li class="item d-flex align-items-center mb-2 line">
						    <div class="name">	${element.item}</div>
							${element.veg ? '<div class="v"></div>' : '<div class="nv"></div>'}
							<div class="price ml-auto">${element.qty}</div>
							<div class="price ml-auto">&#8360;${element.price}</div>
						</li>
						
					</ul>
				</div>
		</div>
		
		`;
          insertHere.innerHTML = html;
        });
      } catch (error) {
        error ? (loading.style.opacity = 1) : "";
      }
    })
    .catch((error) => {
      if (error) loading.style.opacity = 1;
    });
}
