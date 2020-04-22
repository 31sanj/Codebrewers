import React, {useState} from 'react';

const App = () => {
  const[loggedIn, setloggedIn] = useState(0);

  // const handleLogIn = () =>{
  //   if (loggedIn) {
  //     return(<Homepage />);
  //   }
  //   return(<Login />)
  // }

  return(
    <div>
      <form>
      <button onClick={handleLogIn}>Log In</button>
      </form>
    </div>
   
  )
}

export default App;