import "../index.scss";
import Logo from '../logo.js';
import Head from 'next/head';

const Index = () => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Work+Sans&display=swap" />
      <script async defer src="https://buttons.github.io/buttons.js"></script>
    </Head>
    <div id="jumbotron">
      <div className="heading-container">
       <Logo />
       <h1>ProtoCAD</h1>
       <p>The first dedicated project for incorporating components as data</p>
      </div>
    </div>

    <div id="demo">
      <h1>Prototyping Tool</h1>

      <div id="githubStar">
        <p>Star us on Github</p>
       <div className="github-button">
        <iframe
          src='https://ghbtns.com/github-btn.html?user=cad-x&repo=protocad&type=star&size=large'
          frameBorder='0'
          scrolling='0'
          width='160px'
          height='30px'>
        </iframe>
       </div>
      </div>

      <div id="aboutWrapper">
      <div className="about-container">
        <div className="about-details right">
          <h2>Design UI components structure</h2>
          <p>Upload a web design of your choice to begin prototyping.</p>
        </div>
        <div className="about-image">
          <img src="/demo.png" />
        </div>
      </div>


      <div className="about-container">
        <div className="about-image">
          <img src="/demo.png" />
        </div>
        <div className="about-details left">
          <h2>Convert to a GraphQL schema</h2>
          <p>Upload a web design of your choice to begin prototyping.</p>
        </div>
      </div>

      <div className="about-container">
        <div className="about-details right">
          <h2>Add resolvers and configure queries</h2>
          <p>Upload a web design of your choice to begin prototyping.</p>
        </div>
        <div className="about-image">
          <img src="/demo.png" />
        </div>
      </div>

      <div className="about-container">
        <div className="about-image">
          <img src="/demo.png" />
        </div>
        <div className="about-details left">
          <h2>Preview data</h2>
          <p>Upload a web design of your choice to begin prototyping.</p>
        </div>
      </div>
    </div>

    </div>

    <div id="contributors">
      <h1>Contributors</h1>
      <div className="bio-container">
        <div className="single-contributor">
          <img src="/avatar.jpg" alt="jason lee" />
          <p>
            <a href="https://github.com/jasonlee1245">Jason Lee</a>
          </p>
        </div>

        <div className="single-contributor">
          <img src="/avatar.jpg" alt="kassandra meyer" />
          <p>
            <a href="https://github.com/kassanj">Kassandra Meyer</a>
          </p>
        </div>

        <div className="single-contributor" >
          <img src="/avatar.jpg" alt="benjamin morrison" />
          <p>
            <a href="https://github.com/newbenhd">Benjamin Morrison</a>
          </p>
        </div>

        <div className="single-contributor">
          <img src="/avatar.jpg" alt="eric natividad" />
          <p>
            <a href="https://github.com/EricNatividad">Eric Natividad</a>
          </p>
        </div>

        <div className="single-contributor">
          <img src="/avatar.jpg" alt="suramya sekhri" />
          <p>
            <a href="https://github.com/suramyasekhri">Suramya Sekhri</a>
          </p>
        </div>
      </div>
    </div>

    <footer>
      <Logo />
      <p>© 2019 ProtoCAD/OSLabs. All rights reserved.</p>
    </footer>
</div>
);

export default Index;
