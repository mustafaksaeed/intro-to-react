// import GreetingProp from "../components/GreetingProp";
// import { useState } from "react";
// import ProfileCard from "../components/ProfileCard";
// import Counter from "../components/Counter";
// import CounterButtons from "../components/CounterButtons";
// import ToggleButton from "../components/ToggleButton";
// import SimpleForm from "../components/SimpleForm";
import CounterButtons from "../components/CounterButtons";
import ProductCard from "../components/ProductCard";
import "./App.css";

// // const user = {
// //   name: "mustafa",
// //   picture:
// //     "https://www.adobe.com/uk/creativecloud/illustration/discover/media_16294017e160283065e15583487483528c38eb2e4.png?width=750&format=png&optimize=medium",
// //   bio: "my mane is mustafa and im chilling rn ",
// };

function App() {
  const products = {
    product1: {
      itemType: "Electronics",
      description:
        "High-performance wireless headphones with noise cancellation.",
      price: 249.99,
    },
    product2: {
      itemType: "Books",
      description: "A captivating science fiction novel by a renowned author.",
      price: 15.5,
    },
    product3: {
      itemType: "Apparel",
      description: "Comfortable and stylish cotton t-shirt for everyday wear.",
      price: 25.0,
    },
    product4: {
      itemType: "Home Goods",
      description: "Set of four elegant ceramic coffee mugs.",
      price: 32.75,
    },
  };
  // const [counter, setCounter] = useState(0);

  // function increment() {
  //   setCounter(counter + 1);
  // }

  // function decrement() {
  //   setCounter(counter - 1);
  // }
  return (
    <div>
      {/* <GreetingProp name="mustafa" /> */}
      {/* <ProfileCard name={user.name} picture={user.picture} bio={user.bio} /> */}
      {/* <Counter counter={counter} />
      <CounterButtons handleClick={increment} value="+" />
      <CounterButtons handleClick={decrement} value="-" /> */}
      {/* <ToggleButton /> */}
      {/* <SimpleForm /> */}
      {/* {fruits.map((n) => (
        <p key={n}>{n}</p>
      ))} */}

      {Object.keys(products).map((keys) => (
        <ProductCard
          key={keys}
          itemType={products[keys].itemType}
          price={products[keys].price}
          description={products[keys].description}
        />
      ))}
    </div>
  );
}

export default App;
