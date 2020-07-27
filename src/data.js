export const smallStatsCardData = [
  {
    label: "Revenue",
    value: "$574,823",
    percentage: "4.7%",
    increase: true,
    chartLabels: [null, null, null, null, null, null, null],
    attrs: { md: "6", sm: "6" },
    datasets: [
      {
        label: "Today",
        fill: "start",
        borderWidth: 1.5,
        backgroundColor: "rgba(0, 184, 216, 0.1)",
        borderColor: "rgb(0, 184, 216)",
        data: [1, 2, 1, 3, 5, 4, 7]
      }
    ]
  },
  // --------------------------------------------------------------------
  {
    label: "Costs",
    value: "$399,622",
    percentage: "12.4",
    increase: true,
    chartLabels: [null, null, null, null, null, null, null],
    attrs: { md: "6", sm: "6" },
    datasets: [
      {
        label: "Today",
        fill: "start",
        borderWidth: 1.5,
        backgroundColor: "rgba(23,198,113,0.1)",
        borderColor: "rgb(23,198,113)",
        data: [1, 2, 3, 3, 3, 4, 4]
      }
    ]
  },
  // --------------------------------------------------------------------------
  {
    label: "Net Income",
    value: "$175,201",
    percentage: "3.8%",
    increase: false,
    decrease: true,
    chartLabels: [null, null, null, null, null, null, null],
    attrs: { md: "4", sm: "6" },
    datasets: [
      {
        label: "Today",
        fill: "start",
        borderWidth: 1.5,
        backgroundColor: "rgba(255,180,0,0.1)",
        borderColor: "rgb(255,180,0)",
        data: [2, 3, 3, 3, 4, 3, 3]
      }
    ]
  },
  // ---------------------------------------------------------------------
  {
    label: "Net Income Customer",
    value: "$388",
    percentage: "2.71%",
    increase: false,
    decrease: true,
    chartLabels: [null, null, null, null, null, null, null],
    attrs: { md: "4", sm: "6" },
    datasets: [
      {
        label: "Today",
        fill: "start",
        borderWidth: 1.5,
        backgroundColor: "rgba(255,65,105,0.1)",
        borderColor: "rgb(255,65,105)",
        data: [1, 7, 1, 3, 1, 4, 8]
      }
    ]
  },
]

export const bigStatsCardData = [
  {
    title: "Cost per Lead",
    chartData: {
      labels: Array.from(new Array(23), (_, i) => (`07-${i < 10 ? '0' + i : i}`)),
      datasets: [
        {
          label: "Cost Per Lead",
          fill: "start",
          data: [
            500,
            800,
            320,
            180,
            240,
            320,
            230,
            650,
            590,
            1200,
            750,
            940,
            1420,
            1200,
            960,
            1450,
            1820,
            2800,
            2102,
            1920,
            3920,
            3202,
            3140,
            2800,
            3200,
            3200,
            3400,
            2910,
            3100,
            4250
          ],
          backgroundColor: "rgba(0,123,255,0.1)",
          borderColor: "rgba(0,123,255,1)",
          pointBackgroundColor: "#ffffff",
          pointHoverBackgroundColor: "rgb(0,123,255)",
          borderWidth: 1.5,
          pointRadius: 0,
          pointHoverRadius: 3
        },
        {
          label: "Net Income Per Lead",
          fill: "start",
          data: [
            380,
            430,
            120,
            230,
            410,
            740,
            472,
            219,
            391,
            229,
            400,
            203,
            301,
            380,
            291,
            620,
            700,
            300,
            630,
            402,
            320,
            380,
            289,
            410,
            300,
            530,
            630,
            720,
            780,
            1200
          ],
          backgroundColor: "rgba(255,65,105,0.1)",
          borderColor: "rgba(255,65,105,1)",
          pointBackgroundColor: "#ffffff",
          pointHoverBackgroundColor: "rgba(255,65,105,1)",
          borderDash: [3, 3],
          borderWidth: 1,
          pointRadius: 0,
          pointHoverRadius: 2,
          pointBorderColor: "rgba(255,65,105,1)"
        }
      ]
    }  
  },
  // ---------------------------------------------------------------------------------
  {
    title: "Cost per MQL",
    chartData: {
      labels: Array.from(new Array(23), (_, i) => (`07-${i < 10 ? '0' + i : i}`)),
      datasets: [
        {
          label: "Cost Per MQL",
          fill: "start",
          data: [
            500,
            800,
            320,
            180,
            240,
            320,
            230,
            650,
            590,
            1200,
            750,
            940,
            1420,
            1200,
            960,
            1450,
            1820,
            2800,
            2102,
            1920,
            3920,
            3202,
            3140,
            2800,
            3200,
            3200,
            3400,
            2910,
            3100,
            4250
          ],
          backgroundColor: "rgba(0,123,255,0.1)",
          borderColor: "rgba(0,123,255,1)",
          pointBackgroundColor: "#ffffff",
          pointHoverBackgroundColor: "rgb(0,123,255)",
          borderWidth: 1.5,
          pointRadius: 0,
          pointHoverRadius: 3
        },
        {
          label: "Net Income Per MQL",
          fill: "start",
          data: [
            380,
            430,
            120,
            230,
            410,
            740,
            472,
            219,
            391,
            229,
            400,
            203,
            301,
            380,
            291,
            620,
            700,
            300,
            630,
            402,
            320,
            380,
            289,
            410,
            300,
            530,
            630,
            720,
            780,
            1200
          ],
          backgroundColor: "rgba(255,65,105,0.1)",
          borderColor: "rgba(255,65,105,1)",
          pointBackgroundColor: "#ffffff",
          pointHoverBackgroundColor: "rgba(255,65,105,1)",
          borderDash: [3, 3],
          borderWidth: 1,
          pointRadius: 0,
          pointHoverRadius: 2,
          pointBorderColor: "rgba(255,65,105,1)"
        }
      ]
    }  
  },
  // ------------------------------------------------------------
  {
    title: "Cost per SQL",
    chartData: {
      labels: Array.from(new Array(23), (_, i) => (`07-${i < 10 ? '0' + i : i}`)),
      datasets: [
        {
          label: "Cost Per SQL",
          fill: "start",
          data: [
            500,
            800,
            320,
            180,
            240,
            320,
            230,
            650,
            590,
            1200,
            750,
            940,
            1420,
            1200,
            960,
            1450,
            1820,
            2800,
            2102,
            1920,
            3920,
            3202,
            3140,
            2800,
            3200,
            3200,
            3400,
            2910,
            3100,
            4250
          ],
          backgroundColor: "rgba(0,123,255,0.1)",
          borderColor: "rgba(0,123,255,1)",
          pointBackgroundColor: "#ffffff",
          pointHoverBackgroundColor: "rgb(0,123,255)",
          borderWidth: 1.5,
          pointRadius: 0,
          pointHoverRadius: 3
        },
        {
          label: "Net Income Per SQL",
          fill: "start",
          data: [
            380,
            430,
            120,
            230,
            410,
            740,
            472,
            219,
            391,
            229,
            400,
            203,
            301,
            380,
            291,
            620,
            700,
            300,
            630,
            402,
            320,
            380,
            289,
            410,
            300,
            530,
            630,
            720,
            780,
            1200
          ],
          backgroundColor: "rgba(255,65,105,0.1)",
          borderColor: "rgba(255,65,105,1)",
          pointBackgroundColor: "#ffffff",
          pointHoverBackgroundColor: "rgba(255,65,105,1)",
          borderDash: [3, 3],
          borderWidth: 1,
          pointRadius: 0,
          pointHoverRadius: 2,
          pointBorderColor: "rgba(255,65,105,1)"
        }
      ]
    }  
  },
  // ------------------------------------------------------------------------------------
  {
    title: "Cost per Customer",
    chartData: {
      labels: Array.from(new Array(23), (_, i) => (`07-${i < 10 ? '0' + i : i}`)),
      datasets: [
        {
          label: "Cost Per Customer",
          fill: "start",
          data: [
            500,
            800,
            320,
            180,
            240,
            320,
            230,
            650,
            590,
            1200,
            750,
            940,
            1420,
            1200,
            960,
            1450,
            1820,
            2800,
            2102,
            1920,
            3920,
            3202,
            3140,
            2800,
            3200,
            3200,
            3400,
            2910,
            3100,
            4250
          ],
          backgroundColor: "rgba(0,123,255,0.1)",
          borderColor: "rgba(0,123,255,1)",
          pointBackgroundColor: "#ffffff",
          pointHoverBackgroundColor: "rgb(0,123,255)",
          borderWidth: 1.5,
          pointRadius: 0,
          pointHoverRadius: 3
        },
        {
          label: "Net Income Per Customer",
          fill: "start",
          data: [
            380,
            430,
            120,
            230,
            410,
            740,
            472,
            219,
            391,
            229,
            400,
            203,
            301,
            380,
            291,
            620,
            700,
            300,
            630,
            402,
            320,
            380,
            289,
            410,
            300,
            530,
            630,
            720,
            780,
            1200
          ],
          backgroundColor: "rgba(255,65,105,0.1)",
          borderColor: "rgba(255,65,105,1)",
          pointBackgroundColor: "#ffffff",
          pointHoverBackgroundColor: "rgba(255,65,105,1)",
          borderDash: [3, 3],
          borderWidth: 1,
          pointRadius: 0,
          pointHoverRadius: 2,
          pointBorderColor: "rgba(255,65,105,1)"
        }
      ]
    }  
  }

]