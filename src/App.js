import './lux.css'
import './app.css'
import Navbar from './components/Navbar'
import DistrictWide from './screens/DistrictWide'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import Papa from 'papaparse'
import React, { useState, useEffect } from 'react'

function App() {
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
      /* if (item["State"] === undefined) {
        dis[item["State"]] = [item]
      } else {
        dis[item["State"]].push(item)
      } */
      console.log(item)
    })
    //console.log(dis)
  }
  const [national, setNational] = useState([])
  const [total, settotal] = useState([])
  const [states, setStates] = useState([])

  const getNationalWise = async () => {
    const data = await fetch('https://api.covid19india.org/csv/latest/case_time_series.csv')
      .then(res => res.text())
    const val = Papa.parse(data, {
      header: true,
      delimiter: ',',
      newLine: '\n'
    }).data
    setNational(val)
    /* console.log(val) */
  }
  const getStateWise = async () => {
    const data = await fetch('https://api.covid19india.org/csv/latest/state_wise.csv')
      .then(res => res.text())
    const val = Papa.parse(data, {
      header: true,
      delimiter: ',',
      newLine: '\n'
    }).data
    val.pop()
    settotal(val.shift())
    setStates(val)
    /* console.log(val) */
  }

  useEffect(() => {
    if (national !== [])
      getNationalWise()
    if (states !== [])
      getStateWise()
    getDistrictsWise()
  }, [])


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home national={national} states={states} total={total} />
          </Route>
          <Route path="/districts">
            <DistrictWide /* states={states} */ />
          </Route>
          <Route path="/about" component={About} />
        </Switch>

      </div>
    </Router>
  );
}


export default App;
