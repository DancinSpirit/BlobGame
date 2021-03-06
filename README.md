# Blob Game
A game about raising mystery blobs.
## The Plan
This is a game about raising a mystery blob into a strong and healthy mystery being. The blob will die if you don't take care of it.
## User Stories
### Title Screen
![TitleScreen](https://share.balsamiq.com/c/gzFzqiKeFPi4g7SFrv4R1T.png)
A user will be greeted with a title screen. After clicking on "Start Game" they will be brought to the Initialization Screen.
### Initialization Screen
![InitializationScreen](https://share.balsamiq.com/c/8oqEaXE4FjpNA6cAHGutmE.png)
The user will first create their blob. The blob will have a question mark over it's head. The user will give their blob a name and choose a color for it. When they hit the "submit" button the name/color selection will slide off to the left and be replaced with the game menu. The question mark will be replaced by an exclamation point for a few seconds.
### The Actual Game
![GameScreen](https://share.balsamiq.com/c/pDibM9tyMPss8kKGzrTUiy.png)
A timer will begin. Every 5 seconds the blob's boredom will go up. Every 10 seconds the blob's hunger will go up. Every 15 seconds the blob's exhaustion will go up. Every 30 seconds the blob's age will go up. The user will be able to interact with their blob by hitting the different buttons on the right side of the screen. Details for these interactions are below:

**Playing**
The user can click on "Play with me!" to play with their blob. This will trigger an animation where the blob rolls around. This will lower boredom by 3 but raise exhaustion by 1.

**Feeding**
The user can click on "Feed me!" to feed their blob. A list of choices for food types will appear. This will affect how the blob develops later. Feeding will also cause hunger to go down by 1.

**Resting**
The user can click on "Nap time!" to put the blob to sleep. The blob will roll upside down to reflect this. The "Nap time!" button will change to "Wake Up!". While the blob is asleep: Boredom will not increase. Exhaustion will lower by 1 every 5 seconds. Hunger will function as normal. The blob will naturally wake up after exhaustion has reached 0. The user can also click "Wake Up!" at any time to force the blob awake.

When a blob goes up in age it will develop a new appendage. The appendage will be different depending on what type of food was fed to it most. This will happen at age 2 and again at age 4.

At age 6 the blob will evolve into a creature based on it's two prior developments. The interface will slide off the screen and the game will focus in on the blob which will spin and fade into it's new form. A message will congratulate the user who will then be able to return to the title screen.

The game will continue to function for as long as no property reaches 10. As soon as any property reaches 10 the blob dies. The blob will slowly shrink into nothing and the User will be shown the message: [Insert Name Here] has died! The user will then be able to click an affirmation button to return to the Title Screen.

