const areey = [
    {
      img: "folder.img/1img.jpg",
      personnam: "1 ",
      personjob: "x1",
      person_deatle: `111111111111111111111Lorem ipsum dolor sit amet consectetur a 
    ipisicing elit. Id laudantium atque, iure sequi provident nemo, ut expedita r
    epellendus rem impedit, officiis blanditiis quaerat ullam
     itaque. At deserunt officiis nihil animi.`,
    },
    {
      img: "folder.img/2img.jpg",
      personnam: "2 ",
      personjob: "x2",
      person_deatle: `22222222222222222222222Lorem ipsum dolor sit amet consectetur a 
    ipisicing elit. Id laudantium atque, iure sequi provident nemo, ut expedita r
    epellendus rem impedit, officiis blanditiis quaerat ullam
     itaque. At deserunt officiis nihil animi.`,
    },
    {
      img: "folder.img/3img.jpg",
      personnam: "3 ",
      personjob: "x3",
      person_deatle: `3333333333333333333333 ipsum dolor sit amet consectetur a 
    ipisicing elit. Id laudantium atque, iure sequi provident nemo, ut expedita r
    epellendus rem impedit, officiis blanditiis quaerat ullam
     itaque. At deserunt officiis nihil animi.`
    },
  ];
  let person_img = document.querySelector(".banner-img");
  let btnprev = document.getElementById("btn-prev");
  let btnrevers = document.getElementById("btn-revers");
  let person_name = document.querySelector(".person-name");
  let person_job = document.querySelector(".person-job");
  let person_deatile = document.querySelector(".person-detile");

  let currentitem = 0;
  window.addEventListener("DOMContentLoaded", () => {
    
    showperson(currentitem);
  });



  function showperson(par) {
    const item = areey[par];
    person_img.src = item.img;
    person_name.innerHTML = item.personnam;
    person_job.innerHTML = item.personjob;
    person_deatile.innerHTML = item.person_deatle
  }

  btnprev.addEventListener("click", () => {
    currentitem++;
    if (currentitem > areey.length - 1) {
      currentitem = 0;
    }
    setTimeout(function () {
      showperson(currentitem);
    }, 100);
    
  });

  btnrevers.addEventListener("click", () => {
    currentitem--;
    if (currentitem < 0) {
      currentitem = areey.length - 1;
    }

    setTimeout(function () {
      showperson(currentitem);
    }, 100);
    
  });

