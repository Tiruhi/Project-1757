let singleVisitsChart = new Chart('singleVisitsChart', {
    type: 'line',

    pointRadius: [0, 5],
    borderWidth: 7,
    label: "12",
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',

    data: {
        labels: ['19 Mar', '19 Mar', '19 Mar', '19 Mar', '19 Mar', '19 Mar', '19 Mar', '19 Mar', '19 Mar', '19 Mar', '19 Mar', '19 Mar', '19 Mar'],
        datasets: [
            {
                pointRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0,],
                // data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.(0.3) , 0.3, 2.6, 0.5, 5.0],
                data: [{
                    x: 0,
                    y: 0
                }, {
                    x: 0,
                    y: 0
                },
                    {
                        x: 0,
                        y: 0
                    }, {
                        x: 0,
                        y: 0
                    }, {
                        x: 0,
                        y: 0
                    },
                    {
                        x: 0,
                        y: 0
                    }, {
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 1
                    }, {
                        x: 0.3,
                        y: 0.3
                    }, {
                        x: 2.6,
                        y: 2.6
                    }, {
                        x: 1,
                        y: 1
                    }, {
                        x: 4.5,
                        y: 4.5
                    },

                ],

                borderColor: '#0891f2',
                // backgroundColor: '#af90ca',
                fill: false,
                label: ['Visits','Click - Throughs', 'CTR', '28 days'],
                lineTension: 0,
                backgroundColor: "#e755ba",
                pointBackgroundColor: "#55bae7",
                pointBorderColor: "#55bae7",
                pointHoverBackgroundColor: "#55bae7",
                pointHoverBorderColor: "#55bae7",
            },
            {
                pointRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0,],
                // data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.(0.3) , 0.3, 2.6, 0.5, 5.0],
                data: [{
                    x: 0,
                    y: 0
                }, {
                    x: 0,
                    y: 0
                },
                    {
                        x: 0,
                        y: 0
                    }, {
                        x: 0,
                        y: 0
                    }, {
                        x: 0,
                        y: 0
                    },
                    {
                        x: 0,
                        y: 0
                    }, {
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 1
                    }, {
                        x: 0.3,
                        y: 0.3
                    }, {
                        x: 2.6,
                        y: 2.6
                    }, {
                        x: 1,
                        y: 1
                    }, {
                        x: 4.5,
                        y: 4.5
                    },

                ],

                borderColor: '#0891f2',
                // backgroundColor: '#af90ca',
                fill: false,
                label: ['Visits','Click - Throughs', 'CTR', '28 days'],
                lineTension: 0,
                backgroundColor: "#e755ba",
                pointBackgroundColor: "#55bae7",
                pointBorderColor: "#55bae7",
                pointHoverBackgroundColor: "#55bae7",
                pointHoverBorderColor: "#55bae7",
            }
        ]
    },
    responsive: true,

    options: {
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    // maxRotation: 90,
                    // minRotation: 80
                },
                gridLines: {
                    lineWidth: 0
                },
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 8,
                    stepSize: 2,
                },

            }]

        }
    },


});

let viewsChart = new Chart('viewsChart', {
    type: 'line',

    pointRadius: [0, 5],
    borderWidth: 7,
    label: "12",
    borderColor: 'rgb(255, 99, 132)',
    pointBackgroundColor: 'rgb(255, 99, 132)',

    data: {
        labels: ['19 Mar', '19 Mar', '19 Mar', '19 Mar', '19 Mar', '19 Mar', '19 Mar', '19 Mar', '19 Mar', '19 Mar', '19 Mar', '19 Mar', '19 Mar'],
        datasets: [
            {

                pointRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0,],
                // data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.(0.3) , 0.3, 2.6, 0.5, 5.0],
                data: [{
                    x: 0,
                    y: 0
                }, {
                    x: 0,
                    y: 0
                },
                    {
                        x: 0,
                        y: 0
                    }, {
                        x: 0,
                        y: 0
                    }, {
                        x: 0,
                        y: 0
                    },
                    {
                        x: 0,
                        y: 0
                    }, {
                        x: 0,
                        y: 0
                    }, {
                        x: 1,
                        y: 1
                    }, {
                        x: 0.3,
                        y: 0.3
                    }, {
                        x: 2.6,
                        y: 2.6
                    }, {
                        x: 1,
                        y: 1
                    }, {
                        x: 4.5,
                        y: 4.5
                    },

                ],

                borderColor: '#0891f2',
                // backgroundColor: '#af90ca',
                fill: false,
                label: ['Visits','Click - Throughs', 'CTR', '28 days'],
                lineTension: 0,
                backgroundColor: "#e755ba",
                pointBackgroundColor: "#55bae7",
                pointBorderColor: "#55bae7",
                pointHoverBackgroundColor: "#55bae7",
                pointHoverBorderColor: "#55bae7",
            }
        ]
    },
    responsive: true,

    options: {
        legend: {
            display: false,
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    // maxRotation: 90,
                    // minRotation: 80
                },
                gridLines: {
                    lineWidth: 0
                },
            }],
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 8,
                    stepSize: 2,
                },

            }]

        }
    },


});