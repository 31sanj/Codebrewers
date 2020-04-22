import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './home';
import Login from './login';


class App extends React.Component{


   render (){
          return (<BrowserRouter>
               <Route path="/" exact component={Home} /> 
               <Route path="/login" exact component={Login} />               
             </BrowserRouter>);
   }
}

export default App;