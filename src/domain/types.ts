export type PokemonCardTipo =
| "Fogo"
| "Água"
| "Planta"
| "Elétrico"
| "Psíquico"
| "Normal";

export type PokemonCardRaridade = 
| "Comum"
| "Incomum"
| "Rara"
| "Lendária";

export interface PokemonCard {
  id: string;
  nome: string;
  hp: number;
  tipo: PokemonCardTipo;
  raridade: PokemonCardRaridade;
  ataque: number;
}