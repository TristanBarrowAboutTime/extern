
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