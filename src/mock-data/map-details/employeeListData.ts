import { EmployeeHistoryTimeRecord } from "../../components/molecular-components/map-detail-lists/EmployeeHistoryList";

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