import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Main from '../Main';
import Routes from '../Routes';


const App = (props) =>{
    return(
        <React.Fragment>
          <BrowserRouter>
            <Main>
              <Routes/>
            </Main>
          </BrowserRouter>
        </React.Fragment>
    )
}

export default App;