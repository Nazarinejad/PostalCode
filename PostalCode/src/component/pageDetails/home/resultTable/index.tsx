
import { IDataResult } from "../../../../controler/model/home/model";
import { Button, Icon } from 'sanhab-components-library'

interface IProps {
    result: IDataResult
    printPage : () => void
}
const ResultTable = (props: IProps) => {

    return (
        <>

            <Button onClick={props.printPage} className="p-x-8 print_btn" style={{float:"left"}}><Icon iconType="print" ></Icon></Button>

            <div className="printable_column_wrapper">

                <div className="single_block">
                    <div className="label">استان</div>
                    <div className="content">{props.result.Province}</div>
                </div>
                
                <div className="single_block">
                    <div className="label">شهر</div>
                    <div className="content">{props.result.TownShip}</div>
                </div>
                
                <div className="single_block">
                    <div className="label">نوع منطقه</div>
                    <div className="content">{props.result.LocalityType}</div>
                </div>

                <div className="single_block">
                    <div className="label">نام منطقه</div>
                    <div className="content">{props.result.LocalityName}</div>
                </div>
                
                <div className="single_block">
                    <div className="label">محله</div>
                    <div className="content">{props.result.SubLocality}</div>
                </div>

                <div className="single_block">
                    <div className="label">ناحیه</div>
                    <div className="content">{props.result.Zone}</div>
                </div>

                <div className="single_block">
                    <div className="label">خیابان اصلی</div>
                    <div className="content">{props.result.Street}</div>
                </div>

                <div className="single_block">
                    <div className="label">خیابان فرعی</div>
                    <div className="content">{props.result.Street2}</div>
                </div>

                <div className="single_block">
                    <div className="label">پلاک</div>
                    <div className="content">{props.result.HouseNumber}</div>
                </div>

                <div className="single_block">
                    <div className="label">نام ساختمان</div>
                    <div className="content">{props.result.BuildingName}</div>
                </div>

                <div className="single_block">
                    <div className="label">توضیحات</div>
                    <div className="content">{props.result.Description}</div>
                </div>

                <div className="single_block">
                    <div className="label">کد پیگیری</div>
                    <div className="content">{props.result.TraceID}</div>
                </div>

            </div>
        </>
    );
}

export default ResultTable;