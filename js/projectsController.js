import renderProjects from "./renderProjects.js";
import accordion from "./accordion.js";

let localData = [];

export const loadProjects = async () => {
    const response = await fetch('./projects.json');
    localData = await response.json();
    
    handleProjectChange('Vanilla JS');
};

export const handleProjectChange = (category) => {
    const filtered = localData.filter(item => item.category === category);
    renderProjects(filtered, '.cards');
    accordion();
};