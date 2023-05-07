import styled from 'styled-components';

export const BoxContent = styled.div`
  color: #fff;
  padding: 0 2rem;
  margin-bottom: 1.5rem;
`;

export const BoxTitle = styled.h4`
  font-size: 1.4rem;
  margin-bottom: 0;
  margin-top: 0;
`;

export const BoxTemperature = styled.h2`
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 3rem;
  margin: 0;
`;

export const BoxCondition = styled.span`
  font-size: 1.3rem;
`;

export const BoxDate = styled.p`
  font-size: 1rem;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  svg {
    fill: #fff;
  }
`;
