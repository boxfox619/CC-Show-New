export default interface StoreModel {
    gps: {
        position?: { longitude: any, latitude: any },
        progress: boolean
    }
}