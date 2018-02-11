Planning:
The project started with some wireframes (https://imgur.com/a/xuzZJ) and user stories:
  I want to see my seletion on the game board as soon as I make it
  I want to see my opponent's selection as soon as they make it
  I want to see my game's history, how many I've won, lost, and tied
  I want to be able to log in and log out easily
  I want to see a nice message when the game is over
  I want to easily be able to start a new game once a game is over

When I started the development process, the first thing I worked on was presenting
the game board in a pleasing way and coding game logic. Satisfying the first two user stories
took quite a bit of work, because I wanted to convery whose turn it was in a very specific way:
by showing a transparent version of their letter when they hover over a game square. When the selection
is made, the letter darkens and becomes permanently placed in the square. Solving this challenge
took a lot of time and effort as bugs continued to arise.
From there I took to the API authentication and game commands. Despite a few snags these weren't
too frustrating, as I had good code to model my API requests after (GA's token-auth training).
The biggest snag was another self-imposed challenge: I didn't just want to GET a single game by ID.
I wanted to render that game on screen, so players could finish a game they started earlier, or see
the end result of a completed game.
Next I needed to figure out how to present the info to the user in a way that made sense. So far all I had
was a game board. My ideas for UI changed pretty dramatically since I drew my wireframs (which were done
before a line of code was written). I decided I needed a title screen that gave a little information to the
user seeing the page for the 1st time. Simply having a sign-up/sign-in screen with a single h1 element (like my
wireframe suggested) wouldn't provide enough context. I also decided to personalize it with a welcome message
and give my site character. With that in mind I knew I wanted the sign-up/sign-in forms to be in a modal
(something I didn't know about when doing my wireframes) that would be accessed from the title page. I really liked
how this turned out. The gameboard changed as well. I didn't need the 'submit' or 'undo' buttons on the game screen,
since on the title page I set the tone of this app by calling the user an adventurer, and warning them that scores were
final. Therefore, a single mouse-click submits the move, and no undo-ing is allowed. The 'forfeit' button turned
into a button to go to the options screen where players could sign-out, change password, and see some stats.
I really wanted the game screen to be minimalistic and uncluttered. I also got rid of the win screen in favor
of having messages pop up on the sides of the game board, so the view of the board is always within sight.
Finally, a few more tweaks to the UI was made, making the buttons bigger and changing the color of some messages
and buttons, to give the app you see before you.


Technologies used:
Javascript, Jquery, AJAX, HTML, CSS, SASS, git, gitHub, grunt.


Still to do:
Fix x and o elements so they fit within containers of the game board at smaller screen sizes
There's apparently no native way to do this with CSS, but there's a project called Fixtext that
addresses the issue. I could also try using images of x and o (with the same-color background) and pass
those in instead of text, since images may be easier to resize.

Multiplayer functionality (on different devices) is also something I'd like to attempt.

Adding some stats like games won and lost and tied (currently only show number of games played)
