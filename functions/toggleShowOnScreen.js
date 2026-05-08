function showDisplayNo() {
  initializeCmsHelperElements();
  cmsHelpertargetImages.forEach(img => {
    const titleText = img.getAttribute('title').trim();
    if (allSpanTexts.some(obj => obj.title.trim() === titleText && obj.src.endsWith("394453f37b3a0990c8de.svg"))) {
      img.parentNode.style.display = "block";
    }
  });
}

function hideDisplayNo() {
  initializeCmsHelperElements();
  cmsHelpertargetImages.forEach(img => {
    const titleText = img.getAttribute('title').trim();
    if (allSpanTexts.some(obj => obj.title.trim() === titleText && obj.src.endsWith("394453f37b3a0990c8de.svg"))) {
      img.parentNode.style.display = "none";
    }
  });
}
