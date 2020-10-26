import { FolderId } from "../types/FolderId";

export const objectifyArray = (folders: FolderId[]): Object => {
    let obj = {};
    folders.forEach((folder) => {
        obj = {
            ...obj,
            [`id-${folder.id}`]: {
                name: folder.name,
                editable: folder.editable
            }
        }
    });
    return obj;
}