var data = [
    {
        z: [[0, 35], [29, 2]],
        x: ['Negative', 'Positive'],
        y: ['Positive', 'Negative'],
        type: 'heatmap',
        hoverongaps: false,
        colorscale: 'Viridis',
        number:[35,0,2,29],
        texttemplate: "%{z}",
        textposition: "inside"
      }
  ];

  var layout = {
    title: 'Decision Tree Confusion Matrix',
    annotations: [],
    xaxis: {
      title: 'Predicted',
      ticks: '',
      side: 'do'
    },
    yaxis: {
      title: 'Actual',
      ticks: '',
      ticksuffix: ' ',
      width: 700,
      height: 700,
      autosize: false
    },


  };
  
  Plotly.newPlot('dtcm', data, layout);