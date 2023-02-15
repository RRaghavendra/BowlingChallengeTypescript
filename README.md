#### Run test 

````javascript
npx jest
````

# Bowling Challenge

• The BowlingGame module should evaluate the score at the end of the game, when all  frames have been played. 
• There is no need to write a UI, just the code to calculate the score is sufficient. 
• A gutter game (20 times 0 pin) should score 0 
• An all one game (20 times 1 pin) should score 20 
• A spare followed by a 3 should score 16 
• A strike followed by a 3 and a 4 should score 24 
• The perfect game (12 times 10) should score 300 

# Scoring Bowling 

In each frame the player has two opportunities to knock down 10 pins. 
The score for the frame is the total number of pins knocked down, plus bonuses for strikes  and spares. 
A spare is when the player knocks down all 10 pins in two tries. The bonus for that frame is  the number of pins knocked down by the next roll. So in frame 3 above, the score is 10 (the  total number knocked down) plus a bonus of 5 (the number of pins knocked down on the next  roll.) 
A strike is when the player knocks down all 10 pins on his first try. The bonus for that frame  is the value of the next two balls rolled. 
In the tenth frame a player who rolls a spare or strike is allowed to roll the extra balls to  complete the frame. However no more than three balls can be rolled in tenth frame.
