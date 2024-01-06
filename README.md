
# Random Daily Message
**By charissa.programming**

#### Description
This is a very simple little program that will display a random (quirky) message when the button is clicked.

I decided to make this as my porfolio project for Codecademy's "Mixed Messages" project.

#### Logic behind the javascript
I decided that the message will look motivational but since this is going to just be a quick and simple exercise, I need it to sound a little bit sensical even if it's not accurate (also it should sound funny).

So I decided that for each message, there should be a:
* noun
* adjective
* verb
* location

Four array are used to store each of the above categories.  
The daily message will randomly select an element from each of the array and output a message with this syntax:

    `${noun} will always be ${adjective}! 
    \nSo why not just ${verb} ${preposition()} ${location}?`;


#### Challenges
The major challenge I've come across during this project is figuring out how to get the message to print out:

    \n
 
to make two paragraphs.
After doing some research, asking chatGPT, looking up stackexchange, and reading the MDN documentation on white-space, I found out that the easiest way for me for this project is to add this to the style.css:

    white-space: pre-line;
    
I was deciding between pre-line or pre-wrap.  I decided with pre-line because it collapses white spaces instead of preserving them.  This results in my message rendering nicely on screen.
