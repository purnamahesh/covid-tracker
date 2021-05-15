import React from 'react'
import { Bar } from 'react-chartjs-2'

function BarGraph({ labels, label, data }) {
    return (
        <Bar className="graph"
            data={{
                labels: labels,
                datasets: [
                    {
                        label: label,
                        data: data,
                        backgroundColor: 'red'
                    },
                ]
            }}
            options={{
                layout: {
                    padding: 40
                }
            }}
        />
    )
}

export default BarGraph
