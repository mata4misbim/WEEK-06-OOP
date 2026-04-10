const apiKey = "pmpzInpQCz4k79ACCKhVTHmJ7SluqBBOyxy0xWPT";
const url = "https://api.api-ninjas.com/v1/cryptoprice?symbol=LTCBTC";

async function getCrytoPrice() {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("รายละเอียดข้อผิดพลาด:", data);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log("--- LTCBTC Price ---");
    console.log(data);
  } catch (error) {
    console.error("เกิดข้อผิดพลาด:", error.message);
  }
}

getCrytoPrice();
