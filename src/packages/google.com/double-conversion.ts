/**
 * **double-conversion** - Package from pantry: google.com/double-conversion
 *
 * @domain `google.com/double-conversion`
 *
 * @install `launchpad install google.com/double-conversion`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.googlecomdoubleconversion
 * console.log(pkg.name)        // "double-conversion"
 * console.log(pkg.description) // "Package from pantry: google.com/double-conversion"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/double-conversion.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const googlecomdoubleconversionPackage = {
  /**
   * The display name of this package.
   */
  name: 'double-conversion' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/double-conversion' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: google.com/double-conversion' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install google.com/double-conversion' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +google.com/double-conversion -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install google.com/double-conversion' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/google.com/double-conversion/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GooglecomdoubleconversionPackage = typeof googlecomdoubleconversionPackage
