import { styled } from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  max-width: 600px;
  width: 90%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  color: #a1a1a1;
  text-align: center;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  font-size: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #a1a1a1;

  &:hover {
    color: #63b3ed;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #63b3ed;
  margin-bottom: 16px;
`;

export const LoadingMessage = styled.p`
  font-size: 18px;
  color: #a0aec0;
`;

export const ErrorMessage = styled.p`
  font-size: 18px;
  color: #e53e3e;
`;

export const DetailContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  text-align: left;
`;

export const DetailSection = styled.div`
  margin-bottom: 16px;
`;

export const DetailTitle = styled.h4`
  font-size: 18px;
  color: #63b3ed;
  margin-bottom: 8px;
`;

export const DetailContent = styled.p`
  font-size: 16px;
  color: #a1a1a1;
`;

export const StatsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StatItem = styled.li`
  font-size: 16px;
  color: #a1a1a1;
  margin-bottom: 6px;
`;
