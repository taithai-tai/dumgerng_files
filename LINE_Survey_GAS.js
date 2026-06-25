// ============================================================
// Google Apps Script — สร้างแบบสอบถาม LINE App User Survey
// MK 340 - Class Activity 1: Target Insight
// ============================================================
// วิธีใช้:
// 1. ไปที่ https://script.google.com
// 2. สร้าง Project ใหม่
// 3. วางโค้ดนี้ลงไป
// 4. กด Run → createSurvey
// 5. กด Allow เมื่อถาม
// 6. กลับมาดูลิงก์ฟอร์มใน Logger (View → Logs)
// ============================================================

function createSurvey() {
  // สร้าง Google Form
  var form = FormApp.create('📋 LINE App User Survey — MK 340 Class Activity 1');
  
  // ตั้งค่า
  form.setDescription('แบบสอบถามสำหรับงาน MK 340 - Class Activity 1: Target Insight\nProduct: LINE App\n\nขอบคุณที่สละเวลาตอบแบบสอบถามครับ 🙏');
  form.setConfirmationMessage('ขอบคุณที่ตอบแบบสอบถาม! 🎉');
  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false);
  
  // ============================================================
  // ส่วนที่ 1: Demographic Information
  // ============================================================
  
  form.addSectionHeaderItem()
    .setTitle('ส่วนที่ 1: Demographic Information (ข้อมูลทั่วไป)')
    .setHelpText('ตอบตามข้อมูลจริงของคุณ');
  
  // Q1. เพศ
  form.addMultipleChoiceItem()
    .setTitle('Q1. เพศของคุณ')
    .setChoiceValues(['ชาย', 'หญิง', 'อื่นๆ / ไม่ระบุ'])
    .setRequired(true);
  
  // Q2. อายุ
  form.addMultipleChoiceItem()
    .setTitle('Q2. ช่วงอายุของคุณ')
    .setChoiceValues(['15–18 ปี', '19–22 ปี', '23–30 ปี', '31–40 ปี', 'มากกว่า 40 ปี'])
    .setRequired(true);
  
  // Q3. อาชีพ
  form.addMultipleChoiceItem()
    .setTitle('Q3. อาชีพ/สถานะของคุณ')
    .setChoiceValues(['นักเรียนมัธยม', 'นักศึกษามหาลัย', 'พนักงานประจำ', 'พนักงานอิสระ (Freelance)', 'ผู้ประกอบการ', 'อื่นๆ'])
    .setRequired(true);
  
  // Q4. ใช้ LINE กี่ปี
  form.addMultipleChoiceItem()
    .setTitle('Q4. คุณใช้ LINE มาแล้วกี่ปี?')
    .setChoiceValues(['น้อยกว่า 1 ปี', '1–3 ปี', '3–5 ปี', '5–10 ปี', 'มากกว่า 10 ปี'])
    .setRequired(true);
  
  // ============================================================
  // ส่วนที่ 2: User Goals
  // ============================================================
  
  form.addSectionHeaderItem()
    .setTitle('ส่วนที่ 2: User Goals (เป้าหมายการใช้งาน)')
    .setHelpText('เลือกได้ตามความเป็นจริง');
  
  // Q5. สาเหตุหลัก (Checkbox เลือกได้สูงสุด 3)
  var q5 = form.addCheckboxItem()
    .setTitle('Q5. สาเหตุหลักที่คุณใช้ LINE คืออะไร? (เลือกได้สูงสุด 3 ข้อ)')
    .setChoiceValues([
      'คุยกับเพื่อน/ครอบครัว',
      'ใช้ในการทำงาน/งานกลุ่ม',
      'อ่านข่าว/คอนเทนต์ใน Official Account',
      'สั่งอาหาร/สินค้า',
      'ใช้บริการ LINE Pay / LINE MAN / LINE Shopping',
      'ติดต่อร้านค้า/บริการผ่าน LINE OA',
      'อื่นๆ'
    ])
    .setRequired(true);
  q5.setValidation(FormApp.createCheckboxValidation()
    .setHelpText('กรุณาเลือกไม่เกิน 3 ข้อ')
    .requireSelectAtMost(3)
    .build());
  
  // Q6. เวลาใช้ LINE
  form.addMultipleChoiceItem()
    .setTitle('Q6. คุณใช้เวลากับ LINE วันละกี่ชั่วโมง?')
    .setChoiceValues(['น้อยกว่า 1 ชั่วโมง', '1–3 ชั่วโมง', '3–5 ชั่วโมง', 'มากกว่า 5 ชั่วโมง'])
    .setRequired(true);
  
  // Q7. ฟีเจอร์ที่ใช้บ่อย (Checkbox เลือกได้สูงสุด 3)
  var q7 = form.addCheckboxItem()
    .setTitle('Q7. ฟีเจอร์ใดคุณใช้บ่อยที่สุดใน LINE? (เลือกได้สูงสุด 3 ข้อ)')
    .setChoiceValues([
      'ส่งข้อความ (Chat)',
      'โทร/วิดีโอคอล',
      'อิโมจิ/สติกเกอร์',
      'Timeline / โพสต์เรื่องราว',
      'LINE Official Account / แชท OA',
      'LINE Pay',
      'โน้ต/สมุดโน้ต (Keep Note)',
      'อื่นๆ'
    ])
    .setRequired(true);
  q7.setValidation(FormApp.createCheckboxValidation()
    .setHelpText('กรุณาเลือกไม่เกิน 3 ข้อ')
    .requireSelectAtMost(3)
    .build());
  
  // ============================================================
  // ส่วนที่ 3: User Behaviors
  // ============================================================
  
  form.addSectionHeaderItem()
    .setTitle('ส่วนที่ 3: User Behaviors (พฤติกรรมการใช้งาน)')
    .setHelpText('ตอบตามพฤติกรรมจริงของคุณ');
  
  // Q8. เปิด LINE เมื่อไหร่
  form.addMultipleChoiceItem()
    .setTitle('Q8. คุณมักเปิด LINE เมื่อไหร่?')
    .setChoiceValues([
      'ตอนเช้า (ตื่นนอน)',
      'ระหว่างวัน (ระหว่างทำงาน/เรียน)',
      'ตอนเย็น (หลังเลิกเรียน/งาน)',
      'ก่อนนอน',
      'ตลอดเวลา เปิดไว้ตลอด'
    ])
    .setRequired(true);
  
  // Q9. พฤติกรรมเมื่อได้ Notification
  form.addMultipleChoiceItem()
    .setTitle('Q9. เมื่อได้รับข้อความแจ้งเตือน (Notification) จาก LINE คุณมักจะ:')
    .setChoiceValues([
      'เปิดอ่านทันที',
      'รอเปิดเมื่อว่าง',
      'มาร์กอ่านแล้วเปิดทีหลัง',
      'เพิกเฉย ไม่ค่อยเปิด',
      'ปิดแจ้งเตือนของบางแชท/กลุ่ม'
    ])
    .setRequired(true);
  
  // Q10. ใช้ LINE นอกแชท (Checkbox เลือกได้หลาย)
  form.addCheckboxItem()
    .setTitle('Q10. คุณมักจะใช้ LINE นอกจากการแชทยังไง? (เลือกได้หลายข้อ)')
    .setChoiceValues([
      'ชำระเงิน (LINE Pay)',
      'สั่งอาหาร (LINE MAN)',
      'ช้อปปิ้ง (LINE Shopping)',
      'อ่านบทความ (LINE TODAY)',
      'เล่นเกม (LINE GAME)',
      'ดูการ์ตูน (LINE WEBTOON)',
      'จัดตารางนัด (LINE Calendar)',
      'เก็บไฟล์/รูปภาพไว้เอง',
      'ไม่ค่อยใช้ฟีเจอร์อื่น ใช้แค่แชท'
    ])
    .setRequired(true);
  
  // ============================================================
  // ส่วนที่ 4: Pain Points
  // ============================================================
  
  form.addSectionHeaderItem()
    .setTitle('ส่วนที่ 4: Pain Points (ปัญหาที่ไม่ชอบใน LINE)')
    .setHelpText('ช่วยบอกปัญหาที่คุณเจอ');
  
  // Q11. ปัญหาที่กวนที่สุด (Checkbox เลือกได้สูงสุด 3)
  var q11 = form.addCheckboxItem()
    .setTitle('Q11. ปัญหาใดกวนที่สุดเวลาใช้ LINE? (เลือกได้สูงสุด 3 ข้อ)')
    .setChoiceValues([
      'แจ้งเตือนเยอะจนรำคาญ (กลุ่มแชทนักเรียน/งาน)',
      'กลุ่มแชทมีข้อความเยอะจนหล่นของ',
      'ที่จัดเก็บ (Storage) เต็มเร็ว ทำให้โหลดช้า',
      'ย้อนดูข้อความเก่าลำบาก',
      'คอนเทนต์ใน Discover/Timeline ยากต่อการหาของต้องการ',
      'สติกเออร์/ธีมต้องซื้อ ราคาแพง',
      'แชทกับร้านค้า (OA) ตอบช้า',
      'โฆษณาในแอปเยอะ',
      'อื่นๆ'
    ])
    .setRequired(true);
  q11.setValidation(FormApp.createCheckboxValidation()
    .setHelpText('กรุณาเลือกไม่เกิน 3 ข้อ')
    .requireSelectAtMost(3)
    .build());
  
  // Q12. ปัญหาใน LINE Chat (Checkbox เลือกได้หลาย)
  form.addCheckboxItem()
    .setTitle('Q12. คุณเคยมีปัญหาในการใช้ LINE Chat บ้างไหม? (เลือกได้หลายข้อ)')
    .setChoiceValues([
      'ส่งข้อความหาผู้รับบ่อย',
      'ข้อความเข้าใจยาก (สแปม/ขยะเยอะ)',
      'ไม่สามารถคัดเลือกและจัดกลุ่มแชทได้ชัดเจน',
      'เสียงสนทนา/โทรคุณภาพได้ไม่ดี',
      'ไม่สามารถลบ/ซ่อนแชทเพื่อให้รายชื่อสะอาดขึ้น',
      'ไม่มีปัญหา'
    ])
    .setRequired(true);
  
  // Q13. ฟีเจอร์ที่พัฒนาได้ (Checkbox เลือกได้สูงสุด 3)
  var q13 = form.addCheckboxItem()
    .setTitle('Q13. ฟีเจอร์ใดของ LINE ที่คุณรู้สึกว่าพัฒนาได้อีก? (เลือกได้สูงสุด 3 ข้อ)')
    .setChoiceValues([
      'ระบบจัดการแชท/กลุ่มแชท',
      'ความเป็นส่วนตัว (คนอื่นเห็นสถานะอ่านแล้ว/Online)',
      'พื้นที่จัดเก็บ (Storage)',
      'ระบบแจ้งเตือน (มีตัวเลือกปิด/เปิดเฉพาะ)',
      'การสื่อสาร (Voice/Video call คุณภาพดีกว่าเดิม)',
      'ฟีเจอร์การทำงาน (นัดหมาย/แชร์ไฟล์)',
      'ความปลอดภัย (สแปม/สแคมเมอร์)',
      'อื่นๆ'
    ])
    .setRequired(true);
  q13.setValidation(FormApp.createCheckboxValidation()
    .setHelpText('กรุณาเลือกไม่เกิน 3 ข้อ')
    .requireSelectAtMost(3)
    .build());
  
  // Q14. คิดจะเลิกใช้ LINE (Checkbox เลือกได้หลาย)
  form.addCheckboxItem()
    .setTitle('Q14. มีปัญหาใดบ้างที่ทำให้คุณเคยคิดจะเลิกใช้ LINE? (เลือกได้หลายข้อ)')
    .setChoiceValues([
      'แจ้งเตือนและสแปมเยอะ',
      'พื้นที่จัดเก็บหมด',
      'ค่าสมัครสมาชิก (ถ้าต้องจ่าย)',
      'ระบบล็อกอิน/ยืนยันตัวตนยุ่งยาก',
      'ความเป็นส่วนตัวหายไป',
      'ใช้งานยากขึ้นเรื่อยๆ เมื่ออัปเดต',
      'ไม่เคยคิดจะเลิกใช้',
      'อื่นๆ'
    ])
    .setRequired(true);
  
  // Q15. ความพึงพอใจ
  form.addScaleItem()
    .setTitle('Q15. ระดับความพึงพอใจโดยรวมต่อ LINE App')
    .setBounds(1, 5)
    .setLabels('ไม่พึงพอใจมาก', 'พึงพอใจมาก')
    .setRequired(true);
  
  // ============================================================
  // ส่วนที่ 5: ข้อเสนอแนะ
  // ============================================================
  
  form.addSectionHeaderItem()
    .setTitle('ส่วนที่ 5: ข้อเสนอแนะเพิ่มเติม')
    .setHelpText('ข้อคิดเห็นสุดท้าย');
  
  // Q16. เปลี่ยนสิ่งหนึ่งได้ จะเปลี่ยนอะไร
  form.addMultipleChoiceItem()
    .setTitle('Q16. ถ้าคุณสามารถเปลี่ยนแปลงสิ่งหนึ่งใน LINE ได้ คุณอยากเปลี่ยนอะไร?')
    .setChoiceValues([
      'ลดจำนวนแจ้งเตือนที่รำคาญ',
      'เพิ่มพื้นที่จัดเก็บฟรี',
      'ระบบจัดการแชทที่ดีกว่าเดิม',
      'ความเป็นส่วนตัวมากขึ้น',
      'ลดโฆษณา',
      'ปรับปรุงคุณภาพโทร/วิดีโอคอล',
      'อื่นๆ'
    ])
    .setRequired(true);
  
  // ============================================================
  // แสดงลิงก์
  // ============================================================
  
  var formUrl = form.getPublishedUrl();
  var editUrl = form.getEditUrl();
  
  Logger.log('✅ สร้าง Google Form สำเร็จ!');
  Logger.log('📋 ลิงก์ฟอร์ม: ' + formUrl);
  Logger.log('✏️ ลิงก์แก้ไข: ' + editUrl);
  
  // ส่งอีเมลแจ้งเตือน (ถ้าต้องการ)
  // MailApp.sendEmail('taithai5002@gmail.com', 'Google Form พร้อมแล้ว', 'ลิงก์: ' + formUrl);
  
  return formUrl;
}
