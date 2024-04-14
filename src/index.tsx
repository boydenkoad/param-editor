import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ParamEditor} from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ParamEditor 
      params={[
        {
          id:1,
          name:'Цвет',
          type:'string'
        },
        {
          id:2,
          name:'высота',
          type:'string'
        },
      ]} model={
        {paramValues:[
          {
            paramId:1,
            value:'зеленый'
          },
          {
            paramId:2,
            value:'180'
          },
        ]}
      }/>
  </React.StrictMode>
);

reportWebVitals();
