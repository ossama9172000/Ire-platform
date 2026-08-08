# LRE Mobile Final 1.1.0

الوظائف:
- العربية والإنجليزية بالكامل.
- البحث عن أي رقم.
- رسالة تأكيد قبل حفظ النتيجة.
- حفظ نتيجة كل سحب بتاريخها وفترتها.
- حفظ Snapshot مستقل لكل قائمة.
- إنشاء قائمة تجريبية جديدة لليوم التالي بعد الحفظ.
- عرض عدد الأرقام التي دخلت وخرجت ومتوسط تغير المراكز.
- قياس Top 50 / Top 100 / Top 150 للنتائج المسجلة.

مهم:
التحديث اليومي تجريبي للبحث والتسجيل فقط، ولم يثبت تفوقه على العشوائي.

للتحديث على GitHub:
استبدل الملفات الستة، ثم Commit changes، وانتظر اكتمال GitHub Pages.


## Version 1.2.0
- Flexible prediction result count from 1 to 1000.
- Existing saved snapshots are automatically expanded to the full ranked list.

- Version 1.3.0: color-coded prediction strength in four relative groups based on the selected list size.


## Version 1.4.0
- Moving behavior window: 5, 10, or 15 years; 10 years is the default.
- Recent 3 years receive an additional weight.
- Midday and Evening histories remain completely separate.
- The app displays how many saved records actually fall inside the selected window.
- Behavioral re-ranking uses only records dated before the snapshot being evaluated.
