import React, { Component } from 'react';
import ReactECharts from 'echarts-for-react';

export class echartsDemo extends Component {
    render() {
        var options = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }]
        };
        var pieoption = {
            series: [
                {
                    name: '面积模式',
                    type: 'pie',
                    radius: [50, 150],
                    center: ['50%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: [
                        {value: 40, name: 'rose 1'},
                        {value: 38, name: 'rose 2'},
                        {value: 32, name: 'rose 3'},
                        {value: 30, name: 'rose 4'},
                        {value: 28, name: 'rose 5'},
                        {value: 26, name: 'rose 6'},
                        {value: 22, name: 'rose 7'},
                        {value: 18, name: 'rose 8'}
                    ]
                }
            ]
        };
        
        return (
            <div>
                <h1>echarts</h1>
                <ReactECharts option={options} style={{width:600,height:300}}/>
                <ReactECharts option={pieoption} style={{width:600,height:500}}/>
            </div>
        )
    }
    componentDidMount() {}
}
