function horizontalTicks(interval){
  return {
      fontSize: 8,
      fontFamily: 'Roboto-Bold',
      callback: function(tick, index) {
        if(interval===1){
          return (index % 4 === 0) ? tick : '';
        } else {
          if(interval===2){
            return (index % 2 === 0) ? tick : '';
          } else return tick
        }
      }
    }
}

export function chartData(values,weeks,condition){
    return {
        labels: weeks,
        datasets: [
          {
            fill: condition,
            label: 'Value',
            backgroundColor: '#FFEFEF',
            borderColor: '#BB1515',
            pointBackgroundColor: '#BB1515',
            data: values,
            lineTension: 0,
            borderWidth: 0.5
          }
        ]
      }
}

export function options(verticalTicks,interval){
  return {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [{
        color: 'black',
        gridLines: {
          color: 'black',
          display: true,
          lineWidth: 0,
          zeroLineWidth: 1
        },
        ticks: verticalTicks
      }],
      xAxes: [{
        color: 'black',
        gridLines: {
          color: 'black',
          display: true,
          lineWidth: 0,
          zeroLineWidth: 1
        },
        ticks: horizontalTicks(interval)  //weeks = 1 | 2 | 4
      }]
    }
  }
}
