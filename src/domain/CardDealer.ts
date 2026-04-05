import { PokemonCard, PokemonCardTipo } from "./types";

const limiteDeck = 5;

export class CardDealer {
    private deck: PokemonCard[] = [];

    addCard(card: PokemonCard): void {
        if(card.hp <= 0) throw new Error("HP da carta deve ser maior que 0.");

        if(card.ataque < 0) throw new Error("Ataque da carta não pode ser negativo.");

        if(this.deck.some((c) => c.id === card.id)) throw new Error(`Carta com id ${card.id} já está no deck.`);

        if(this.deck.length >= limiteDeck) throw new Error("Deck atingiu o limite de cartas.");
    
        this.deck.push(card);
    }

    removeCard(id: string): PokemonCard {
        const index = this.deck.findIndex((c) => c.id === id);
    
        if(index === -1) throw new Error(`Carta com id ${id} não encontrada no deck.`);
    
        const [removedCard] = this.deck.splice(index, 1);
        return removedCard;
    }

    getCard(id: string): PokemonCard {
        const card = this.deck.find((c) => c.id === id);
    
        if(!card) throw new Error(`Carta com id ${id} não encontrada no deck.`);
    
        return card;
    }

    getCardsByTipo(tipo: PokemonCardTipo): PokemonCard[] {
        return this.deck.filter((c) => c.tipo === tipo);
    }

    getCardMaisForte(): PokemonCard {
    if(this.deck.length === 0) throw new Error("Deck está vazio.");
    
    return this.deck.reduce((maisForte, card) => card.ataque > maisForte.ataque ? card : maisForte);
    }

    getTotalHp(): number {
        return this.deck.reduce((total, card) => total + card.hp, 0);
    }

    deckFull(): boolean {
        return this.deck.length >= limiteDeck;
    }

    clearDeck(): void {
        this.deck = [];
    }

    getTamanhoDeck(): number {
        return this.deck.length;
    }
}
