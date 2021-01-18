import {useMemo} from 'react'; 

type UseInitialsArgs = {
    first: string
    last: string
}

export const useInitials = (args: UseInitialsArgs) => {
    const initals = useMemo(() => {
        return args.first[0] + args.last[0];
    }, [args.first, args.last])
    
    return initals;
}

