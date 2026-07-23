// Icons sind sprachunabhaengig, deshalb getrennt von dict.ts gehalten und per
// stabiler id referenziert (id kommt aus dem jeweiligen dict-Eintrag), statt
// pro Sprache dupliziert zu werden.

export const pillarIcons: Record<string, React.ReactNode> = {
  money: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.5 9.2c0-1.1 1.1-2 2.5-2s2.5.9 2.5 2-1.1 2-2.5 2-2.5.9-2.5 2 1.1 2 2.5 2 2.5-.9 2.5-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 6v1.4M12 16.6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  revenue: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M4 20V10m6 10V4m6 16v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  time: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  risk: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m8.5 12 2.3 2.3L16 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export const trustIcons: Record<string, React.ReactNode> = {
  euHosting: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m8.5 12 2.3 2.3L16 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  encryption: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="5" y="10.5" width="14" height="9.5" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="15" r="1.4" fill="currentColor" />
    </svg>
  ),
  byok: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.5 9.2c0-1.1 1.1-2 2.5-2s2.5.9 2.5 2-1.1 2-2.5 2-2.5.9-2.5 2 1.1 2 2.5 2 2.5-.9 2.5-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 6v1.4M12 16.6V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export const postSendIcons: Record<string, React.ReactNode> = {
  replies: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  dashboard: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M4 20V10m6 10V4m6 16v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  status: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  deliverability: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 8v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="15.7" r="1" fill="currentColor" />
    </svg>
  ),
};

export const workflowIcons: Record<string, React.ReactNode> = {
  "1": (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="m19 19-4.3-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  "2": (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="10" cy="8.5" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 19c1-3.3 3.3-5 5.5-5s4.5 1.7 5.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m16.5 8.5 1.6 1.6 3-3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "3": (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m8.5 12 2.3 2.3L16 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "4": (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M19 15.5 19.7 17l1.5.7-1.5.7-.7 1.5-.7-1.5-1.5-.7 1.5-.7.7-1.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
};

export const agencyIcons: Record<string, React.ReactNode> = {
  workspaces: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <rect x="3" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="3" y="15" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="15" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  branding: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M4 17.5 14.5 7 17 9.5 6.5 20H4v-2.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m13 8.5 2.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  reportLink: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="6" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="6" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="18" r="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="m8.1 10.8 7.8-3.6M8.1 13.2l7.8 3.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
};

export const featureIcons: Record<string, React.ReactNode> = {
  suppression: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 9l6 6M15 9l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  deliverability: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m8.5 12.5 2.3 2.3L16 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  campaigns: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <circle cx="5.5" cy="7" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18.5" cy="17" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 8.3 10.5 10.7M13.5 13.3 17 15.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
};
