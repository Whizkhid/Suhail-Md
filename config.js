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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_31_05_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDAsXG4gICAgICAgIDM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDQxLFxuICAgICAgICAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc5LFxuICAgICAgICA5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQzLFxuICAgICAgICA0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDM0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE2MixcbiAgICAgICAgNDAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTkxLFxuICAgICAgICA5MixcbiAgICAgICAgMTM0LFxuICAgICAgICA4MixcbiAgICAgICAgNixcbiAgICAgICAgMjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDI2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNixcbiAgICAgICAgODIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNSxcbiAgICAgICAgMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDg1LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDg3LFxuICAgICAgICAyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTksXG4gICAgICAgIDU3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDMxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4MixcbiAgICAgICAgMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODYsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDQwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgOTYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzEsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm9QZU1lK3d3MjZ0M1VSdFBPdHhFeCt4WFJ2OXhtQ0lmaFlDUlNIeG12S1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9XRzNudVFOUXJtamxCczFVWHVCbVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYTQ2YTQ5MTYtOWIzOC00ZWU3LWFkNTItMjRjNDZmODQzM2MxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNSxcbiAgICAgIDExMixcbiAgICAgIDEwOSxcbiAgICAgIDE1OCxcbiAgICAgIDE1NixcbiAgICAgIDEyNixcbiAgICAgIDE2OSxcbiAgICAgIDExMSxcbiAgICAgIDIyNyxcbiAgICAgIDE4OSxcbiAgICAgIDEyNSxcbiAgICAgIDE3MSxcbiAgICAgIDU1LFxuICAgICAgOTYsXG4gICAgICAyOSxcbiAgICAgIDM0LFxuICAgICAgMjQ0LFxuICAgICAgMTAwLFxuICAgICAgMjAsXG4gICAgICAxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgMzYsXG4gICAgICAzNyxcbiAgICAgIDUzLFxuICAgICAgMjU0LFxuICAgICAgMTAsXG4gICAgICAxMjEsXG4gICAgICA1NCxcbiAgICAgIDEyMyxcbiAgICAgIDQzLFxuICAgICAgNDUsXG4gICAgICAyMDMsXG4gICAgICAxNTQsXG4gICAgICAxMTMsXG4gICAgICAyMDgsXG4gICAgICA3NCxcbiAgICAgIDE4LFxuICAgICAgMTMwLFxuICAgICAgMTUyLFxuICAgICAgMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNMnlsMUVRa2Myc3NnWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJsRGppQ1E1SnVXS3dxb3RDajZYZEJGdlNlRUNyU2lKSm5ObUZCVDBNQms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSWJNSC9RbHdhZzZGYVJnMmczNk1vcGJIeDBsczFXV1BtUkNXNnNUL1VwOVBqSjI5TWl2UGxubVZBZUY0cTMyUUtVK2VlTG13YnM4YnNLanJrMVhCQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSWFGSUJQWStJanp3dnFJaUl5TDdJUERkR0NlajNzQUxRdnFaWWk1T3V1bEl6NFluWUpqSEZhU2hscUhIQ0oyek8zZ0dsRS9BcXh1L0RJc09mazMxQXc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3ODU2MjAyMDM6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzNzQ1MjI0MTA2NDE4NjoyNEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJCdHJcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc4NTYyMDIwMzoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE2MjAxMTA4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT0ZwXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPRnAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxNTI4VlNMRWpEa2RFd05FYTh6OGJVeUJRR3YvM3NNcEt0MmdmcnlCbmVjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MDI1MjYyMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE1NzAwNDcxMjYxXCJ9Igp9" ;


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
