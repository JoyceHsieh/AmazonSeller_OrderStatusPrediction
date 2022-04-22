// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("KMeansChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [ "0", "1", "2", "3", "4", "5"],
    datasets: [{
      label: "Counts",
      backgroundColor: ["#4958e3","#71b8eb", "#a6dfed", "#f0cba1", "#eba85b", "#f54949"],
      borderColor: "rgba(2,117,216,1)",
      data: [18, 27, 41, 13, 49, 23],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 10
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 50,
          maxTicksLimit: 10
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});
