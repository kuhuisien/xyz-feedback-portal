import styled from 'styled-components';

const TextAreaContainer = styled.div<{ width: number | string }>`
  ${({ width }) => {
    if (width) {
      if (typeof width === 'number') return `width: ${width}rem`;
      else return `width: ${width}`;
    }
  }}
`;

export { TextAreaContainer };
