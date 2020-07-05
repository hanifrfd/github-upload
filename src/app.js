require.context('', true, /\.(png|svg|jpg|gif)$/);
import "./styles/style.css";
import "./script/component/navbar.js";
import main from './script/view/main.js';

document.addEventListener("DOMContentLoaded", main);