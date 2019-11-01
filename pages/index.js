import { useRef, useEffect } from 'react';
import "../index.scss";
import Logo from '../logo.js';
import FLogo from '../flogo.js';
import Head from 'next/head';

const Index = () => {
  const howRef = useRef(null);
  const toHow = () => {
    window.scrollTo({
      top: howRef.current.offsetTop,
      behavior: 'smooth'
    });
    // window.scrollTo(0, howRef.current.offsetTop);
  };
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap" />
        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </Head>
      <div id="jumbotron">
        <div className="heading-container animate">
          <Logo onClick={toHow}/>
          <h1>ProtoCAD</h1>
          <p>A prototyping tool to help visualize GraphQL query results on component structures</p>
        </div>
      </div>

      <section id="demo" ref={howRef}>
        <h1>How it works</h1>

        <div id="githubStar">
          <p>This project is currently in beta. Feel free to drop us a line if you would like to contribute or star us on Github.</p>
          <div className="github-button">
            <iframe
              src='https://ghbtns.com/github-btn.html?user=oslabs-beta&repo=protocad&type=star&size=large&count=true'
              frameBorder='0'
              scrolling='0'
              width='160px'
              height='30px'>
            </iframe>
          </div>
        </div>

        <div id="aboutWrapper">
          <div className="about-container">
            <div className="about-details right ui-build">
              <h2>Design UI components structure</h2>
              <p>Build your project's componenet structure by adding props and making associations.</p>
            </div>
            <div className="about-image">
              <img src="/build-ui.gif" />
            </div>
          </div>


          <div className="about-container">
            <div className="about-image">
              <img src="/schema.gif" />
            </div>
            <div className="about-details left">
              <h2>Convert to a GraphQL schema</h2>
              <p>Automatically convert your component tree into a GraphQl schema at the click of a button.</p>
            </div>
          </div>

          <div className="about-container">
            <div className="about-details right">
              <h2>Add resolvers and configure queries</h2>
              <p>Customize your GraphQL queries and resolvers to prepare for data fetching.</p>
            </div>
            <div className="about-image">
              <img src="/resolver.gif" />
            </div>
          </div>

          <div className="about-container">
            <div className="about-image">
              <img src="/query.gif" />
            </div>
            <div className="about-details left">
              <h2>Preview data</h2>
              <p>And finally, write the proper queries and specifications to preview the data within your component tree structure.</p>
            </div>
          </div>
        </div>

      </section>

      <section id="contributors">
        <h1>Contributors</h1>
        <div className="bio-container">
          <div className="single-contributor">
            <img src="/jason.jpg" alt="jason lee" />
            <p>
              <a href="https://github.com/jasonlee1245">Jason Lee</a>
            </p>
          </div>

          <div className="single-contributor">
            <img src="/kassandra.jpg" alt="kassandra meyer" />
            <p>
              <a href="https://github.com/kassanj">Kassandra Meyer</a>
            </p>
          </div>

          <div className="single-contributor" >
            <img src="/ben.jpg" alt="benjamin morrison" />
            <p>
              <a href="https://github.com/newbenhd">Benjamin Morrison</a>
            </p>
          </div>

          <div className="single-contributor">
            <img src="/eric.jpg" alt="eric natividad" />
            <p>
              <a href="https://github.com/EricNatividad">Eric Natividad</a>
            </p>
          </div>

          <div className="single-contributor">
            <img src="/suri.jpg" alt="suramya sekhri" />
            <p>
              <a href="https://github.com/suramyasekhri">Suramya Sekhri</a>
            </p>
          </div>
        </div>
      </section>

      <footer>
        <FLogo />
        <p>© 2019 ProtoCAD/OSLabs. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Index;
