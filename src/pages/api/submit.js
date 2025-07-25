// This line is crucial! It tells Astro to keep this as a server-rendered endpoint.
export const prerender = false;

import { google } from 'googleapis';

export async function POST({ request }) {
  try {
    const body = await request.text();
    if (!body) {
      throw new Error("Request body is empty.");
    }
    const data = JSON.parse(body);

    // Use a template literal to correctly handle the multi-line private key
    // from the environment variable. This is the robust way to handle it.
    const privateKey = `${import.meta.env.GOOGLE_PRIVATE_KEY}`;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: import.meta.env.GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const spreadsheetId = import.meta.env.GOOGLE_SHEET_ID;
    const range = 'Sheet1!A:L';

    const values = [
      [
        data.characterName,
        data.pronouns,
        data.age,
        data.originUniverse,
        data.personnel,
        data.department,
        data.jobTitle,
        data.danceMove,
        data.superAbility,
        data.alignment,
        new Date().toISOString()
      ],
    ];

    const resource = {
      values,
    };

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      resource,
    });

    return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: `Failed to submit form: ${error.message}` }), { status: 500 });
  }
}
