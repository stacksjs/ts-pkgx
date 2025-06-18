/**
 * **googletest** - GoogleTest - Google Testing and Mocking Framework
 *
 * @domain `google.com/googletest`
 * @version `1.17.0` (6 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/google-com/googletest.md
 *
 * @install `sh <(curl https://pkgx.sh) +google.com/googletest -- $SHELL -i`
 * @aliases `googletest`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.googletest
 * // Or access via domain
 * const samePkg = pantry.googlecomgoogletest
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "google.com/googletest"
 * console.log(pkg.description) // "GoogleTest - Google Testing and Mocking Framework"
 * console.log(pkg.versions[0]) // "1.17.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/googletest.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const googletestPackage = {
  /**
   * The display name of this package.
   */
  name: 'google.com/googletest' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/googletest' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'GoogleTest - Google Testing and Mocking Framework' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/google.com/googletest/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +google.com/googletest -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.17.0',
    '1.16.0',
    '1.15.2',
    '1.15.0',
    '1.14.0',
    '1.13.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'googletest',
  ] as const,
  fullPath: 'google.com/googletest' as const,
}

export type GoogletestPackage = typeof googletestPackage
