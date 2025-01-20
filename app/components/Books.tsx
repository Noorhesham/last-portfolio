import React, { useState } from "react";
import "../books.scss";

const MoleskineNotebooks = () => {
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);
  const bookTitles = [
    "LeetCode problems",
    "frontend updates",
    "backend Node.js",
    "AI",
  ];

  return (
    <div className="main-content relative overflow-hidden grid grid-cols-4">
      {bookTitles.map((title, index) => (
        <div
          key={index}
          className="moleskine-wrapper"
          onMouseEnter={() => setHoveredBook(index)}
          onMouseLeave={() => setHoveredBook(null)}
        >
          <div
            className="moleskine-notebook"
            style={{
              zIndex: hoveredBook === index ? 10 : 1, // Bring the hovered book to the front
            }}
          >
            <div className={`notebook-cover ${getColor(index)}`}>
              <div className="notebook-skin">{title.slice(0,9)}..</div>
            </div>
            <div className="notebook-page">
              <h4 className=" text-xs note-title text-wrap">{title}</h4> {/* Display the corresponding study topic */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Helper function to assign colors to books
  function getColor(index: number): string {
    const colors = ["", "blue", "yellow", "green"];
    return colors[index] || ""; // Returns the corresponding color based on the index
  }
};

export default MoleskineNotebooks;
