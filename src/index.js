'use strict';

import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'fetch-polyfill';

import countTimer from './modules/countTimer';
import calc from './modules/calc';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import toggleImage from './modules/toggleImage';
import onlyNum from './modules/onlyNum';

import formValid from './modules/formValid';
import sendForm from './modules/sendForm';

//Timer
countTimer('12 may 2020');
//menu
toggleMenu();
//popup
togglePopup();
//tabs
tabs();
//slider
slider();
//change Image
toggleImage();
//check input for num value
onlyNum();
//calculator
calc(100);
formValid();
// send-ajax-form
sendForm();