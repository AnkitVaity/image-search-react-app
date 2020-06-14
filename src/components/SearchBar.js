import React from 'react';

class SearchBar extends React.Component {
    // This method will be called anytime someone types anything in the input
    // The event object contains information about the event that just occured

    // onInputChange(event) {
    //     // event.target.value will contain the text that user added to the input
    //     console.log(event.target.value);
    // }

//-------------------------------------------------------------------------------------------------

    state = {term:''};
    
    //---------------------------------------------------------------------------------------------

    // ERROR: Cannot read property 'state' of undefined
    // Code given below throws this error
    // OnFormSubmit(event) {
    //     event.preventDefault();

    //     console.log(this.state.term);
    // }

    //----------------------------------------------------------------------------------------------

    // Solution 1: Use Arrow function
    OnFormSubmit = (event) => {
        // event.preventDefault() will prevent the default behavior or of submitting the form automatically and reloading the page on pressing Enter or Submit
        event.preventDefault();

        // console.log(this.state.term);

        this.props.onSubmitProp(this.state.term);
    };

    //-----------------------------------------------------------------------------------------------

    // Solution 2: Use Arrow function in the function call of OnFormSubmit defined in form tag
    // Change <form onSubmit={this.OnFormSubmit} className="ui form"> to
    // <form onSubmit={(event) => this.OnFormSubmit(event)} className="ui form">

    //-----------------------------------------------------------------------------------------------

    //Solution 3: Use the bind function in the constructor

    //-----------------------------------------------------------------------------------------------

    render() {
        return (
        <div className="ui segment">
            <form onSubmit={this.OnFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>

{/*-------------------------------------------------------------------------------------------------*/}

                    {/* Uncontrolled Event Handling        */}

                    {/* onChange, onClick, onSubmit are event handling properties  */}
                    {/* <input type="text" onChange={this.onInputChange}/> */}

                    {/* Given below is alternate method of defining event handlers */}
                    {/* <input type="text" onChange={(event) => console.log(event.target.value)}/> */}

{/*--------------------------------------------------------------------------------------------------*/}

                    {/* Controlled Event Handling */}

                    <input 
                    type="text" 
                    value={this.state.term} 
                    onChange={e => this.setState({term: e.target.value})}
                    />

                    {/* Note: use e.target.value.toUpperCase() to get all upper case characters in input box */}
                    
                </div>
            </form>
        </div>
        );
    } 
}

export default SearchBar;