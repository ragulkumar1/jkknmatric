import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';

// Import Revolution Slider CSS and JS
import './assets/plugins/revolution/css/settings.css';
import './assets/plugins/revolution/css/layers.css';
import './assets/plugins/revolution/css/navigation.css';
import './assets/css/style.css';
import './assets/css/responsive.css';

// Import Revolution Slider JS
import './assets/plugins/revolution/js/jquery.themepunch.revolution.min.js';
import './assets/plugins/revolution/js/jquery.themepunch.tools.min.js';
import './assets/plugins/revolution/js/extensions/revolution.extension.actions.min.js';
import './assets/plugins/revolution/js/extensions/revolution.extension.carousel.min.js';
import './assets/plugins/revolution/js/extensions/revolution.extension.kenburn.min.js';
import './assets/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js';
import './assets/plugins/revolution/js/extensions/revolution.extension.migration.min.js';
import './assets/plugins/revolution/js/extensions/revolution.extension.navigation.min.js';
import './assets/plugins/revolution/js/extensions/revolution.extension.parallax.min.js';
import './assets/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js';
import './assets/plugins/revolution/js/extensions/revolution.extension.video.min.js';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals(); 