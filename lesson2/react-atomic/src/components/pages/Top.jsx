import styled from "styled-components";
import { SecondaryButton } from "../atom/button/SecondaryButton";
import { useNavigate } from "react-router-dom";

export const Top = () => {
  const navigation = useNavigate();

  const onClickAdmin = () => {
    navigation("/users", { state: { isadmin: true } });
  };
  const onClickGeneral = () => {
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
