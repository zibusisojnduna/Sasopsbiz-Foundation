import React, { useState } from "react";
import img1 from "../assets/491434202_18050422067360151_960801356610639074_n.jpg"
import img2 from "../assets/491441343_18050435921360151_4236100648528192986_n.jpg"
import img3 from "../assets/491444179_18050429720360151_1844065974353231688_n.jpg"
import img4 from "../assets/491444833_18050429702360151_6235049835676073496_n.jpg" 
import img5 from "../assets/491446156_18050429711360151_4847565270394677344_n.jpg"
import img6 from "../assets/491450467_18050435930360151_2762706605378776026_n.jpg"
import img7 from "../assets/IMG_2693.JPG"
import img8 from "../assets/IMG-20200708-WA0093-e1594832326811.jpg"
import img9 from "../assets/tamarcus-brown-29pFbI_D1Sc-unsplash.jpg"

export default function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const [selected, setSelected] = useState(null);

  return (
    <section>
        <title>Gallery</title>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {images.map((src, index) => (
          <img 
            key={index} 
            src={src} 
            alt={`gallery-${index}`} 
            style={{ width: "100%", cursor: "pointer", borderRadius: "8px" }}
            onClick={() => setSelected(src)}
          />
        ))}
      </div>

      {selected && (
        <div 
          onClick={() => setSelected(null)} 
          style={{
            position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.8)", display: "flex", justifyContent: "center", alignItems: "center"
          }}
        >
          <img src={selected} alt="enlarged" style={{ maxHeight: "80%", maxWidth: "80%" }} />
        </div>
      )}
    </section>
  );
}
