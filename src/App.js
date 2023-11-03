import { useEffect } from "react";


function App() {
  let age = 22;
    let name = "Rio";
  useEffect(()=>{
    
    // if(age > 26 ){
    //   console.log("you are now old");
    // }else if(name === "Rio" && age === 20){
    //   console.log("I am 20 years old");
    //   console.log("i am rio");
    // }else{
    //   console.log("I am not Rosario");
    //   console.log("i am too young");
    // }

    age > 20 ? (
      console.log("i am now old")
    ) : name === "Rio" && age === 20 ? (
      <>
       {console.log("this is me bro ")}
        {console.log("i am rio")}
      </>
    ) : (
      console.log("i am too young")
    )

  },[])
  return (
    <div className="App">
      {age > 20 ? (
        <p> you are old</p>
      ):name === "Rio" && age === 20 ? (
        <>
        <p>Yes thats me</p>
        <p>i am king</p>
        </>
      ):(
        <>
          <p>You too young to be him</p>
          <p>gtfo</p>
        </>
      )}
    </div>
  );
}

export default App;
