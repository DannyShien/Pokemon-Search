import React, { Component} from 'react';
import './Search.css';
import Button from '../Button/Button';

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
            <form className='form' onSubmit={this.handleSubmit}>
                <label className='search-label'>
                    <input 
                        type='text'
                        name='search'
                        placeholder='ie. pikachu'
                        value={this.state.search}
                        ref={(input) => this.query = input}
                        onChange={this.handleInputChange}
                    />
                    <Button 
                        type='submit' 
                        text='Submit' 
                        style={{
                            fontSize: '100%'
                        }}
                    />
                </label>
            </form>
        ) 
    }
}

export default Search;