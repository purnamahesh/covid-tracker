import React, { useEffect, useState } from 'react'
import Papa from 'papaparse'
function DistrictWide() {
    const [district, setdistrict] = useState([])
    var dis = {}
    const getDistrictsWise = async () => {
        const data = await fetch('https://api.covid19india.org/csv/latest/districts.csv')
            .then(res => res.text())
        const val = Papa.parse(data, {
            header: true,
            delimiter: ',',
            newLine: '\n'
        }).data
        console.log(val)
        val.forEach(item => {
            if (item["State"] === undefined) {
                dis[item.State] = [item]
            } else {
                dis[item.State].push(item)
            }
        })
        console.log(dis)
    }
    useEffect(() => {
        getDistrictsWise()
    }, [])
    return (
        <div>

        </div>
    )
}

export default DistrictWide
