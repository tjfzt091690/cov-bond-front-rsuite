import * as React from 'react';
import {
    Modal, Col, Row,Grid
} from 'rsuite';
import PropTypes from 'prop-types';
import axios from 'axios' ;
import CovDetailBasic from './CovDetailBasic';

type Props ={
    bondId:PropTypes.string,
    shown:boolean
}

type State = {
    bondId:PropTypes.string,
    shown:boolean,
    bondDaily:PropTypes.array,
    bondInfo:PropTypes.object
};

class CovDetail extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    let bondId = props.bondId;
    let shown = props.shown;
    this.state = {
      bondDaily:[],
      bondInfo: {},
      bondId:bondId,
      shown:shown
    };
  }
  componentWillReceiveProps(nextProps) {
    let bondId = nextProps.bondId;
    let shown = nextProps.shown;
    this.pageinfo(bondId,shown);
  }
  pageinfo (bondId,shown) {
    const _this = this;
    axios.post('http://localhost:8080/covbond/getDetaiByBondId', {bondId:bondId})
        .then(function (response) {
          if (response.status !== 200) {
            console.error(response.statusText);
            return;
          }
          let datas = response.data;
          _this.setState({
            bondDaily:datas.bondDaily,
            bondInfo:datas.bondInfo,
            bondId:bondId,
            shown:shown
          });
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  render(){
    const { shown,bondDaily,bondInfo } = this.state;
    return (
            <Modal show={shown} size={'lg'} overflow={true} full={true}>
                <Modal.Header closeButton={true}>
                    <Modal.Title>detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={24} md={24} lg={24}>
                                <CovDetailBasic basicinfo={bondInfo} />
                            </Col>
                        </Row>
                    </Grid>
                </Modal.Body>
            </Modal>
    );
  }
}

export default CovDetail;
