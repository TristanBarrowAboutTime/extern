import { useState, useCallback } from 'react';

type Slaves = {
    setAllSlaves: (master: boolean) => void
}

export const useMasterCheckmark = (slaves: Slaves, init: boolean = false) => {
    const [state, setStateTo] = useState(init);

    const toggle = useCallback(() => {
        setStateTo(!state);
        slaves.setAllSlaves(!state);
    }, [state]);

    return {
        state,
        toggle
    }
}

export const useMultipleCheckmarkSlaves = (numberOfSlaves: number, init: boolean = false) => {
    const [checkmarkSlaves, setSlaveArrayTo] = useState(
        Array<Boolean>(numberOfSlaves).fill(init)
    );
    
    const setAllSlaves = useCallback((masterState: boolean) => {
        setSlaveArrayTo(Array<boolean>(checkmarkSlaves.length).fill(masterState));
    }, []);

    const toggleSlave = useCallback((slaveIndex: number) => {
        let arr = [...checkmarkSlaves];
        arr[slaveIndex] = !checkmarkSlaves[slaveIndex]
        setSlaveArrayTo(arr);
    }, [checkmarkSlaves]);
    
    return {
        checkmarkSlaves,
        setAllSlaves,
        toggleSlave,
        slave: (id: number) => {
            return checkmarkSlaves[id].valueOf()
        }
    }
}