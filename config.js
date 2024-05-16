const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Suhail:suhail@cluster0.t8ye2qn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254754351001";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_38_05_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODUsXG4gICAgICAgIDQzLFxuICAgICAgICA0MixcbiAgICAgICAgNixcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDQwLFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzLFxuICAgICAgICAwLFxuICAgICAgICA1NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDg1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOCxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTksXG4gICAgICAgIDc2LFxuICAgICAgICAzNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5NixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDcwLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTExLFxuICAgICAgICA2NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDksXG4gICAgICAgIDUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMixcbiAgICAgICAgNSxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MixcbiAgICAgICAgMzksXG4gICAgICAgIDcyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJic1NjYS9YM3BFOTJiQTNGdGYvQ0NYWklMcGJ2cVp5UER0TjJwTEJGOGJzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc1NDM1MTAwMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkM2RDJDMDg1QTcwREFCQTJBNkY2NEVDMTExM0U2REVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1ODQ4NzE4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzU0MzUxMDAxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwNzIxQzc0NDVCRTY3OEQ4Qjg1QTlDMThDMzA1OUVENFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTU4NDg3MThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUXVzaWZTVmNUVldRTTZXN3BiSXY0QVwiLFxuICBcInBob25lSWRcIjogXCJiMjRmMDk1OS05NzIyLTQ2YTgtYTIxMi02ZTVmODAzOTQyZDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI1LFxuICAgICAgMTQsXG4gICAgICA2MixcbiAgICAgIDUwLFxuICAgICAgMjUwLFxuICAgICAgODAsXG4gICAgICA1NSxcbiAgICAgIDEyNyxcbiAgICAgIDI5LFxuICAgICAgMTc5LFxuICAgICAgMjQ2LFxuICAgICAgMjQ2LFxuICAgICAgMjA3LFxuICAgICAgMjI3LFxuICAgICAgNCxcbiAgICAgIDY1LFxuICAgICAgMTgzLFxuICAgICAgNDYsXG4gICAgICAzOSxcbiAgICAgIDY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU2LFxuICAgICAgMjI4LFxuICAgICAgMTQxLFxuICAgICAgNTgsXG4gICAgICAyNTEsXG4gICAgICAxMTgsXG4gICAgICAyMDksXG4gICAgICAyLFxuICAgICAgMTM3LFxuICAgICAgMjA4LFxuICAgICAgNTksXG4gICAgICAyMjIsXG4gICAgICA1MSxcbiAgICAgIDIwNCxcbiAgICAgIDI0MixcbiAgICAgIDIzMyxcbiAgICAgIDE1LFxuICAgICAgMTI2LFxuICAgICAgMzQsXG4gICAgICAyMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWFFQTjFFNUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc1NDM1MTAwMTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTMwMjU5NDM0NzgzMjA6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJQaMOrc3TDunMgIEdAbMOkeHnwn5KkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0QyM0pFSEVJYU1sN0lHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKR2hqallZaWxXRTdGRnZodXZNdjdFdktGaEFRaDJRTWlOcHpTalVJTEI4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInY3MUJ3MXE3RDJ3cDVzQTF0SFJ2YUZHQlplc0xTbTVOVmZ5SHE0WkRVdm0vV1djL2lKcEVjdnJwMHJnaldPM0MvRjFQQkxDbVc5MzlBZEdraUpZY0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjJGdWoybGYxa2p3ZVZFU3JPZmxkQ1BTcjJLU2l5Vm1HNHEvNjBBWFRUUlpHaTM3UVJmZEdFVENxb1lQdzBmQk1jaEpGYUZraUtMYTFyZHVWekp6cmdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc1NDM1MTAwMTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTU4NDg3MTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBSkNcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFKQy5qc29uIjogIntcImtleURhdGFcIjpcIm5xK2dWQlBWcm45emVJTkttTktnVjNSaUpOYU53RG41NFVZNy8zR2Y5ajA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkxNjIyMjMwNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE1ODQ2MDc4NTExXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "Art by Ashley" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Galaxy production",
  packname: process.env.PACK_NAME || "Galaxy production",
  botname : process.env.BOT_NAME  || "Galaxy bot",
  ownername:process.env.OWNER_NAME|| "Phestus Galaxy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Phestus Galaxy"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
