import { LineChart } from '@rsuite/charts';
import PropTypes from 'prop-types';
import * as React from 'react';
type Props = {datas:PropTypes.array};
type State = {
    lineClose           :PropTypes.array,
    lineVolume:PropTypes.array,
    lineOverRatio:PropTypes.array,
};

class CovDetailBondPriceCurve extends React.Component<Props, State> {
  constructor(datas) {
    super();
    let line1 = [];
    let line2 = [];
    let line3 = [];
    if(datas !== null){
      for(let i in datas){
        line1.push([datas[i].tradeDate,datas[i].close]);
        line2.push([datas[i].tradeDate,datas[i].volume]);
        line3.push([datas[i].tradeDate,datas[i].overRatio]);
      }
    }
    this.state = {
      lineClose:line1,
      lineVolume:line2,
      lineOverRatio:line3
    };
  }
  render(){
    const {line2 } = this.state;
    return (
        <LineChart name="bond close" data={line2} />
    );
  }
}

export default CovDetailBondPriceCurve;
