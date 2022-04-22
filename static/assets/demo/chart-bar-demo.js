// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [ "KOLKATA", "MUMBAI", "CHENNAI", "BENGALURU", "HYDERABAD", "GURUGRAM", "NEW DELHI", "PUNE", "Surat", "GUWAHATI"],
    datasets: [{
      label: "Revenue",
      backgroundColor: ["#deb580","#e8aa80", "#ef9f86", "#f29490", "#f08c9e", "#e887af","#d985c1","#c186d1","#a18adf", "#748fe7"],
      borderColor: "rgba(2,117,216,1)",
      data: [12095, 10710, 8373, 7552, 4224, 4208, 3775, 3743, 2398, 2330],
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
          max: 15000,
          maxTicksLimit: 5
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
