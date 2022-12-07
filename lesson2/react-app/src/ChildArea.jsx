//  mmeo: 指定された値以外の変化の時はレンダリングしない
import { useState } from "react";
import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki",
};

// memoで関数を囲うことでコンポーネントのstate(変数)が変化する時以外はレンダリングしない
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;



  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
