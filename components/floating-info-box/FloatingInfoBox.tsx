import React, { useState } from "react"
import styled from "styled-components"
import Image from "next/image"

const FloatingInfoBoxContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  padding: ${(props) => (props.theme.core.padding / 2).toFixed(1)}rem ${(props) => props.theme.core.padding}rem;
  border-radius: ${(props) => props.theme.border.radius}rem;
  background-color: ${(props) => props.theme.colors.neutrals.darkest};
  filter: drop-shadow(0px 3px 5px rgba(255, 255, 255, 0.1));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  p {
    font-size: ${(props) => (props.theme.font.size * 0.6).toFixed(1)}rem;
    margin: 0;
  }
`

const XmarkContainer = styled.span`
  background-color: ${(props) => props.theme.colors.neutrals.regular};
  width: 15px;
  height: 15px;
  border-radius: 100%;
  position: absolute;
  top: -5px;
  right: -5px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0; /* Initially hidden */
  cursor: pointer;
`

export const FloatingInfoBox = () => {
  const [isXmarkVisible, setIsXmarkVisible] = useState(false)

  const handleHover = () => {
    setIsXmarkVisible(true)
  }

  const handleClick = () => {
    const element = document.getElementById("floating-info-box");
    if (element) {
      element.remove();
    }
  }

  return (
    <FloatingInfoBoxContainer
      id="floating-info-box"
      onMouseEnter={handleHover}
      onMouseLeave={() => setIsXmarkVisible(false)}
      onClick={handleClick}
    >
      {isXmarkVisible && (
        <XmarkContainer style={{ opacity: 1 }}>
          <Image
            src="/assets/icons/xmark-solid.svg"
            alt="X Mark"
            width={12}
            height={12}
            style={{
              willChange: "transform",
              transform: "rotate(90deg)",
            }}
          />
        </XmarkContainer>
      )}
      <p>Beta Version</p>
    </FloatingInfoBoxContainer>
  )
}
