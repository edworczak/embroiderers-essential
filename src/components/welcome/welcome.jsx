import dummyUser from "../../data/dummyUser";
import pl from "../../data/pl";
import { InfoWrapper } from "./welcome.styled";

const Welcome = () => {
  return (
    <div>
      <h1>
        {pl.home.welcome} {dummyUser.user.name}
      </h1>
      <InfoWrapper>
        <span>{pl.home.openProjects}:</span>
        <span>{"3"}</span>
      </InfoWrapper>
      <InfoWrapper>
        <span>{pl.home.shoppingList}:</span>
        <span>{dummyUser.shoppingList.items}</span>
      </InfoWrapper>
    </div>
  );
};

export default Welcome;
