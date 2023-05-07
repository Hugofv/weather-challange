import styled from 'styled-components';

export const BoxDay = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  gap: 10px;
  margin: 0 2rem;
`;

export const TextDescription = styled.p`
  text-align: start;
`;

export const BackgroundBlur = styled.div`
  filter: blur(3px);
  -webkit-filter: blur(3px);
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background: #fff;
  opacity: 0.2;
  position: absolute;
`;

export const WrapperContent = styled.div`
  color: white;
  display: grid;
  width: 100%;
  grid-template-columns: 0.5fr 2fr 0.5fr 0.5fr;
  font-weight: bold;
  z-index: 2;
  padding: 10px;
  text-align: center;
`;

export const WrapperWeekDay = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const WrapperDay = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
`;

export const BoxMax = styled.span`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`;

export const BoxMin = styled.span`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;
