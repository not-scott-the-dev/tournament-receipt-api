import React from 'react';
import QRCode from 'react-qr-code';

const SwadeshiReceipt = ({ name, team, players, contact, amount, receiptId, matchDate, matchTime }) => {
  const qrValue = `ReceiptID:${receiptId}|Name:${name}|Team:${team}|Contact:${contact}`;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>SWADESHI LAN TOURNAMENT RECEIPT</h1>
        <h3 style={styles.subtitle}>Swadeshi eSports</h3>
      </div>

      <div style={styles.body}>
        <div style={styles.details}>
          <p><strong>Participant Name:</strong> {name}</p>
          <p><strong>Team Name:</strong> {team}</p>

          <div style={styles.players}>
            <strong>Players:</strong>
            <ul>
              {players.map((player, index) => (
                <li key={index}>{player}</li>
              ))}
            </ul>
          </div>

          <p><strong>Contact Number:</strong> {contact}</p>
          <p><strong>Amount Paid:</strong> ₹{amount}</p>
          <p><strong>Receipt ID:</strong> {receiptId}</p>

          <div style={styles.matchInfo}>
            <p><strong>Match Date:</strong> {matchDate}</p>
            <p><strong>Match Time:</strong> {matchTime}</p>
          </div>
        </div>

        <div style={styles.qrCode}>
          <QRCode value={qrValue} size={150} />
          <p style={styles.qrText}>Show this QR code at the LAN venue</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, #6a1b9a, #3949ab)',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    padding: '40px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '20px',
    fontWeight: 'lighter',
    marginTop: '5px',
  },
  body: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '900px',
  },
  details: {
    flex: 1,
    fontSize: '18px',
  },
  players: {
    marginTop: '10px',
  },
  matchInfo: {
    marginTop: '20px',
    fontSize: '16px',
  },
  qrCode: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '20px',
  },
  qrText: {
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '14px',
    color: '#e3e3e3',
  },
};

export default SwadeshiReceipt;
