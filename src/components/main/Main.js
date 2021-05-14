import React from 'react';
import ChartOptions from './ChartOptions';
import DataChart from './DataChart';
class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            display: 'values',
            interval: 1,
            type: 'line'
        }
        this.handleInterval = this.handleInterval.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
        this.handleChartType = this.handleChartType.bind(this);
    }

    handleDisplay(entry){
        this.setState({ display: entry});
    }

    handleInterval(entry){
        this.setState({ interval: entry});
    }

    handleChartType(entry){
        this.setState({
            type: entry
        })
    }

    render(){
        return(
            <div className='flex p-h-10 m-v-15'>
                <ChartOptions
                    display={this.state.display}
                    interval={this.state.interval}
                    type={this.state.type}
                    handleDisplay={this.handleDisplay}
                    handleInterval={this.handleInterval}
                    handleChartType={this.handleChartType}
                />
                <DataChart 
                    selector={this.props.selectorKey}
                    display={this.state.display}
                    interval={this.state.interval}
                    type={this.state.type}
                />
            </div>
        )
    }
}

export default Main;