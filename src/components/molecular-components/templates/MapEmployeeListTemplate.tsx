import React from 'react';

export type ListEmployee = {
    id: number
    firstName: string
    lastName: string
}

type MapEmployeeListTemplateProps = {
    employee: ListEmployee
}

const MapEmployeeListTemplate = (props: MapEmployeeListTemplateProps) => {
    return <div></div>
}

export default MapEmployeeListTemplate;