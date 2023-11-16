# Battleship Game
Link to play : https://szymon-kowal.github.io/TOP-battleship/
## Overview

This project involves creating a Battleship game that can be played against the computer. The game includes Ship, Gameboard, Player, and a main game loop with DOM interaction.

## Classes/Factories

### Ship Class/Factory

- Ships are objects that include length, the number of hits, and a status indicating whether they are sunk.
- Public methods:
  - `hit()`: Increases the number of hits on the ship.
  - `isSunk()`: Checks if the ship is sunk based on its length and hits.

### Gameboard Class/Factory

- Manages the placement of ships at specific coordinates.
- Public methods:
  - `placeShip(ship, coordinates)`: Places a ship at the specified coordinates.
  - `receiveAttack(coordinates)`: Determines if an attack hit a ship and updates the ship accordingly.
  - `getMissedAttacks()`: Retrieves the coordinates of missed shots.
  - `areAllShipsSunk()`: Checks if all ships on the gameboard are sunk.

### Player

- Takes turns attacking the enemy Gameboard.
- Can play against the computer, which makes random legal moves.
- Public method:
  - `attack(enemyGameboard, coordinates)`: Attacks the enemy Gameboard at the specified coordinates.

## Game Loop and DOM Interaction

- The main game loop sets up a new game with Players and Gameboards.
- Displays player boards using information from the Gameboard class/factory.
- Provides methods to render gameboards and take user input for attacks (e.g., clicking on coordinates).

## Development Steps

1. **Ship Class/Factory:**
   - Implement Ship class/factory with hit and isSunk methods.
   - Write unit tests for the public interface.

2. **Gameboard Class/Factory:**
   - Create Gameboard class/factory with placeShip, receiveAttack, getMissedAttacks, and areAllShipsSunk methods.
   - Write unit tests for the public interface.

3. **Player:**
   - Implement Player class with an attack method.
   - Develop computer player AI to make random legal moves.

4. **Game Loop and DOM Interaction:**
   - Set up the main game loop.
   - Implement rendering methods for gameboards and user input for attacks.
   - Ensure the game progresses turn by turn using methods from other objects.

5. **Game End Conditions:**
   - Implement conditions to end the game when one player's ships are all sunk.

6. **Ship Placement:**
   - Develop a system for players to place their ships.
   - Options include typing coordinates or implementing drag and drop.

7. **Computer Player Intelligence (Optional):**
   - Enhance the computer player's intelligence, e.g., trying adjacent slots after a 'hit.'

8. **Two-Player Option (Optional):**
   - Implement a two-player option with turn-based gameplay.
   - Ensure playability on mobile screens and implement a 'pass device' screen.

## Getting Started

To run the game,install all dependencies by typing in console `npm install` and run `npm run watch`,then open the `index.html` file in your preferred web browser. Follow the on-screen instructions to play against the computer.


Happy coding!
