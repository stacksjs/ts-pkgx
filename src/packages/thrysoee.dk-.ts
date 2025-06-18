/**
 * **thrysoee.dk/** - pkgx package
 *
 * @domain `thrysoee.dk`
 *
 * @install `pkgx thrysoee.dk/`
 * @aliases ``
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.thrysoeedk
 * console.log(pkg.name)        // "thrysoee.dk/"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/thrysoee-dk/.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const thrysoeedkPackage = {
  /**
   * The display name of this package.
   */
  name: 'thrysoee.dk/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'thrysoee.dk' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx thrysoee.dk/' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '',
  ] as const,
  fullPath: 'thrysoee.dk/' as const,
}

export type ThrysoeedkPackage = typeof thrysoeedkPackage
