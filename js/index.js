// const banner = document.querySelector(".index .w");
// let i = 0;
// setInterval(function () {
//   i++;
//   if (i > 5) {
//     i = 1;
//   }
//   // console.log(i)
//   banner.style.backgroundImage = `url(" uploads/banner${i}.png ")`;
//   //remove前要保证，有存在不然就会报错
//   document.querySelector(".banner .active").classList.remove("active");
//   const li = document.querySelector(`.banner li:nth-child(${i})`);
//   li.classList.add("active");
// }, 1000);

let id = 1;

const left = document.getElementById("arrow-left");

const right = document.getElementById("arrow-right");

right.addEventListener("click", function () {
  id++;
  id = id > 5 ? 1 : id;
  // console.log(id);
  change();
});
left.addEventListener("click", function () {
  id--;
  id = id < 1 ? 5 : id;
  // console.log(id);
  change();
});

function change() {
  const bg = document.querySelector(".index .w");
  // 路径的解析是相对于 indextry.html 所在的目录
  bg.style.backgroundImage = `url("uploads/banner${id}.png")`;

  // classlist!!!!!!!!!!!
  document.querySelector(".banner .active").classList.remove("active");
  document.querySelector(`.banner li:nth-child(${id})`).classList.add("active");
}

let ac = setInterval(function () {
  right.click();
}, 1000);

const banner = document.querySelector(".index .w");

banner.addEventListener("mouseenter", function () {
  clearInterval(ac);
});

banner.addEventListener("mouseleave", function () {
  if (ac) clearInterval(ac);
  //不能重新定义哦
  ac = setInterval(function () {
    right.click();
  }, 1000);
  console.log("我离开啦");
});

const ul = document.querySelector(".banner ul");
ul.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    document.querySelector(".banner li.active").classList.remove("active");
    e.target.classList.add("active");
    // 自定义属性
    let id = +e.target.dataset.id;
    console.log(id);
    banner.style.backgroundImage = `url('uploads/banner${id}.png')`;
  }
});
