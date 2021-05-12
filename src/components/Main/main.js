import React from 'react'
import Header from '../Header';
import Footer from '../Footer';

const Main = (props) => {

    return(
        <div className='flex flex-col'>
          <Header />
            {props.children}
          <Footer />
        </div>
    )
}

export default Main;