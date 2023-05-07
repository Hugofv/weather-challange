import { styled } from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  gap: ${({ gap }) => gap || 0};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
`;
