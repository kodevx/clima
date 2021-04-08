
import React from 'react';
import Lottie from 'react-lottie';

import Data3 from '../../assets/animations/sun-icon2.json';
import Data1 from '../../assets/animations/received.json';

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: Data3,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const defaultOptions1 = {
  loop: true,
  autoplay: true, 
  animationData: Data1,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const Loading = (props) => {
 
    return(
     <div>
      <div>
        <Lottie 
         options={defaultOptions}
         height={200}
         width={200} 
         style={{ margin: '90px 40px 0 70px' }}
        />
      </div>
          <div>
            <pre style={{ fontFamily: 'Gotham',fontSize: '30px', fontWeight:'bold', marginLeft: '310px', marginTop: '250px' }}>A L M O S T  T H E R E. . .</pre>
          </div>
        <Lottie 
         options={defaultOptions1}
         height={400}
         width={400}
         style={{ margin: '35px 44px 35px 500px' }}
        />
     </div>
    );
}

export default Loading;