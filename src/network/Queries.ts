import { gql } from 'graphql-request';

export type QueryResult<T> = {
    data: T,
    error: object,
    failureCount: number,
    isError: boolean,
    isFetchedAfterMount: boolean,
    isFetching: boolean,
    isIdle: boolean,
    isLoading: boolean,
    isPlaceholderData:boolean,
    isPreviousData: boolean,
    isStale:boolean,
    isSuccess:boolean,
    status: string
    refetch: (options: { throwOnError: boolean }) => Promise<any>
    remove: () => void
}

export enum URLs {
    SPACE_X_QL = 'https://api.spacex.land/graphql/',
    CHUCK_URL = "https://api.chucknorris.io/jokes/random"
}

export enum QueryKeys {
    CHUCK = 'chuck',
    SPACE_X = 'space-x',
    ROCKETS = 'rockets',
}

export const rockets = () => gql`
    {
        rockets {
            name 
            id
            height {
                feet
            }
        }
    }
`;

