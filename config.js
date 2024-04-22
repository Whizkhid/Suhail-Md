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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254737575014";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_42_04_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDMxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk2LFxuICAgICAgICA5MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDQ0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDI3LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxODUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDUyLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY3LFxuICAgICAgICA2MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEsXG4gICAgICAgIDE5LFxuICAgICAgICA4NixcbiAgICAgICAgMTg1LFxuICAgICAgICA1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc0LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDUyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDk3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDYwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI5LFxuICAgICAgICAxNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY0LFxuICAgICAgICA2MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA0LFxuICAgICAgICA0NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDc1LFxuICAgICAgICAzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4LFxuICAgICAgICA0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MSxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDgxLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0LFxuICAgICAgICA0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NixcbiAgICAgICAgMzEsXG4gICAgICAgIDgwLFxuICAgICAgICAxODQsXG4gICAgICAgIDYyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNixcbiAgICAgICAgODgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyeFVtcVZqOEtsZlpWK3pUYittQVU1SXhKVDBXRGNJaWZFYktYYUpkUzhZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzenNlelZ0U1FUU1RfOU5VdGpObHdRXCIsXG4gIFwicGhvbmVJZFwiOiBcImYyODI0ODYwLThmM2EtNGZjMS04N2FjLWY1ZjUzZjM0Y2NjY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MCxcbiAgICAgIDE2MCxcbiAgICAgIDQ0LFxuICAgICAgNixcbiAgICAgIDEwNCxcbiAgICAgIDI1MSxcbiAgICAgIDkyLFxuICAgICAgNTksXG4gICAgICAyMjcsXG4gICAgICA4MSxcbiAgICAgIDEyMyxcbiAgICAgIDIzOSxcbiAgICAgIDE3MixcbiAgICAgIDE0MSxcbiAgICAgIDMzLFxuICAgICAgNjAsXG4gICAgICAxODUsXG4gICAgICAyMjcsXG4gICAgICAyMDEsXG4gICAgICAxMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzMsXG4gICAgICAxMCxcbiAgICAgIDMxLFxuICAgICAgNDMsXG4gICAgICAxODIsXG4gICAgICAxMjQsXG4gICAgICAxOTYsXG4gICAgICAyMTEsXG4gICAgICA2NSxcbiAgICAgIDEwOCxcbiAgICAgIDU5LFxuICAgICAgMTMxLFxuICAgICAgMjM4LFxuICAgICAgMTg1LFxuICAgICAgMjE3LFxuICAgICAgMTc0LFxuICAgICAgMTgwLFxuICAgICAgOTcsXG4gICAgICAyMjEsXG4gICAgICAxMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWkFOS1ZNQUZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDczNzU3NTAxNDoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMDIwMzEzNjkyODk3NjA6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCIo4oGgwqDigaDil5zigaDigL/igaDil53igaDCoOKBoCnigaDimaHwn42B8J+NgfCfjJpcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOZmNzWDRRMUkyWXNRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIktPNkcwalBIeUpRMDhCU2lEWTg3R2IrU1ltR1AxUDJpYXczaTRHaHFnd1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicUJmNHJDQTc2a1dRRk8yNUIraUl6dXUxWFl1Wm52dkNUM3p1RlNIcDEzazhsT3RtZVkzMS9GQ1ZwT21lWE9HOFV2MmhoUzJESHNOdlYzeTE2Vy9GQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWFF2azdPMHdJNjZjQmlSc0Jac3NvT2RacFlRL1BBZE9GZUVNSHBOaWNLeUt2UDVBTm82d01tUHA4TURGUmw2dHNtcTR6NEg0R2JtUW0yU1hpRGNZamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzM3NTc1MDE0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTM3NjgxNTFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "Art by Piri" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Art by Piri",
  packname: process.env.PACK_NAME || "Art by Piri",
  botname : process.env.BOT_NAME  || "Cillah",
  ownername:process.env.OWNER_NAME|| "Piri",


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
