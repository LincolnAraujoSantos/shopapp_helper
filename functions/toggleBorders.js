function addYellowBorders() {
  initializeCmsHelperElements();
    
  cmsHelpertargetImages.forEach(img => {
    const titleText = img.getAttribute('title').trim();
    if (allSpanTexts.some(obj => obj.title.trim() === titleText && obj.src.endsWith("394453f37b3a0990c8de.svg"))) {
      img.parentNode.style.border = '4px solid yellow';
      img.parentNode.style.borderRadius = '5px';
    }
  });

  cmsHelperAllDivs.forEach((div) => {
    const icon = div.querySelector('.not-viewable img')
    if (icon.src.endsWith('394453f37b3a0990c8de.svg')) {
      div.style.border = '4px solid yellow';
      div.style.borderRadius = '5px';
    }
  });
}

function addRedBorders() {
  initializeCmsHelperElements();
  cmsHelpertargetImages.forEach((img) => {
    const titleText = img.getAttribute('title').trim();
    if (expiredSpanTexts.includes(titleText)) {
      img.parentNode.style.border = '4px solid red';
      img.parentNode.style.borderRadius = '5px';
    }
  });
}

function removeRedBorders() {
  initializeCmsHelperElements();
  cmsHelpertargetImages.forEach((img) => {
      const titleText = img.getAttribute('title').trim();
      if (expiredSpanTexts.includes(titleText)) {
      img.parentNode.style.border = 'none';
      img.parentNode.style.borderRadius = ''; // Remove border-radius também
      }
  });
}