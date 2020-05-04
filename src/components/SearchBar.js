import React from 'react';

class SearchBar extends React.Component {
    
    state = {term: ''};
    
    

    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.props);
        this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <div className="ui segment" style={{backgroundColor:"#182955"}}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                <label style={{color:"white"}}>Image Search</label>

                    <div className="inline fields">
                        <div className="fourteen wide field">
                            
                            <input type="text" placeholder="Enter any keyword to search images..." value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
                        </div> 
                        <div className="two wide field">
                            <input type="submit" className="ui blue button" value="Search" />
                        </div>
                    </div>  
                </form>
            </div>
        );
    }
}

export default SearchBar;