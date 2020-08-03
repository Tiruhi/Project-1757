let viewsChart = new Chart('visitsChart', {
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
                    y: 0.4
                }, {
                    x: 0,
                    y: 0.4
                },
                    {
                        x: 0,
                        y: 0.7
                    }, {
                        x: 0.3,
                        y: 0.8
                    }, {
                        x: 0.4,
                        y: 0.9
                    },
                    {
                        x: 0.6,
                        y: 1.1
                    }, {
                        x: 0.2,
                        y: 0.6
                    }, {
                        x: 4.3,
                        y: 1.1
                    }, {
                        x: 4.7,
                        y: 0.8
                    }, {
                        x: 8.1,
                        y: 5.2
                    }, {
                        x: 6.9,
                        y: 4.1
                    }, {
                        x: 8.1,
                        y: 2.0
                    },
                    {
                        x: 8.9,
                        y: 4.0
                    },

                ],

                borderColor: '#fff343',
                // backgroundColor: '#af90ca',
                fill: false,
                label: [''],

                lineTension: 0,
                backgroundColor: "#fff343",
                pointBackgroundColor: "transparent",
                pointBorderColor: "transparent",
                pointHoverBackgroundColor: "transparent",
                pointHoverBorderColor: "transparent",
            },

            {
                pointRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0,],
                // data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.(0.3) , 0.3, 2.6, 0.5, 5.0],
                data: [{
                    x: 0,
                    y: 0.3
                }, {
                    x: 0,
                    y: 0.3
                },
                    {
                        x: 0,
                        y: 0.3
                    }, {
                        x: 0,
                        y: 0.3
                    }, {
                        x: 0.9,
                        y: 0.3
                    },
                    {
                        x: 0,
                        y: 0.3
                    }, {
                        x: 0.2,
                        y: 0.6
                    }, {
                        x: 1.5,
                        y: 1.9
                    }, {
                        x: 1.7,
                        y: 0.7
                    }, {
                        x: 5.9,
                        y: 7.8
                    }, {
                        x: 2.5,
                        y: 4.6
                    }, {
                        x: 9.9,
                        y: 6.3
                    },

                ],

                borderColor: '#ff7e00',
                // backgroundColor: '#af90ca',
                fill: false,
                label: [''],

                lineTension: 0,
                backgroundColor: "#ff7e00",
                pointBackgroundColor: "transparent",
                pointBorderColor: "transparent",
                pointHoverBackgroundColor: "transparent",
                pointHoverBorderColor: "transparent",
            },
            {
                pointRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0,],
                // data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.(0.3) , 0.3, 2.6, 0.5, 5.0],
                data: [{
                    x: 0,
                    y: 0.2
                }, {
                    x: 0,
                    y: 0.2
                },
                    {
                        x: 0,
                        y: 0.2
                    }, {
                        x: 0,
                        y: 0.2
                    }, {
                        x: 0.5,
                        y: 0.2
                    },
                    {
                        x: 0,
                        y: 0.2
                    }, {
                        x: 0.2,
                        y: 0.2
                    }, {
                        x: 0.5,
                        y: 0.9
                    }, {
                        x: 0.7,
                        y: 1.7
                    }, {
                        x: 3.9,
                        y: 4.3
                    }, {
                        x: 2.5,
                        y: 2.9
                    }, {
                        x: 7.9,
                        y: 5.8
                    },

                ],

                borderColor: '#74bc00',
                // backgroundColor: '#af90ca',
                fill: false,
                label: [''],
                lineTension: 0,
                backgroundColor: "#74bc00",
                pointBackgroundColor: "transparent",
                pointBorderColor: "transparent",
                pointHoverBackgroundColor: "transparent",
                pointHoverBorderColor: "transparent",
            },
            {
                pointRadius: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0,],
                // data: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 1.(0.3) , 0.3, 2.6, 0.5, 5.0],
                data: [{
                    x: 0,
                    y: 0.1
                }, {
                    x: 0,
                    y: 0.1
                },
                    {
                        x: 0,
                        y: 0.1
                    }, {
                        x: 0,
                        y: 0.1
                    }, {
                        x: 0,
                        y: 0.1
                    },
                    {
                        x: 0,
                        y: 0.1
                    }, {
                        x: 0,
                        y: 0.1
                    }, {
                        x: 1,
                        y: 1.2
                    }, {
                        x: 0.7,
                        y: 0.7
                    }, {
                        x: 2.9,
                        y: 3.3
                    }, {
                        x: 1.5,
                        y: 1.4
                    }, {
                        x: 5.9,
                        y: 5.5
                    },

                ],

                borderColor: '#f10760',
                // backgroundColor: '#af90ca',
                fill: false,
                label: [''],
                lineTension: 0,
                backgroundColor: "#f10760",
                pointBackgroundColor: "transparent",
                pointBorderColor: "transparent",
                pointHoverBackgroundColor: "transparent",
                pointHoverBorderColor: "#f10760",
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
                label: [''],
                lineTension: 0,
                backgroundColor: "#55bae7",
                pointBackgroundColor: "transparent",
                pointBorderColor: "transparent",
                pointHoverBackgroundColor: "#55bae7",
                pointHoverBorderColor: "#55bae7",
            },



        ]
    },
    responsive: true,

    options: {
        legend: {
            display: true,
            // position: 'top',

            labels: {
                fontColor: '#8c8c8c',
                usePointStyle: true,
                padding: 20
            }
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