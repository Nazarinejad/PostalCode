export interface IWarehouseInqueryByPostalCode {
    postalCode: string
    size: number
    start: number
}

export interface IDataResult {
    BuildingName?:string
    Description?:string
    Floor?:string
    HouseNumber?:string
    LocalityCode?:string
    LocalityName?:string
    LocalityType?:string
    Province?:string
    SideFloor?:string
    Street?:string
    Street2?:string
    SubLocality?:string
    TownShip?:string
    TraceID?:string
    Village?:string
    Zone?:string
}