import Add from "./components/Add";
import Greetings from "./components/Greetings";

import { Fragment } from "react"; // no need of this while using <> </>

function Topic1() {
  return (
    <div>
      <h1>Hello my name is Omkar</h1>
      {/* <p class="initial-class">Welcome to the react world!</p> */}
      {/* The above sentence is WRONG; class in JS is 
      a totally different thing; so we have to use 'className' */}
      <p className="init-class">Welcome to the React world</p>
    </div>
  );
}

function Topic2() {
  return <p> Hope I master it</p>;
}

function Topic3() {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
    </form>
  );
}

function Topic4() {
  return <Add />;
}

function Topic5() {
  return (
    <Fragment>
      <Greetings />
      <Add />
      <p>Roger, Confirming that the code is in Fragment</p>
    </Fragment>
  );
}

function Topic6() {
  return (
    <>
      <p>
        This is a shorter way to use Fragments! you can also remove the above
        import statement!
      </p>
    </>
  );
}

function Topic7() {
  const name = "PROmkar";
  const mul = (a, b) => a * b;
  const demoClass = "simple-class";

  return (
    <>
      <h1>Hello gaeys orewa {name} desu.</h1>
      <p>7 multiplied by 6 is {mul(7, 6)}</p>
      <p>
        My friends list is:{" "}
        {["Alex ", "John ", "Ryan Gosling ", "Aana De Armas"]}
      </p>

      <p className={demoClass}>I have given this para a simple-class!</p>
      <p>Hello.. Hello, Is it working properly over??</p>
      <p>Yes it is! Over n out!</p>
    </>
  );
}
export default Topic7;
