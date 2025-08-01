import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
  const [selected, setSelected] = useState("book");

  // Conditional rendering using if-else
  let renderComponent;
  if (selected === "book") {
    renderComponent = <BookDetails />;
  } else if (selected === "blog") {
    renderComponent = <BlogDetails />;
  } else {
    renderComponent = <CourseDetails />;
  }

  return (
    <div className="App" style={{ textAlign: "center", padding: "20px" }}>
      <h1>🧠 Blogger App</h1>

      {/* Buttons to select */}
      <button onClick={() => setSelected("book")}>Show Book</button>
      <button onClick={() => setSelected("blog")}>Show Blog</button>
      <button onClick={() => setSelected("course")}>Show Course</button>

      <hr />

      {/* 1️⃣ IF-ELSE rendering (already above) */}
      <h3>1️⃣ Using if-else:</h3>
      {renderComponent}

      <hr />

      {/* 2️⃣ Using Ternary operator */}
      <h3>2️⃣ Using Ternary Operator:</h3>
      {
        selected === "book" ? (
          <BookDetails />
        ) : selected === "blog" ? (
          <BlogDetails />
        ) : (
          <CourseDetails />
        )
      }

      <hr />

      {/* 3️⃣ Using Logical && operator */}
      <h3>3️⃣ Using Logical && operator:</h3>
      {selected === "book" && <BookDetails />}
      {selected === "blog" && <BlogDetails />}
      {selected === "course" && <CourseDetails />}
    </div>
  );
}

export default App;
