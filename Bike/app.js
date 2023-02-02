'usestrict';
var btn = document.getElementById("btn");
    var light = document.getElementById("light");
    var laca = document.getElementById("laca");
    var menu=document.querySelector('.link2');
    var links = document.getElementById("links");
    function toggleBtn() {
      btn.classList.toggle("active");
      light.classList.toggle("onoff");
    }
    window.addEventListener("scroll", () => {
      var scrollpercent =
        (document.body.scrollTop + document.documentElement.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
      var draw = document.body.clientWidth * scrollpercent;
      laca.style.left = scrollpercent * 100 + "%";
    //   laca.style.marginTop = scrollpercent * 100 + "%";
      laca.style.transition = 1 + "s";
    });
    function menuIcon(){
      menu.style.backgroundColor='red';
      links.classList.toggle('links')

    }