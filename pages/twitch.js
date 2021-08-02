import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8"/>
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        <title>Matt&apos;s Portfolio</title>
        <meta name="description" content="Portfolio"/>
        <meta name="author" content="Matt Worby"/>

		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"/>
  		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>

      </Head>

      <div id="mobileNavMenu">
		<div id="innerMobileMenu">
			<Link href="/"><a><div id="homeNav">
				Home
			</div></a></Link>
			<Link href="/workMain"><a><div id="workNav">
				Work
			</div></a></Link>
			<Link href="/about"><a><div id="aboutNav">
				About
			</div></a></Link>
			<a href="./login"><div id="resumeNav">
				Resume
			</div></a>
			<a href="https://www.linkedin.com/in/mattworby13a87b123/"><div id="linkedNav">
			</div></a>
		</div>
	</div>
	<div id="navBar">
		<Link href="/"><a><div id="namePlate">
			<h2>Matt Worby</h2>
		</div></a></Link>
		
		<div id="navItems">
			<Link href="/"><a><div id="homeNav">
				Home
			</div></a></Link>
			<Link href="/workMain"><a><div id="workNav">
				Work
			</div></a></Link>
			<Link href="/about"><a><div id="aboutNav">
				About
			</div></a></Link>
			<a href="./login"><div id="resumeNav">
				Resume
			</div></a>
			<a href="https://www.linkedin.com/in/mattworby13a87b123/"><div id="linkedNav">
			</div></a>
		</div>
		<div id="mobileNavButtons">
			<div id="mobileNavHam" className="mobileNav" onClick={() => openMobileMenu("ham")}>
			</div>
			<div id="mobileNavCross" className="mobileNav" onClick={() => openMobileMenu("cross")}>
			</div>
		</div>
	</div>
	
	
	<div id="projectMainBody">
		<h2>Twitch</h2>
		<h4><i>Bot Programming & Chat Interactivity</i></h4>
		<p>&emsp;&emsp;Twitch, a streaming platform, has offered many new and interesting ways for people to interact with others. To over simplify how the website works, a single entity, typically an individual, will streaming
		themselves performing something. This &quot;something&quot; can be virtually anything that adheres to the websites Terms of Service from video games to reacting to Youtube, or in the creative realm of dancing, drawing,
		creating music, or other performance mediums. While the person(s) stream, anyone can watch and interact with the streamer through a chatbox that would display to all other on-lookers and to the streamer, themselves.
		During the length of COVID-19&quot;s quarantine, I spent some time streaming myself programming various simple projects. I wanted to create more ways for the viewers to interact with the stream/streamer in real time.
		This proved rather difficult but not impossible. Twitch&quot;s website is, in large part, used to platform playing video games therefore a lot of what I did centered around interacting with video games.
		</p>
		<div id="twitchImg1"></div>
		<br></br>
		<br></br><p>&emsp;&emsp;Making a chatbox interact with a video game in real time started with a chat bot which I made myself. It was an incredibly simple bot that I ran on my local machine
		that would simply take commands from the chatbox with a preface of &quot;!&quot; (ex. !up). These commands would then translate into keystrokes that would control the player-character in the video game. I started was Tetris.
		I rewrote sections of the code I gathered from an Open Source project to make it work. The chatters could then type !up, !u, !down, !d, etc. in order
		to play the game. A design issue that arose in the implementation was a big delay between typing in the chat and what appeared on the screen. The bot have to read in the commands,
		it then had to &quot;press the keys&quot;, which altered the gamestate. This gamestate was then being recorded by a streaming software called Streamlabs. This was all broadcast to everyone over the internet. The entire process being handled
		in real time but over the internet and so the input lag between typing and seeing it processed was an issue.
		<br></br>&emsp;&emsp;The next video game of choice to interact with the chatbox was Pokemon Yellow. This was rather simple to implement with the existing code from the Tetris
		project with a little alterations. In order to easily allow the chatbox to interact with Pokemon Yellow, I rebound all of the keys to very specific keystrokes so as the chatters would type in chat, 
		it would press the keys on my keyboard and control the game. This method of playing Pokemon Yellow was extremely chaotic albeit entertaining to watch. 
		During the duration of this project, the chatters were able to beat the first main sections of the game and then, subsequently, delete the strongest
		characters that got them there.
		</p>
		<div id="twitchImg2"></div>
		<br></br>
		<br></br><p>&emsp;&emsp;After allowing the chatters to able to interact successfully with the game, I then wanted to see what it would be like if the chatters can alter the games <em>while</em> I play. This process was much more involved
		than having the chatters play the game directly. The game that I thought about doing was the hot topic of the moment, Fall Guys. Fall Guys is a simple game that has a very basic control scheme, forward, back, left, right, and jump. 
		In the game, you can also control where the camera is looking. With this basic
		control scheme, I used a similar bot to the Pokemon Yellow project that accepted basic movement inputs with an additional input of jump and camera movement. Playing the game proved rather difficult. Rather than , this was not the most ideal way to play the game, however, it was very entertaining.previous iterations
		of the projects where all of the chatters worked <em>with</em> me, they were now working <em>against</em> me. The Fall Guys character would bound around sporadically and randomly jet around left and right. Similarly to the
		previous projects this was not the most ideal way to play the game, however, it was very entertaining.
		<br></br>&emsp;&emsp;With the knowledge that the chatters can directly interfere with my gameplay, it was time to take it to the next logical extreme, Dark Souls. I knew that the chat could control my movement, however, 
		I felt that was rather simple given that Dark Souls was a more 3D environment with more to explore. Something that is rather unique to gaming on PC that offers a large amount of customizability is modding. Mods are community alterations 
		to a specific game that can add virtually anything limited mostly to the modders imagination. One very specific mod that I sought out was a command line mod tool called &quot;Dark Shell&quot;. &quot;Dark Shell&quot;, unlike other tools, allowed me to directly run code on a command line
		that directly influenced the game. This ability to run code directly on the game allowed me to take the inputs from the chatbox, process it through the chat bot, and execute a command that directly influenced the game. This
		opened the doors for a large amount of insanity. Chatters could turn on and off the gravity of the game, take away stat points in an RPG, remove my weapon, prevent the character from attacking, and so on. Adding this alteration,
		to Dark Souls, which is already a frustrating game, made it exponentially more frustrating to play but very fun.
		Although this marked the end of having chat change my game as I played or having them play a pre-existing game, this did not mark the end of chatters influencing a game. The next project involving this process took this methodology
		way beyond anything previously done. The next project was to make a game specifically playable <em>ONLY</em> via chat. There is more on this on the <a href="cat.html"><i>Cat Game project page</i></a>.
		</p>
	</div>
  <footer className="bg-black">
    <div className="container py-5">
      <div className="row py-4">
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
		  <h6 className="text-uppercase font-weight-bold mb-4">About Me</h6>
          <p className="text-muted mb-4">A backend developer who is very passionate about design and frontend development with hopes to make a career in UI/UX design.</p>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Site</h6>
          <ul className="list-unstyled mb-0">
            <li className="mb-2"><Link href="/"><a className="text-muted">Home</a></Link></li>
            <li className="mb-2"><Link href="/workMain"><a className="text-muted">Work</a></Link></li>
            <li className="mb-2"><Link href="/about"><a className="text-muted">About</a></Link></li>
            <li className="mb-2"><a href="./login" className="text-muted">Resume</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Projects</h6>
          <ul className="list-unstyled mb-0">
		  	<li className="mb-2"><Link href="/twitch"><a className="text-muted">Twitch</a></Link></li>
            <li className="mb-2"><Link href="/cat"><a className="text-muted">Cat Game</a></Link></li>
            <li className="mb-2"><Link href="/equation"><a className="text-muted">Equation Calculator</a></Link></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 mb-lg-0">
          <h6 className="text-uppercase font-weight-bold mb-4">Contact Me</h6>
          <p className="text-muted mb-4">Please feel free to follow the icons below to view more material or contact me at mattworby@gmail.com!</p>
		  <a href="https://www.linkedin.com/in/mattworby13a87b123/" target="_blank" rel="noopener noreferrer"><button id="button-addon1" type="submit" className="btn btn-link siteBtn" ><i className="fa fa-linkedin-square"></i></button></a>
		  <a href="https://github.com/mattworby" target="_blank" rel="noopener noreferrer"><button id="button-addon1" type="submit" className="btn btn-link siteBtn" ><i className="fa fa-github"></i></button></a>
		  
		  <a href="https://www.linkedin.com/in/mattworby13a87b123/" target="_blank" rel="noopener noreferrer"><button id="button-addon1" type="submit" className="btn btn-link mobileBtn" ><i className="fa fa-linkedin-square fa-lg"></i></button></a>
		  <a href="https://github.com/mattworby" target="_blank" rel="noopener noreferrer"><button id="button-addon1" type="submit" className="btn btn-link mobileBtn" ><i className="fa fa-github  fa-lg"></i></button></a>
        </div>
      </div>
    </div>
    </footer>
    </div>
  )
}

function openMobileMenu(value){
	var background = value

	if (background == 'ham'){
		document.getElementById("mobileNavCross").style.display = "inline-block";
		document.getElementById("mobileNavCross").style.zIndex = "99";
		document.getElementById("mobileNavMenu").style.display = "block";
		document.getElementById("mobileNavHam").style.visibility = "hidden";
	} else if (background == 'cross'){ 
		document.getElementById("mobileNavHam").style.visibility = "visible";
		document.getElementById("mobileNavCross").style.display = "none";
		document.getElementById("mobileNavMenu").style.display = "none";
	}
}
