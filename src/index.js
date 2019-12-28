import navBar from './navbar';
import footBar from './footbar';
import home from './page_tabs/home';
import aboutPage from './page_tabs/about';
import findLocation from './page_tabs/find'
import photoGallery from './page_tabs/gallery'

const topBar = document.querySelector('#top-bar')
topBar.innerHTML = navBar
const footer = document.querySelector('.foot-bar');
footer.innerHTML = footBar
const mainContainer = document.querySelector('.container')



const firstPage = document.querySelector('#home');
firstPage.onclick = function(e){
    e.preventDefault();
    mainContainer.innerHTML = home;
}

const secondPage = document.querySelector('#about');
secondPage.onclick = function(e){
    e.preventDefault();
    mainContainer.innerHTML = aboutPage
}

const thirdPage = document.querySelector('#find');
thirdPage.onclick = function(e){
    e.preventDefault();
    mainContainer.innerHTML = findLocation
}

const fourthPage = document.querySelector('#gallery');
fourthPage.onclick = function(e){
    e.preventDefault();
    mainContainer.innerHTML = photoGallery;
}