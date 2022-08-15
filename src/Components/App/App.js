import React from 'react'
import MyTextarea from '../MyTextarea/MyTextarea'
import Results from '../Results/Results'

export default function App() {
  return (
    <main>
    <section className="main-section container py-5">
    <h6 className="text-uppercase py-2 py ">in case  you are not familiar with markdown you should read 
    
    <a href="https://www.markdownguide.org/cheat-sheet/" target="_blank">this</a> documentations.</h6>
    <div className="row gx-5">
    <div className="col-md-6">
    <MyTextarea/>

    </div>
    <div className="col-md-6">
    <Results/>
    </div>
    </div> 
    </section>
    </main>
  )
}

