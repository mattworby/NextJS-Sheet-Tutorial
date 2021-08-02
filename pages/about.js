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
	
	
	<div id="aboutBody">
			<div id="aboutText">
				<h3>Hello! I am Matt Worby! I am a developer with several years of experience with backend development. I am very passionate about design in both everything and especially software. 
				A lot of my hobbies revolve around UI/UX design and I hope to make a career out of it!</h3>
			</div>
			<div id="aboutImage">
				
			</div>
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
