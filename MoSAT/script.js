const copyButton = document.getElementById('copy-citation');
if (copyButton) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    const citation = document.getElementById('bibtex');
    const status = document.getElementById('copy-status');
    const text = citation.textContent.trim();
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(citation);
        selection.removeAllRanges();
        selection.addRange(range);
        if (!document.execCommand('copy')) throw new Error('Clipboard unavailable');
        selection.removeAllRanges();
      }
      status.textContent = 'BibTeX copied.';
    } catch {
      status.textContent = 'Select the citation text and copy it manually.';
    }
  });
}

// Native controls work without JavaScript; show a useful fallback on media errors.
document.querySelectorAll('video').forEach(video => {
  const showError = () => {
    const message = video.closest('figure').querySelector('.video-error');
    if (message) message.hidden = false;
  };
  video.addEventListener('error', showError);
  video.querySelectorAll('source').forEach(source => source.addEventListener('error', showError));
  video.addEventListener('play', () => {
    document.querySelectorAll('video').forEach(other => { if (other !== video) other.pause(); });
  });
});
