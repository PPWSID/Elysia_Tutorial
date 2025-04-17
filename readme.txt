# 1 tutorial install :
    - cmd   : powershell -c "irm bun.sh/install.ps1|iex"
    - หากว่าได้ลง Node.js ไว้ก่อนหน้าแล้ว สามารถติดตั้ง Bun ผ่าน Node.js ได้ด้วยคำสั่ง
            : npm install -g bun

# 2 Bun Server : 
    - init : bun init -y
    - package : bun add [{package}] ex. bun add figlet

< ----- Change to TS ------ >

# 3 Elysia Framework : bun add elysia & bun add @elysiajs/swagger

# 4 note.ts :
            - Elysia provides validation for the following properties:
            - params - path parameter
            - query - URL querystring
            - body - request body
            - headers - request headers
            - cookie - cookie
            - response - response body

# Method Component : 
    - .decorate() :  method สำหรับ เพิ่ม property หรือ method เข้าไปใน context ของแต่ละ request ซึ่งทำให้สามารถใช้งานได้ใน route หรือ plugin อื่น ๆ ได้
    - .guard() : ใช้สำหรับการทำ validation และ control access ต่อ request ที่เข้ามา เช่น  
        -   เช็ค token, role, permission   
        -   กรอง request body / headers  
        -   ป้องกันไม่ให้เข้าถึง route ถ้าไม่ผ่านเงื่อนไข
    - .state() : เก็บค่า (state) ที่ใช้ร่วมกันระหว่าง route ต่าง ๆ ภายในแอปของคล้าย global variable
    - .macro() : เครื่องมือสำหรับ สร้าง logic หรือ reusable component ที่สามารถ reuse ได้หลายครั้ง แบบ type-safe
    - .derive()	: ใช้สำหรับ เพิ่มค่าหรือ logic ที่ได้จาก request context เข้ามาในทุกๆ route คล้าย middleware แต่แบบที่ type-safe และสามารถแชร์ค่าภายใน request ได้