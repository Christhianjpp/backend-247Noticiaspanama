import React from 'react';
import ReactDOM from 'react-dom/client';
import NoticiasApp from './NoticiasApp';


import './styles/styles.scss'



// https://github.com/xAgustin93/web-personal-client/blob/master/src/components/Admin/Blog/AddEditPostForm/AddEditPostForm.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NoticiasApp />
  </React.StrictMode>
);

