import {useMemo} from 'react'; 

type UseInitialsArgs = {
    first: string
    last: string
}

export const useInitials = (args: UseInitialsArgs) => {
    const initals = useMemo(() => {
        return args.first[0].toUpperCase() + args.last[0].toUpperCase();
    }, [args.first, args.last])
    
    return initals;
}

