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
    <div className="p-4 m-2 border-2 border-red-600">
      <h2 className="text-lg">Welcome Message:</h2>
      <p>{`Welcome, ${props.name} from ${props.country}! `}</p> 
      
    </div>
  );
}

// TODO: Add your own component that uses props to display dynamic data
// Example component: UserInfo
function UserInfo(props) {
  return (
    <div className="p-4 m-2 border-2 border-purple-600">
      <h2 className="text-lg">Preferred drink:</h2> 
      <p>{`${props.name} likes ${props.drink}!`}</p>
      </div>
  );
}
// Pass props such as "name" and "age" to the component and display them.
function PropsDemo() {
  return (
    <div className="border-2 border-black rounded size-100 w-1/4 px-3">
      <h1 className="text-2xl">Props Demo</h1>

      <div>
        <WelcomeMessage name="Alice" country="America" /> 
        <UserInfo name="Alice" drink="Truly" /> 
        <WelcomeMessage name="Bob" country="America" />
        <UserInfo name="Bob" drink="Bud" /> 
        <WelcomeMessage name="Carol" country="France" />
        <UserInfo name="Carol" drink="Champagne" /> 
        TODO: Add a welcome message for Derek, Emily, and Frank using the WelcomeMessage component and a prop.
        <WelcomeMessage name="Derek" country="Ireland" />
        <UserInfo name="Derek" drink="Guiness" /> 
        <WelcomeMessage name="Emilia" country="Spain" />
        <UserInfo name="Emilia" drink="Sangria" /> 
        <WelcomeMessage name="Carol" country="America" />
        <UserInfo name="Carol" drink="Vodka&Soda" /> 

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
    <div className="p-4 m-2 border-2 border-slate w-1/4">
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

function TernaryDemo() {
  return (
    <div className="border-2 border-black rounded size-100 w-1/2">
      <h1 className="text-2xl">Ternary Operator</h1>

      <div className="flex justify-around">
        <CoinFlip coinSide="heads" />
        <CoinFlip coinSide="tails" />
      </div>
      <div className="flex justify-around">
        {/* TODO: Add your own component here */}
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
    <div className="p-4 m-2 border-2 border-slate w-1/4">
      <h2 className="text-lg">Three fruits!</h2>
      <p>Fruit 1: {f1}</p>
      <p>Fruit 2: {f2}</p>
      <p>Fruit 3: {f3}</p>
    </div>
  );
}

// TODO: Create your own component using array destructuring
function ForeignCountries() {
  let countries = ["Argentina", "Belgium", "Costa Rica", "Denmark"];
  let [c1, c2, c3, c4] = countries;
  return (
    <div className="p-4 m-2 border-2 border-red-600">
      <h2 className="text-lg">Foreign Countries:</h2> 
      <p>Country 1: {c1}</p>
      <p>Country 2: {c2}</p>
      <p>Country 3: {c3}</p>
      <p>Country 4: {c4}</p>
    </div>  
  );
}

function ArrayDestructureDemo() {
  let countries = ["Argentina", "Belgium", "Costa Rica", "Denmark"];
  let [c1, c2, c3, c4] = countries;
  return (
    <div className="border-2 border-black rounded size-100">
      <div>
        TODO: Add your own component here to demonstrate array destructuring.
      </div>
      <h1 className="text-2xl">Country Array Destructuring Demo</h1>
      <p>Country 1: {c1}</p>
      <p>Country 2: {c2}</p>
      <p>Country 3: {c3}</p>
      <p>Country 4: {c4}</p>
      <div>
        <FruitStore />
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
      <TernaryDemo />
      <hr class="border-blue-500 m-8"/>
      <ArrayDestructureDemo />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));