import modalForm from "./js/modal.js";
import tabs from "./js/tabs.js";
import  scroll  from "./js/scroll.js";
import menu from "./js/menu.js";
import form from "./js/form.js";
// import accordion from "./js/accordion.js";
import tabsTwo from "./js/tabs-two.js";
import { loadProjects } from "./js/projectsController.js";
import { handleProjectChange } from "./js/projectsController.js";
import { handlePageChange } from "./js/pageController.js";
import toggleTheme from "./js/toggle-theme.js";


window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modalForm();   
    scroll();
    menu();
    form();
    // accordion();
    // tabsTwo(); 
    tabs('.nav-list', '.nav-link', 'active__nav-link', (id) => {
        handlePageChange(id); 
    });  
    handlePageChange('promo');
    tabs('.projects_tabs', '.projects_tabs__item', 'active-project', (category) => {
        handleProjectChange(category);
    }); 

    loadProjects();

    toggleTheme();
})