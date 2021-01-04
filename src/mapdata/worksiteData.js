export default {
    type: "FeatureCollection",
    crs: { 
        type: "name", 
        properties: { 
            name: "urn:ogc:def:crs:OGC:1.3:CRS84" 
        } 
    },
    features: [
        { 
            type: "Feature", 
            geometry: { type: "Point", coordinates: [ -111.75807962919087, 39.98819048878927] },
            properties: { name: 'Worksite 1'}
        },
        { 
            type: "Feature", 
            geometry: { type: "Point", coordinates:[ -111.74717523874399, 40.04285159263675] },
            properties: { name: 'Worksite 2'}
        }, 
        { 
            type: "Feature", 
            geometry: { type: "Point", coordinates:[ -111.73253557228337, 40.11159178114652 ] },
            properties: { name: 'Worksite 3'}
        },
        { 
            type: "Feature", 
            geometry: { type: "Point", coordinates:[ -111.84357737511563, 40.02058937345118 ] },
            properties: { name: 'Worksite 4'}
        },
    ]
}