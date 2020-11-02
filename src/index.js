import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import P5sketch from '../src/components/P5/P5backround'
const axios = require('axios');

const wakeUpSamurai = async () => {
    try {
        const namegen = await axios.get('https://namegenserver.herokuapp.com/10');
        const getwoman = await axios.post('https://getwomanserver.herokuapp.com/past',{body:'body'});
        console.log(namegen.data);
        console.log(getwoman.data);
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };

    const biffit = async () => {
      try {
        const dinguschat = await axios.get("https://dinguschatserver.herokuapp.com/");
        const dinguschatV = await axios.get("https://simpvserv.herokuapp.com/");
        console.log(dinguschat.data)
        console.log(dinguschatV.data)
        } catch (err) {
          // Handle Error Here
          console.error(err);
        }
      };

      const biffit2 = async () => {
        try {
          const dinguschatV = await axios.get("https://simpvserv.herokuapp.com/");
          console.log(dinguschatV.data)
          } catch (err) {
            // Handle Error Here
            console.error(err);
          }
        };
   
wakeUpSamurai();
biffit()
biffit2()

ReactDOM.render(
  <React.StrictMode>

    <P5sketch />
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
