// JavaScript
console.log('Hello world!');
const items = document.querySelectorAll('.img-item');
console.log(items);
console.log(items.length);
// for文
for(let i = 0; i < items.length; i++){

    const keyframes = {
      opacity: [0, 1],
      translate: ['0 50px', 0],
      filter: ['blur(10px)', 'blur(0)'],
    };
    
    const options = {
      duration: 600,
      fill: 'forwards',
      delay: i * 400,
    };
  
    items[i].animate(keyframes, options);
  }
 
 // 定数の定義
const loading = document.getElementById('loading');

// cssクラスを追加する関数
function animation(){
  loading.classList.add('loaded');
}
 
  //画面が読み込まれたら animation を呼び出す
window.addEventListener('load', animation);