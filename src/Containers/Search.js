import React, { Component} from 'react'; 
import './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: '' 
        }
    }


    handleInputChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetch(this.query.value)
        this.reset()
    }
    reset = () => {
        this.setState({
            search: ''
        })
    }

    render() {
        return (
            <form className='form-container' onSubmit={this.handleSubmit}>
                <label className='search-label'>
                    <input 
                         type='text'
                         name='search'
                         placeholder='ie. pikachu'
                         value={this.state.search}
                         ref={(input) => this.query = input}
                         onChange={this.handleInputChange}
                         />
                    <input type='submit' />
                    
                </label>
            </form>
        ) 
    }
}

export default Search;