import { MapEmployeeStatus } from "../../components/atomic-components/UserImage";
import { LocationAssetsRecord } from "../../components/molecular-components/map-detail-lists/LocationAssets";
import { LocationEmployeeRecord } from "../../components/molecular-components/map-detail-lists/LocationEmployee";
import { LocationFormsRecord } from "../../components/molecular-components/map-detail-lists/LocationForms";


export const locationAssetsData: LocationAssetsRecord[] = [
    {
        assets: 'SP-WM-07 Miller Big Blue 450 Duo',
        employee: '1002 Joseph Carrigan',
        service: '100300.00 Full Service',
        time: 'Time on Site: 25 days',
        activity: ' 12:54pm MDT',
    },
    {
        assets: 'SP-WS-02 WALL/FLOOR SCANNER',
        employee: '1002 Joseph Carrigan',
        service: 'e',
        time: 'Time Assigned to Site: 45 days',
        activity: ' ',
    },

]

export const locationEmployeeData: LocationEmployeeRecord[] = [

    {
        code: 1,
        firstName: 'Roshni',
        lastName: "Raval",
        status: MapEmployeeStatus.CLOCKED_IN,
        time: '8 hrs',
        address: 'Payson, Utah',
        image: ''
    },
    {
        code: 2,
        firstName: 'Scott',
        lastName: "Jenkens",
        status: MapEmployeeStatus.CLOCKED_OUT,
        time: '8 hrs',
        address: '120459 Salt Lake City Water',
        image: ''
    },
]
export const locationFormsData: LocationFormsRecord[] = [
    {

        formlist: 'Missing Hours',
        employee: 'Joseph Carrigan',
        time: '1:11pm'
    },

]