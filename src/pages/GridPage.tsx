import * as React from 'react';
import Grid, { useWithGrid } from '../components/cellular-components/grid/Grid';

const GridPage = () => {
    const grid = useWithGrid({
        minHeight: 100,
        heightSubtraction: 34,
        
    });
    return (
        <Grid {...grid.bind}/>
    )
};

export default GridPage;