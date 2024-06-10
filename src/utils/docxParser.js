// src/utils/docxParser.js
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';

export const parseDocx = async (file) => {
  const arrayBuffer = await file.arrayBuffer();
  const zip = new PizZip(arrayBuffer);
  const doc = new Docxtemplater(zip);
  const text = doc.getFullText();
  return text;
};

