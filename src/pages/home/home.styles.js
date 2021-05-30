import styled from 'styled-components';
import { ReactComponent as Button } from '../../assets/button.svg';
import { ReactComponent as Javascript } from '../../assets/javascript.svg';
import { ReactComponent as Table } from '../../assets/table.svg';

export const Cover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Subtitle = styled.p`
  text-align: center;
  font-size: 16px;
  padding-bottom: 25px;
`;

export const ButtonStyle = styled(Button)`
  padding-bottom: 50px;
`;

export const JavascriptStyle = styled(Javascript)`
  padding-bottom: 38px;
`;

export const TableStyle = styled(Table)`
  margin-bottom: 114px;
`;
