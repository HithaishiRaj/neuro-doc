// src/App.js
import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import { parseDocx } from './utils/docxParser';
import { getHighlightedDifferences } from './utils/diffHighlighter';
import './App.css';

const App = () => {
  const [doc1Text, setDoc1Text] = useState('');
  const [doc2Text, setDoc2Text] = useState('');
  const [differences, setDifferences] = useState(null);

  const handleFileUpload = async (file, setText) => {
    const text = await parseDocx(file);
    setText(text);
  };

  const compareDocuments = () => {
    const diff = getHighlightedDifferences(doc1Text, doc2Text);
    setDifferences(diff);
  };

  return (
    <div className="App">
      <h1>DOCX Diff Checker</h1>
      <div className="upload-section">
        <div>
          <h2>Upload Document 1</h2>
          <FileUpload onFileUpload={(file) => handleFileUpload(file, setDoc1Text)} />
        </div>
        <div>
          <h2>Upload Document 2</h2>
          <FileUpload onFileUpload={(file) => handleFileUpload(file, setDoc2Text)} />
        </div>
      </div>
      <button onClick={compareDocuments} disabled={!doc1Text || !doc2Text}>
        Compare Documents
      </button>
      <div className="documents-section">
        <div className="document">
          <h3>Document 1</h3>
          <div>{doc1Text}</div>
        </div>
        <div className="document">
          <h3>Document 2</h3>
          <div>{doc2Text}</div>
        </div>
      </div>
      {differences && (
        <div className="differences-section">
          <h3>Differences</h3>
          <div className="differences">{differences}</div>
        </div>
      )}
    </div>
  );
};

export default App;
