import React, { useState } from "react";
// import axios from "axios";
import axios from "axios";

import "./form.css";
// import { toast } from "react-toastify";

const WaitlistForm = () => { 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
   

    const data = {
      name: name,
      email: email,
    };

    try {
      await axios.post(
        "https://sheet.best/api/sheets/185ca762-742a-4843-ab1d-48cf6d1682e7",
        data
      );
      setIsLoading(false);
      setName("");
      setEmail("");
      alert("You have been added to the waitlist!");

      
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="waitlist-form">
      <label className="form-label">
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-input"
        />
      </label>
      <br />
      <label className="form-label">
        Email:
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form-input"
        />
      </label>
      <br />
      <button type="submit" className="form-button" disabled={isLoading}>
        {isLoading ? "Submitting..." : "Join Waitlist"}
      </button>
    </form>
  );
};

export default WaitlistForm;









