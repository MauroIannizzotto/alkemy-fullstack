import React from "react";
import { Link } from "react-router-dom";



export default function LandingPage() {
  return (
    <div>
      <div>
        <h1>Welcome to my virtual wallet</h1>
      </div>
      <Link to="/home">
        <button>Come and See!</button>
      </Link>
    </div>
  );
}