# دليل النشر على GitHub Pages

## الخطوات المطلوبة:

### 1. رفع الكود إلى GitHub
\`\`\`bash
git add .
git commit -m "Add deployment configuration"
git push origin main
\`\`\`

### 2. تفعيل GitHub Actions
1. اذهب إلى مستودع GitHub الخاص بك
2. اضغط على تبويب "Actions"
3. سيتم تشغيل workflow التلقائي

### 3. تفعيل GitHub Pages
1. اذهب إلى "Settings" في المستودع
2. اختر "Pages" من القائمة الجانبية
3. في قسم "Source"، اختر "Deploy from a branch"
4. اختر "gh-pages" branch
5. اضغط "Save"

### 4. انتظار النشر
- سيستغرق النشر 2-5 دقائق
- ستحصل على رابط الموقع في صفحة Pages

## ملاحظات مهمة:

### إذا لم يعمل Next.js:
الموقع الحالي يستخدم Next.js وقد لا يعمل على GitHub Pages بشكل مثالي. لذلك أضفت:

1. **ملف index.html** - صفحة احتياطية تعمل فوراً
2. **تكوين GitHub Actions** - لبناء ونشر Next.js
3. **تكوين next.config.mjs** - لتصدير ملفات ثابتة

### الحلول البديلة:

#### الحل الأول: استخدام Vercel (مُوصى به)
\`\`\`bash
npm install -g vercel
vercel --prod
\`\`\`

#### الحل الثاني: استخدام Netlify
1. اربط المستودع بـ Netlify
2. سيتم النشر تلقائياً

#### الحل الثالث: تحويل إلى HTML خالص
إذا كنت تريد موقع HTML بسيط يعمل 100% على GitHub Pages، يمكنني إنشاء نسخة HTML خالصة.

## روابط مفيدة:
- [دليل GitHub Pages](https://pages.github.com/)
- [دليل GitHub Actions](https://docs.github.com/en/actions)
- [دليل Next.js Static Export](https://nextjs.org/docs/advanced-features/static-html-export)
