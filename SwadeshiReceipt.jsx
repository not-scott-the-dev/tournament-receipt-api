import React from "react";
import QRCode from "react-qr-code";

const SwadeshiReceipt = ({ name, team, players, contact, amount, receiptId, matchDate, matchTime }) => {
  const qrValue = `ReceiptID:${receiptId}|Name:${name}|Team:${team}|Contact:${contact}`;
  return (
    <div style={{
      background: "linear-gradient(135deg, #6a1b9a, #3949ab)",
      color: "#fff",
      fontFamily: "Arial",
      padding: 40,
      borderRadius: 20,
      width: "800px",
      margin: "auto"
    }}>
      <h1 style={{ fontSize: 32 }}>SWADESHI LAN TOURNAMENT RECEIPT</h1>
      <h3>Swadeshi eSports</h3>
      <p><strong>Participant Name:</strong> {name}</p>
      <p><strong>Team Name:</strong> {team}</p>
      <p><strong>Players:</strong></p>
      <ul>
        {players.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
      <p><strong>Contact:</strong> {contact}</p>
      <p><strong>Amount Paid:</strong> ₹{amount}</p>
      <p><strong>Receipt ID:</strong> {receiptId}</p>
      <p><strong>Match Date:</strong> {matchDate}</p>
      <p><strong>Match Time:</strong> {matchTime}</p>
      <div style={{ marginTop: 20 }}>
        <QRCode value={qrValue} size={100} />
        <p style={{ fontSize: 12, color: "#ddd" }}>Show this QR at the venue</p>
      </div>
    </div>
  );
};

export default SwadeshiReceipt;
