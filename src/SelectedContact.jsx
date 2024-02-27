import React, { useState, useEffect } from "react";

const SelectedContact = ({ selectedContactId }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        if (!selectedContactId) {
          return; // If selectedContactId is empty, do not proceed with fetching
        }
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch contact details");
        }
        const contactData = await response.json();
        setContact(contactData);
      } catch (error) {
        console.error("Error fetching contact details:", error);
      }
    };

    fetchContact();
  }, [selectedContactId]);

  return (
    <div>
      {contact ? (
        <div>
          <h2>Contact Details</h2>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </div>
      ) : (
        <p>Loading contact details...</p>
      )}
    </div>
  );
};

export default SelectedContact;
