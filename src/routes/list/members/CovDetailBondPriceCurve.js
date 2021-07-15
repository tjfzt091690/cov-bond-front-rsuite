import * as React from 'react';
import * as echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
//import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/pie';
// import 'echarts/lib/chart/scatter';
// import 'echarts/lib/chart/radar';

// import 'echarts/lib/chart/map';
// import 'echarts/lib/chart/treemap';
// import 'echarts/lib/chart/graph';
// import 'echarts/lib/chart/gauge';
// import 'echarts/lib/chart/funnel';
// import 'echarts/lib/chart/parallel';
// import 'echarts/lib/chart/sankey';
// import 'echarts/lib/chart/boxplot';
// import 'echarts/lib/chart/candlestick';
// import 'echarts/lib/chart/effectScatter';
// import 'echarts/lib/chart/lines';
// import 'echarts/lib/chart/heatmap';

// import 'echarts/lib/component/graphic';
// import 'echarts/lib/component/grid';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/polar';
// import 'echarts/lib/component/geo';
// import 'echarts/lib/component/parallel';
// import 'echarts/lib/component/singleAxis';
// import 'echarts/lib/component/brush';
import { GridComponent } from 'echarts/components';
echarts.use([GridComponent]);
import 'echarts/lib/component/title';
import {Col, Row,Grid} from 'rsuite';

// import 'echarts/lib/component/dataZoom';
// import 'echarts/lib/component/visualMap';

// import 'echarts/lib/component/markPoint';
// import 'echarts/lib/component/markLine';
// import 'echarts/lib/component/markArea';

// import 'echarts/lib/component/timeline';
// import 'echarts/lib/component/toolbox';
class CovDetailBondPriceCurve extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    let line1 = {x:[],y:[]};
    let line2 = {x:[],y:[]};
    let line3 = {x:[],y:[]};
    //双底
    let line4 = {x:[],y:[]};
    //股票价格
    let line5 = {x:[],y:[]};
    //转股
    let line6 = {x:[],y:[]};
    let datas = props.bondDaily;
    if(datas !== null){
      for(let i in datas){
        line1.x.push(datas[i].tradeDate);
        line1.y.push(datas[i].close);
        line2.x.push(datas[i].tradeDate);
        line2.y.push(datas[i].volume !== null ? datas[i].volume / 10000.0 : null);
        line3.x.push(datas[i].tradeDate);
        line3.y.push(datas[i].overRatio !== null ? datas[i].overRatio * 100.0 : null);
        line4.x.push(datas[i].tradeDate);
        if(datas[i].close !== null && datas[i].overRatio !== null){
          line4.y.push(datas[i].overRatio * 100.0 + datas[i].close);
        }else{
          line4.y.push(null);
        }
      }
    }
    let stockdatas = props.stockDaily;
    if(stockdatas !== null){
      for(let i in stockdatas){
        line5.x.push(stockdatas[i].date);
        line5.y.push(stockdatas[i].close);
      }
    }
    let covdatas = props.covDaily;
    if(covdatas !== null){
      for(let i in covdatas){
        line6.x.push(covdatas[i].date);
        line6.y.push(covdatas[i].accConvertRatio);
      }
    }
    this.state = {
      lineClose:line1,
      lineVolume:line2,
      lineOverRatio:line3,
      lineDoubleRatio:line4,
      lineStock:line5,
      lineCov:line6,
    };
  }
  componentDidMount = ()=>{
    var lineCloseChart = echarts.init(document.getElementById('lineclose'));
    lineCloseChart.setOption({
      title: {
        text: '收盘价'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: this.state.lineClose.x
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: this.state.lineClose.y,
        type: 'line'
      }]
    });
    var lineVolumnChart = echarts.init(document.getElementById('linevolume'));
    lineVolumnChart.setOption({
      title: {
        text: '交易量'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: this.state.lineVolume.x
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: this.state.lineVolume.y,
        type: 'line'
      }]
    });
    var lineORChart = echarts.init(document.getElementById('lineoverratio'));
    lineORChart.setOption({
      title: {
        text: '溢价率'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: this.state.lineOverRatio.x
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: this.state.lineOverRatio.y,
        type: 'line'
      }]
    });
    var lineDRChart = echarts.init(document.getElementById('linedr'));
    lineDRChart.setOption({
      title: {
        text: '双底'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: this.state.lineDoubleRatio.x
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: this.state.lineDoubleRatio.y,
        type: 'line'
      }]
    });
    var lineStkChart = echarts.init(document.getElementById('linestock'));
    lineStkChart.setOption({
      title: {
        text: '股票价格'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: this.state.lineStock.x
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: this.state.lineStock.y,
        type: 'line'
      }]
    });
    var lineCovChart = echarts.init(document.getElementById('linecov'));
    lineCovChart.setOption({
      title: {
        text: '转股'
      },
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: this.state.lineCov.x
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: this.state.lineCov.y,
        type: 'line'
      }]
    });
  }
  render(){
    return (
        <Row>
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={12} lg={12}>
                <div id="lineclose" style={{ width: '100%', height: 300 }}></div>
              </Col>
              <Col xs={12} md={12} lg={12}>
                <div id="linevolume" style={{ width: '100%', height: 300 }}></div>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={12} md={12} lg={12}>
                <div id="lineoverratio" style={{ width: '100%', height: 300 }}></div>
              </Col>
              <Col xs={12} md={12} lg={12}>
                <div id="linedr" style={{ width: '100%', height: 300 }}></div>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={12} md={12} lg={12}>
                <div id="linestock" style={{ width: '100%', height: 300 }}></div>
              </Col>
              <Col xs={12} md={12} lg={12}>
                <div id="linecov" style={{ width: '100%', height: 300 }}></div>
              </Col>
            </Row>
          </Grid>
        </Row>
    );
  }
};

export default CovDetailBondPriceCurve;
