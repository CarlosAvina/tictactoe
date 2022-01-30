import styled from "styled-components";

const Wrapper = styled.div`
  --color-primary: #f6aca2;
  --color-secondary: #f49b90;
  --color-tertiary: #f28b7d;
  --color-quaternary: #f07a6a;
  --color-quinary: #ee6352;

  display: flex;
  align-content: center;
  justify-content: center;

  .text_shadows {
    text-shadow: 3px 3px 0 var(--color-secondary),
      6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
      12px 12px 0 var(--color-quinary);
    font-family: bungee, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    font-size: calc(2rem + 5vw);
    text-align: center;
    margin: 0;
    color: var(--color-primary);
    animation: shadows 1.2s ease-in infinite, move 1.2s ease-in infinite;
    letter-spacing: 0.4rem;
  }

  @keyframes shadows {
    0% {
      text-shadow: none;
    }
    10% {
      text-shadow: 3px 3px 0 var(--color-secondary);
    }
    20% {
      text-shadow: 3px 3px 0 var(--color-secondary),
        6px 6px 0 var(--color-tertiary);
    }
    30% {
      text-shadow: 3px 3px 0 var(--color-secondary),
        6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary);
    }
    40% {
      text-shadow: 3px 3px 0 var(--color-secondary),
        6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
        12px 12px 0 var(--color-quinary);
    }
    50% {
      text-shadow: 3px 3px 0 var(--color-secondary),
        6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
        12px 12px 0 var(--color-quinary);
    }
    60% {
      text-shadow: 3px 3px 0 var(--color-secondary),
        6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary),
        12px 12px 0 var(--color-quinary);
    }
    70% {
      text-shadow: 3px 3px 0 var(--color-secondary),
        6px 6px 0 var(--color-tertiary), 9px 9px var(--color-quaternary);
    }
    80% {
      text-shadow: 3px 3px 0 var(--color-secondary),
        6px 6px 0 var(--color-tertiary);
    }
    90% {
      text-shadow: 3px 3px 0 var(--color-secondary);
    }
    100% {
      text-shadow: none;
    }
  }

  @keyframes move {
    0% {
      transform: translate(0px, 0px);
    }
    40% {
      transform: translate(-12px, -12px);
    }
    50% {
      transform: translate(-12px, -12px);
    }
    60% {
      transform: translate(-12px, -12px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
`;

const Title = ({ children }) => (
  <Wrapper>
    <h2 class="text_shadows">{children}</h2>
  </Wrapper>
);

export default Title;
