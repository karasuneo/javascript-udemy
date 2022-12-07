
import { CssModules } from './components/CssModules';
import { InlineStyle } from './components/inlinestyle'
import { StyledJsx } from './components/StylesJsx'

function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
    </div>
  );
}

export default App;
