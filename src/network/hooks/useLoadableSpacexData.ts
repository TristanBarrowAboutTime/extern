import { useQuery } from 'react-query';
import { QueryResult, QueryKeys, URLs, rockets } from '../Queries';
import { request } from 'graphql-request';

export type RocketData = {
    rockets: {
        name: string
        id: string
        height: {
            feet: number
        }
    }[] 
}

export type RocketUiData = {
    rockets: {
        name: string
        id: string
        height: number 
    }[]
}

// export const useLoadableSpacexData = () => {
//     const result = useQuery(
//         QueryKeys.SPACE_X.toString(),
//         async () => {
//             const data = await request(
//                 URLs.SPACE_X_QL,
//                 rockets()
//             );
//             return data;
//         }
//     ) as QueryResult<RocketData>);
//     return {isSuccess: false, data: 'blah'}
// }




// const transform = (incoming: QueryResult<RocketData>): QueryResult<RocketUiData> => {
//     const newData: RocketUiData = {
//         rockets: incoming.data.rockets.map((oldRocket) => {
//             return {
//                 name: oldRocket.name,
//                 id: oldRocket.id,
//                 height: oldRocket.height.feet
//             }
//         })
//     }
//     console.log(newData)
//     const uiResult = {
//         ...incoming,
//         data: newData
//     }
    
//     return uiResult;
// }