'use client';

import { Search, X } from 'lucide-react';
import { useState, useCallback } from 'react';

interface SearchBarProps {
  /** Callback fired when the search query changes */
  onSearch: (query: string) => void;
  /** Placeholder text */
  placeholder?: string;
}

/**
 * Search/filter bar for the leaderboard.
 * Features a glowing border on focus and a clear button.
 */
export function SearchBar({ onSearch, placeholder = 'Search adventurers...' }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      setQuery(val);
      onSearch(val);
    },
    [onSearch]
  );

  const handleClear = useCallback(() => {
    setQuery('');
    onSearch('');
  }, [onSearch]);

  return (
    <div
      className={`relative flex items-center rounded-xl border transition-all duration-300 bg-stone-900/60 backdrop-blur-sm ${
        isFocused
          ? 'border-amber-500/40 shadow-[0_0_12px_rgba(251,191,36,0.1)]'
          : 'border-amber-500/15 hover:border-amber-500/25'
      }`}
    >
      <Search
        className={`absolute left-3 sm:left-4 w-4 h-4 transition-colors duration-200 ${
          isFocused ? 'text-amber-400' : 'text-amber-400/40'
        }`}
      />

      <input
        type="text"
        value={query}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="w-full bg-transparent pl-10 sm:pl-11 pr-10 py-2.5 sm:py-3 text-sm text-amber-100 placeholder:text-amber-400/30 focus:outline-none font-[family-name:var(--font-cinzel)]"
      />

      {query && (
        <button
          onClick={handleClear}
          className="absolute right-3 sm:right-4 p-0.5 rounded-md hover:bg-amber-500/10 transition-colors"
          aria-label="Clear search"
        >
          <X className="w-4 h-4 text-amber-400/60" />
        </button>
      )}
    </div>
  );
}
