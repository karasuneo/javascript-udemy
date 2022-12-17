import styled from "styled-components";

import { PrimaryButton } from "../atom/button/PrimaryButton";
import { Input } from "../atom/input/Input";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWrappr>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrappr>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;


const SButtonWrappr = styled.div`
  padding-left: 8px;
`;
