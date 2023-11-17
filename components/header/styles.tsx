import styled from "styled-components"

export const Overlay = styled.div<{
	show: boolean
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Adjust the overlay color and opacity as needed */
  z-index: 2;
  display: ${(props) => (props.show ? 'block' : 'none')};
`

export const NavOpenButton = styled.button`
	display: flex;
    justify-content: center;
    align-items: center;
	padding: ${props => (props.theme.core.padding / 2).toFixed(2)}rem;
	background-color: transparent;
	border-radius: ${props => (props.theme.border.radius)}rem;
	border: none;
	cursor: pointer;

	&:hover {
		background-color: ${props => (props.theme.colors.backgroundAlt)};
	}
`