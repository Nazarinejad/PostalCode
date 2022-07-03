import { Result, Typography } from 'antd';
import { Button, Form, Row, Col, Radio, Input, Checkbox, Tabs } from "sanhab-components-library";
import HomeMainHook from './hook'
import ResultTable from '../../../pageDetails/home/resultTable/index'
import JsonResult from '../../../pageDetails/home/jsonResult/index'

import styles from './styles.module.sass'
const { TabPane } = Tabs;
const { Title } = Typography;


const Home = (props: any) => {
    const homeMainHook = HomeMainHook(props);

    return (
        <div className={styles.print_wrapper}>
            <div className="form_wrapper">

                <Form className="form hideOnPrint"
                    form={homeMainHook.form}
                    onFinish={homeMainHook.onFinish}
                >
                    <Row>
                        <>
                            <Col span={24}>
                                <Form.Item
                                    label="کد پستی"
                                    name="postalCode"
                                    rules={[
                                        {
                                            min: 10,
                                            max: 10,
                                            message: "کدپستی باید 10 رقمی باشد.",
                                        },
                                        {
                                            required: true,
                                            message: "لطفا کد پستی را وارد کنید.",
                                        }
                                    ]}>
                                    <Input type="number" />
                                </Form.Item>
                            </Col>

                        </>




                        <Col style={{ display: 'flex', flexFlow: 'row-reverse' }} sm={24}>
                            <Button type="primary" htmlType="submit" loading={homeMainHook.isLoadingSubmitBtn}>
                                استعلام
                        </Button>
                        </Col>
                    </Row>



                </Form >

            </div >


            {homeMainHook.showTable ? (
                // <Tabs defaultActiveKey="1" >
                //     <TabPane tab="نتیجه" key="1">
                //         <ResultTable result={homeMainHook.result} />
                //     </TabPane>
                //     <TabPane tab="json" key="2">
                //         <JsonResult result={homeMainHook.fullResult} />
                // </TabPane>

                // </Tabs>
                <ResultTable result={homeMainHook.result} printPage={homeMainHook.printPage} />

            ) : null}
            {/* printPage={homeMainHook.printPage} */}

        </div>
    )
}
export default Home;