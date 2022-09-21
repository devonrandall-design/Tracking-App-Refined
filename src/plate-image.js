import React from 'react'

export default function StyledPlate({bar, style}) {

  const styled45 = <svg style={style} className={`style-${bar}`} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 120"><defs><linearGradient id="a" x1="4.87" y1="15.87" x2="5.15" y2="112.42" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#53c0a6"/><stop offset="1" stop-color="#247461"/></linearGradient><linearGradient id="b" x1="5.03" y1="110.73" x2="5.09" y2="130.64" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#247461"/><stop offset=".4" stop-color="#175b49"/></linearGradient></defs><path style={{fill: `url(#a)`}} d="M0 19.88h10v80.23H0z"/><path d="M6.76 120H3.24a1.93 1.93 0 0 1-1.93-1.79L0 100.12h10l-1.31 18.09A1.93 1.93 0 0 1 6.76 120z" style={{fill:`url(#b)`}}/><path d="M3.24 0h3.52a1.93 1.93 0 0 1 1.93 1.79L10 19.88H0L1.31 1.79A1.93 1.93 0 0 1 3.24 0z" style={{fill:`#79cbba`}}/></svg>;


  const styled35 = <svg style={style} className={`style-${bar}`} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 105"><path style={{fill:`#53c0a6`}} d="M0 15h10v75H0z"/><path d="M3.24 0h3.52a1.79 1.79 0 0 1 1.93 1.35L10 15H0L1.31 1.35A1.79 1.79 0 0 1 3.24 0z" style={{fill:`#79cbba`}}/><path d="M6.76 105H3.24a1.79 1.79 0 0 1-1.93-1.35L0 90h10l-1.31 13.65A1.79 1.79 0 0 1 6.76 105z" style={{fill:`#247461`}}/></svg>;

  const styled25 = <svg style={style} className={`style-${bar}`} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 85"><path style={{fill:`#53c0a6`}} d="M0 12h10v61H0z"/><path d="M3.24 0h3.52c1 0 1.86.47 1.93 1.08L10 12H0L1.31 1.08C1.38.47 2.22 0 3.24 0z" style={{fill:`#79cbba`}}/><path d="M6.76 85H3.24c-1 0-1.86-.47-1.93-1.08L0 73h10L8.69 83.92c-.07.61-.91 1.08-1.93 1.08z" style={{fill:`#247461`}}/></svg>;

  const styled10 = <svg style={style} className={`style-${bar}`} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 50"><path style={{fill:`#53c0a6`}} d="M0 6.69h8v36.62H0z"/><path d="M8 6.69H0l1-6A.79.79 0 0 1 1.74 0H6.2a.83.83 0 0 1 .8.71z" style={{fill:`#79cbba`}}/><path d="M0 43.31h8l-1 6a.79.79 0 0 1-.77.65H1.8a.83.83 0 0 1-.8-.67z" style={{fill:`#247461`}}/></svg>

  const styled5 = <svg style={style} className={`style-${bar}`} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 21.48"><path style={{fill:`#53c0a6`}} d="M2.5 2.88h5v15.73h-5z"/><path d="M7.5 2.88h-5l.61-2.6A.47.47 0 0 1 3.59 0h2.79a.51.51 0 0 1 .52.3z" style={{fill:`#79cbba`}}/><path d="M2.5 18.61h5l-.61 2.59a.47.47 0 0 1-.48.28H3.62a.51.51 0 0 1-.52-.3z" style={{fill:`#247461`}}/></svg>

  return ( 
    <>
  {bar === 45 ? styled45 : bar === 35 ? styled35 : bar === 25 ? styled25 : bar === 10 ? styled10 : styled5} 
  </>
  )
  
}