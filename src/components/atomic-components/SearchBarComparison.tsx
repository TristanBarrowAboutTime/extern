import React, { Component } from 'react';
import { useWithSearchBar } from '../../hooks/component-hooks/atomic-components/useSearchBar';
import SearchBar from './SearchBar';

const SearchBarComparisonFunc = () => {
    const search = useWithSearchBar();

    return (
        <>
            <SearchBar {...search.searchBinding}  /> 
            {search.value}
        </>
    );
}


interface SearchState {
    value: string
}


class SearchBarComparisonClass extends Component {
    constructor(props: {}) {
        super(props);
        this.state = {
            value: ''
        }
        
    }
    state: SearchState
    
    onChange(event: { target: { value: string } }): void {
        if (event !== null) {
            this.setState({value:  event.target});
        }
    }

    render() {
        return (
            <>
                <SearchBar value={this.state.value} onChange={this.onChange}/> 
                {this.state.value}
            </>
        );   
    }
}

export default SearchBarComparisonFunc;