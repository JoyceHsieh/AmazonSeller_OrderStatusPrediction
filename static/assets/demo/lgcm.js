var data = [
    {
        z: [[6, 27], [33, 0]],
        x: ['Negative', 'Positive'],
        y: ['Positive', 'Negative'],
        type: 'heatmap',
        hoverongaps: false,
        colorscale: 'Viridis',
        number:[33,6,0,27],
        texttemplate: "%{z}",
        textposition: "inside"
      }
  ];

  var layout = {
    title: 'Logistic Confusion Matrix',
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
  
  Plotly.newPlot('lgcm', data, layout);