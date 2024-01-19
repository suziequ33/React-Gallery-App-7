# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

React-Gallery-Appp project 7.
Use React library to create an image gallery app. 
Learn best practice of working with React, like JSX to write markup-like syntaz directly in JS files and managing state in a container compnents that passes data down to reusable stateless components. 


I initially encountered challenges with Vite. We didn't dive into it extensively and didn't realize that we just need to delete and change the components. 
I also had difficulties with fetching from Flickr, particularly on the search page. I went back to Unit 5/working with Fetch API.
Didn't realize that I need to add the root file to index.html. I added that, along with index.css and index.jsx.
I saw an example of the URL in the img tag and found that it worked, so I removed the const in the Photo.jsx component. I found this feature very cool.(MDN Web Docs)
I thought I was stuck with the topic buttons not fetching data, not realizing that the links do not trigger action to fetch data or changes in state.
 (If only I had read the Note box.)