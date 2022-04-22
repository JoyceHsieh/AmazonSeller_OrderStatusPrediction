var data = [
    {
        z: [[1, 34], [24, 7]],
        x: ['Negative', 'Positive'],
        y: ['Positive', 'Negative'],
        type: 'heatmap',
        hoverongaps: false,
        colorscale: 'Viridis',
        number:[24,1,7,34],
        texttemplate: "%{z}",
        textposition: "inside"
      }
  ];

  var layout = {
    title: 'KNN Confusion Matrix',
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
  
  Plotly.newPlot('knncm', data, layout);


