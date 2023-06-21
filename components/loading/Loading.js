import styled, { keyframes } from 'styled-components'

const LoadingContainerOuter = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(${props => props.theme.colors.foreground}, 0.15);
`;

const LoadingContainerInner = styled.div`
  margin: 15% auto;
  padding: ${props => (props.theme.core.padding * 3).toFixed(2)}rem;
  max-width: 600px;
`;

const BounceAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }
`;

const LoadingAnimation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  
  .bounce1,
  .bounce2,
  .bounce3 {
    width: 10px;
    height: 10px;
    margin: 0 5px;
    background-color: ${props => props.theme.colors.foreground};
    border-radius: 100%;
    animation: ${BounceAnimation} 0.6s infinite alternate ease-in-out;
  }
  
  .bounce2 {
    animation-delay: 0.2s;
  }
  
  .bounce3 {
    animation-delay: 0.4s;
  }
`;

export const Loading = () => {
    return(
        <LoadingContainerOuter>
            <LoadingContainerInner>
                <LoadingAnimation>
                    <div className="bounce1" />
                    <div className="bounce2" />
                    <div className="bounce3" />
                </LoadingAnimation>
            </LoadingContainerInner>
        </LoadingContainerOuter>
    )
}