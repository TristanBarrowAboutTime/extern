import { EmployeeAssetsRecord } from "../../components/molecular-components/map-detail-lists/EmployeeAssetsList";
import { EmployeeDiscRecord } from "../../components/molecular-components/map-detail-lists/EmployeeDiscList";
import { EmployeeFormsRecord } from "../../components/molecular-components/map-detail-lists/EmployeeFormsList";
import { EmployeeHistoryTimeRecord } from "../../components/molecular-components/map-detail-lists/EmployeeHistoryList";
import { EmployeeLocationRecord } from "../../components/molecular-components/map-detail-lists/EmployeeLocationList";

export const discData: EmployeeDiscRecord[] = [
    {

        company:'Co-operative Limited',
        time:'8:05 AM',
        distance:'Clock-In is outside of GeoFence by 0.5 Miles',
        notes:'Notes',
        text :'I clocked in at the shop this morning'
   
    },
    {
        company:'10000 West ERD (K-Rite)',
        time:'5:35 PM',
        distance:'Clock-OUT is outside of Geofence by 10.5 Miles',   
        notes:'Notes',
        text :'I forgot to clock out at 5:00, sorry!'

    }
]

export const data: EmployeeHistoryTimeRecord[] = [
    {
        id:1,
        time: '8:09 AM',
        isClockedIn: true,
        coordinates: { lat:53.6897 , long: -89.2868},
        accuracy: 'High'

    },
    {
        id:2,
        time: '5:09 PM',
        isClockedIn: false,
        coordinates: { lat:33.6897 , long: -19.2868},
        accuracy: 'Low'

    },
    {
        id:3,
        time: '8:09 AM',
        isClockedIn: true,
        coordinates: { lat:53.6897 , long: -89.2868},
        accuracy: 'High'

    },
    {
        id:4,
        time: '5:09 PM',
        isClockedIn: false,
        coordinates: { lat:33.6897 , long: -19.2868},
        accuracy: 'Low'

    }
]

export const locationData: EmployeeLocationRecord[] = [
    {
        inTime:'8:05am',
        outTime:'11:56am',
        companyArea:'00006709 UFA Co-operative Limited',
        serviceArea:'100300.00 Full Service'
    },
    {
        inTime:'8:05am',
        outTime:'5:56pm',
        companyArea:'00006819 UFA Co-operative Limited',
        serviceArea:'100300.00 Service'
    },
    {
        inTime:'8:05am',
        outTime:'',
        companyArea:'00006709 UFA Co-operative Limited',
        serviceArea:'100300.00 Full Service',
    }
]

export const assetsData: EmployeeAssetsRecord[] = [
    {
        inTime:'8:05am',
        outTime:'11:56am',
        assetsname:'SP-WM-07 Miller Big Blue 450 Duo',
        company:'00006709 UFA Co-operative Limited',
        servicearea:'100300.00 Full Service',
    },
    {
        inTime:'8:05am',
        outTime:'11:56am',
        assetsname:'SP-WM-07 Miller Big Blue 450 Duo',
        company:'00006709 UFA Co-operative Limited',
        servicearea:'100300.00 Full Service',
    },
    {
        inTime:'8:05am',
        outTime:'11:56am',
        assetsname:'SP-WM-07 Miller Big Blue 450 Duo',
        company:'00006709 UFA Co-operative Limited',
        servicearea:'100300.00 Full Service',
    },
]

export const formData: EmployeeFormsRecord[] = [
    {
        formlist:'Missing Hours',
        time:'1:11pm'
    },
    {
        formlist:'PTO',
        time:'1:11pm'
    },
]
