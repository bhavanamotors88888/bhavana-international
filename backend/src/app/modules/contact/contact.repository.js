import { query } from '../../database/db.config.js';

export const saveContactInquiry = async (contactData) => {
  const { name, email, phone, company, country, message } = contactData;
  
  const insertQuery = `
    INSERT INTO contact_inquiries (name, email, phone, company, country, message)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  
  const values = [
    name, 
    email, 
    phone || null, 
    company || null, 
    country || null, 
    message
  ];
  
  const result = await query(insertQuery, values);
  return result.rows[0];
};
