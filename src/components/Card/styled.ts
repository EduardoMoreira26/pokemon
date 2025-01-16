import { styled } from "styled-components"

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: 280px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  font-family: 'Arial', sans-serif;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`

export const Header = styled.div`
  background: linear-gradient(135deg, #402cf7, #fc575e);
  height: 100px;
  position: relative;
`

export const ImageWrapper = styled.div`
  width: 90px;
  height: 90px;
  background-color: #fff;
  border: 3px solid #434343;
  border-radius: 50%;
  position: absolute;
  bottom: -45px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const CardContent = styled.div`
  padding: 60px 20px 20px;
`

export const Title = styled.h3`
  font-size: 20px;
  color: #333;
  margin: 0;
  font-weight: bold;
  text-transform: capitalize;
`

export const ID = styled.span`
  font-size: 16px;
  color: #888;
  margin-left: 10px;
  font-weight: normal;
`

export const Divider = styled.div`
  height: 1px;
  background-color: #eee;
  margin: 15px 0;
`

export const Button = styled.button`
  background-color: #6200ea;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #3700b3;
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: none;
  }
`

