function addTitles() {
  initializeCmsHelperElements();
  cmsHelpertargetImages.forEach((img) => {
    let titleSpan = img.parentNode.querySelector('.cms-helper-title');
    if (!titleSpan) {
      titleSpan = document.createElement('span');
      titleSpan.className = 'cms-helper-title';
      img.parentNode.insertBefore(titleSpan, img.nextSibling);
    }
    titleSpan.textContent = img.getAttribute('title').trim();
    titleSpan.style.display = 'block'; // Garante que o título esteja visível
    // Estilização básica para o span do título
    titleSpan.style.backgroundColor = '#ccc';
    titleSpan.style.color = '#000';
    titleSpan.style.fontSize = '12px';
    titleSpan.style.padding = '2px 4px';
    titleSpan.style.marginTop = '4px';
    titleSpan.style.border = '1px solid #ccc';
    titleSpan.style.borderRadius = '3px';

    copyButton(titleSpan, img.getAttribute('title').trim());
  });
  // console.log('CMS Helper: Títulos adicionados.');
}

function removeTitles() {
  document.querySelectorAll('.cms-helper-title').forEach(span => {
    span.style.display = 'none'; // Oculta em vez de remover para permitir fácil alternância
  });
  // console.log('CMS Helper: Títulos removidos.');
}