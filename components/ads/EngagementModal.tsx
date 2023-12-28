import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Cookies from 'js-cookie'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  cursor: pointer; /* Add this to indicate the overlay is clickable */
`

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`

const CloseButton = styled.span`
  position: relative;
  top: -45px;
  left: 10px;
  cursor: pointer;
`

const EngagementModal: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  useEffect(() => {
    const checkClosedModal = async () => {
      try {
        const hasClosedModal = await Cookies.get('closedEngagementModal')
        if (!hasClosedModal) {
          setShowModal(true)
        }
      } catch (error) {
        console.error('Error checking closedEngagementModal:', error)
      }
    };

    checkClosedModal()
  }, [])

  const handleCloseModal = () => {
    try {
      setShowModal(false);
      Cookies.set('closedEngagementModal', 'true', { expires: 2 }); // Cookie expires in 2 days
    } catch (error) {
      console.error('Error setting closedEngagementModal cookie:', error)
    }
  };

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      handleCloseModal()
    }
  };

  return showModal ? (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <CloseButton onClick={handleCloseModal}>Close</CloseButton>
        <Image
          src="/image.jpg"
          alt="Engagement Modal"
          width={250}
          height={500}
        />
      </ModalContent>
    </ModalOverlay>
  ) : null
};

export default EngagementModal