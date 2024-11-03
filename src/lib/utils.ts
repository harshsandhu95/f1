import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string, gmtOffset?: number): string {
  if (!dateString) {
    return 'Invalid date';
  }

  let date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return 'Invalid date';
  }

  if (gmtOffset !== undefined) {
    const offsetInMs = gmtOffset * 60 * 60 * 1000;
    date = new Date(date.getTime() + offsetInMs);
  }

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };
  return new Intl.DateTimeFormat('en-GB', options).format(date);
}

export function formatDateToSystemTimezone(dateString: string): string {
  if (!dateString) {
    return 'Invalid date';
  }

  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return 'Invalid date';
  }

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
