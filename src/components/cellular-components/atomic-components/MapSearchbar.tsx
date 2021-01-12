import { render } from '@testing-library/react';
import React,{Component} from 'react';
import {useWithSearchBar} from '../../hooks/component-hooks/atomic-components/useSearchBar';
import SearchBar from './SearchBar';

class MapSearchbar extends Component<{}, {value: string}> {
    constructor(props:{}) {
        super(props)
        this.state = {
            value: ''
        }
        this.onChange = this.onChange.bind(this)        
    }
    onChange(){
        this.setState(state => ({

        }))
    }
        render(){
            return(
                <SearchBar value={this.state.value} onChange={this.onChange} />
            )
        }
    }
export default MapSearchbar;