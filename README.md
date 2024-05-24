### README

Problem : https://frontendeval.com/questions/memory-game

Things to look up
1. How to fill an array with ascending numbers
2. How to repeat 18 two times
3. Centering text within cards in grid layout



To improve

1. Couldn't finish within 45mins, first commit is the state i was after 45mins.
    - Do not get stuck by shuffle algo or randomness, move quickly assuming you can use a librray or get back when time permits. Lodash has shuffle
2. Can i pass state variables for example clickCount and setClickCount down the child component?
        Probably not, since thats the time you need to move state up and refactor the code.
3. Efficient and optimized way to update state of array of object, updating the array, updating the object prop single or multiple/
4. I had extreme difficluty in finding the game state, started with child component and refactored multiple time to achive the flip of the card logic. A big red flag
5. I was able to finish the problem, atleast the first usecase in 2 hours (red flag), but there is a bug. 
    - I did not clear the matches after game finish
    - The cards are not disapperaing after the game.
    - Flipping back bothe the cards after incorrect match is also wrong, i updated only 1 item from macth,

6. Cards are not removign after successful match. Yet to try again.
        - The bug was very simple, in matches isMatch function i was checking only matches[0] to matches[1], after refactoring to item as matches I did not recfactor isMatch function.
        - The main red flag is to debug this, why did it take you so long, low confidence, checking other aspects of the code to even get to debug. 



### Learnings

1. Do not get stuck by the first blocker, in this program i stuck by how to create two repeated arrays, shuffle logic, and how to store the card flip logic in GameBorad instead of child. But still progressed further with whatever i know. Iterative approach, although it shows yellow flag for senior role, still good for mid level roles (i think)
2. Improve the debugging strategy, need to be quick, find one thing at a time. Instead of trying to change, run the program and find out whats wrong. Run throught he logic in code.
3. useEffect, can be optimised. use of clean up function and reactive depenecies is key.
4. Always add key to the lists, and put an id to array. Again thinking about the state object DS is important to this.
5. Cannot use return keyword in ternary ? operator, or assignment. You tried during this excersice multiple times. This is a signal of panic, and weakness in fundamentals Although you knew this is not possible.



