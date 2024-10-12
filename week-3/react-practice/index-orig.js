
// EXAMPLE : ? tertiary operator
// Use : ? when declaring a variable
// Use : ? directly in JSX
// see https://www.w3schools.com/react/react_es6_ternary.asp

function CoinFlip(props) {
  let announcement = props.coinSide === 'heads' ? "Heads I win!" : "Tails you lose!";

  return (<div className="p-4 m-2 border-2 border-slate">
    <h1 className="text-lg">Coin flip</h1>

    <p>{announcement}</p>

    <img src={props.coinSide === "heads" ? "./img/heads.webp" : "./img/tails.webp"}
      alt="result"
      className="h-32 w-32"
    />

  </div>)
}

// TODO: write your own component
// Use : ? when declaring a variable
// Use : ? directly in JSX
// Add them to TertiaryDemo

// TODO: Create your Component here...

function TertiaryDemo() {
  return (
    <div className="border-2 border-black rounded size-100"> 
      <h1 className="text-2xl">Coin Flip Demo</h1>
      <div className="flex justify-around">
        <CoinFlip coinSide="heads"/>
        <CoinFlip coinSide="tails"/>
      </div>

      <div>
        TODO: Add your Components here!
      </div>

    </div>
  );
}

function App() {
  return (
    <div>
      <CoinFlipDemo />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));