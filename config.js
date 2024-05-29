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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_43_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA4MixcbiAgICAgICAgMixcbiAgICAgICAgNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxLFxuICAgICAgICAxMTksXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDU5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA1NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MixcbiAgICAgICAgMTM1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM5LFxuICAgICAgICA2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDYwLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwLFxuICAgICAgICA1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDksXG4gICAgICAgIDM1LFxuICAgICAgICAxNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODgsXG4gICAgICAgIDY0LFxuICAgICAgICAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAxOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDY1LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU0LFxuICAgICAgICA1MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2LFxuICAgICAgICA4MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDExLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDY5LFxuICAgICAgICA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwLFxuICAgICAgICA3MCxcbiAgICAgICAgMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVmhyUG9HcmRRNFFmRk9vMWJKSU95dVZHWTJpcUNBSkM5K3hPTUVXRW1zTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOHFPT3QzOWJUUnlodG5tcWItRWJ3Z1wiLFxuICBcInBob25lSWRcIjogXCIyODYyY2M0OC0yYWIwLTQxNWItYTVhOC02OWQxNTllNWZiYmJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzgsXG4gICAgICA4NCxcbiAgICAgIDE3MyxcbiAgICAgIDUsXG4gICAgICAxMDksXG4gICAgICAxOSxcbiAgICAgIDgyLFxuICAgICAgNTQsXG4gICAgICAxNzUsXG4gICAgICA4MyxcbiAgICAgIDEzOSxcbiAgICAgIDUzLFxuICAgICAgODUsXG4gICAgICA0OCxcbiAgICAgIDIyNCxcbiAgICAgIDE5MCxcbiAgICAgIDIxOSxcbiAgICAgIDg3LFxuICAgICAgMjIwLFxuICAgICAgMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMixcbiAgICAgIDIxNyxcbiAgICAgIDEzOCxcbiAgICAgIDEyMixcbiAgICAgIDE2MSxcbiAgICAgIDEzMyxcbiAgICAgIDI0NSxcbiAgICAgIDIwNCxcbiAgICAgIDE2NixcbiAgICAgIDQxLFxuICAgICAgMjUzLFxuICAgICAgMTY0LFxuICAgICAgMzgsXG4gICAgICAyMzgsXG4gICAgICA1NSxcbiAgICAgIDE4NixcbiAgICAgIDIwMCxcbiAgICAgIDE1MSxcbiAgICAgIDEzMCxcbiAgICAgIDE1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ00reWwxRVFtZExkc2dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQmxEamlDUTVKdVdLd3FvdENqNlhkQkZ2U2VFQ3JTaUpKbk5tRkJUME1Caz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpcG9samJNbi94UXRpaGRNQ0VmSFhpWGdadlVvWHo3dnN5ayt4Y1VvYUFhNlRBeUxKT1hWRUVyaVZmMHJDZnM4RmwxVjd1aFpQa28rdXhJMnpMZUJDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5OGp5b2xCTEowejIzOHdjRkhOZmwwNzZsMkdUUmFrOWNsdmc4YjdRSFYvOEQ2Um5YdUk4Zzk3YUxnUWRXM0o1Y0xKQXdNSHVnWDRQalBKd3BRRUxqUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc4NTYyMDIwMzoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTM3NDUyMjQxMDY0MTg2OjI2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzg1NjIwMjAzOjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTcwMDQ1NzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPRnBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9GcC5qc29uIjogIntcImtleURhdGFcIjpcIjE1MjhWU0xFakRrZEV3TkVhOHo4YlV5QlFHdi8zc01wS3QyZ2ZyeUJuZWM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcwMjUyNjIxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPRnEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIvb1NSTlYvR2h0V2dRdmh6dE0vdWl2ZHF1Y0czZ1ZHdFI5YVltUzQ3cjN3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MDI1MjYyMSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzE3MDAwNjU0MTcyXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "Art by Ashley" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Whiz",
  packname: process.env.PACK_NAME || "Whiz",
  botname : process.env.BOT_NAME  || "Whiz",
  ownername:process.env.OWNER_NAME|| "Whiz",


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
  LANG: ( process.env.THEME ||  "Whiz"  ).toUpperCase(),



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
