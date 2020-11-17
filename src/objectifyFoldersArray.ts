import { Folders } from './CustomReportsPage/types/Folders';

export const objectifyArray = (array: {id: number, name: string, editable: boolean}[] ): Folders  => {
    let table:{ [index:string] : {name: string, editable: boolean}} = {};
    array.forEach((folder) => {
        table = {
            ...table,
            [`id-${folder.id}`]: {
                name: folder.name,
                editable: folder.editable
            }
        }
    });
    return table;
}