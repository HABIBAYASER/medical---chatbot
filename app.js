// بيانات الأطباء والأعراض
const SYMPTOMS_MAPPING = {
  "ألم في الصدر": "أمراض القلب",
  "الم في الصدر": "أمراض القلب",
  "وجع في الصدر": "أمراض القلب",
  "ضيق في التنفس": "أمراض القلب",
  "ضيق تنفس": "أمراض القلب",
  خفقان: "أمراض القلب",
  "خفقان القلب": "أمراض القلب",

  صداع: "مخ وأعصاب",
  "وجع راس": "مخ وأعصاب",
  "وجع في الراس": "مخ وأعصاب",
  دوخة: "مخ وأعصاب",
  دوار: "مخ وأعصاب",
  تنميل: "مخ وأعصاب",
  رعشة: "مخ وأعصاب",
  "صداع شديد": "مخ وأعصاب",

  "حكة في الجلد": "جلدية وتجميل",
  حكة: "جلدية وتجميل",
  هرش: "جلدية وتجميل",
  "طفح جلدي": "جلدية وتجميل",
  "حبوب في الوجه": "جلدية وتجميل",
  حبوب: "جلدية وتجميل",

  "ألم في الأذن": "أنف وأذن وحنجرة",
  "الم في الاذن": "أنف وأذن وحنجرة",
  "وجع في الاذن": "أنف وأذن وحنجرة",
  "التهاب الحلق": "أنف وأذن وحنجرة",
  "وجع في الحلق": "أنف وأذن وحنجرة",
  "انسداد الأنف": "أنف وأذن وحنجرة",
  زكام: "أنف وأذن وحنجرة",

  "ألم في البطن": "باطنة عامة",
  "الم في البطن": "باطنة عامة",
  "وجع في البطن": "باطنة عامة",
  "وجع بطن": "باطنة عامة",
  مغص: "باطنة عامة",
  غثيان: "باطنة عامة",
  استفراغ: "باطنة عامة",
  قيء: "باطنة عامة",
  إسهال: "باطنة عامة",
  حمى: "باطنة عامة",
  سخونة: "باطنة عامة",

  "تأخر الدورة الشهرية": "نساء وتوليد",
  "تاخر الدورة": "نساء وتوليد",
  "ألم أثناء الدورة": "نساء وتوليد",
  "الم الدورة": "نساء وتوليد",
  "وجع الدورة": "نساء وتوليد",
  "إفرازات مهبلية": "نساء وتوليد",
  افرازات: "نساء وتوليد",
  "ألم في الحوض": "نساء وتوليد",
  "أعراض الحمل": "نساء وتوليد",
  "نزيف مهبلي": "نساء وتوليد",

  "حمى عند الطفل": "أطفال وحديثي الولادة",
  "سخونة عند الطفل": "أطفال وحديثي الولادة",
  "الطفل عنده سخونة": "أطفال وحديثي الولادة",
  "سعال عند الطفل": "أطفال وحديثي الولادة",
  "الطفل بيكح": "أطفال وحديثي الولادة",
  "مغص عند الطفل": "أطفال وحديثي الولادة",
}

const DOCTORS_DATA = [
  // أمراض القلب
  {
    name: "د. أحمد سامي حسن",
    specialty: "أمراض القلب",
    schedule: "السبت والثلاثاء 5م–9م",
    consultationPrice: 250,
    callPrice: 150,
    phone: "16676",
    address: "المعادي - القاهرة",
    url: "https://www.vezeeta.com/ar/dr/test1",
  },
  {
    name: "د. فاطمة محمود عبد السلام",
    specialty: "أمراض القلب",
    schedule: "الأحد والخميس 4م–8م",
    consultationPrice: 260,
    callPrice: 160,
    phone: "16676",
    address: "مدينة نصر - القاهرة",
    url: "https://www.vezeeta.com/ar/dr/test2",
  },

  // نساء وتوليد
  {
    name: "د. نهى محمود عبد اللطيف",
    specialty: "نساء وتوليد",
    schedule: "السبت والإثنين ١م–٥م",
    consultationPrice: 190,
    callPrice: 110,
    phone: "16676",
    address: "٦ أكتوبر - الجيزة",
    url: "https://www.vezeeta.com/ar/dr/noha-mahmoud",
  },
  {
    name: "د. رانيا جمال عبد الله",
    specialty: "نساء وتوليد",
    schedule: "الثلاثاء والخميس ٣م–٧م",
    consultationPrice: 200,
    callPrice: 120,
    phone: "16676",
    address: "فيصل - الجيزة",
    url: "https://www.vezeeta.com/ar/dr/rania-gamal",
  },

  // جلدية وتجميل
  {
    name: "د. سارة محمد عبد القادر",
    specialty: "جلدية وتجميل",
    schedule: "الإثنين والخميس ٢م–٦م",
    consultationPrice: 220,
    callPrice: null,
    phone: "16676",
    address: "سموحة - الإسكندرية",
    url: "https://www.vezeeta.com/ar/dr/sara-mohamed",
  },

  // مخ وأعصاب
  {
    name: "د. عمر هشام عبد العزيز",
    specialty: "مخ وأعصاب",
    schedule: "كل يوم ٦م–١٠م",
    consultationPrice: 300,
    callPrice: 140,
    phone: "16676",
    address: "مدينة نصر - القاهرة",
    url: "https://www.vezeeta.com/ar/dr/omar-hesham",
  },

  // أنف وأذن وحنجرة
  {
    name: "د. علي إبراهيم السيد",
    specialty: "أنف وأذن وحنجرة",
    schedule: "الأحد والثلاثاء ٣م–٨م",
    consultationPrice: 230,
    callPrice: 130,
    phone: "16676",
    address: "مصر الجديدة - القاهرة",
    url: "https://www.vezeeta.com/ar/dr/ali-ibrahim",
  },

  // باطنة عامة
  {
    name: "د. يوسف جمال عبد الله",
    specialty: "باطنة عامة",
    schedule: "السبت–الأربعاء ٣م–٩م",
    consultationPrice: 180,
    callPrice: 120,
    phone: "16676",
    address: "شبرا - القاهرة",
    url: "https://www.vezeeta.com/ar/dr/youssef-gamal",
  },

  // أطفال وحديثي الولادة
  {
    name: "د. مي عبد الفتاح",
    specialty: "أطفال وحديثي الولادة",
    schedule: "الأحد والثلاثاء ٤م–٨م",
    consultationPrice: 200,
    callPrice: 100,
    phone: "16676",
    address: "الهرم - الجيزة",
    url: "https://www.vezeeta.com/ar/dr/mai-abdelfattah",
  },
]

// متغيرات المحادثة
let currentStep = "symptoms"
let selectedSpecialty = ""
let availableDoctors = []
let selectedDoctor = null
let availableAppointments = []
let selectedAppointment = ""
let isLoading = false

// دوال التنقل
function showHomePage() {
  document.getElementById("homePage").classList.add("active")
  document.getElementById("chatPage").classList.remove("active")
  resetChat()
}

function showChatPage() {
  document.getElementById("homePage").classList.remove("active")
  document.getElementById("chatPage").classList.add("active")
}

// دوال الإدخال
function handleMainInputKeypress(event) {
  if (event.key === "Enter") {
    handleStartChat()
  }
}

function handleChatInputKeypress(event) {
  if (event.key === "Enter") {
    sendMessage()
  }
}

function handleStartChat() {
  const input = document.getElementById("symptomInput")
  const symptom = input.value.trim()
  if (symptom) {
    startChat(symptom)
  }
}

// بدء المحادثة
function startChat(symptom = "") {
  showChatPage()

  // إضافة رسالة الترحيب
  addMessage(
    "مرحباً! أنا مساعدك الطبي الذكي 🩺\n\nأخبرني عن الأعراض التي تشعر بها وسأساعدك في العثور على الطبيب المناسب وحجز موعد معه.",
    true,
  )

  // إذا كان هناك عرض محدد، أرسله
  if (symptom) {
    document.getElementById("chatInput").value = symptom
    setTimeout(() => {
      sendMessage()
    }, 500)
  }
}

// إرسال الرسالة
async function sendMessage() {
  const input = document.getElementById("chatInput")
  const message = input.value.trim()

  if (!message || isLoading) return

  // إضافة رسالة المستخدم
  addMessage(message, false)
  input.value = ""

  // إظهار مؤشر الكتابة
  showTypingIndicator()
  isLoading = true

  // محاكاة تأخير الاستجابة
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // إخفاء مؤشر الكتابة
  hideTypingIndicator()

  try {
    const response = processMessage(message)
    addMessage(response, true)
  } catch (error) {
    console.error("Error:", error)
    addMessage("عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.", true)
  } finally {
    isLoading = false
  }
}

// معالجة الرسائل
function processMessage(userInput) {
  const userInputLower = userInput.toLowerCase().trim()

  if (currentStep === "symptoms") {
    return handleSymptoms(userInputLower)
  } else if (currentStep === "doctor_selection") {
    return handleDoctorSelection(userInput)
  } else if (currentStep === "appointment_selection") {
    return handleAppointmentSelection(userInput)
  } else if (currentStep === "booking_confirmation") {
    return handleBookingConfirmation(userInput)
  }

  return "عذراً، حدث خطأ. يرجى المحاولة مرة أخرى."
}

function handleSymptoms(userInput) {
  let detectedSpecialty = ""

  // البحث عن التخصص المناسب
  for (const [symptom, specialty] of Object.entries(SYMPTOMS_MAPPING)) {
    if (userInput.includes(symptom.toLowerCase())) {
      detectedSpecialty = specialty
      break
    }
  }

  if (!detectedSpecialty) {
    return `لم أتمكن من تحديد التخصص المناسب للعرض "${userInput}".

يرجى وصف الأعراض بوضوح أكثر أو اختيار من الأمثلة التالية:

**أمراض القلب:** ألم في الصدر، خفقان، ضيق تنفس
**مخ وأعصاب:** صداع، دوخة، تنميل
**جلدية:** حكة، طفح جلدي، حبوب
**أنف وأذن:** ألم في الأذن، التهاب الحلق، زكام
**باطنة عامة:** ألم في البطن، حمى، غثيان
**نساء وتوليد:** تأخر الدورة، إفرازات، ألم في الحوض
**أطفال:** حمى عند الطفل، سعال، مغص`
  }

  const doctors = DOCTORS_DATA.filter((doctor) => doctor.specialty === detectedSpecialty)

  if (doctors.length === 0) {
    return `لا يوجد أطباء متاحون في تخصص ${detectedSpecialty}.`
  }

  selectedSpecialty = detectedSpecialty
  availableDoctors = doctors
  currentStep = "doctor_selection"

  let response = `تم تحديد التخصص: **${detectedSpecialty}** ✅

الأطباء المتاحون:

`

  doctors.forEach((doctor, index) => {
    const callInfo = doctor.callPrice ? `📞 ${doctor.callPrice} جنيه` : "📞 غير متاحة"
    response += `**${index + 1}.** ${doctor.name}
`
    response += `   📍 ${doctor.address}
`
    response += `   💰 كشف: ${doctor.consultationPrice} جنيه | ${callInfo}
`
    response += `   ⏰ ${doctor.schedule}

`
  })

  response += `اختر رقم الطبيب (1-${doctors.length}):`
  return response
}

function handleDoctorSelection(userInput) {
  const doctorIndex = Number.parseInt(userInput.trim()) - 1

  if (isNaN(doctorIndex) || doctorIndex < 0 || doctorIndex >= availableDoctors.length) {
    return `يرجى اختيار رقم صحيح من 1 إلى ${availableDoctors.length}`
  }

  const doctor = availableDoctors[doctorIndex]
  selectedDoctor = doctor
  currentStep = "appointment_selection"

  const appointments = generateAppointments()
  availableAppointments = appointments

  let response = `تم اختيار: **${doctor.name}** ✅

`
  response += `📋 **معلومات الطبيب:**
`
  response += `🏥 التخصص: ${doctor.specialty}
`
  response += `📍 العنوان: ${doctor.address}
`
  response += `💰 سعر الكشف: ${doctor.consultationPrice} جنيه
`
  response += `📞 سعر المكالمة: ${doctor.callPrice ? doctor.callPrice + " جنيه" : "غير متاحة"}

`
  response += `**المواعيد المتاحة:**

`

  appointments.forEach((appointment, index) => {
    response += `**${index + 1}.** ${appointment}
`
  })

  response += `
اختر رقم الموعد (1-${appointments.length}):`
  return response
}

function handleAppointmentSelection(userInput) {
  const appointmentIndex = Number.parseInt(userInput.trim()) - 1

  if (isNaN(appointmentIndex) || appointmentIndex < 0 || appointmentIndex >= availableAppointments.length) {
    return `يرجى اختيار رقم صحيح من 1 إلى ${availableAppointments.length}`
  }

  const appointment = availableAppointments[appointmentIndex]
  selectedAppointment = appointment
  currentStep = "booking_confirmation"

  const response =
    `📋 **ملخص الحجز:**

` +
    `👨‍⚕️ **الطبيب:** ${selectedDoctor?.name}
` +
    `🏥 **التخصص:** ${selectedDoctor?.specialty}
` +
    `📅 **الموعد:** ${appointment}
` +
    `📍 **العنوان:** ${selectedDoctor?.address}
` +
    `💰 **السعر:** ${selectedDoctor?.consultationPrice} جنيه
` +
    `📞 **الهاتف:** ${selectedDoctor?.phone}

` +
    `هل تريد تأكيد الحجز؟ (نعم/لا)`

  return response
}

function handleBookingConfirmation(userInput) {
  const userInputLower = userInput.trim().toLowerCase()

  if (["نعم", "yes", "موافق", "تأكيد", "احجز"].includes(userInputLower)) {
    const bookingId = `BK${Math.floor(Math.random() * 90000) + 10000}`

    const response =
      `✅ **تم تأكيد الحجز بنجاح!**

` +
      `🎫 **رقم الحجز:** ${bookingId}
` +
      `👨‍⚕️ **الطبيب:** ${selectedDoctor?.name}
` +
      `📅 **الموعد:** ${selectedAppointment}
` +
      `📍 **العنوان:** ${selectedDoctor?.address}
` +
      `💰 **المبلغ:** ${selectedDoctor?.consultationPrice} جنيه
` +
      `📞 **للاستفسار:** ${selectedDoctor?.phone}

` +
      `🔗 **رابط الطبيب:** ${selectedDoctor?.url}

` +
      `شكراً لاستخدام خدمتنا! 🙏

` +
      `💡 **نصيحة:** احتفظ برقم الحجز للمراجعة

هل تحتاج لحجز موعد آخر؟ أخبرني عن الأعراض الجديدة.`

    // Reset for new conversation
    resetChatbot()
    return response
  } else if (["لا", "no", "إلغاء", "الغاء"].includes(userInputLower)) {
    resetChatbot()
    return `تم إلغاء الحجز. 🚫

هل تريد البحث عن طبيب آخر؟ أخبرني عن الأعراض.`
  } else {
    return "يرجى الإجابة بـ 'نعم' أو 'لا'"
  }
}

function generateAppointments() {
  const appointments = []
  const today = new Date()
  const days = ["الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"]
  const timeSlots = ["10:00 صباحاً", "2:00 مساءً", "6:00 مساءً"]

  for (let i = 1; i <= 4; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    const dayName = days[date.getDay()]
    const timeSlot = timeSlots[Math.floor(Math.random() * timeSlots.length)]
    const appointment = `${dayName} ${date.toLocaleDateString("ar-EG")} - ${timeSlot}`
    appointments.push(appointment)
  }

  return appointments
}

// دوال المساعدة
function addMessage(text, isBot) {
  const messagesContainer = document.getElementById("chatMessages")
  if (!messagesContainer) return

  const messageDiv = document.createElement("div")
  messageDiv.className = `message ${isBot ? "bot" : "user"}`

  const time = new Date().toLocaleTimeString("ar-EG", {
    hour: "2-digit",
    minute: "2-digit",
  })

  messageDiv.innerHTML = `
    <div class="message-avatar">
      ${isBot ? "🤖" : "👤"}
    </div>
    <div class="message-content">
      <div>${formatMessageText(text)}</div>
      <div class="message-time">${time}</div>
    </div>
  `

  messagesContainer.appendChild(messageDiv)
  scrollToBottom()
}

function formatMessageText(text) {
  return text
    .split("\n")
    .map((line) => {
      // تنسيق النص العريض
      return line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    })
    .join("<br>")
}

function showTypingIndicator() {
  const messagesContainer = document.getElementById("chatMessages")
  if (!messagesContainer) return

  const typingDiv = document.createElement("div")
  typingDiv.className = "typing-indicator"
  typingDiv.id = "typingIndicator"

  typingDiv.innerHTML = `
    <div class="message-avatar">🤖</div>
    <div class="message-content">
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    </div>
  `

  messagesContainer.appendChild(typingDiv)
  scrollToBottom()
}

function hideTypingIndicator() {
  const typingIndicator = document.getElementById("typingIndicator")
  if (typingIndicator) {
    typingIndicator.remove()
  }
}

function scrollToBottom() {
  const messagesContainer = document.getElementById("chatMessages")
  if (messagesContainer) {
    messagesContainer.scrollTop = messagesContainer.scrollHeight
  }
}

function resetChat() {
  const messagesContainer = document.getElementById("chatMessages")
  const chatInput = document.getElementById("chatInput")
  const symptomInput = document.getElementById("symptomInput")

  if (messagesContainer) messagesContainer.innerHTML = ""
  if (chatInput) chatInput.value = ""
  if (symptomInput) symptomInput.value = ""

  resetChatbot()
  isLoading = false
}

function resetChatbot() {
  currentStep = "symptoms"
  selectedSpecialty = ""
  availableDoctors = []
  selectedDoctor = null
  availableAppointments = []
  selectedAppointment = ""
}
