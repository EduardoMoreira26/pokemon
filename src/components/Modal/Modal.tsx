import React from 'react';
import { useQuery } from 'react-query';
import { fetchPokemonDetails } from '../../service/PokeService';
import { ModalBackdrop,
  ModalContainer,
  ModalHeader,
  CloseButton,
  ModalBody,
  Image,
  LoadingMessage,
  ErrorMessage,
  DetailContainer,
  DetailSection,
  DetailTitle,
  DetailContent,
  StatsList,
  StatItem,
 } from './styled';

interface PokemonModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  imageUrl: string;
  id: number;
}

const PokemonModal: React.FC<PokemonModalProps> = ({ isOpen, onClose, name, imageUrl, id }) => {
  const { data: details, isLoading, isError, error } = useQuery(
    ['pokemonDetails', id],
    () => fetchPokemonDetails(id),
    { enabled: isOpen } 
  );

  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h2>{name}</h2>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        <ModalBody>
          <Image src={imageUrl} alt={name} />
          {isLoading && <LoadingMessage>Loading...</LoadingMessage>}
          {isError && <ErrorMessage>Error: {error instanceof Error ? error.message : 'Something went wrong'}</ErrorMessage>}
          {details && (
            <DetailContainer>
              <DetailSection>
                <DetailTitle>Types</DetailTitle>
                <DetailContent>{details.types.join(', ')}</DetailContent>
              </DetailSection>
              <DetailSection>
                <DetailTitle>Abilities</DetailTitle>
                <DetailContent>{details.abilities.join(', ')}</DetailContent>
              </DetailSection>
              <DetailSection>
                <DetailTitle>Stats</DetailTitle>
                <StatsList>
                  {details.stats.map((stat) => (
                    <StatItem key={stat.name}>
                      <strong>{stat.name}: </strong> {stat.base_stat}
                    </StatItem>
                  ))}
                </StatsList>
              </DetailSection>
            </DetailContainer>
          )}
        </ModalBody>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default PokemonModal;

