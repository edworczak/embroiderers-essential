import { render } from "react-dom";

import { AppWrapper, Content, GlobalStyles } from "./App.styled";
import Navigation from "./components/navigation/navigation";
import Homegape from "./pages/homepage";

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyles />
      <Navigation />
      <Content>
        <Homegape />
      </Content>
    </AppWrapper>
  );
};

render(<App />, document.getElementById("root"));
