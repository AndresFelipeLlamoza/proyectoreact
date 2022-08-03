import React from 'react'

  function Video() {
    return (
        <>
        <div style={{backgroundColor: '#000C18'}}>
            <h1 style={{ color: 'white', textAlign: 'center' }}>Trailer del dia</h1>
            <br></br>
            <iframe style={{ marginLeft: '32%', marginBottom: '60px', marginTop: '50px' }} width="560" height="315" src="https://www.youtube.com/embed/4hr5WAA3guY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </>
      );
  }

export default Video ;