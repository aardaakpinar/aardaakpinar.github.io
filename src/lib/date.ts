const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const pad = (n: number) => String(n).padStart(2, "0");

/** "01 Aug 2024": fixed month names, independent of ICU data; always UTC so dates never shift. */
export const formatShortDate = (date: Date) => `${pad(date.getUTCDate())} ${MONTHS[date.getUTCMonth()]} ${date.getUTCFullYear()}`;

const longDateFormatter = new Intl.DateTimeFormat("en-US", { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" });
const blogDateFormatter = new Intl.DateTimeFormat("en-US", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" });

export const formatBlogDate = (date: Date) => blogDateFormatter.format(date);
export const formatLongDate = (date: Date) => longDateFormatter.format(date);

/** Zero-padded counter used by tag chips ("03"). */
export const padCount = pad;
