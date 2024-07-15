import Image from "next/image";


export default function Home() {
  return (
    <>
    <header>
    <nav>
        <div className="left">Vishal's Portfolio</div>
        <div className="right">
            <ul>
                <li><a href="">Home </a></li>
                <li><a href="">About </a></li>
                <li><a href="">Projects </a></li>
                <li><a href="">Contact Me </a></li>

            </ul>
        </div>
    </nav>
</header>
<main>
    <section className="firstsection">
        <div className="leftsection">
           <div> Hi, My name is <span className="purple"> Vishal </span></div>
            <div> I am a passionate</div>
            <span id="element"> Web Developer
                
            </span>
            <div className="buttons">
                <button className="btn">Download Resume</button>
                <button className="btn">Visit Github</button>
            </div>
        </div>
        <div className="rightsection">
            <img src="/bg2.png" alt="" height="300" width="300"/>
        </div>
    </section>
    <hr/>
    <section className="secondsection">
        <span className="text-gray">What I have done so far</span>
        <h1>Work Experience</h1>
        <div className="box">
            <div className="vertical">
                <img className="image-top" src="/html.png" alt=""/>
            </div>
            <div className="vertical-title">
            Front End Developer
            </div>
            <div className="vertical-desc">
            Skilled in creating intuitive and responsive web interfaces using HTML, CSS, and JavaScript.

            </div>
            <div className="vertical">
                <img className="image-top" src="/css.png" alt=""/>
            </div>
            <div className="vertical-title">
            React.js
            </div>
            <div className="vertical-desc">
            Proficient in building dynamic and efficient single-page applications with React.js.

            </div>

            <div className="vertical">
                <img className="image-top" src="/js.png" alt=""/>
            </div>
            <div className="vertical-title">
            Python
            </div>
            <div className="vertical-desc">
            Competent in writing clean and efficient Python code for web development, data analysis, and automation.


            </div>

            <div className="vertical">
                <img className="image-top" src="/react.png" alt=""/>
            </div>
            <div className="vertical-title">
            OOP (Object-Oriented Programming)
            </div>
            <div className="vertical-desc">
            Strong understanding of object-oriented principles and design patterns to develop robust and scalable software solutions.
            </div>

            <div className="vertical-title">
            SQL/DBMS
            </div>
            <div className="vertical-desc">
            Experienced in designing, querying, and managing databases using SQL and various database management systems.
            </div>



        </div>

    </section>
</main>
<footer>
    <div className="footer">
        <div className="footer-first">
            <h3>Vishal's portfolio</h3>
        </div>
        
        <div className="footer-second">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
               
            </ul>
        </div>
        
    </div>
    <div className="footer-rights">
        copyright  &#169; www.vishalsportfolio.com | All rights are reserved
     </div>
    
</footer>

</>
  );
}
