# 1 tutorial install :
    - cmd   : powershell -c "irm bun.sh/install.ps1|iex"
    - หากว่าได้ลง Node.js ไว้ก่อนหน้าแล้ว สามารถติดตั้ง Bun ผ่าน Node.js ได้ด้วยคำสั่ง
            : npm install -g bun

# 2 Bun Server : 
    - init : bun init -y
    - package : bun add [{package}] ex. bun add figlet
    