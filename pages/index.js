import Link from 'next/link';
import "../index.scss";

const Index = () => (
  <div>
    <Link href="/components-as-data">
      <a title="About Page">What is Components as Data?</a>
    </Link>
    <div className="jumbotron">
        <h1>ProtoCAD</h1>
        <p>The first dedicated project for incorporating components as data</p>
    </div>
    <div className="how-to-prototyping">
      <h2>prototyping tool</h2>
    </div>
    <div className="how-to-module">
      <h2>npm module</h2>
    </div>

    <div className="contributors">
      {/* photo, github link, bio */}
      <h3>Contributors</h3>
      <p><a href="https://github.com/jasonlee1245">Jason Lee</a></p>
      <p><a href="https://github.com/kassanj">Kassandra Meyer</a></p>
      <p><a href="https://github.com/newbenhd">Benjamin Morrison</a></p>
      <p><a href="https://github.com/EricNatividad">Eric Natividad</a></p>
      <p><a href="https://github.com/suramyasekhri">Suramya Sekhri</a></p>
    </div>

    <div className="footer">
      <p>ProtoCAD is Open Source</p>
      <p>Available for download</p>
    </div>
</div>
);

export default Index;
