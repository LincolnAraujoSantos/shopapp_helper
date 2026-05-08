function showExpired() {
  initializeCmsHelperElements();
  cmsHelpertargetImages.forEach((img) => {
    const titleText = img.getAttribute('title').trim();
    if (expiredSpanTexts.includes(titleText)) {
      img.parentNode.style.display = 'block'; // Garante que o widget em si esteja visível
    }
  });
}

function hideExpired() {
  initializeCmsHelperElements();
  cmsHelpertargetImages.forEach((img) => {
    const titleText = img.getAttribute('title').trim();
    if (expiredSpanTexts.includes(titleText)) {
      img.parentNode.style.display = 'none'; // Oculta o widget
    }
  });
}