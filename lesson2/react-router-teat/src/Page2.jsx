import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2です</h1>
      <Link to="/page2/999">URL parameter</Link>
      <Link to="/page2/999?name=hogeohoge">URL parameter</Link>
    </div>
  );
};
