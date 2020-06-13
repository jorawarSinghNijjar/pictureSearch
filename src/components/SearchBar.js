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

                    <div className="two fields">
                        <div className="thirteen wide field">
                            <div className="ui left icon input">
                                <i class="images icon"></i>
                                <input type="text" placeholder="Enter any keyword to search images..." value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
                            </div>
                        </div> 
                        <div className="three wide field">
                            <div className="ui left icon input">
                                <i class="search icon"></i>
                                <input type="submit" className="ui blue button" value="Search" style={{textAlign:"center"}}/>
                            </div>
                        </div>
                    </div>
                    <a class="ui teal right ribbon label" href="https://unsplash.com" >Powered by UNSPLASH</a>
                </form>
            </div>
        );
    }
}

export default SearchBar;