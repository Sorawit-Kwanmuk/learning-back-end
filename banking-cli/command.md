- `npm init -y`
- `npm i sequelize mysql2 express`
- `sequelize init:config` จะได้ไฟล์ config.jon ในโฟลเดอร์ config
- `แก้ไข development`แก้ไขชื่อ database และ password ใน config/config.json
- `sequelize init:config`
- `sequelize db:create` สร้าง database ใน mysql ตามข้อมูลจากไฟล์ config.json
- `sequelize db:drop`
- `sequelize init:models` ได้ไฟล์ models ในโฟลเดอร์ models
