// Results remain fully visible if JavaScript is disabled.
const tabList = document.querySelector('[data-result-tabs]');
if (tabList) {
  const tabs = Array.from(tabList.querySelectorAll('[role="tab"]'));
  const activate = (selected, focus = false) => {
    for (const tab of tabs) {
      const active = tab === selected;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
    }
    if (focus) selected.focus();
  };
  for (const tab of tabs) {
    tab.addEventListener('click', () => activate(tab));
    tab.addEventListener('keydown', (event) => {
      const index = tabs.indexOf(tab);
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      activate(tabs[next], true);
    });
  }
  activate(tabs[0]);
  tabList.hidden = false;
}

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
      status.textContent = 'Select the citation text to copy it, or use Download .bib.';
    }
  });
}
