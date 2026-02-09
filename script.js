// Language Toggle Functionality
let isArabic = false;

function toggleLanguage() {
  const htmlRoot = document.getElementById('htmlRoot');
  const langBtn = document.getElementById('langBtn');
  
  isArabic = !isArabic;
  
  if (isArabic) {
    // Switch to Arabic (RTL)
    htmlRoot.setAttribute('lang', 'ar');
    htmlRoot.setAttribute('dir', 'rtl');
    langBtn.innerHTML = '<i class="bi bi-globe"></i> English';
    
    // Update content for Arabic
    updateContentToArabic();
  } else {
    // Switch to English (LTR)
    htmlRoot.setAttribute('lang', 'en');
    htmlRoot.removeAttribute('dir');
    langBtn.innerHTML = '<i class="bi bi-globe"></i> العربية';
    
    // Revert content to English
    updateContentToEnglish();
  }
  
  // Save preference to localStorage
  localStorage.setItem('language', isArabic ? 'ar' : 'en');
}

function updateContentToArabic() {
  // Update main heading and description
  document.querySelector('header h1').textContent = 'الاستدامة عبر العصور';
  document.querySelector('header p').textContent = 'استكشف رحلة Intel عبر الزمن واكتشف كيف شكل التزامنا بالابتكار مستقبلاً أكثر استدامة للتكنولوجيا وكوكبنا.';
  
  // Timeline cards data
  const timelineData = [
    { year: '1968', title: 'تأسيس Intel', description: 'أعاد روبرت نويس وجوردون مور تسمية الشركة المشكلة حديثاً NM Electronics إلى Intel Corporation، مما وضع الأساس لعقود من الابتكار التكنولوجي.' },
    { year: '1971', title: 'أول معالج دقيق', description: 'أطلقت Intel المعالج 4004، أول معالج دقيق تجاري في العالم، مما أشعل ثورة المعالجات الدقيقة وسرع مستقبل أجهزة الحاسوب.' },
    { year: '1978', title: 'معالج 8086', description: 'إطلاق معالج 8086، الذي أنشأ معمارية x86 التي تقود أجهزة كمبيوتر شخصية وخوادم لا حصر لها في العصر الحديث.' },
    { year: '1985', title: 'معالج 386', description: 'قدمت Intel معالج 386 بمعمارية 32 بت، مما أدخل عصراً جديداً من الأداء والمعالجة المتعددة لأجهزة الكمبيوتر الشخصية.' },
    { year: '2006', title: 'ذروة انبعاثات غازات الاحتباس الحراري', description: 'تمثل هذه السنة أعلى انبعاثات سنوية من غازات الاحتباس الحراري لعمليات Intel. على مدى السنوات التالية، استثمرت Intel بكثافة في امتصاص المواد الكيميائية والطاقة المتجددة والتصنيع الموفر للطاقة.' },
    { year: '2020', title: 'استراتيجية RISE', description: 'أطلقت Intel استراتيجيتها RISE (المسؤولة والشاملة والمستدامة والممكّنة) وأهدافها لعام 2030، بهدف تعزيز التقدم على نطاق الصناعة.' },
    { year: '2022', title: 'صافي صفر بحلول 2040', description: 'أعلنت Intel عن التزامها بتحقيق انبعاثات صفرية من غازات الاحتباس الحراري (Scope 1 and 2) عبر عملياتها العالمية بحلول عام 2040.' },
    { year: '2023', title: 'الكهرباء المتجددة', description: 'حققت الشركة 99٪ من استخدام الكهرباء المتجددة في جميع أنحاء العالم، مما يساعد على تقليل انبعاثات الكربون بشكل كبير.' },
    { year: '2024', title: 'قمة الاستدامة', description: 'استضافت Intel قمة الاستدامة الأولى لها، حيث وحدت الموردين والمسؤولين الحكوميين وقادة الصناعة للعمل على تصنيع أشباه الموصلات المستدام من الجيل القادم.' }
  ];
  
  // Update all 9 timeline cards
  const timelineSection = document.querySelector('section:not(.features-section)');
  const allCards = timelineSection.querySelectorAll('> div');
  
  allCards.forEach((card, index) => {
    if (index < timelineData.length) {
      const h2 = card.querySelector('h2');
      const h3 = card.querySelector('h3');
      const p = card.querySelector('p');
      
      if (h2) h2.textContent = timelineData[index].year;
      if (h3) h3.textContent = timelineData[index].title;
      if (p) p.textContent = timelineData[index].description;
    }
  });
  
  // Update the "Scroll to view timeline" text
  const paragraphAfterSection = timelineSection.nextElementSibling;
  if (paragraphAfterSection && paragraphAfterSection.tagName === 'P') {
    paragraphAfterSection.textContent = 'مرر لعرض الخط الزمني | حرك الماوس فوق البطاقات لمعرفة المزيد!';
  }
  
  // Update feature cards
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards[0].querySelector('.feature-title').textContent = 'الابتكار المتقدم';
  featureCards[0].querySelector('.feature-text').textContent = 'تواصل Intel دفع حدود تكنولوجيا أشباه الموصلات، حيث تطور معالجات أسرع وحلول حوسبة أكثر كفاءة للعالم المتصل.';
  featureCards[0].querySelector('.learn-more-link').innerHTML = 'اعرف المزيد <i class="bi bi-arrow-left"></i>';
  
  featureCards[1].querySelector('.feature-title').textContent = 'الالتزام البيئي';
  featureCards[1].querySelector('.feature-text').textContent = 'من تبني الطاقة المتجددة إلى مبادرات تقليل النفايات، التزمت Intel بتقليل تأثيرها البيئي وتحقيق انبعاثات صفرية بحلول عام 2040.';
  featureCards[1].querySelector('.learn-more-link').innerHTML = 'اعرف المزيد <i class="bi bi-arrow-left"></i>';
  
  featureCards[2].querySelector('.feature-title').textContent = 'المسؤولية الاجتماعية';
  featureCards[2].querySelector('.feature-text').textContent = 'تؤمن Intel بإنشاء بيئة عمل شاملة ودعم المجتمعات في جميع أنحاء العالم. من خلال التعليم ومبادرات التنوع والعطاء الكorporي، نحن نحدث فرقاً إيجابياً.';
  featureCards[2].querySelector('.learn-more-link').innerHTML = 'اعرف المزيد <i class="bi bi-arrow-left"></i>';
  
  // Update newsletter section
  document.querySelector('.newsletter-banner').textContent = 'اشترك اليوم!';
  document.querySelector('.newsletter-title').textContent = 'اشترك في نشرتنا الإخبارية للاستدامة';
  document.querySelector('.newsletter-subtitle').textContent = 'ابقَ على اطلاع بأحدث مبادرات Intel للاستدامة والتزاماتها البيئية.';
  document.querySelector('label[for="emailInput"]').textContent = 'البريد الإلكتروني';
  document.getElementById('emailInput').placeholder = 'أدخل بريدك الإلكتروني';
  document.getElementById('emailHelp').textContent = 'لن نشارك بريدك الإلكتروني مع أي طرف آخر.';
  document.querySelector('label[for="nameInput"]').textContent = 'الاسم الكامل (اختياري)';
  document.getElementById('nameInput').placeholder = 'اسمك';
  document.getElementById('nameHelp').textContent = 'ساعدنا في تخصيص تجربتك.';
  document.getElementById('agreeLabel').textContent = 'أوافق على تلقي رسائل حول جهود وابتكارات الاستدامة من Intel.';
  document.querySelector('.btn.btn-primary').innerHTML = '<i class="bi bi-envelope"></i> اشترك الآن';
}

function updateContentToEnglish() {
  // Update main heading and description
  document.querySelector('header h1').textContent = 'Sustainability Through the Ages';
  document.querySelector('header p').textContent = 'Explore Intel\'s journey through time, discovering how our commitment to innovation has shaped a more sustainable future for technology and our planet.';
  
  // Timeline cards data
  const timelineData = [
    { year: '1968', title: 'Intel Founded', description: 'Robert Noyce and Gordon Moore rename the newly formed company NM Electronics to Intel Corporation, laying the foundation for decades of technological innovation.' },
    { year: '1971', title: 'First Microprocessor', description: 'Intel debuts the 4004, the world\'s first commercial microprocessor, igniting the microprocessor revolution and propelling the future of computing devices.' },
    { year: '1978', title: '8086 Processor', description: 'Launch of the 8086 processor, establishing the x86 architecture that drives countless PCs and servers in the modern era.' },
    { year: '1985', title: '386 Processor', description: 'Intel introduces the 386 processor with 32-bit architecture, ushering in a new era of performance and multitasking for personal computers.' },
    { year: '2006', title: 'Peak GHG Emissions', description: 'This year marks Intel\'s highest annual greenhouse gas emissions for operations. Over subsequent years, Intel invests heavily in chemical abatement, renewable energy, and energy-efficient manufacturing to reverse this trend.' },
    { year: '2020', title: 'RISE Strategy', description: 'Intel launches its RISE (Responsible, Inclusive, Sustainable, Enabling) strategy and 2030 goals, aiming to drive industry-wide progress on climate action, water stewardship, and waste reduction.' },
    { year: '2022', title: 'Net-Zero By 2040', description: 'Intel announces its commitment to achieve net-zero greenhouse gas emissions (Scope 1 and 2) across its global operations by 2040, building on years of environmental initiatives.' },
    { year: '2023', title: 'Renewable Electricity', description: 'The company achieves 99% renewable electricity usage worldwide, helping to drastically lower carbon emissions and driving progress toward Intel\'s long-term sustainability goals.' },
    { year: '2024', title: 'Sustainability Summit', description: 'Intel hosts its first Sustainability Summit, uniting suppliers, government officials, and industry leaders to collaborate on next-generation sustainable semiconductor manufacturing.' }
  ];
  
  // Update all 9 timeline cards
  const timelineSection = document.querySelector('section:not(.features-section)');
  const allCards = timelineSection.querySelectorAll('> div');
  
  allCards.forEach((card, index) => {
    if (index < timelineData.length) {
      const h2 = card.querySelector('h2');
      const h3 = card.querySelector('h3');
      const p = card.querySelector('p');
      
      if (h2) h2.textContent = timelineData[index].year;
      if (h3) h3.textContent = timelineData[index].title;
      if (p) p.textContent = timelineData[index].description;
    }
  });
  
  // Update the "Scroll to view timeline" text
  const paragraphAfterSection = timelineSection.nextElementSibling;
  if (paragraphAfterSection && paragraphAfterSection.tagName === 'P') {
    paragraphAfterSection.textContent = 'Scroll to view timeline | Hover over cards to learn more!';
  }
  
  // Update feature cards
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards[0].querySelector('.feature-title').textContent = 'Cutting-Edge Innovation';
  featureCards[0].querySelector('.feature-text').textContent = 'Intel continues to push the boundaries of semiconductor technology, developing faster processors and more efficient computing solutions for a connected world.';
  featureCards[0].querySelector('.learn-more-link').innerHTML = 'Learn More <i class="bi bi-arrow-right"></i>';
  
  featureCards[1].querySelector('.feature-title').textContent = 'Environmental Commitment';
  featureCards[1].querySelector('.feature-text').textContent = 'From renewable energy adoption to waste reduction initiatives, Intel is dedicated to minimizing its environmental impact and achieving net-zero emissions by 2040.';
  featureCards[1].querySelector('.learn-more-link').innerHTML = 'Learn More <i class="bi bi-arrow-right"></i>';
  
  featureCards[2].querySelector('.feature-title').textContent = 'Social Responsibility';
  featureCards[2].querySelector('.feature-text').textContent = 'Intel believes in creating inclusive workplaces and supporting communities worldwide. Through education, diversity initiatives, and corporate giving, we make a positive difference.';
  featureCards[2].querySelector('.learn-more-link').innerHTML = 'Learn More <i class="bi bi-arrow-right"></i>';
  
  // Update newsletter section
  document.querySelector('.newsletter-banner').textContent = 'Subscribe Today!';
  document.querySelector('.newsletter-title').textContent = 'Subscribe to Our Sustainability Newsletter';
  document.querySelector('.newsletter-subtitle').textContent = 'Stay up to date with Intel’s latest sustainability initiatives and environmental commitments.';
  document.querySelector('label[for="emailInput"]').textContent = 'Email address';
  document.getElementById('emailInput').placeholder = 'Enter your email';
  document.getElementById('emailHelp').textContent = 'We’ll never share your email with anyone else.';
  document.querySelector('label[for="nameInput"]').textContent = 'Full Name (optional)';
  document.getElementById('nameInput').placeholder = 'Your name';
  document.getElementById('nameHelp').textContent = 'Helps us personalize your experience.';
  document.getElementById('agreeLabel').textContent = 'I agree to receive updates about Intel’s sustainability efforts and innovations.';
  document.querySelector('.btn.btn-primary').innerHTML = '<i class="bi bi-envelope"></i> Subscribe';
}

// Check for saved language preference on load
window.addEventListener('DOMContentLoaded', function() {
  const savedLanguage = localStorage.getItem('language');
  
  if (savedLanguage === 'ar') {
    isArabic = true;
    toggleLanguage();
  }
  
  // Initialize newsletter form handler
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
  }
});

// Newsletter Form Submission Handler
function handleNewsletterSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const email = document.getElementById('emailInput').value.trim();
  const name = document.getElementById('nameInput').value.trim();
  const messageDiv = document.getElementById('formMessage');
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    showFormMessage('Please enter a valid email address.', 'error');
    document.getElementById('emailInput').focus();
    return;
  }
  
  if (email.length > 0) {
    // Show success message
    const successMessage = isArabic 
      ? `شكراً! تم تأكيد اشتراكك ${name ? 'يا ' + name : ''}. تحقق من بريدك الإلكتروني.`
      : `Thank you! Your subscription has been confirmed${name ? ', ' + name : ''}. Check your email.`;
    
    showFormMessage(successMessage, 'success');
    
    // Reset form
    form.reset();
    
    // Clear message after 5 seconds
    setTimeout(() => {
      messageDiv.style.display = 'none';
    }, 5000);
  }
}

function showFormMessage(message, type) {
  const messageDiv = document.getElementById('formMessage');
  messageDiv.textContent = message;
  messageDiv.className = type;
  messageDiv.style.display = 'block';
}
console.log("LANG TOGGLE TEST");
