import styled from 'styled-components';
import { device } from './mediaQueries';

export const MainHeaderContainer = styled.div`
  background: black;
  color: white;
  display: flex;
  width: 100vw;
  justify-content: space-around;
  align-items: center;
  @media (${device.tablet}) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export const Title = styled.p`
  color: red;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 900;
  @media (${device.mobileM}) {
    margin: 10px;
  }
`;

export const ContainerForm = styled.div`
  position: relative;
`;

export const InputSearch = styled.input`
  width: 230px;
  height: 30px;
`;

export const ContainerSearchBar = styled.div`
  position: relative;
`;

export const BlocSearch = styled.div`
  position: absolute;
  background-color: white;
  width: 230px;
`;
