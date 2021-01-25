import * as React from 'react';
import { QueryResult } from '../../../network/Queries';

type LoaderProps = {
    statusObj: QueryResult<any>
    loadingComponent?: React.ReactNode
    errorComponent?: React.ReactNode
    children: React.ReactNode 
}

const BaseLoader = ({
    statusObj,
    loadingComponent = <div>Loading...</div>,
    errorComponent = <div>{`Error: ${statusObj.error}`}</div>,
    children,
 }: LoaderProps) => {
    const { isLoading, isError, isSuccess } = statusObj;
    return (
        <>
            {isLoading && loadingComponent}
            {isError && errorComponent}
            {isSuccess && children}
        </>
    );
}

export default BaseLoader;
