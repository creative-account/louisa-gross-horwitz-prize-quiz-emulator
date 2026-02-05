function setPage(html, backgroundColor) {
  container.innerHTML = html;
  document.body.style.backgroundColor = backgroundColor;
}

const titlePageHTML = `
  <h1 class="mochiy-pop-one-regular is-medium">
    ルイザ・グロス・ホロウィッツ賞<br>
    日本人受賞者を覚えよう！
  </h1>
  <p class="mochiy-pop-one-regular is-normal">
    ルイザ・グロス・ホロウィッツ賞<br>
    日本人受賞者を全員答えられたらクリアだよ
  </p>
`;
const titlePageBackgroundColor = "aquamarine";

const quizPageHTML = `
  <p class="noto-serif-jp is-medium">
    生物学や生化学の研究者に贈られる<br>
    ルイザ・グロス・ホロウィッツ賞を<br>
    現在、日本人で唯一受賞したのは誰？
  </p>
  <div class="buttons">
    <button class="is-medium mochiy-pop-one-regular">利根川進</button>
    <button class="is-medium mochiy-pop-one-regular">木村資生</button>
  </div>
`;
const quizPageBackgroundColor = "lightpink";

const correctPageHTML = `
  <div>
    <p class="noto-serif-jp is-large">クリア</p>
    <div class="spacer"></div>
    <p class="noto-serif-jp is-medium">
      1不可説不可説転点
    </p>
  </div>
`;

const incorrectPageHTML = `
  <div>
    <p class="noto-serif-jp is-huge">残念</p>
    <div class="spacer"></div>
    <p class="noto-serif-jp is-normal">
      あなたはルイザ・グロス・ホロウィッツ賞の<br>
      日本人受賞者を1人も覚えていません
    </p>
  </div>
`;
const resultPageBackgroundColor = "yellow";

const container = document.querySelector(".container");
let currentPage = "title";

container.innerHTML = titlePageHTML;
document.body.style.backgroundColor = titlePageBackgroundColor;

document.body.addEventListener("click", (e) => {
  switch (currentPage) {
    case "title":
      setPage(quizPageHTML, quizPageBackgroundColor);
      currentPage = "quiz";
      break;

    case "quiz":
      const isCorrect = e.target.textContent === "利根川進";
      setPage(
        isCorrect ? correctPageHTML : incorrectPageHTML,
        resultPageBackgroundColor
      );
      currentPage = "result";
      break;

    case "result":
      setPage(titlePageHTML, titlePageBackgroundColor);
      currentPage = "title";
      break;
  }
});
