function deleteAllExpired() {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  cmsHelperExpiredDivs.forEach(async (div) => {
    div.querySelector('.delete-btn').click();
    await delay(200);
    document.querySelector('.cms-modal-popup-modal .btn-black').click();
    await delay(200);
  });
  
}