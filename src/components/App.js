import React from 'react';
import SearchBar from './SearchBar'
import ImageList from './ImageList'
// Importing axios which is a third party package or library used for managing network request
// React App does not make a network request to API 
// Ajax client is used to make a network request to API
// import axios from 'axios';
import unsplash from '../api/unsplash';

class App extends React.Component {
    // Initializing state
    state = { images: [] };

    // Now defining a callback function
    onSearchSubmit = async (term) => {
        // console.log(term);

        // First agrument of get function is address that we want to make a get request to
        // Second argument is a object that will have options to customize this request
        // The API will return JSON of photos
        const response = await unsplash.get('/search/photos', {
            params: { query: term},
            // headers: {
            //     Authorization: 'Client-ID G1accZ9BFpDOJuicd32Pn99Pf785LoTMYStsENrXKr8' 
            // }
        });
        //-------------------------------------------------------------------------------------------
        // //.this is can be used instead of using 'async and await' syntax
        // .then((response) => {
        //     // response.data.results contains the list of images 
        //     console.log(response.data.results);
        // });
        //-------------------------------------------------------------------------------------------

        // console.log(response.data.results);

        this.setState({ images: response.data.results });


    }

    render() {
         return (
            <div className="ui container" style={{marginTop: '15px'}}> 
                <SearchBar onSubmitProp={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;