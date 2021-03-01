import { useState, useCallback } from 'react';
import { useWithSearchBar } from '../atomic-components/useSearchBar';

type Slaves = {
    setAllSlaves: (master: boolean) => void
}

export const useMasterCheckmark = (slaves: Slaves, init: boolean = false) => {
    const [state, setStateTo] = useState(init);

    const toggle = useCallback(() => {
        setStateTo(!state);
        slaves.setAllSlaves(!state);
    }, [state, slaves,]);

    return {
        state,
        toggle
    }
}

export const useMultipleCheckmarkSlaves = (numberOfSlaves: number, init: boolean = false) => {
    
    const searchBar = useWithSearchBar();
    const [checkmarkSlaves, setSlaveArrayTo] = useState(
        Array<Boolean>(numberOfSlaves).fill(init)
    );

    const setAllSlaves = useCallback((masterState: boolean) => {
        setSlaveArrayTo(Array<boolean>(checkmarkSlaves.length).fill(masterState));
    }, [checkmarkSlaves.length, setSlaveArrayTo]);

    const toggleSlave = useCallback((slaveIndex: number) => {
        console.log('searchbar set value', slaveIndex);
        let arr = [...checkmarkSlaves];
        arr[slaveIndex] = !checkmarkSlaves[slaveIndex]
        searchBar.setValue('roshni')
        setSlaveArrayTo(arr);
    }, [checkmarkSlaves, setSlaveArrayTo]);
    
    return {
        checkmarkSlaves,
        setAllSlaves,
        toggleSlave,
        slave: (id: number) => {
            return checkmarkSlaves[id].valueOf()
        }
    }
}