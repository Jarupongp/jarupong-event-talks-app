# Jarupong Event Talks App (Tech Talks 2026) 🎤📱

เว็บแอปพลิเคชันจำลองตารางงานสัมมนาเทคโนโลยี (Tech Talks 2026) ที่พัฒนาด้วย **Vanilla Node.js** (ฝั่ง Backend) และ **HTML, CSS, JavaScript** (ฝั่ง Frontend) โดยไม่ต้องใช้ Framework ภายนอก ทำให้แอปพลิเคชันมีขนาดเล็ก โหลดเร็ว และทำงานได้อย่างมีประสิทธิภาพ

## คุณสมบัติเด่น (Features)
- 📅 **ตารางงานสัมมนาแบบ Dynamic**: ดึงข้อมูลจาก API ของ Backend และแสดงผลงานสัมมนาในแต่ละช่วงเวลาอย่างสวยงาม
- 🔍 **ระบบค้นหาแบบ Real-time**: ค้นหางานสัมมนาตามหมวดหมู่ (Categories) เช่น `frontend`, `python`, `nodejs`, `ai` เป็นต้น
- ☕ **รองรับเวลาพัก**: แสดงช่วงเวลาพัก (เช่น Lunch Break) ในตารางอย่างชัดเจน
- 📱 **Responsive Design**: แสดงผลได้อย่างสวยงามทั้งบนคอมพิวเตอร์ แท็บเล็ต และมือถือ
- ⚡ **Lightweight API**: มี REST API ง่ายๆ สำหรับส่งข้อมูลตารางสัมมนาในรูปแบบ JSON

---

## โครงสร้างโปรเจกต์ (Project Structure)
```text
/
├── server.js          # Node.js Server (จัดการ Routing และ REST API)
├── public/            # โฟลเดอร์เก็บไฟล์ Frontend
│   ├── index.html     # โครงสร้างหน้าเว็บหลัก
│   ├── style.css      # ตกแต่งหน้าตาเว็บสัมมนา (Responsive)
│   └── script.js      # ดึงข้อมูลจาก API และจัดการระบบค้นหา
└── .gitignore         # ไฟล์ระบุสิ่งที่ Git ไม่ต้องติดตาม
```

---

## วิธีการติดตั้งและรันในเครื่องตัวเอง (Getting Started)

### ความต้องการของระบบ (Prerequisites)
- [Node.js](https://nodejs.org/) (แนะนำเวอร์ชัน 16 ขึ้นไป)

### ขั้นตอนการรันแอปพลิเคชัน
1. **ดาวน์โหลดโปรเจกต์** มายังเครื่องของคุณ
2. เปิด Terminal หรือ Command Prompt ในโฟลเดอร์ของโปรเจกต์
3. รันคำสั่งเริ่มเซิร์ฟเวอร์ด้วยคำสั่ง:
   ```bash
   node server.js
   ```
4. เปิดเว็บเบราว์เซอร์แล้วไปที่:
   ```text
   http://localhost:3000
   ```

---

## ข้อมูล API สำหรับนักพัฒนา (API Endpoints)
คุณสามารถดึงข้อมูลตารางงานสัมมนาทั้งหมดได้ผ่าน endpoint นี้:

- **URL:** `/api/talks`
- **Method:** `GET`
- **Response Format:** `JSON`
- **ตัวอย่างการตอบกลับ (Response Example):**
  ```json
  [
    {
      "time": "10:00 AM - 11:00 AM",
      "title": "The Future of JavaScript Frameworks",
      "speakers": ["Jane Doe"],
      "categories": ["javascript", "frontend", "webdev"],
      "duration": "1 hour",
      "description": "A deep dive into the trends and future of modern JavaScript frameworks like React, Vue, and Svelte."
    }
  ]
  ```

---

## เทคโนโลยีที่ใช้ (Tech Stack)
- **Backend:** Node.js (Vanilla HTTP Server)
- **Frontend:** HTML5, CSS3 (Flexbox & Responsive Design), Vanilla JavaScript (ES6)
