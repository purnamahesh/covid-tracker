import { Line } from 'react-chartjs-2'
import React from 'react'
import '../app.css'
function LineGraph({ lables, label, data, color, classN }) {
    return (
        <div className="row m-0">
            <div className="col">
                <Line className={classN}
                    data={{

                        labels: lables,
                        datasets: [
                            {
                                label: label,
                                data: data,
                                borderWidth: 1,
                                color: 'white',
                                borderColor: color,
                            },
                        ]
                    }}
                    options={{
                        maintainAspectRatio: false,
                        /*responsive: true, */
                        layout: {
                            padding: 40
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default LineGraph;