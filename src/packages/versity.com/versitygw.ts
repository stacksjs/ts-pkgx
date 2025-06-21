/**
 * **versitygw** - Package from pantry: versity.com/versitygw
 *
 * @domain `versity.com/versitygw`
 *
 * @install `launchpad install versity.com/versitygw`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.versitycomversitygw
 * console.log(pkg.name)        // "versitygw"
 * console.log(pkg.description) // "Package from pantry: versity.com/versitygw"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/versity-com/versitygw.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const versitycomversitygwPackage = {
  /**
   * The display name of this package.
   */
  name: 'versitygw' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'versity.com/versitygw' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: versity.com/versitygw' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install versity.com/versitygw' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/versity.com/versitygw/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type VersitycomversitygwPackage = typeof versitycomversitygwPackage
