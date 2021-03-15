// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    fetch('/prog-lang').then(response => response.json())
    .then((languageVotes) => {
        const data = new google.visualization.DataTable();
        data.addColumn('string', 'Language');
        data.addColumn('number', 'Votes');
        Object.keys(languageVotes).forEach((language) => {
        data.addRow([language, languageVotes[language]]);
        });
  
    const options = {
        'width':700,
        'height':350,
        'is3D':false,
        'backgroundColor': {
            'fill': '#FF0000',
            'fillOpacity': 0,
            'stroke':'#000000'
        },
        'legend':{
            'textStyle':{
                'color': '#FFFFFF',
                'fontName': 'Rubik',
                'fontSize': 16,
                'bold': true
            },
        'alignment':'center'
        },
        'pieHole':0.4,
        'colors':["#86f9e5","#0d3b66","#a09ebb","#f8e16c","#fb8f67","#a40e4c","#963484"],
        'pieSliceTextStyle':{
            'color':'#000',
            'fontName': 'Rubik',
            'fontSize': 16,
            'bold': true
        },
        'pieSliceBorderColor':'none',
        'chartArea':{
            'width':'100%',
            'height':'100%'
        }
    };
   
  
    const chart = new google.visualization.PieChart(
        document.getElementById('cont-chart'));
    chart.draw(data, options);
  });
}

async function getQuote(){
    const responseFromServer = await fetch('/hello-world');
    const quotes = await responseFromServer.json();

    const quote = quotes[Math.floor(Math.random() * quotes.length)];

   
    const dateContainer = document.getElementById('favorite-quote');
    dateContainer.innerText = quote;
}

