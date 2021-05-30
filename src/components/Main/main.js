import React from 'react'
import Header from '../Header';
import Footer from '../Footer';

const Main = ({ children }) => {

    return(
        <div className='flex flex-col'>
          <Header />
            {children}
          <Footer />
        </div>
    )
}

export default Main;