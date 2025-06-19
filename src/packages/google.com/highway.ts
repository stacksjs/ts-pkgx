/**
 * **highway** - Performance-portable, length-agnostic SIMD with runtime dispatch
 *
 * @domain `google.com/highway`
 * @version `1.2.0` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +google.com/highway -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.googlecomhighway
 * console.log(pkg.name)        // "highway"
 * console.log(pkg.description) // "Performance-portable, length-agnostic SIMD with..."
 * console.log(pkg.versions[0]) // "1.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/highway.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const googlecomhighwayPackage = {
  /**
   * The display name of this package.
   */
  name: 'highway' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/highway' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Performance-portable, length-agnostic SIMD with runtime dispatch' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/google.com/highway/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +google.com/highway -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.0',
    '1.1.0',
    '1.0.7',
    '1.0.6',
    '1.0.5',
    '1.0.4',
  ] as const,
  aliases: [] as const,
}

export type GooglecomhighwayPackage = typeof googlecomhighwayPackage
