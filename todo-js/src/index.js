const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // button(完了)タグの作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // 完了ボタンを押した時
  completeButton.addEventListener("click", () => {
    // 未完了TODOの中にある要素を取得
    const completeTarget = completeButton.parentNode;

    // 押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncomponentList(completeTarget);

    const text = completeTarget.firstElementChild.innerText;
    console.log(text);

    // div以下を初期化
    completeTarget.textContent = null;

    // liタグの生成
    const li = document.createElement("li");
    li.innerText = text;

    //戻るボタンの作成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";

    // 要素を追加
    completeTarget.appendChild(li);
    completeTarget.appendChild(returnButton);

    // 完了したTODOに要素を追加
    document.getElementById("complete-list").appendChild(completeTarget);

    //
  });

  // button(削除)タグの作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // 削除ボタンを押した時
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncomponentList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから指定の要素を削除
const deleteFromIncomponentList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
