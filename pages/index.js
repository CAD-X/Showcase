import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/components-as-data">
      <a title="About Page">What is Components as Data?</a>
    </Link>
    <div className="jumbotron">
        <h1 style={{ color: 'red' }}>ProtoCAD</h1>
        <p>The first dedicated project for incorporating components as data</p>
    </div>
    <div className="how-to-prototyping">
      <h2>prototyping tool</h2>
    </div>
    <div className="how-to-module">
      <h2>npm module</h2>
    </div>

    <div className="contributors">
      {/* photo and github */}
      <h3>Contributors</h3>
      <p>Jason Lee</p>
      <p>Kassandra Meyer</p>
      <p>Benjamin Morrison</p>
      <p>Suramya Sekhri</p>
      <p>Eric Natividad</p>
    </div>

    <div className="footer">
      <p>ProtoCAD is Open Source</p>
      <p>Available for download</p>
    </div>
</div>
);

export default Index;
