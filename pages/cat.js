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
		<h2>Cat Game</h2>
		<h4><i>Taking Twitch Chat UX Interaction To the Extreme</i></h4>
		<p>&emsp;&emsp;This article is a continuation of the Twitch project <Link href="/twitch"><a><i>here</i></a></Link>. To recap the Twitch project, a series of mods, chat bots, and manipulation of keystrokes allowed me to create a method in which a chatbox can 
		interact with video games directly and indirectly. The &quot;Cat Game&quot; project is the same priciple but taken to the logical extreme. In the other project, I used pre-existing games to interact with.
		My next direction involved creating my own video games where the only direct way to play would be through the chatbox. In order to accomplish this, a lot of various features 
		offered on Twitch needed to be utilized as well as specifically gearing the game to handle this input. 
		<br></br>&emsp;&emsp;First, let&apos;s start with game itself. Given the platform being a open chatbox to the public, I settled on it being an MMO, or Massive Multiplayer Online game. The game was to also going to be
		an RPG, or Role Playing Game, with a lot of the classic elements: tank, healer, and damage-dealer (a.k.a. DPS). This was to all be coupled with a clicker/idle medium for interaction. The latter of the genres, clicker/idle, was selected due to the limitation
		in how the users would interact with the game. To have, theoretically, an infinite amount of users with their own character, progression would have to be individualized and tied to tasks the users did. This would
		prevent the users from being able to control characters in the traditional up, down, left, right sense. The messages in the chatbox would give the users a point value which they could then use to upgrade their
		character. Upgrades would be purchased in a small UI designed specifically for Twitch, called a Twitch Extension. In this UI, the user would be able to select which class (tank, healer, DPS) they wanted to be, level that
		character, select items off of a skill tree, upgrade equipment, and customize their character. These characters were later established to be cats due to the fact that I have two kittens and have an affinity to cats.
		</p>
		<div id="catImg1"></div>
		<br></br>
		<br></br><p>&emsp;&emsp;With the basic game logic set, the problem then became how this can be accomplished through the Twitch platform. The basic scoring structure was fairly simple. I set up a database that would keep all of the users
		based on their user IDs and usernames and tally their scores. There was a chat bot that would accompany this database that would directly run the queries that wrote to the database in batches. I programmed it run queries in
		batches at a set interval since I did not want the server to be pinged too much. The real challenge, now, was displaying everything to the users. Twitch&apos;s website released what they called 
		&quot;extensions&quot; which were placed by the Twitch channel owner for the chatters to use. They would then see a mini website appended to the video player that they can then interact with. This &quot;extension&quot; format was
		precisely what I was looking for to display the UI. The extension would read in based on the particular user that was logged into Twitch and display for them their own character. They
		could then choose all of the options they wanted through this little tool.
		<br></br>&emsp;&emsp;Last, but certainly not least, the main gameplay loop was to be created. Since this was a MMO Idle RPG, the gameplay would be able to be resolved in ticks, or operations based on a timed interval. All of the
		classes would have separate skills that operated slightly differently and interacted with the main gameplay in their own fashion. The main gameplay would be a broadcast that held all of the characters
		that were currently in the chat box and they would be faced with a boss character. There was a combined DPS, or damage per second, counter at the top that showed the cumulative damage being done that would slowly take
		down the enemy.
		</p>
		<div id="catImg2"></div>
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
