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

const elevator = document.querySelector(".xtx-elevator");
const index = document.querySelector(".index");

window.addEventListener("scroll", function () {
  let n = document.documentElement.scrollTop;

  let lis = document.querySelector(".xtx-elevator ul");
  if (n >= index.offsetTop) {
    elevator.style.opacity = 1;
    lis.style.cursor = "pointer";
  } else {
    elevator.style.opacity = 0;
    lis.style.cursor = "default";
  }
});

const ele_ul = document.querySelector(".xtx-elevator ul");

const fresh = document.querySelector(".fresh");

const recommend = document.querySelector(".recommend");

const footer = document.querySelector(".footer");

ele_ul.addEventListener("click", function (e) {
  // s属性是字符串，要转换
  let id = +e.target.dataset.id;
  if (e.target.tagName === "LI") {
    let top;
    switch (id) {
      case 1:
        top = fresh.offsetTop;
        break;
      case 2:
        top = recommend.offsetTop;
        break;
      case 3:
        top = 0;
        break;
    }
    window.scrollTo(0, top);
    // console.log(document.documentElement.scrollTop);
  }
});
window.addEventListener("scroll", function () {
  let n = document.documentElement.scrollTop;
  // 判断 如果原来有active类的对象，就移除类，如果开始就没有对象，就不删除，所以不报错
  const old = document.querySelector(".xtx-elevator .active");
  if (old) old.classList.remove("active");

  if (n >= fresh.offsetTop && n < recommend.offsetTop) {
    // 查询的时候务必确定只有一个
    document
      .querySelector(".xtx-elevator [data-id='1']")
      .classList.add("active");
  } else if (n >= recommend.offsetTop) {
    document
      .querySelector(".xtx-elevator [data-id='2']")
      .classList.add("active");
  }
});
