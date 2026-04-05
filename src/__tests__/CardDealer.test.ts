import { CardDealer } from "../domain/CardDealer";
import { PokemonCard } from "../domain/types";

const criarCard = (overrides?: Partial<PokemonCard>): PokemonCard => ({
    id: "1",
    nome: "Bulbasaur",
    hp: 100,
    tipo: "Planta",
    raridade: "Comum",
    ataque: 10,
    ...overrides,
});

// Cenário de teste - FLuxo normal
describe("Cenário — fluxo normal", () => {
  it("Deve adicionar uma carta válida ao deck", () => {
    const dealer = new CardDealer();
    const card = criarCard();
    dealer.addCard(card);

    expect(dealer.getTamanhoDeck()).toBe(1);
  });
});

//Teste 1
it("Deve retornar a carta correta pelo ID", () => {
    const dealer = new CardDealer();
    const card = criarCard({ id: "8" });
    dealer.addCard(card);

    expect(dealer.getCard("8")).toEqual(card);
});

//Teste 2
it("Deve remover a carta correta pelo ID", () => {
    const dealer = new CardDealer();
    const card = criarCard({ id: "3" });

    dealer.addCard(card);
    expect(dealer.removeCard("3")).toEqual(card);
});

//Teste 3
it("Deve retornar o tamanho correto do deck após adicionar carta", () => {
    const dealer = new CardDealer();
    const card = criarCard({ id: "5" });
    const card1 = criarCard({ id: "6" });
    const card2 = criarCard({ id: "7" });

    dealer.addCard(card);
    dealer.addCard(card1);
    dealer.addCard(card2);

    expect(dealer.getTamanhoDeck()).toBe(3);
});

//Teste 4
it("Deve retornar true quando o deck estiver cheio", () => {
    const dealer = new CardDealer();
    for (let i = 0; i < 5; i++) {
        dealer.addCard(criarCard({ id: `${i}` }));
    }
    expect(dealer.deckFull()).toBe(true);
});

//Teste 5
it("Deve retornar false quando o deck não estiver cheio", () => {
    const dealer = new CardDealer();
    expect(dealer.deckFull()).toBe(false);
});

//Teste 6
it("Deve retornar as cartas de um tipo específico", () => {
    const dealer = new CardDealer();
    const card1 = criarCard({ id: "9", tipo: "Fogo" });
    const card2 = criarCard({ id: "10", tipo: "Água" });
    const card3 = criarCard({ id: "11", tipo: "Fogo" });

    dealer.addCard(card1);
    dealer.addCard(card2);
    dealer.addCard(card3);

    expect(dealer.getCardsByTipo("Fogo")).toEqual([card1, card3]);
});

//Teste 7
it("Deve retornar a carta com ataque mais forte", () => {
    const dealer = new CardDealer();
    const card1 = criarCard({ id: "12", ataque: 20 });
    const card2 = criarCard({ id: "13", ataque: 50 });
    const card3 = criarCard({ id: "14", ataque: 25 });

    dealer.addCard(card1);
    dealer.addCard(card2);
    dealer.addCard(card3);  

    expect(dealer.getCardMaisForte()).toEqual(card2);
});

//Teste 8
it("Deve retornar o total de HP do deck", () => {
    const dealer = new CardDealer();
    const card1 = criarCard({ id: "15", hp: 20 });
    const card2 = criarCard({ id: "16", hp: 230 });
    const card3 = criarCard({ id: "17", hp: 250 }); 

    dealer.addCard(card1);
    dealer.addCard(card2);
    dealer.addCard(card3);  

    expect(dealer.getTotalHp()).toBe(500);
});

//Teste 9
it("Deve limpar o deck e zerar o tamanho", () => {
    const dealer = new CardDealer();
    const card = criarCard();

    dealer.addCard(card);
    dealer.clearDeck();

    expect(dealer.getTamanhoDeck()).toBe(0);
});

//Teste 10
it("Deve lançar erro ao tentar obter carta mais forte de um deck vazio", () => {               
    const dealer = new CardDealer();

    expect(() => dealer.getCardMaisForte()).toThrow("Deck está vazio. Não é possível obter a carta mais forte.");
});