const myText = {

    text :  `Heres a project I made from December 30th 2020 -> March 19th 2021 using JavaScript, Node.js, and a MongoDB database. 

    This is a simple log of hours of work per day that I created so I could track my daily progress whilst learning how to code!
    
    This version is a display copy and not my personal copy, so please, go ahead, "log in" and play with the data entry / deletion functionality I built-in!
 
Scroll down for development notes and evaluation









----------------------------CRITICIMS-----------------------




HACKY SOLUTIONS:

•	using a boolean in PrintObjects() to determine if it is page load or a new data entry


UGLINESS:

•	Needs a little symbol in the tab

    •	Inconsistent file names
    

    •	Inconsistent class and id naming – look at the format of containers- container5(2020). All the others follow the format week[0,5,2020].  Honestly I just couldn’t be troubled to go back and fix this
    
    •	There is a server side glitch, if the program has less than 3 months of data it will not send the data front-side to render. Not a big problem, but annoying if ever you have to start it a fresh
    
    o	If you delete the last 2 dates from a month, but in separate weeks, the month will not destroy itself once they are deleted
    
    •	On Heroku it only loads 2  of the months , not 3, and although I prefer this, it is unintentional and I do not know why it is not.loading 3 – server side problem?
    
    
    •	It took too long 77+ days
    
    •	If you do somethings you will probably see rred error messages in the console – like trying to delete when there are no targets, or click ing on a month when the controls have not been appended
    
    •	Ugliness – go look at the file ‘process-info’
    
    
    •	 The closePriorWeek function that is linked to setWeekHours can pass in NaN if its clicked too fast so I used a hack isNaN to stop any NaN values being set in the week labels. I don’t think this is good but I did’nt want to endure this problem any more
    
    
    •	If you mouseclick the post-data-button then the cusor will not jump back into the work input field
    

    •  setWeekHours can pass in NaN if its clicked too fast so I used a hack isNaN to stop any NaN values being set in the week labels. I don’t think this is good but I did’nt want to endure this problem any more
    
    •	If you post to a closed month It does not open – the week opens, but not the closed month
    
    •	I have a function simply called ‘toggle’ – what a bad name
    
    •	I have a bunch of DOM creation functions that look ugly – look in the files – DOMappend, and any of the UI.js files
    
    
    •	The year switch in pingMonth(), is it working? – it showed me 1 1 1 following 31 12 2020 . . . 
    
    •	I left all the console.logs in place…
    
    
    •	I don’t like the way the delete selection looks - blocky red highlighing
    
    •	Code is littered with green comments

    •	Inconsistent use of : semicolons to delimit lines
    

    • Look in the CSS files, the rules and properties are disordered, with commented out  code etc. it is messy

     
    • Look in the JS files its also probably got a bunch of redundant stuff in there

    •  It wont be mobile friendly. Or large screen-friendly. I did this on my laptop and I don't know how I would make it work for other screen-sizes. The thought of embarking down that path is dreadful.
 
    •  I don't like the inline styling that you can see if you open up the HTML display in Developer Tools (on Chrome) - everythihng has inline styling from various transitions and animations. basically every div on the screen. So it looks polluted in the HTML.. But I don't know if or how I can do anything about that except - stop using inline styles via JS. Which doesnt seem possible.
 
    •  I did not consider performance when I built this. Though I did limit each database call to 3 months worth of data per 'add more' button press. Even the fact of dynamically loading all this text every time you click the info button is likely bad for performance.
 
    • It doesnt deal with duplicate dates - you can put in 19th of march 10 times. or the 36th of february
 
    • I am ambivalent about the table headers - the tabular data needed a header but I didn't know how to make it elegant. In the end I decided that a small dropdown onhover header was the best out of what I could think of, but I am still not 100% satisfied with it!
 
    • One of the quirks of converting numbers into fractions is that if you entered 40 and 40 the display would show 1/2 and 1/2 but the total would show 1 1/4
 
    • On the server side code there could be all sorts of nonsense there but I just didn't have it in me to go back and check it! I just didnt have it in me!!
 
    • You can trick the buttons subtitles to appear when the backdrop is applied - all you have to do is click on it once for the backdrop to appear, then close the backdrop, then quickly reopen the backdrop
 
  
    • There is inconsistency in the way the code is written - some places I use "double quotes "  other places 'single quotes '. Also I did not finish most of my lines of code with semi-colons ; 
 
    Cool features I never made:

    •	It needs a month total
    •	A print function
    •	A high score function
    •	A delete month button

 
    Honestly i just want it to be over. It has taken me 3 months and its not that great. Just collection of tabular data. I am commited to  designing a wordpress website for a local initiative and I'm getting nervous as I am totally over-running on this project
    



    
`

}