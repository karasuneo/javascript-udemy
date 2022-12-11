import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()]
  console.log(arr)

  const history = useHistory()

  const onClickHistory = () => history.push("/page1/detail1")
  return (
    <div>
      <h1>Page1です</h1>
      <Link to={{ pathname: "/page1/detail1", state: arr }}>Detail1</Link>
      <br />
      <Link to="/page1/detail2">Detail2</Link>
      <br />
      <button onClick={onClickHistory}>Detial1</button>
    </div>
  );
};
