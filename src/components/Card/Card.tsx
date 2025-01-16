import React, { useState } from "react";
import PokemonModal from "../Modal/Modal";
import {
  Card,
  Header,
  ImageWrapper,
  Image,
  CardContent,
  Title,
  Divider,
  ID,
  Button,
} from "./styled";

interface PokemonCardProps {
  name: string;
  imageUrl: string;
  id: number;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, imageUrl, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Card>
        <Header>
          <ImageWrapper>
            <Image src={imageUrl} alt={name} />
          </ImageWrapper>
        </Header>
        <CardContent>
          <Title>
            {name} <ID>#{id}</ID>
          </Title>
          <Divider />
          <Button onClick={handleViewDetails}>View Details</Button>
        </CardContent>
      </Card>

      <PokemonModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        name={name}
        imageUrl={imageUrl}
        id={id}
      />
    </>
  );
};

export default PokemonCard;
