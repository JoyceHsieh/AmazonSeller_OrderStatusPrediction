var data = [
    {
        z: [[1, 27], [26, 1]],
        x: ['Negative', 'Positive'],
        y: ['Positive', 'Negative'],
        type: 'heatmap',
        hoverongaps: false,
        colorscale: 'Viridis',
        number:[27,1,1,26],
        texttemplate: "%{z}",
        textposition: "inside"
      }
  ];

  var layout = {
    title: 'Naive_bayes Confusion Matrix',
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
  
  Plotly.newPlot('nbcm', data, layout);