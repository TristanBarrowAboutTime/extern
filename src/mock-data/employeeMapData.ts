export const employeeListData = [

]

export const employeeGeoJson = {
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
            geometry: { type: "Point", coordinates: [ -111.634, 39.989] },
            properties: { id:'1', name: 'Bob Roberto'}
        },
        { 
            type: "Feature", 
            geometry: { type: "Point", coordinates:[ -111.845, 39.978] },
            properties: { id:'2', name: 'Dusty Bottoms'}
        }, 
        { 
            type: "Feature", 
            geometry: { type: "Point", coordinates:[ -111.743, 39.975] },
            properties: { id:'3', name: 'Carrol Ling'}
        },
        { 
            type: "Feature", 
            geometry: { type: "Point", coordinates:[ -111.756, 39.976] },
            properties: { id:'4', name: 'Mike Rofone'}
        },
        { 
            type: "Feature", 
            geometry: { type: "Point", coordinates:[ -111.791, 39.982] },
            properties: { id:'5', name: 'Rob Urr'}
        },
        { 
            type: "Feature", 
            geometry: { type: "Point", coordinates:[ -111.74, 39.978] },
            properties: { id:'6', name: 'Berry Razz'}
        }
    ]
}