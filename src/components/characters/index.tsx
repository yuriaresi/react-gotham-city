import { ImagemCharacter } from "../style";

export interface CharactersProps {
  name: string;
  description: string;
  image: string;
}

export function Character({ name, description, image }: CharactersProps) {
  return (
    <>
      <ImagemCharacter src={image} />
      <br />
      <hr />
      <h1>Nome do Personagem: {name}</h1>
      <h2>Descrição: {description}</h2>

    
    </>
  );
}
