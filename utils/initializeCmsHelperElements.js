let cmsHelpertargetImages = null;
let cmsHelperExpiredDivs = null;
let expiredSpanTexts = null;
let cmsHelperAllDivs = null;
let allSpanTexts = null;

function initializeCmsHelperElements() {
  cmsHelpertargetImages = document.querySelectorAll('div.widgets-preview-h-full-horizontal img[title]');
  cmsHelperExpiredDivs = document.querySelectorAll('div.widget-card-expired');
  cmsHelperAllDivs = document.querySelectorAll('div.widget-categories-list');
  expiredSpanTexts = Array.from(cmsHelperExpiredDivs)
    .flatMap(div => Array.from(div.querySelectorAll('span')).map(span => span.innerText.trim()));
  allSpanTexts = Array.from(cmsHelperAllDivs)
    .flatMap(div => Array.from(div.querySelectorAll('.overall-container')).map(divObj => {
      return {
        title: divObj.querySelector('span.widget-title').innerText,
        src: divObj.querySelector('.hover-rect img')?.src
      }
    }));
}