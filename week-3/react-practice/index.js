/**
 * Coding Bootcamp Assignment: Props, Tertiary Operator, & Array Destructuring
 *
 * Instructions:
 * You will create three components that demonstrate the use of:
 * 1. Passing props to a component.
 * 2. The ternary operator.
 * 3. Array destructuring.
 * 
 * Follow the examples provided in the WelcomeMessage, CoinFlip, and FruitStore components to complete the assignment.
 * 
 * - Follow the TODO comments to complete each task.
 */

// TASK 1: Demonstrate the simple use of props

// EXAMPLE: Passing a prop to display a welcome message
function WelcomeMessage(props) {
  return (
    <div className="p-4 m-2 border-2 border-slate-600 w-1/4">
      <h2 className="text-lg">Welcome Message</h2>
      <p className="text-teal-600">{`Welcome, ${props.name}!`}</p>
      <p>{`You are ${props.age} years old!`}</p>
    </div>
  );
}

// TODO: Add your own component that uses props to display dynamic data
// Example component: UserInfo
function ProductInfo(props) {
  return (
    <div className="p-4 m-2 border-2 border-green-600">
      <h2 className="text-lg">{`Product Name: ${props.name}`}</h2>
      <p>{`Product Price: $${props.price}`}</p>
    </div>
  )
}
// Pass props such as "name" and "age" to the component and display them.

function PropsDemo() {
  return (
    <div className="border-2 border-black rounded size-100">
      <h1 className="text-2xl">Props Demo</h1>

      <div className="flex">
        <WelcomeMessage name="Alice" age="56"/>
        <WelcomeMessage name="Bob" age="25"/>
        <WelcomeMessage name="Carol" age="21"/>
        TODO: Add a welcome message for Derek, Emily, and Frank using the WelcomeMessage component and a prop.
        <WelcomeMessage name="Derek" age="23" />
        <WelcomeMessage name="Emily" age="45"/>

      </div>
      <div className="flex">
        TODO: Add your own component here demonstrating the use of props.
        <ProductInfo name="Apple" price=".99" />
        <ProductInfo name="Eggs" price="5.99" />
        <ProductInfo name="Milk" price="4.99" />
      </div>

    </div>
  );
}

// TASK 2: Use the ternary operator to display different content

// EXAMPLE: Tertiary operator usage in JSX and variable declaration
// CoinFlip component uses a ternary operator to determine what to show.
function CoinFlip(props) {
  let announcement = props.coinSide === 'heads' ? "Heads I win!" : "Tails you lose!";

  return (
    <div className="p-4 m-2 border-2 border-slate">
      <h1 className="text-lg">Coin flip</h1>
      <p>{announcement}</p>
      <img 
        src={props.coinSide === "heads" ? "./img/heads.webp" : "./img/tails.webp"}
        alt="result"
        className="h-32 w-32"
      />
    </div>
  );
}

// TODO: Create your own component that uses the ternary operator
// Example component: Weather
// Use the ternary operator to display a message based on the props passed (e.g., "temperature").
function SportsScore(props) {
  let winner = props.homeScore > props.awayScore ? 'Home Team' : 'Away Team';
  return (
    <div className="p-4 m-2 border-2 border-blue-300">
      <h1 className="font-bold">Sports Score</h1>
      <p>Home Score: {props.homeScore}</p>
      <p>Away Score: {props.awayScore}</p>
      <p>Winner: <span className="font-bold text-green-600">{winner}</span></p>
    </div>
  )
}

function TertiaryDemo() {
  return (
    <div className="border-2 border-black rounded size-100">
      <h1 className="text-2xl">Ternary Operator</h1>

      <div className="flex justify-around">
        <CoinFlip coinSide="heads" />
        <CoinFlip coinSide="tails" />
      </div>
      <div className="flex justify-around">
        {/* TODO: Add your own component here */}
        <SportsScore homeScore="45" awayScore="67" />
        <SportsScore homeScore="67" awayScore="45" />
      </div>

    </div>
  );
}

// TASK 3: Use array destructuring inside your component to extract array values

// Example for Array Destructuring: You can use a prop or declare an array inside your component.
// Example array: const [firstName, lastName] = ["John", "Doe"];

function FruitStore() {
  const fruits = ["apples", "blueberries", "cherries"];
  // Destructure the fruit array
  const [f1, f2, f3] = fruits;

  return (
    <div className="p-4 m-2 border-2 border-slate">
      <h2 className="text-lg">Three fruits!</h2>
      <p>Fruit 1: {f1}</p>
      <p>Fruit 2: {f2}</p>
      <p>Fruit 3: {f3}</p>
    </div>
  );
}

// TODO: Create your own component using array destructuring
function PetShop() {
  const pets = ["dogs", "cats", "fish", "reptiles"];
  const [pet1, pet2, pet3, pet4] = pets;
  return (
    <div className="p-4 m-2 border-2 border-purple-800">
      <h2 className="font-bold">Pet Shop</h2>
      <p>Pet 1: {pet1}</p>
      <p>Pet 2: {pet2}</p>
      <p>Pet 3: {pet3}</p>
      <p>Pet 4: {pet4}</p>
    </div>
  );
}



function ArrayDestructureDemo() {
  return (
    <div className="border-2 border-black rounded size-100">
      <h1 className="text-2xl">Array Destructuring Demo</h1>

      <div>
        <FruitStore />
      </div>
      <div>
        TODO: Add your own component here to demonstrate array destructuring.
        <PetShop />
      </div>

    </div>
  );
}

// Render the App
function App() {
  return (
    <div>
      <PropsDemo />
      <hr class="border-blue-500 m-8"/>
      <TertiaryDemo />
      <hr class="border-blue-500 m-8"/>
      <ArrayDestructureDemo />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
