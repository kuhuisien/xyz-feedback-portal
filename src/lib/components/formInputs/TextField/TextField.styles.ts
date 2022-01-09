import styled from 'styled-components';

const TextFieldContainer = styled.div<{ width: number | string }>`
  ${({ width }) => {
    if (width) {
      if (typeof width === 'number') return `width: ${width}rem`;
      else return `width: ${width}`;
    }
  }}
`;

export { TextFieldContainer };
