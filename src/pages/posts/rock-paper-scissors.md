---
layout: '@/templates/BasePost.astro'
title: Rock, Paper, Scissors
description: Rock, paper, scissors game for two players to play online.
pubDate: 2023-10-31T00:00:00Z
imgSrc: '/assets/images/rock-paper-scissors-game.png'
imgAlt: 'Rock paper scissors'
---

A multiplayer Rock, Paper, Scissors app developed using Node.JS, JavaScript and Express. Styled with Bootstrap. Tested with Mocha and Chai.

#### Links

- See the [site](https://rock-paper-scissors-40zg.onrender.com/) (it's hosted on Render, so if it's not been hit recently it might take a minute to start)  
- See the [code](https://github.com/OanaDemian/rock-paper-scissors-challenge)

#### App main usage and features

| Views     | Description                                         |
| --------- | --------------------------------------------------- |
| index.ejs | landing page where players register their names     |
| game.ejs  | game page where players make their choices and play |

#### End Point Responsabilities

/game
- redirects to /game/new if a game is not in progress
- renders the form for next game inputs
- shows results of last game if one has happened

- takes input to:

| Method | Route     | Response                                                      |
| ------ | --------- | ------------------------------------------------------------- |
| GET    | /         | displays a form to register players for a new game            |
| POST   | /game/new | receives the player names                                     |
|        |           | if player names not valid redirects to /                      |
|        |           | if player names valid creates new game and redirects to /game |
| GET    | /game     | redirects to / if a game is not in progress                   |
|        |           | displays the form for next game inputs                        |
|        |           | shows the result of the last game if one has happened         |
| POST   | /game     | receives new game data and runs the game                      |
|        |           | returns game.ejs with updated game values                     |

#### Tests

1. GET request to /index route renders the index page
2. POST request to the /game route redirects to index page when rockPaperScissors undefined
3. GET request to the /game route redirects to / when players' information not sent
4. GET request to the /game route renders the game page when player information successfully sent
5. Update lastGame value when /game posted it
6. POST requests to /game/new redirects
