var ctx = document.getElementById("myChart").getContext("2d");

function getColor(ctx) {
  const value = ctx.parsed.y;
  if (value <= 3) {
    return "#ffc59b";
  }
  if (value > 3 && value <= 6) {
    return "#f88c6c";
  }
  if (value > 6) {
    return "#e64e21";
  }
  return "#eee";
}

var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "8:00",
      "8:30",
      "9:00",
      "9:30",
      "10:00",
      "10:30",
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
      "15:00",
      "15:30",
      "16:00",
      "16:30",
      "17:00",
      "17:30",
      "18:00",
      "18:30",
      "19:00",
      "19:30",
      "20:00",
      "20:30",
      "21:00",
      "21:30",
      "22:00",
    ],
    datasets: [
      {
        data: [
          3, 6, 6, 5, 1, 2, 5, 9, 8, 7, 5, 5, 4, 2, 3, 6, 5, 8, 7, 8, 8, 6, 6,
          5, 7, 6, 4, 2, 3,
        ],
        borderRadius: 30,
        barPercentage: 1.0,
        categoryPercentage: 1.0,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        display: false,
      },
      x: {
        grid: {
          display: false,
        },
        barThickness: 1,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      bar: {
        backgroundColor: getColor,
      },
    },
  },
});
