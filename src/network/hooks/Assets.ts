import { gql } from 'graphql-request';

export type AssetsList = {
    items: {
        code: 1002,
        name: 'Joseph'
    }

}

export enum URLs {
    SPACE_X_QL = 'https://localhost:5001/graphql',
    CHUCK_URL = "https://api.chucknorris.io/jokes/random"
}

export enum QueryKeys {
    CHUCK = 'chuck',
    SPACE_X = 'space-x',
    ROCKETS = 'rockets',
}

export const assets = () => gql`
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

