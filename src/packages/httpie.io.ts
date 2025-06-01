/**
 * **httpie.io** - 🥧 HTTPie CLI  — modern, user-friendly command-line HTTP client for the API era. JSON support, colors, sessions, downloads, plugins & more.
 *
 * @domain `httpie.io`
 * @programs `http`, `httpie`, `https`
 * @version `3.2.4` (4 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/httpie-io.md
 *
 * @install `sh <(curl https://pkgx.sh) +httpie.io -- $SHELL -i`
 * @dependencies `python.org>=3<3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.httpieio
 * console.log(pkg.name)        // "httpie.io"
 * console.log(pkg.description) // "🥧 HTTPie CLI  — modern, user-friendly command-..."
 * console.log(pkg.programs)    // ["http", "httpie", ...]
 * console.log(pkg.versions[0]) // "3.2.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/httpie-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const httpieioPackage = {
  /**
   * The display name of this package.
   */
  name: 'httpie.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'httpie.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: '🥧 HTTPie CLI  — modern, user-friendly command-line HTTP client for the API era. JSON support, colors, sessions, downloads, plugins & more.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/httpie.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +httpie.io -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'http',
    'httpie',
    'https',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3<3.12',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.2.4',
    '3.2.3',
    '3.2.2',
    '3.2.1',
  ] as const,
  aliases: [] as const,
  fullPath: 'httpie.io' as const,
}

export type HttpieioPackage = typeof httpieioPackage
