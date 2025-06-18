/**
 * **hurl** - Run and Test HTTP Requests with plain text and curl
 *
 * @domain `hurl.dev`
 * @programs `hurl`, `hurlfmt`
 * @version `6.1.1` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +hurl.dev -- $SHELL -i`
 * @name `hurl`
 * @dependencies `gnome.org/libxml2`, `curl.se`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.hurl
 * // Or access via domain
 * const samePkg = pantry.hurldev
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "hurl"
 * console.log(pkg.description) // "Run and Test HTTP Requests with plain text and ..."
 * console.log(pkg.programs)    // ["hurl", "hurlfmt"]
 * console.log(pkg.versions[0]) // "6.1.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hurl-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hurlPackage = {
  /**
   * The display name of this package.
   */
  name: 'hurl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hurl.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Run and Test HTTP Requests with plain text and curl' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hurl.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +hurl.dev -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'hurl',
    'hurlfmt',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/libxml2',
    'curl.se',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.1.1',
    '6.1.0',
    '6.0.0',
    '5.0.1',
    '5.0.0',
    '4.3.0',
    '4.2.0',
    '4.1.0',
    '4.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'hurl' as const,
}

export type HurlPackage = typeof hurlPackage
