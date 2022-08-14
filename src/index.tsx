import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById("root");
render(<App />, root);

reportWebVitals();