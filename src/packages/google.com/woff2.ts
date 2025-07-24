/**
 * **woff2** - Package from pantry: google.com/woff2
 *
 * @domain `google.com/woff2`
 *
 * @install `launchpad install google.com/woff2`
 * @dependencies `github.com/google/brotli`, `linux:gnu.org/gcc` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.googlecomwoff2
 * console.log(pkg.name)        // "woff2"
 * console.log(pkg.description) // "Package from pantry: google.com/woff2"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/woff2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const googlecomwoff2Package = {
  /**
   * The display name of this package.
   */
  name: 'woff2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/woff2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: google.com/woff2' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install google.com/woff2' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +google.com/woff2 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install google.com/woff2' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'github.com/google/brotli',
    'linux:gnu.org/gcc',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/google.com/woff2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Googlecomwoff2Package = typeof googlecomwoff2Package
