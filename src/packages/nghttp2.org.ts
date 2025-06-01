/**
 * **nghttp2.org** - nghttp2 - HTTP/2 C Library and tools
 *
 * @domain `nghttp2.org`
 * @version `1.65.0` (17 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/nghttp2-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +nghttp2.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nghttp2org
 * console.log(pkg.name)        // "nghttp2.org"
 * console.log(pkg.description) // "nghttp2 - HTTP/2 C Library and tools"
 * console.log(pkg.versions[0]) // "1.65.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nghttp2-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nghttp2orgPackage = {
  /**
   * The display name of this package.
   */
  name: 'nghttp2.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nghttp2.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'nghttp2 - HTTP/2 C Library and tools' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nghttp2.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +nghttp2.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.65.0',
    '1.64.0',
    '1.63.0',
    '1.62.1',
    '1.62.0',
    '1.61.0',
    '1.60.0',
    '1.59.0',
    '1.58.0',
    '1.57.0',
    '1.56.0',
    '1.55.1',
    '1.55.0',
    '1.54.0',
    '1.53.0',
    '1.52.0',
    '1.51.0',
  ] as const,
  aliases: [] as const,
  fullPath: 'nghttp2.org' as const,
}

export type Nghttp2orgPackage = typeof nghttp2orgPackage
