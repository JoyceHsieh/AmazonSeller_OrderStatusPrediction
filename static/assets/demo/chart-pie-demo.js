// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Delivered to buyer","Returned to seller","Cash on Delivery", "No"],
    datasets: [{
      data: [42, 118, 5, 6],
      backgroundColor: ['#fc69b3', '#d58df2', '#32cbff', '#8fb0ff'],
    },
  {
    data: [160, 11],
    backgroundColor: ['#ff5868', '00deff'],
  }],
  },
});
