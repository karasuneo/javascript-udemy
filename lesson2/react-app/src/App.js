import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open)

  // useCallback: 関数は値が更新されたとみなされ、子コンポーネントも再レンダリングされる。そのため再レンダリングされないようにするためのメソッド
  // 空の配列を第二引数とした場合は最初のレンダリングのみ実行される
  // 変数にuseMemoをすることもできる
  const onClickClose = useCallback( () => setOpen(false), [setOpen])
  return (
    <div className="App">
      <input value={text} onChange={onChangeText}/>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose}/>
    </div>
  );
}
