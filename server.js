require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
app.use(express.json({limit:"20kb"}));
app.use(express.static(path.join(__dirname,"public")));
const allowedAmounts = new Set([500,1000,2500,5000,10000]);
app.get("/api/health",(_req,res)=>res.json({ok:true}));
/* Demo placeholder only. Implement provider checkout and signed webhook
   verification using the payment provider's current official API documentation. */
app.post("/api/create-checkout",(req,res)=>{
  const amount=Number(req.body?.amount);
  if(!Number.isInteger(amount)||!allowedAmounts.has(amount)) return res.status(400).json({error:"Please select a valid donation amount."});
  if(!process.env.PAYMENT_API_KEY||!process.env.PAYMENT_SECRET_KEY) return res.status(503).json({error:"Online donations are not activated. Complete merchant approval and integration first."});
  return res.status(501).json({error:"Payment provider integration is not implemented in this starter."});
});
app.post("/api/contact",(req,res)=>{
 const {name,email,message}=req.body||{};
 if(!String(name||"").trim()||!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(String(email||""))||!String(message||"").trim()) return res.status(400).json({error:"Please provide a valid name, email and message."});
 return res.status(202).json({message:"Demo received; email delivery is not configured yet."});
});
const port=Number(process.env.PORT||3000);
app.listen(port,()=>console.log(`Website running at http://localhost:${port}`));
