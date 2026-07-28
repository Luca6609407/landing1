// ---------------------------------------------------------------
// Mobile navigation toggle
// ---------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // -----------------------------------------------------------
  // Signal contact QR code
  // -----------------------------------------------------------
  // Replace SIGNAL_CONTACT with your real signal.me link, e.g.:
  //   https://signal.me/#p/+391234567890   (phone-based)
  //   https://signal.me/#eu/xxxxxxxxxxxx   (username-based)


  // var SIGNAL_CONTACT = 'https://signal.me/#eu/ILK6oCmwHV0ICVzjEqe10No-xiSI7J-feXxEPhRRTbouy661pZ9Gi7dQtOnj1Ygo';
  var SIGNAL_CONTACT = 'https://signal.me/#eu/LucaSalemme.01';
  var qrEl = document.getElementById('qrcode');
  var idEl = document.getElementById('signal-id-text');
  var linkEl = document.getElementById('signal-fallback-link');

  if (idEl) idEl.textContent = SIGNAL_CONTACT.replace('https://', '');
  if (linkEl) linkEl.href = SIGNAL_CONTACT;

  if (qrEl && window.QRCode) {
    new QRCode(qrEl, {
      text: SIGNAL_CONTACT,
      width: 172,
      height: 172,
      colorDark: '#10151c',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });
  }
});
