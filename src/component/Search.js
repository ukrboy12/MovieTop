import React from "react";

class Search extends React.Component{
    state = {
        search: '',
    }

    handleKey = (event) => {
        if (event.key === 'Enter'){
            this.props.searchMovies(this.state.search);
        }
    }

    render() {
        return <div className="row">
            <div className="col s12">

                <div className="input-field">
                    <input
                        placeholder="search"
                        type="search"
                        className="validate"
                        value={this.state.search}
                        onChange={(e) =>this.setState({search: e.target.value})}
                        onKeyDown={this.handleKey}
                    />
                </div>
            </div>
        </div>
    }
}
export {Search};