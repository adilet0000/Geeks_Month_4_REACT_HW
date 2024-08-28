import './App.css';

function Title () {
  return (
    <h3 className='App-title'>title title title title title title</h3>
  );
}

function Header () {
  return (
    <>
    <h2 className='App-header'>The Header</h2>
    <Title/>
    </>
  );
}

function Content () {
  return (
    <>
    <p className='App-content'>Content content Content content Content content Content content Content content Content content Content content Content content</p>
    <Title/>
    </>
  );
}

function Footer () {
  return (
    <>
    <h2 className='App-footer'>The Footer</h2>
    <Title/>
    </>
  );
}



function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;