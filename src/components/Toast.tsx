'use client';

import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

// ✏️ Toast notification sederhana: sukses / info, auto-hilang.
type ToastKind = 'success' | 'info';
interface ToastItem {
  id: number;
  message: string;
  kind: ToastKind;
}

const ToastContext = createContext<{ toast: (message: string, kind?: ToastKind) => void }>({
  toast: () => {},
});

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);

  const toast = useCallback((message: string, kind: ToastKind = 'success') => {
    const id = Date.now() + Math.random();
    setItems((prev) => [...prev, { id, message, kind }]);
    setTimeout(() => setItems((prev) => prev.filter((t) => t.id !== id)), 3200);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div
        aria-live="polite"
        role="status"
        className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex flex-col items-center gap-2 px-4"
      >
        {items.map((t) => (
          <div
            key={t.id}
            className="toast-enter pointer-events-auto flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-xl"
          >
            {t.kind === 'success' ? (
              <CheckCircle2 size={18} className="shrink-0 text-emerald-500" />
            ) : (
              <Info size={18} className="shrink-0 text-primary" />
            )}
            <span className="text-sm font-medium">{t.message}</span>
            <button
              type="button"
              aria-label="Tutup notifikasi"
              onClick={() => setItems((prev) => prev.filter((x) => x.id !== t.id))}
              className="cursor-pointer text-muted-foreground hover:text-foreground"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
