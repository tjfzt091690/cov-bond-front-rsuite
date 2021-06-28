import * as React from 'react';
import {
    Button,
    DOMHelper,
    Modal, Col, Row,Grid
} from 'rsuite';
import PropTypes from 'prop-types';
import axios from 'axios' ;
import CovDetailBasic from './CovDetailBasic';


const { getHeight } = DOMHelper;

type Props = {};
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
      bondId:bondId,
      shown:shown,
      bondDaily:[],
      bondInfo:{}
    };
    this.pageinfo();
  }
  pageinfo () {
    const _this = this;
    axios.post('http://localhost:8080/covbond/getDetaiByBondId', {bondId:this.state.bondId})
        .then(function (response) {
          if (response.status !== 200) {
            console.error(response.statusText);
            return;
          }
          var datas = response.data;
          _this.setState({
            bondDaily:datas.bondDaily,
            bondInfo:datas.bondInfo,
            bondId:this.state.bondId,
            shown:this.state.shown
          });
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  close(){
    this.state = {
      shown:false,
      bondDaily:[],
      bondInfo:{},
      bondId:''
    };
  }
  render(){
    const { shown,bondDaily,bondInfo } = this.state;
    return (
            <Modal show={shown} size={'lg'} overflow={true} full={true}>
                <Modal.Header>
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
                <Modal.Footer>
                    <Button onClick={this.close} appearance="subtle">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
    );
  }
}

export default CovDetail;
