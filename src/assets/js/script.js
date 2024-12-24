// document.getElementById('q3').addEventListener('click', function() {
//   var choice = document.querySelector('input[name="choice-3"]:checked').value;
//   if (choice === 'tears') {
//     document.getElementById('if-tears').style.display = 'block';
//     document.getElementById('if-smell').style.display = 'none';
//     document.getElementById('if-coat').style.display = 'none';
//     document.getElementById('if-itch').style.display = 'none';
//     document.getElementById('if-bite').style.display = 'none';
//       window.location.hash = 'if-tears';
//   } else if (choice === 'smell') {
//     document.getElementById('if-tears').style.display = 'none';
//     document.getElementById('if-smell').style.display = 'block';
//     document.getElementById('if-coat').style.display = 'none';
//     document.getElementById('if-itch').style.display = 'none';
//     document.getElementById('if-bite').style.display = 'none';
//       window.location.hash = 'if-smell';
//   } else if (choice === 'coat') {
//     document.getElementById('if-tears').style.display = 'none';
//     document.getElementById('if-smell').style.display = 'none';
//     document.getElementById('if-coat').style.display = 'block';
//     document.getElementById('if-itch').style.display = 'none';
//     document.getElementById('if-bite').style.display = 'none';
//     window.location.hash = 'if-coat';
//   } else if (choice === 'itch') {
//     document.getElementById('if-tears').style.display = 'none';
//     document.getElementById('if-smell').style.display = 'none';
//     document.getElementById('if-coat').style.display = 'none';
//     document.getElementById('if-itch').style.display = 'block';
//     document.getElementById('if-bite').style.display = 'none';
//     window.location.hash = 'if-itch';
//   } else if (choice === 'bite') {
//     document.getElementById('if-tears').style.display = 'none';
//     document.getElementById('if-smell').style.display = 'none';
//     document.getElementById('if-coat').style.display = 'none';
//     document.getElementById('if-itch').style.display = 'none';
//     document.getElementById('if-bite').style.display = 'block';
//     window.location.hash = 'if-bite';
//   }
// });

// history.replaceState(null, null, null);

// window.addEventListener('popstate', function(event) {
//     // ブラウザの戻るボタンがクリックされた時に実行される処理
//     var element = document.getElementById('popup'); // 要素のIDを指定
//     if (element && !event.state && !window.location.hash) {
//         element.classList.add('popup'); // 追加したいクラス名を指定
//     }
// });

// 固定ボタン実装 start
document.addEventListener('DOMContentLoaded', () => {
  const fixedBtn = document.querySelector('.fixed-btn');
  const targetElement = document.getElementById('attention');

  if (!fixedBtn || !targetElement) {
    console.error('必要な要素が見つかりません');
    return;
  }

  const checkScroll = () => {
    const triggerPosition = targetElement.offsetTop;
    const scrollPosition = window.pageYOffset + window.innerHeight;

    if (scrollPosition > triggerPosition) {
      fixedBtn.classList.add('show');
    } else {
      fixedBtn.classList.remove('show');
    }
  };

  window.addEventListener('scroll', checkScroll);
  window.addEventListener('resize', checkScroll);

  // 初期チェック
  checkScroll();
});

// 離脱防止バナー start

