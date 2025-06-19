/**
 * **googletest** - GoogleTest - Google Testing and Mocking Framework
 *
 * @domain `google.com/googletest`
 * @version `1.17.0` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +google.com/googletest -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.googlecomgoogletest
 * console.log(pkg.name)        // "googletest"
 * console.log(pkg.description) // "GoogleTest - Google Testing and Mocking Framework"
 * console.log(pkg.versions[0]) // "1.17.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/googletest.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const googlecomgoogletestPackage = {
  /**
   * The display name of this package.
   */
  name: 'googletest' as const,
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
  installCommand: 'launchpad install +google.com/googletest -- $SHELL -i' as const,
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
  aliases: [] as const,
}

export type GooglecomgoogletestPackage = typeof googlecomgoogletestPackage
