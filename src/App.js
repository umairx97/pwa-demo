import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>


        {window.location.pathname === "/barcelona" || window.location.pathname === "/madrid" ? <div>
          <h1>Please wait for the app install popup</h1>
        </div> : <> <h1>Select Your Club</h1>
            <div style={{ display: 'flex', width: "30%", justifyContent: "space-evenly", alignItems: "center" }} >
              <div style={{ cursor: 'pointer' }} onClick={() => window.location.replace("/barcelona")}>
                <img src="/barcelona.png" alt="barcelona" height="100" width="100" />
                <h2>Barcelona</h2>
              </div>
              <div style={{ cursor: 'pointer' }} onClick={() => window.location.replace("/madrid")} >
                <img src="/realMadrid128.png" alt="madrid" height="100" width="100" />
                <h2>Madrid</h2>
              </div>

            </div></>}

      </div>
    )
  }
}

export default App
