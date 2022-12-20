import styled from "styled-components";
import { SecondaryButton } from "../atom/button/SecondaryButton";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

export const Top = () => {
  const navigation = useNavigate();
  const { setUserInfo } = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    navigation("/users");
  };
  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    navigation("/users", { state: { isadmin: false } });
  };

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
