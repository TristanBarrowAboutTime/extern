import { useState, useCallback } from 'react';

export const useMasterCheckmark = (init: boolean, setSlaveState: (state: boolean) => void ) => {
    const [masterCheckmarkState, setMasterCheckmarkStateTo] = useState(init);

    const toggleMasterCheckmark = () => {
        setMasterCheckmarkStateTo(!masterCheckmarkState);
        setSlaveState(!masterCheckmarkState);
    }

    return {
        masterCheckmarkState,
        toggleMasterCheckmark
    }
}

export const useMultipleCheckmarkSlaves = (numberOfSlaves: number, initialSlaveState: boolean) => {
    const [checkmarkSlaves, setSlaveArrayTo] = useState(
        Array<Boolean>(numberOfSlaves).fill(initialSlaveState)
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
        toggleSlave
    }
}