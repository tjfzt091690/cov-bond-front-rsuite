import { InputGroup,Input,Grid, Row, Col,ControlLabel,AutoComplete } from 'rsuite';
import PropTypes from 'prop-types';
import * as React from 'react';
type Props = {};
type State = {
    bondCode           :PropTypes.string,
    mkt                :PropTypes.string,
    simpleName         :PropTypes.string,
    purchaseDate       :PropTypes.string,
    purchaseCode       :PropTypes.string,
    stockCode          :PropTypes.string,
    stockName          :PropTypes.string,
    parValue            :PropTypes.number,
    price               :PropTypes.number,
    covPrice             :PropTypes.string,
    checkDate            :PropTypes.string,
    checkRatio           :PropTypes.string,
    listDate             :PropTypes.string,
    remark               :PropTypes.string,
    mktType              :PropTypes.string,
    markDate             :PropTypes.string,
    top                  :PropTypes.string,
    covValue             :PropTypes.string,
    bondPrice            :PropTypes.string,
    overRatio            :PropTypes.string,
    amt                  :PropTypes.string,
    listStatus           :PropTypes.string,
    purpose              :PropTypes.string,
    convSDate            :PropTypes.string,
    convEDate            :PropTypes.string
};

class CovDetailBasic extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    let basicinfo = props.basicinfo;
    this.state = {
      bondCode        : basicinfo.bondCode        ,
      mkt             : basicinfo.mkt             ,
      simpleName      : basicinfo.simpleName      ,
      purchaseDate    : basicinfo.purchaseDate    ,
      purchaseCode    : basicinfo.purchaseCode    ,
      stockCode       : basicinfo.stockCode       ,
      stockName       : basicinfo.stockName       ,
      parValue        : basicinfo.parValue        ,
      price           : basicinfo.price           ,
      covPrice        : basicinfo.covPrice        ,
      checkDate       : basicinfo.checkDate       ,
      checkRatio      : basicinfo.checkRatio      ,
      listDate        : basicinfo.listDate        ,
      remark          : basicinfo.remark          ,
      mktType         : basicinfo.mktType         ,
      markDate        : basicinfo.markDate        ,
      top             : basicinfo.top             ,
      covValue        : basicinfo.covValue        ,
      bondPrice       : basicinfo.bondPrice       ,
      overRatio       : basicinfo.overRatio       ,
      amt             : basicinfo.amt             ,
      listStatus      : basicinfo.listStatus      ,
      purpose         : basicinfo.purpose         ,
      convSDate       : basicinfo.convSDate       ,
      convEDate       : basicinfo.convEDate       
    };
  }
  render(){
    const {
        bondCode      ,
        mkt           ,
        simpleName    ,
        purchaseDate  ,
        purchaseCode  ,
        stockCode     ,
        stockName     ,
        parValue      ,
        price         ,
        covPrice      ,
        checkDate     ,
        checkRatio    ,
        listDate      ,
        remark        ,
        mktType       ,
        markDate      ,
        top           ,
        covValue      ,
        bondPrice     ,
        overRatio     ,
        amt           ,
        listStatus    ,
        purpose       ,
        convSDate     ,
        convEDate     } = this.state;
    return (
            <Grid>
                <Row className="show-grid">
                    <Col xs={3} md={3}  lg={3}>
                        bond
                    </Col>
                    <Col xs={5} md={5}  lg={5}>
                            <AutoComplete name="bond" size={'sm'}
                                         disabled={true}
                                         value={'' + bondCode + stockName}/>
                    </Col>
                    <Col xs={3} md={3}  lg={3}>
                        stock
                    </Col>
                    <Col xs={5} md={5}  lg={5}>
                            <AutoComplete name="stock" size={'sm'}
                                         disabled={true}
                                   value={'' + stockCode + stockName}/>
                    </Col>
                    <Col xs={3} md={3}  lg={3}>
                        list date
                    </Col>
                    <Col xs={5} md={5}  lg={5}>
                            <AutoComplete name="listDate" size={'sm'}
                                         disabled={true}
                                   value={listDate}/>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={3} md={3}  lg={3}>
                        bond price
                    </Col>
                    <Col xs={5} md={5}  lg={5}>
                            <Input name="bondPrice"  size={'sm'}
                                         disabled={true}
                                         value={bondPrice}/>
                    </Col>
                    <Col xs={3} md={3}  lg={3}>
                        over ratio
                    </Col>
                    <Col xs={5} md={5}  lg={5}>
                            <Input name="overRatio"  size={'sm'}
                                         disabled={true}
                                         value={overRatio}/>
                    </Col>
                    <Col xs={3} md={3}  lg={3}>
                        mark date
                    </Col>
                    <Col xs={5} md={5}  lg={5}>
                            <AutoComplete name="markDate"  size={'sm'}
                                         disabled={true}
                                         value={markDate}/>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={3} md={3}  lg={3}>
                        amt
                    </Col>
                    <Col xs={5} md={5}  lg={5}>
                            <Input name="amt" size={'sm'}
                                         disabled={true}
                                         value={amt}/>
                    </Col>
                    <Col xs={3} md={3}  lg={3}>
                        conv start date
                    </Col>
                    <Col xs={5} md={5}  lg={5}>
                            <AutoComplete name="convSDate" size={'sm'}
                                         disabled={true}
                                         value={convSDate}/>
                    </Col>
                    <Col xs={3} md={3}  lg={3}>
                        cov end date
                    </Col>
                    <Col xs={5} md={5}  lg={5}>
                            <AutoComplete name="convEDate" size={'sm'}
                                         disabled={true}
                                         value={convEDate}/>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={1}  md={1}  lg={1}>
                        purpose
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={24}  md={24}  lg={24}>
                            <Input name="purpose"
                                         disabled={true}
                                         rows={5}
                                         componentClass="textarea"
                                         value={purpose}/>
                    </Col>
                </Row>
            </Grid>
    );
  }
}

export default CovDetailBasic;
