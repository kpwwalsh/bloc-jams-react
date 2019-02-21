import React from 'react';

const Landing = () => (
  <div className="font-weight-bold">
  <section className="landing">
       <h1 className="hero-title">Turn the music up!</h1>
    
    <section className="card-group">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title"><large class="text-warning">Choose your music</large></h2>
          <p className="card-text"><medium class="text-info">The world is full of music; why should you have to listen to music that someone else chose?</medium></p>
        </div>
      </div>
      <div className="card">
        <h2 className="card-title"><large class="text-warning">Unlimited, streaming, ad-free</large></h2>
        <p className="card-text"><medium class="text-info">No arbitrary limits. No distractions.</medium></p>
      </div> 
      <div className="card">
        <h2 className="card-title"><large class="text-warning">Mobile enabled</large></h2>     
        <p className="card-text"><medium class="text-info">Listen to your music on the go. This streaming service is available on all mobile platforms.</medium></p>
      </div>
    </section>
  </section>
  </div>

);


export default Landing;