async function getAllAnimals(name) {
  const apiKey = "pmpzInpQCz4k79ACCKhVTHmJ7SluqBBOyxy0xWPT";
  let offset = 0;
  let allAnimals = [];
  let hasMore = true;

  try {
    while (hasMore) {
      console.log(`กำลังดึงข้อมูลหน้าที่มี offset: ${offset}...`);

      const response = await fetch(
        `https://api.api-ninjas.com/v1/animals?name=${name}&offset=${offset}`,
        {
          headers: { "X-Api-Key": "pmpzInpQCz4k79ACCKhVTHmJ7SluqBBOyxy0xWPT" },
        },
      );

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();

      // เช็คว่ามีข้อมูลใหม่มาจริงไหม และไม่ให้รันเกิน 2 รอบ (เพราะ API จำกัด offset)
      if (data.length > 0 && offset < 40) {
        allAnimals.push(...data);
        offset += 20; // ปรับตามความเหมาะสม
      } else {
        hasMore = false;
      }
    }

    console.log(`พบสัตว์ทั้งหมด ${allAnimals.length} รายการ:`, allAnimals);
  } catch (error) {
    console.error("เกิดข้อผิดพลาด:", error.message);
  }
}

getAllAnimals("Lion");
