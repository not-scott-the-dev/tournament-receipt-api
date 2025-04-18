import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const babelRegister = require('@babel/register');

babelRegister({
  extensions: ['.js', '.jsx'],
  presets: ['@babel/preset-react']
});

import SwadeshiReceipt from './SwadeshiReceipt.jsx'

const app = express();
app.use(express.json());

// Serve static images from /receipts
app.use('/receipts', express.static(path.join(__dirname, 'receipts')));

app.post('/generate-receipt', async (req, res) => {
  const { name, team, players, contact, amount, receiptId, matchDate, matchTime } = req.body;

  const element = React.createElement(SwadeshiReceipt, {
    name, team, players, contact, amount, receiptId, matchDate, matchTime,
  });

  const html = ReactDOMServer.renderToStaticMarkup(element);
  const fullHtml = `
    <html>
      <head><style>body{margin:0;padding:0;background:#222;}</style></head>
      <body>${html}</body>
    </html>
  `;

  // Generate screenshot
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setContent(fullHtml, { waitUntil: 'networkidle0' });

  const fileName = `${receiptId}.png`;
  const filePath = path.join(__dirname, 'receipts', fileName);
  await page.screenshot({ path: filePath, fullPage: true, type: 'png' });
  await browser.close();

  // Send URL of image
  const imageUrl = `${req.protocol}://${req.get('host')}/receipts/${fileName}`;
  res.json({ imageUrl });
});

app.listen(3000, () => console.log('Swadeshi Receipt API running on port 3000'));
