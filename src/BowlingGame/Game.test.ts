import { Game } from "./Game";

describe('Test Game', () => {
  let game: Game = new Game();

  beforeEach(() => {
    game = new Game()
  })

  const rollMany = (n: number, pins: number) => {
    for (let i = 0; i < n; i++) {
      game.roll(pins)
    }
  }

  const semiPleno = () => {
    rollMany(2, 5);
  }

  test('First test All Game', () => { 
    rollMany(20,0)
    expect(game.score()).toBe(0)
  })
  
  test('With semi pleno ', () => {  
    semiPleno()
    game.roll(7)
    rollMany(17,0)
    expect(game.score()).toBe(24)
  })

  test('With pleno', () => {  
    game.roll(10)
    game.roll(2)
    game.roll(3)
    rollMany(16,0)
    expect(game.score()).toBe(20)
  })

  test('Perfect game', () => {  
    rollMany(12,10)
    expect(game.score()).toBe(300)
  })

})