import * as React from 'react';
import { Link } from 'react-router';
import {
  Input,
  InputGroup,
  Breadcrumb,
  Table,
  Panel,
  Icon,
  ButtonToolbar,
  Button,
  IconButton,
  Navbar,
  DOMHelper,
  Notification
} from 'rsuite';
import PropTypes from 'prop-types';
import axios from 'axios' ;
import DrawerView from "./DrawerView";

const { getHeight } = DOMHelper;

const { Column, HeaderCell, Cell } = Table;

type Props = {};
type State = {
  datas:PropTypes.array
};

class CovTable extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {datas:[]};
  }
  search = () => {
    const _this = this;
    axios.post('http://localhost:8080/covbond/getMainList', {})
        .then(function (response) {
          if (response.status !== 200) {
            console.error(response.statusText);
            return;
          }
          var datas = response.data;
          _this.setState({datas:datas});
        })
        .catch(function (error) {
          console.log(error);
        });
  }
  render(){
    const {datas} = this.state;
    return (
        <div>
          <Panel header={<h3>转债双低</h3>}>
            <div className="table-toolbar">
              <ButtonToolbar className="inner-left">
                <Button appearance="primary" placement="left" onClick={this.search}>
                  查询
                </Button>
              </ButtonToolbar>

              <div className="inner-right">
                <InputGroup inside>
                  <Input placeholder="Search" />
                  <InputGroup.Addon>
                    <Icon icon="search" />
                  </InputGroup.Addon>
                </InputGroup>
              </div>
            </div>
                <Table data={datas}             height={getHeight(window) - 216}>
                  <Column width={100} resizable>
                    <HeaderCell>债券代码</HeaderCell>
                    <Cell dataKey="bondCode"/>
                  </Column>
                  <Column width={100} resizable>
                    <HeaderCell>债券名称</HeaderCell>
                    <Cell dataKey="simpleName"/>
                  </Column>
                  <Column width={100} resizable>
                    <HeaderCell>债券价格</HeaderCell>
                    <Cell dataKey="bondPrice"/>
                  </Column>
                  <Column width={100} resizable>
                    <HeaderCell>股票代码</HeaderCell>
                    <Cell dataKey="stockCode"/>
                  </Column>
                  <Column width={100} resizable>
                    <HeaderCell>股票名称</HeaderCell>
                    <Cell dataKey="stockName"/>
                  </Column>
                  <Column width={100} resizable>
                    <HeaderCell>股票价格</HeaderCell>
                    <Cell dataKey="stockPrice"/>
                  </Column>
                  <Column width={100} resizable>
                    <HeaderCell>溢价率</HeaderCell>
                    <Cell dataKey="overRatio"/>
                  </Column>
                  <Column width={100} resizable>
                    <HeaderCell>双低</HeaderCell>
                    <Cell dataKey="doubleLow"/>
                  </Column>
                  <Column width={100} resizable>
                    <HeaderCell>转股起始日</HeaderCell>
                    <Cell dataKey="convSDate"/>
                  </Column>
                  <Column width={100} resizable>
                    <HeaderCell>转股截止日</HeaderCell>
                    <Cell dataKey="convEDate"/>
                  </Column>
                  <Column width={100} resizable>
                    <HeaderCell>上市状态</HeaderCell>
                    <Cell dataKey="listStatus"/>
                  </Column>
                </Table>
          </Panel>
        </div>
    );
  }
}

export default CovTable;
