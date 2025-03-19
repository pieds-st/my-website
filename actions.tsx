"use server"

export async function submitPhoneNumber(formData: FormData) {
  const phone = formData.get("phone")

  if (!phone || typeof phone !== "string" || !/^\d{10}$/.test(phone)) {
    return {
      success: false,
      message: "Please enter a valid 10-digit phone number",
    }
  }

  try {
    // Here you would add your Google Sheets API integration
    // For example using google-spreadsheet npm package
    const timestamp = new Date().toISOString()

    // Example Google Sheets code (you'll need to add your credentials)
    /*
    const doc = new GoogleSpreadsheet(SHEET_ID);
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY,
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({
      phone: phone,
      timestamp: timestamp
    });
    */

    return {
      success: true,
      message: "Our support team will get in touch with you soon!",
    }
  } catch (error) {
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    }
  }
}

