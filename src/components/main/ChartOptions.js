const ChartOptions = (props) => {
    return(
        <div className='flex justify-around full-width'>
            <div className='flex column align-center'>
                <div className='p-v-10 p-h-25 m-v-5 roboto'>Display data by :</div>
                <div className={`p-v-10 p-h-25 m-v-5 hovered option-box ${props.display === 'values' ? 'active' : ''}`} 
                    onClick={() => props.handleDisplay('values')}>Value</div>
                <div className={`p-v-10 p-h-25 m-v-5 hovered option-box ${props.display === 'aggregates' ? 'active' : ''}`} 
                    onClick={() => props.handleDisplay('aggregates')}>Aggregate</div>
            </div>
            <div className='flex column align-center'>
                <div className='p-v-10 p-h-25 m-v-5 roboto'>Data Interval :</div>
                <div className={`p-v-10 p-h-25 m-v-5 hovered option-box ${props.interval === 1 ? 'active' : ''}`} onClick={() => props.handleInterval(1)}>Weekly</div>
                <div className={`p-v-10 p-h-25 m-v-5 hovered option-box ${props.interval === 2 ? 'active' : ''}`} onClick={() => props.handleInterval(2)}>2-Weekly</div>
                <div className={`p-v-10 p-h-25 m-v-5 hovered option-box ${props.interval === 4 ? 'active' : ''}`} onClick={() => props.handleInterval(4)}>4-Weekly</div>
            </div>
            <div className='flex column align-center'>
                <div className='p-v-10 p-h-25 m-v-5 roboto'>Chart type :</div>
                <div className={`p-v-10 p-h-25 m-v-5 hovered option-box ${props.type === 'line'? 'active' : ''}`} onClick={() => props.handleChartType('line')}>Line</div>
                <div className={`p-v-10 p-h-25 m-v-5 hovered option-box ${props.type === 'area'? 'active' : ''}`} onClick={() => props.handleChartType('area')}>Area</div>
                <div className={`p-v-10 p-h-25 m-v-5 hovered option-box ${props.type === 'bar'? 'active' : ''}`} onClick={() => props.handleChartType('bar')}>Bar</div>
            </div>
        </div>
    )
}

export default ChartOptions;