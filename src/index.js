import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar.js'

const API_KEY = 'AIzaSyDDgvqOwRAIAKMEbFnEh8NHjDe5HJ3O7NI';

// Create a new component. This component should produce
// some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    )
};

// Take this component's generated HTML and pu it
// on the page (in the DOM)
ReactDom.render(<App/>, document.querySelector('.container'));