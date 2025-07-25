import { google } from 'googleapis';
export { renderers } from '../../renderers.mjs';

const prerender = false;
async function POST({ request }) {
  try {
    const body = await request.text();
    if (!body) {
      throw new Error("Request body is empty.");
    }
    const data = JSON.parse(body);
    const privateKey = `${"-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDR5wdglbwx9WK4\nIFqm2CPiY84YZxS2hMgXTpki09NefdDugYZS4zbu8n3vnzFkoMfYoqob969wqhka\nyfAJ74cwi/40MRPEp6teE81qy9WRJVOvJpu7tXaaOayqYaoJxne8yyZ1+Ju36TVp\nZ0uO6dbTcUMLASuapapJ1+2Uy9LGRtchNuSQu1N5EJYaL++3FowbPjs/SgwJRZfe\nYYEKpKOUng5mFkT1phFrPBJ8u1CIEb2nq423oLwIPUMZod5FckIcfe+xDB1eHvZI\nr8I80CEw+IgZbovYrPsC2pY533m0C6tZHGzHWQvSqY4Xtz99zhsl73n6jasJa4li\nYaLEK4UlAgMBAAECggEAEdTmGArwZ3AYuFqrSNRAzCk9Z25OYKkMFIrNUJudL8BR\ngQmI3z7FOmxoTXSBLjLId3tuJx0WDuSsaE2yci2ilvm1mTp4GvNBiCb3gvSZCpEY\nuF73yO0EC9sNc5YDa3wsTOIXPNtnYyrRKkinrxbndKQBFYy+Zw9e1ZId8U+VctmH\nPZkQBd78/LHQqYFXHwSVfRVaeShap+ddO4vZdaeym1SxkPuWgZYrR2t3Rcccbs/e\nDlc90rt6WcNeKtwxecDOjfFXMvagbE9d5ZTJi/UbEiFZb+VjQjs88JDxF2wF7Ch2\n4iXHu2G/sxUQUi02AaXiY1EMUau9+VeomyHUDBom+wKBgQD95F5Vusz+BYgndAAm\nWvxcbMj7yxsRStAM2zsTjZxL/0TKys1honuMcqEdgqUIZFnapcJgPU8YrOiE8ipF\n911/QJp0mcM4hnrZX+Pxop+XeGsW5hP8KJI63qSSi0b6mNaHyLz7AMe7JR0ZzX7V\nDazUxHvg9ZQxkL5Y5iia0c/ZawKBgQDTpSnHMEiOKR8ed2C0Zh3jLyS7dueCpwIC\nVmUrLvMKct88IGSdeLOeTXmoYlTl/w66a2ahMMf9YHKoHmRtqPMoZZV9g5QOKMjR\nwW2GTvr928E2v04va8DxB0V08JiqIuRBlaFRZcFWtY9sq0MZFLOV06vw/ojKgl9Y\nf5r8URHvrwKBgQDYJL/Ouj3kD++OrumlvZXUVWRxP8LmYMtn9od/qPIjnMkC384j\nTYFi2v+gsOUwlMYOJ0moRul8d09oRwWIFQQK3oPfujuBdrNFNaZHwwuclw6MKwle\nhWegKITwoROnKdCRPmrsQQjIoNr6aYCNfpvhcviHVmp4G+KAqkhtLSuGywKBgQDB\nlhwNpvtmlPRy4Iyi1ZjW2aNGmW8PEYWD79Rf2HTUBNht3c9KPkJFNOZnf3HaYh7t\noxlfrQfwmcymPA5uQ5AOTkSbZsQA44s0WTG+HPX1R5GGaxuvwmbb0GPWn890J7AS\n0TOaCXH7xtxmcIxSH55YGCH4sEkcun1NrIJt8hVu3wKBgQDcuz5QRkuGw4KaQZ6c\nkU311Zz0l4+80P4YLanCvgpnD3cwxWKBJgRPjRfb+dm1d9NEoo/ntnE4LjBH/6Vt\nkyJJkqjLyj238uUaap1boet0exVV+jPJtk9hMOs6gS+JnCWMoglcvZlF6Eb2Medh\nWNTD6soW3cDL0csO4LJIdIIHnA==\n-----END PRIVATE KEY-----\n"}`;
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: "502639255835-compute@developer.gserviceaccount.com",
        private_key: privateKey
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets"
      ]
    });
    const sheets = google.sheets({
      auth,
      version: "v4"
    });
    const spreadsheetId = "1AcwqwbyAlVStO531M-s0Ff9If8dQLXSxkOCVO0sbC8g";
    const range = "Sheet1!A:L";
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
        (/* @__PURE__ */ new Date()).toISOString()
      ]
    ];
    const resource = {
      values
    };
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      resource
    });
    return new Response(JSON.stringify({ message: "Success" }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: `Failed to submit form: ${error.message}` }), { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
