function updateClock() {
    const now = new Date();
    const date = now.toLocaleDateString('fa-IR');
    const time = now.toLocaleTimeString('fa-IR');
    document.getElementById('clockDate').textContent = `تاریخ: ${date} | ساعت: ${time}`;
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  
  function calculateBMI() {
    const h = parseFloat(document.getElementById('height').value);
    const w = parseFloat(document.getElementById('weight').value);
    const resultEl = document.getElementById('result');
  
    if (!h || !w) {
      resultEl.textContent = 'لطفاً قد و وزن را وارد کنید.';
      return;
    }
  
    const bmi = w / Math.pow(h / 100, 2);
    let status = '';
  
    if (bmi < 18.5) status = 'کم‌وزن';
    else if (bmi < 24.9) status = 'نرمال ✅';
    else if (bmi < 29.9) status = 'اضافه وزن ⚠️';
    else if (bmi < 34.9) status = 'چاق ⛔';
    else status = 'خیلی چاق 🚨';
  
    resultEl.textContent = `BMI شما: ${bmi.toFixed(2)} (${status})`;
  }
  
  function setMode(mode) {
    const body = document.body;
  
    switch(mode) {
      case 'light':
        body.style.background = 'linear-gradient(to bottom right, #e3f2fd, #ffffff)';
        body.style.color = '#333';
        break;
      case 'dark':
        body.style.background = 'linear-gradient(to bottom right, #0f0f0f, #333)';
        body.style.color = '#fff';
        break;
      case 'orange':
        body.style.background = 'linear-gradient(to bottom right, #ff9800, #fff3e0)';
        body.style.color = '#4e342e';
        break;
      case 'red':
        body.style.background = 'linear-gradient(to bottom right, #b71c1c, #000000)';
        body.style.color = '#ffebee';
        break;
    }
  }
  