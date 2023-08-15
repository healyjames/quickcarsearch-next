import styled, { css } from "styled-components";

interface ButtonProps {
  as?: "button" | "a"
  href?: string
  fullWidth?: boolean
  invertedColor?: boolean
}

export const Button = styled.button<ButtonProps>`
${(props) => !props.invertedColor ? `
    background-color: ${props.theme.colors.brand};
    color: ${props.theme.colors.foreground};
` : `
    background-color: ${props.theme.colors.foreground};
    color: ${props.theme.colors.background};
`}

  border: none;
  padding: ${props => props.theme.core.padding}rem ${props => (props.theme.core.padding * 0.75).toFixed(2)}rem;
  font-size: ${props => props.theme.font.size}rem;
  font-weight: bold;
  cursor: pointer;
  outline-color: ${props => props.theme.colors.foreground};
  ${(props) => props.fullWidth && `width: 100%;`}
  margin-top: .25em;
  border-radius: ${props => props.theme.border.radius}rem;
  transition: all .15s ease-in-out;

  &:hover {
    ${(props) => !props.invertedColor ? `
        background-color: ${props.theme.colors.foreground};
        color: ${props.theme.colors.background};
    ` : `
        background-color: ${props.theme.colors.neutrals.darkest};
        color: ${props.theme.colors.foreground};
    `}
    
    text-decoration: underline;
    
  }

  &:focus {
    ${(props) => !props.invertedColor ? `
        background-color: ${props.theme.colors.foreground};
        color: ${props.theme.colors.background};
    ` : `
        background-color: ${props.theme.colors.accent};
        color: ${props.theme.colors.foregroundround};
    `}
    
    text-decoration: underline;
    outline-offset: -6px;
    outline-width: 2px;
    outline-color: ${props => props.theme.colors.background};
    outline-style: solid;
  }

  ${props =>
    props.as === "a" &&
    css`
      /* Additional styling specific to links */
      text-decoration: none;
      display: inline-block;
    `}
`;
