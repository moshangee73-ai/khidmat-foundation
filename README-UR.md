# Khidmat Foundation Pakistan — ویب سائٹ اسٹارٹر

یہ responsive custom website starter ہے۔ اس میں Home, About, Projects, Donate, Team, Gallery اور Contact شامل ہیں۔

## چلانے کا طریقہ
1. Node.js LTS انسٹال کریں۔
2. اس فولڈر میں `npm install` چلائیں۔
3. `npm run dev` چلائیں۔
4. `http://localhost:3000` کھولیں۔

## اہم حفاظتی نوٹ
یہ starter ابھی حقیقی ادائیگیاں وصول نہیں کرتا۔ Payment provider کی منظوری، تازہ API integration، verified webhooks اور production testing مکمل ہونے تک عطیات قبول نہ کریں۔ Secret keys صرف server environment میں رکھیں، frontend میں نہیں۔ تمام placeholder رابطہ معلومات اور غیر تصدیق شدہ دعوے launch سے پہلے تبدیل کریں۔

## ڈومین اور ہوسٹنگ
`khidmatfoundation.org.pk` کی دستیابی PKNIC یا مجاز registrar سے چیک کریں؛ دستیابی فرض نہ کریں۔ Node.js hosting، HTTPS/SSL، backups، environment variables اور support والا پلان منتخب کریں۔

## اگلے مراحل
1. حقیقی logo، contact info، registration details، team اور اجازت یافتہ تصاویر شامل کریں۔
2. Safepay یا دوسرے provider سے charity/NPO onboarding، موجودہ فیس، required documents اور official API guide لیں۔
3. `/api/create-checkout` کو official provider docs کے مطابق مکمل کریں۔
4. webhook signatures server-side verify کریں؛ صرف verified confirmation پر donation paid نشان زد کریں۔
5. privacy policy، donation/refund policy، terms، receipts، backups اور security review مکمل کریں۔
