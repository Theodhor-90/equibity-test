import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import merge from './../../js/data';
import { chartData, options} from '../../js/chartData';
import verticalTicks from './../../js/verticalTicks';

const DataChart = (props) => {
    const dataType = props.display === 'values' ? 'VALUES' : 'AGGREGATES'
    const chartTitle = props.interval === 1 ? 'WEEKLY ' : `${props.interval}-WEEKLY `;
    let lineBoolean;
    props.type === 'line' ? lineBoolean = false : lineBoolean = true;
    const data = merge(props.interval,props.selector);

    return(
        <div className={`centralizer column flex-wrap full-width p-v-10 m-t-20 back-${props.type}`}>
          <div className='line-container relative flex column'>
            <div className='centralizer roboto-bold v-p-10'>{chartTitle + dataType}</div>
            {props.type === 'bar' ?
              <Bar data={chartData(data[props.display],data.weeks,lineBoolean)} 
              options={options(verticalTicks(data[props.display]),props.interval)} />
              :
              <Line          
                data={chartData(data[props.display],data.weeks,lineBoolean)} 
                options={options(verticalTicks(data[props.display]),props.interval)} />
            }
            <div className='flex justify-around'>
              <div className='p-v-10 roboto-bold color-green'>High: <span>{parseInt(data.max).toString().split(/(?=(?:...)*$)/).join(' ')}</span></div>
              <div className='p-v-10 roboto-bold color-red'>Low: <span>{parseFloat(data.min)}</span></div>
              <div className='p-v-10 roboto-bold'>Avarage: <span>{parseInt(data.avarage).toString().split(/(?=(?:...)*$)/).join(' ')}</span></div>
            </div>
          </div>
        </div>
    )

}



export default DataChart;