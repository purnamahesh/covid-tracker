import React, { useState, useEffect } from 'react'
import Papa from 'papaparse'

function Box({ title, val, color }) {
    return (
        <div className="col m-2 card-box p-2" style={{ background: color }}>
            <h6>{title}</h6>
            <br />
            <h3>{val}</h3>
        </div>
    )
}


function StateWide({ states, total }) {
    return (
        <React.Fragment>
            <div className="row mb-5 px-5 text-center">
                <Box color="#ff073a" title="Confirmed" val={total.Confirmed} />
                <Box color="#007bff" title="Active" val={total.Active} />
                <Box color="#28a745" title="Recovered" val={total.Recovered} />
                <Box color="#6c757d" title="Deceased" val={(total.Confirmed - total.Recovered - total.Active).toString()} />
            </div>
            <div className="table-responsive" id="state-wide-table">
                <table className="table table-sm table-striped text-center table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">State</th>
                            <th scope="col">Active</th>
                            <th scope="col">Confirmed</th>
                            <th scope="col">Deaths</th>
                            <th scope="col">Recovered</th>
                            <th scope="col">Deceased</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            states.map(item => (
                                <tr key={item.State}>
                                    <th scope="row">{item.State}</th>
                                    <td>{item.Active}</td>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                    <td>{item.Confirmed - item.Recovered - item.Active}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    )
}

export default StateWide
