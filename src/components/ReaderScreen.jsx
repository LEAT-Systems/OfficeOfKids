import React from "react";
import "../style/reader/ReaderScreen.css";

const data = [
  {
    id: 1,
    title: "Alice in Wonderland",
    author: "Wade Warren",
    chapters: [],
  },
];

function ReaderScreen() {
  return (
    <>
      <div className="container mx-auto">
        {data.map((item) => (
          <div>
            <div>
              <h2>Story name- <span>{item.title}</span></h2>
			  <div>
				  
			  </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ReaderScreen;
