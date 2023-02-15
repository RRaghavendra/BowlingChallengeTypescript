import { Bowling } from './bowling'

describe("Bowling", () => {

  let bowling: Bowling;

  beforeEach(() => {
    bowling = new Bowling();
  });

  function addThrow({ pins, times }: { pins: number; times: number; }): void {
    for (let i = 0; i < times; ++i) {
      bowling.addThrow(pins);
    }
  }

  it("A gutter game", () => {
    let numberOfTurns = 20;
    addThrow({ pins: 0, times: 20 });
    expect(bowling.getScore()).toBe(0);
  });
  it("An all one game", () => {
    addThrow({ pins: 1, times: 20 });
    expect(bowling.getScore()).toBe(20);
  });
  it("A spare followed by a 3", () => {
    addThrow({ pins: 5, times: 2 });
    addThrow({ pins: 3, times: 18 });
    expect(bowling.getScore()).toBe(16);
  });
  it("A strike followed by a 3 and a 4", () => {
    addThrow({ pins: 10, times: 1 });
    addThrow({ pins: 3, times: 9 });
    addThrow({ pins: 4, times: 9 });
    expect(bowling.getScore()).toBe(24);
  });
  it("perfect game, twelve strikes", () => {
    addThrow({ pins: 10, times: 12 });
    expect(bowling.getScore()).toBe(300);
  });
});