const btn = document.getElementById("btn");
const text1 = document.getElementById('text');


btn.addEventListener("click", ()=> {
  setTimeout(() => {
  const text2 = document.createElement("h2");
  text1.textContent = "ボタンをクリックしました";
}, 2000);
});