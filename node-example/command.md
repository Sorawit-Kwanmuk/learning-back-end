- `node ตามด้วยชื่อไฟล์ที่ต้องการรัน` คำสั่งรันไฟล์ที่ต้องการ
- `node` เขียนโค้ดใน terminal เลย แต่จะอยู่แค่ใน terminal เท่านั้นไม่มีการเก็บไว้ในไฟล์
- `npm init` สร้างไฟล์ package.json เพื่อรับความรู้จาก npm โดยการพิมพ์ข้อมูลพื้นฐานของโปรเจค `ห้ามตั้งชื่อโปรเจคตรงกับ library`
- `npm init -y` สร้างไฟล์ package.json โดยเซ็ตค่าพื้นฐานโดยอัตโนมัติ
- `"scripts": { "dev": "node index.js", "test": "echo \"Error: no test specified\" && exit 1" },` เราสามารถสร้างคำสั่งในไฟล์ package.json ได้ "dev": "node index.js" คือสิ่งที่สร้างชึ้นมา
- `npm run dev` dev คือชื่อคำสั่งที่เราสร้างใน script ใน package.json
  ถ้าคำสั่งที่เราสร้าง ชื่อว่า "start": สามารถ npm start ได้เลย ไม่ต้องใช้ run

- `nodemon index.js`
- `npm i express uuid cors dotenv validator` ติดตั้ง ทีละ หลายๆตัว
- `npm i validator@13.0.0` คือสั่งติดตั้งแบบระบุ version
- `npm i -g` ลงแบบ global
- `npm i -g nodemon` nodemon คือรัน file แบบ realtime
- `npm i -D ชื่อlibrary` ลงใน Develop mode ตอนไปทำเป็น production จะไม่เอาไปด้วย
- `$ npm uninstall uuid`
- `npm list`
- `npm list -g` ดูรายการทั้งหมดที่ติดตั้งแบบ global
- `npm ls -g --depth=0` ดูรายการทั้งหมดที่ติดตั้งแบบ global แบบดูชั้นเดียว
- `npn uninstall -g ชื่อlibrary`
- `npn uninstall -D ชื่อlibrary`
- `npx ชื่อlibrary index.js` คือถ้าไม่มี nodemon npx จะไปหาคำสั่งจากอินเทอร์เน็ตมาใช้แค่ครั้งเดียว แต่ไม่ได้ติดตั้งให้
- `npx` คือช่วยให้เราสามารถเรียกใช้ คำสั้ง module โดยไม่ต้องติดตั้ง module นั้นในเครื่องเรา
- `npm update`
  "validator": "^10.7.0" 10 คือ major 7 คือ minor 0 คือ patch คือรุ่นล่าสุด
  ^ update คืออัพเดทรุ่นล่าสุด ถ้าเปลี่ยนแปลงรุ่นล่าสุดจะอัพเดททั้งหมด
  ~ update patch
  > update major ถ้าเปลี่ยนแปลงรุ่น major จะอัพเดททั้งหมด
- `mkdir ชื่อโฟลเดอร์ที่จะสร้าง`
