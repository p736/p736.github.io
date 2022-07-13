var typed = Typed(".typing",{
    strings:["","Web Designer","web Developer","You Tuber"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

const nav = document.querySelector(".nav"),
      navlist = nav.querySelectorAll(".li"),
      totalNavList = navList.length;
      for(let i = 0; i<totalNavList; i++)
      {
          const a = navlist[i].querySelector("a");
          a.addEventListener("click", function()
          {
              for(let j = 0; j<totalNavList; j++)
              {
                  navlist[j].querySelector("a").classList.remove("active");
              }
              this.classList.add("active")
              showSection(this);
          })
      }
      function showSection(element)
      {
          const target = element.getAttribute("href").split("#")[1]
          document.querySelector("#" + target).classList.add("active")
      }