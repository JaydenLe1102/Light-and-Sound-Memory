# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Trinh Nhu Khang (Jayden) Le**

Time spent: **10** hours spent in total

Link to project: https://glitch.com/edit/#!/goofy-material-attention?path=script.js%3A83%3A0

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Start game hide the last four game buttons and appear again when game ends
- [x] User not able to touch or click game buttons while the tones sequence is played to avoid confusion for the user
- [x] Adding level system
  - [x] Increase level add more game buttons
  - [x] Increase level speed up dramatically faster
  - [x] Increase level add more tones to the sequence for the user to complete (level one have only 3 tones)
  - [x] Increase level increase points earn each time
- [x] Adding background for the page
- [x] Adding point system
  - [x] Increase points with effect of increasing one by one
- [x] Adding point history chart
- [x] Adding best point

## Video Walkthrough (GIF)

![](https://cdn.glitch.global/94a25928-6d92-4350-bd7c-cce18344cb34/smallWinGame.gif?v=1648405117359)
![](https://cdn.glitch.global/94a25928-6d92-4350-bd7c-cce18344cb34/longgame.gif?v=1648405120213)
![](https://cdn.glitch.global/94a25928-6d92-4350-bd7c-cce18344cb34/demoFunctional.gif?v=1648405104938)
![](https://cdn.glitch.global/94a25928-6d92-4350-bd7c-cce18344cb34/buttontoggle.gif?v=1648405090116)

I think the gif make by the app is not having very good quality even though I follow exact the same direction on how to do it and try multiple times. Therefore, I include recored video url of the gif here: 

[demo video 1](https://youtu.be/Jq0VxgnlP0Y)  
[demo video 2](https://youtu.be/CUyVh5KRbsk)  
[demo video 3](https://youtu.be/OepT-8SvYyU)  
[demo video 4](https://youtu.be/QfhnN6MCt4c)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

[CodePath instruction](https://courses.codepath.org/snippets/summer_internship_for_tech_excellence/prework?utm_campaign=CodePath%20SITE%202021&utm_medium=email&_hsmi=204129942&_hsenc=p2ANqtz-8r8YGvYZDllsWTQNINymeFR1qCaP3P-vhFnpaotgxKkBIpnFqalILRnWofQEi4sxCD9zJQv7noZ8UftuYvM0guyVtTWQ&utm_content=204129942&utm_source=hs_automation#heading-1-expectations)

[flexbox tutorial from w3school](https://www.w3schools.com/css/css3_flexbox.asp)

[javascript array](https://www.w3schools.com/js/js_arrays.asp)

[control the display of an element web3school](https://www.w3schools.com/jsref/prop_style_display.asp)

[for generating gradiant for text](https://cssgradient.io/)

[for how to add gradient to text](https://cssgradient.io/blog/css-gradient-text/)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

- I think that the hardest challenge I got was to get to the flow of coding to add more features into it. I feel like reading and following the basic instruction for the basic requirements are way easier than figuring out how to implement all the optional and extra features myself. I think it is because, for the instruction, I just need to passively read and understand the available explanation and the code while adding more features to make everything on my own thinking. Therefore, for optional and extra features, I have to actively figure out what to use, what to include, and how to organize all the code into different functions.

- To overcome it, I read over the code and the explanation repeatedly and start trying to modify some existing code. Doing that, I start to know and understand more about the purpose of each line of code by observing the differences of the code that I made. Moreover, I also look at the console and the page itself by inspecting and looking at the page and see the output of the console.log. Doing this, I was able to understand the flow of the current code and from there, I start knowing what are the logics of it and got into the flow of how the whole program ran. Finally, I carefully look at the meaning of each global variable in the code to check what are their purpose and how they changed every time users make some click or guess. Keeping doing those got me into the flow of logic that the game ran, and from there, I was able to add more globals variables and functions to support what I want to build for the system.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

- I think after completing my submission I have 4 questions:
  - How to use CSS to make the page's response as you change the size of the page's windows since I think changing it will mess up the page order and looks?
  - How do you add more transition and effect to elements in the page using CSS and Javascript? Even though I know how to change the effect of the points when it increases, that is just assigning and changing with also using setTimeout function but that is nothing related to CSS transition and effect.
  - How will the information will be stored in the backend and how to create a database so that the user can compare themselves with other people?
  - As I learned about web development, I know about different library like Vue.js, React.js and knows that they will help me make all the HTML change and reflect on the website as I change its value, how do they work? Are they going to the same step that we did use DOM components in Javascript and change its value or is there any difference with the way those libraries work?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

- If I had a few more hours to work on this project, I will definitely look into adding more features to support users. I can give the users three strikes for every level or three strikes for every sequence that played. Moreover, I am also very interested in how to make a database of users and their points so that instead of having the game history I can have the ranking system where it displays the top 5 users and the rank of the current user.
- In terms of UI, I definitely want to add more transitions and effects into the UI. I can do one of the optional features that you guys provide to put in there the gif or pictures and make everything into a special theme like anime characters, cars, sports, celebrities,... In addition to the UI, I also want to add more effect to the points, the buttons, and the game buttons as I got clicked to make it more interesting to the user. Finally, my last choice would be to make it works on all screen size so that changing the screen size would not make the games looks weird.
- Lastly, I would definitely test the game over and over again by playing it and looking into some testing systems like google test to find unexpected bugs and fix them.

## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/znmOwTHkND8)

## License

    Copyright [Trinh Nhu Khang Le]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
