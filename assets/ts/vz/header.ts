/**
 * Site header (PR6): phone menu disclosure, dark-mode toggle state, skip link.
 * Loaded from assets/ts/custom.ts (Stack builds it automatically, deferred).
 * Stack's own menu.ts is left alone: it only binds #toggle-menu, which no longer exists.
 */

const DESKTOP_QUERY = '(min-width: 1280px)';

function setupMenu() {
    const header = document.getElementById('vz-header');
    const button = document.getElementById('vz-menu-toggle') as HTMLButtonElement | null;
    const panel = document.getElementById('vz-menu');
    if (!header || !button || !panel) return;

    const labelOpen = button.dataset.labelOpen || button.getAttribute('aria-label') || '';
    const labelClose = button.dataset.labelClose || labelOpen;

    const isOpen = () => header.classList.contains('is-open');

    const setOpen = (open: boolean) => {
        header.classList.toggle('is-open', open);
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-label', open ? labelClose : labelOpen);
    };

    button.addEventListener('click', () => setOpen(!isOpen()));

    // Esc closes the menu and returns focus to the button
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape' || !isOpen()) return;
        setOpen(false);
        button.focus();
    });

    // A click outside the header closes the menu
    document.addEventListener('click', (e) => {
        if (isOpen() && !header.contains(e.target as Node)) setOpen(false);
    });

    // Back to the desktop layout: reset to the closed state
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => {
        if (desktop.matches && isOpen()) setOpen(false);
    };
    if (desktop.addEventListener) desktop.addEventListener('change', onChange);
    else desktop.addListener(onChange);
}

function setupColorSchemeToggle() {
    const toggle = document.getElementById('dark-mode-toggle');
    if (!toggle) return;
    const sync = () => {
        toggle.setAttribute('aria-pressed', String(document.documentElement.dataset.scheme === 'dark'));
    };
    sync();
    // Stack's colorScheme.ts fires this on init and after each change; data-scheme is already updated by then
    window.addEventListener('onColorSchemeChange', () => window.setTimeout(sync, 0));
    toggle.addEventListener('click', () => window.setTimeout(sync, 0));
}

function setupSkipLink() {
    const link = document.querySelector<HTMLAnchorElement>('.vz-skip');
    const main = document.getElementById('main-content');
    if (!link || !main) return;
    // On article pages Stack's smoothAnchors.ts prevents the default jump, so move focus ourselves
    link.addEventListener('click', () => {
        main.focus({ preventScroll: true });
    });
}

function init() {
    setupMenu();
    setupColorSchemeToggle();
    setupSkipLink();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

export {};
