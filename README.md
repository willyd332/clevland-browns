# CHESS APP (ONLINE)

> The goal of this app is to create an online chess app that
> allows users to create a chess match against another user
> and play against them over time or live.

### User Story

##### The User Page

1. The user opens the website and is prompted to login or register

2. After logging in (or registering) they will be brought to their user page which will display:

⋅⋅⋅* Their Name and information (Wins, Losses, Current Games, etc...)
⋅⋅⋅* A display of all of their current games
⋅⋅⋅* A friends list
⋅⋅⋅* A link to create a new game
⋅⋅⋅* A link to an 'add new friend' page/popup

3. If they click "create a new game" they will be brought to a page to type in the username they would like to challenge or select a random opponent.

> This will be the MVP for the user page

4. If they click "add new friend" they will be brought to a page to type in the username they would like to add.

5. Alternatively they can click on the name of one of their friends and challenge them to a game without typing anything.

6. If they click on one of their current games, they will be brought to that game's display page.

##### The Game Page

1. The game page will be a birds eye view of a chess board that will display the user's color on the bottom and the opponent on the top, as well as the pieces that have been DESTROYED on either side of the board.

2. If it is the opponent's turn, the user will not be allowed to interact with any of the pieces.

3. Upon finishing the game, the loser will be prompted to "Challenge Again?" and a new game will be created if they do.  
⋅⋅⋅* They will also have the option to return to the home page.

4. A nav bar will always be available at the top of the screen.

> This will be the MVP for the game page

5. An additional feature will be to save the winning--losing record between two players after each game.

6. An additional feature will be the option to change the color of the board/pieces (Collin, this is where we can use your lo-fi trick)



### Game Logic

1. Standard chess rules

2. The board is set up accordingly

3. The pieces are only allowed to move depending on their type
⋅⋅⋅* Queen  -- (y +-) or (x +-) or ((x+-)+(y+-))
⋅⋅⋅* King   -- (y +- 1) or (x +- 1) or ((x+- 1)+(y+- 1)) or (castle)
⋅⋅⋅* Pawn   -- (y + 1) or (diagonal) or (2 on first move)
⋅⋅⋅* Knight -- ((y+-2),(x+-1))
⋅⋅⋅* Rook   -- (y +-) or (x +-) or (castle)
⋅⋅⋅* Bishop -- ((x+-)+(y+-))

4. The pieces cannot move past any other piece that is in their path

5. Pieces are unable to move off of the board

6. Any piece can destroy an enemy piece upon entering its square

7. A king is not allowed to make a move that puts it in immediate danger of any other piece (nor is any other piece allowed to make a move that puts its king in danger)

8. If a king is current safe, (and every other friendly piece) is unable to make a move, the game ends in a tie.

9. If a king is current in danger, (and every other friendly piece) is unable to make a move, the game ends in a loss.

10. If a pawn makes it to the opposite side of the board, it is turned into a queen.
