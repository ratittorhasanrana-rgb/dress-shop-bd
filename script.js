document.querySelector('.menu-toggle').addEventListener('click', () => {
  alert('মোবাইল মেনু খুলবে (পরে আরও সুন্দর করতে পারি)');
});
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('✅ কার্টে যোগ হয়েছে! অর্ডার করতে WhatsApp করুন');
  });
});