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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_54_05_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMixcbiAgICAgICAgNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzksXG4gICAgICAgIDM1LFxuICAgICAgICA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMTM1LFxuICAgICAgICA5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDc5LFxuICAgICAgICA4MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA2LFxuICAgICAgICAzLFxuICAgICAgICAxODksXG4gICAgICAgIDI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNzUsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDY5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MixcbiAgICAgICAgNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyNSxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDY2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5LFxuICAgICAgICAxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTMzLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NixcbiAgICAgICAgMTk1LFxuICAgICAgICA5MCxcbiAgICAgICAgNzksXG4gICAgICAgIDMsXG4gICAgICAgIDQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDMzLFxuICAgICAgICA0NSxcbiAgICAgICAgODksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODYsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDcxLFxuICAgICAgICA2NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNyxcbiAgICAgICAgOTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNjUsXG4gICAgICAgIDAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNixcbiAgICAgICAgMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIitlOTlvN0dEdEk2RHZ4eWx5dVNWV0d1a1o0T2RGdDJSL0lhalFXb1YwOU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzU0MzUxMDAxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0MjY5NTg5N0ExOTUxNTk1MDFDMzkzN0IzQzE2NUFDRVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTU4NDYwODNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaGJHX1o3OTVTejIxUGMyLXRaUlE0UVwiLFxuICBcInBob25lSWRcIjogXCI2YWVkYWUyOC0xMTJhLTRhMWUtYmJjMC1lMzdkNWEwMzVhNTZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc1LFxuICAgICAgMTI5LFxuICAgICAgMTc5LFxuICAgICAgOTAsXG4gICAgICAyNDEsXG4gICAgICA4NixcbiAgICAgIDEyNyxcbiAgICAgIDI1NCxcbiAgICAgIDEzNCxcbiAgICAgIDE4MCxcbiAgICAgIDQxLFxuICAgICAgMTUwLFxuICAgICAgNDQsXG4gICAgICAyMixcbiAgICAgIDc0LFxuICAgICAgMTM2LFxuICAgICAgMjQ5LFxuICAgICAgMTAsXG4gICAgICA1MixcbiAgICAgIDM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDE4MSxcbiAgICAgIDIyMixcbiAgICAgIDEyMixcbiAgICAgIDIzLFxuICAgICAgMjM4LFxuICAgICAgMTUxLFxuICAgICAgMTU4LFxuICAgICAgMTM1LFxuICAgICAgMTE1LFxuICAgICAgMzksXG4gICAgICA2OCxcbiAgICAgIDIzMixcbiAgICAgIDg1LFxuICAgICAgMjIzLFxuICAgICAgMyxcbiAgICAgIDExMyxcbiAgICAgIDEzLFxuICAgICAgNyxcbiAgICAgIDE5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYNjVWQVA3Q1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzU0MzUxMDAxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MzAyNTk0MzQ3ODMyMDoxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlBow6tzdMO6cyAgR0Bsw6R4efCfkqRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPRDIzSkVIRUxqM2xySUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpHaGpqWVlpbFdFN0ZGdmh1dk12N0V2S0ZoQVFoMlFNaU5welNqVUlMQjg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWWVGUUIvOGtCQW1QaGM3V1V5UURydW5CUFBad2V1c3FqNTUwTVZsQUlUMm0yWncydGVLc2hBaGxrb3ZKWXg4VUFuVCtBZXVHNGEzMDZ2ZlNqWk1uQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNktRL0xPUFhWZkEyaEFGVjRHU3R1UjBrUlFteGYwWndLc09VcTZOWC9Pb2JzaTZhbXUxcWI2MEo5ekNoeWJkWGt0RHlFRjVKSUZwZTJ0Q2lUZ3JSaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzU0MzUxMDAxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMzFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTg0NjA3OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFKQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQUpDLmpzb24iOiAie1wia2V5RGF0YVwiOlwibnErZ1ZCUFZybjl6ZUlOS21OS2dWM1JpSk5hTndEbjU0VVk3LzNHZjlqMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTE2MjIyMzA0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTU4NDYwNzg1MTFcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "2", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "Art by Ashley" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Art by Ashley",
  packname: process.env.PACK_NAME || "Art by Ashley",
  botname : process.env.BOT_NAME  || "Ashley",
  ownername:process.env.OWNER_NAME|| "Ashley",


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
  LANG: ( process.env.THEME ||  "Ms Beautiful"  ).toUpperCase(),



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
