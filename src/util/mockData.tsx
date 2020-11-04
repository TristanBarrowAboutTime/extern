export const folders: {
    id: number,
    name: string, 
    editable: boolean
}[] = [
    {
        id: 1,
        name: 'All Reports',
        editable: false
    },
    {
        id:2,
        name: 'Favorites',
        editable: false
    },
    {
        id: 3,
        name: 'Recent',
        editable: false
    },
    {
        id:4,
        name: 'Created by Me blah blah blah blah blah blah blah blah',
        editable: true
    },
    {
        id:5,
        name: 'Shared',
        editable: true
    },
    {
        id:6,
        name: 'Scheduled',
        editable: true
    },
    {
        id:7,
        name: 'Job Reports',
        editable: true
    },
    {
        id:8,
        name: 'Productivity Reports',
        editable: true
    },
    {
        id:9,
        name: 'Created by Me2',
        editable: false
    },
    {
        id:10,
        name: 'Shared2',
        editable: true
    },
    {
        id: 11,
        name: 'Scheduled2',
        editable: true
    },
    {
        id: 12,
        name: 'Job Reports2',
        editable: true
    },
    {
        id: 13,
        name: 'Productivity Reports2',
        editable: true
    },
    {
        id:14,
        name: 'Shared3',
        editable: true
    },
    {
        id:15,
        name: 'Scheduled3',
        editable: true
    },
    {
        id:16,
        name: 'Job Reports3',
        editable: true
    },
    {
        id: 17,
        name: 'Productivity Reports3',
        editable: true
    },
    {
        id:18,
        name: 'Shared4',
        editable: true
    },
    {
        id:19,
        name: 'Scheduled4',
        editable: true
    },
    {
        id:20,
        name: 'Job Reports4',
        editable: true
    },
    {
        id: 21,
        name: 'Productivity Reports4',
        editable: true
    },
];

export const order = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21].map(id => `id-${id}`);