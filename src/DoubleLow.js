import React, { Component } from 'react'
import axios from 'axios' ;
import { Table,Column, HeaderCell, Cell } from "rsuite-table";
import 'rsuite-table/lib/less/index.less';
export class DoubleLow extends Component {
    constructor() {
        super();
        this.state= {datas:[]}
    }
    componentDidMount() {
        this.search();
    }
    search = () => {
        const _this=this;
        axios.post('http://localhost:8080/covbond/getMainList', {})
            .then(function (response) {
                if (response.status !== 200) {
                    console.error(response.statusText)
                    return
                }
                var datas = response.data
                _this.setState({datas:datas})
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    render(){
        const {datas}=this.state
        return (
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <div className="col-lg-1 offset-lg-10">
                                <button type="button" className="btn btn-primary btn-fw" id="search"
                                        onClick={this.search}>查询
                                </button>
                            </div>
                            <div className="table-responsive">
                                <Table data={datas}>
                                    <Column width={100} fixed resizable>
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
                                    <Column width={100} fixed resizable>
                                        <HeaderCell>溢价率</HeaderCell>
                                        <Cell dataKey="overRatio"/>
                                    </Column>
                                    <Column width={100} fixed resizable>
                                        <HeaderCell>双低</HeaderCell>
                                        <Cell dataKey="doubleLow"/>
                                    </Column>
                                    <Column width={100} fixed resizable>
                                        <HeaderCell>转股起始日</HeaderCell>
                                        <Cell dataKey="convSDate"/>
                                    </Column>
                                    <Column width={100} fixed resizable>
                                        <HeaderCell>转股截止日</HeaderCell>
                                        <Cell dataKey="convEDate"/>
                                    </Column>
                                    <Column width={100} fixed resizable>
                                        <HeaderCell>上市状态</HeaderCell>
                                        <Cell dataKey="listStatus"/>
                                    </Column>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default DoubleLow;
