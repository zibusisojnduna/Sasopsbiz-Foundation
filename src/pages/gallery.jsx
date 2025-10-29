import React, { useState } from "react";

export default function Gallery() {
  const images = ["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg"];
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
