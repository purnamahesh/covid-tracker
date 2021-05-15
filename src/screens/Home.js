import React from 'react'
import StateWide from '../components/StateWide'
import LineGraph from '../components/LineGraph'

function Home({ national, states, total }) {
    const labels = national.map(item => item.Date)
    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="col-md-6">
                    <StateWide states={states} total={total} />
                </div>
                <div className="col-md-6">
                    <LineGraph lables={labels} label="Daily Confirmed" data={national.map(item => item["Daily Confirmed"])} color="red" classN="graph" />
                    <LineGraph lables={labels} label="Daily Deceased" data={national.map(item => item["Daily Deceased"])} color="brown" classN="graph" />
                    <LineGraph lables={labels} label="Daily Recovered" data={national.map(item => item["Daily Recovered"])} color="green" classN="graph" />
                    <LineGraph lables={labels} label="Total Confirmed" data={national.map(item => item["Total Confirmed"])} color="crimson" classN="graph" />
                    <LineGraph lables={labels} label="Total Deceased" data={national.map(item => item["Total Deceased"])} color="darkred" classN="graph" />
                    <LineGraph lables={labels} label="Total Recovered" data={national.map(item => item["Total Recovered"])} color="teal" classN="graph" />
                </div>
            </div>
        </div>
    )
}

export default Home