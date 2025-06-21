/**
 * **net-tools** - Package from pantry: sourceforge.net/net-tools
 *
 * @domain `sourceforge.net/net-tools`
 *
 * @install `launchpad install sourceforge.net/net-tools`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sourceforgenetnettools
 * console.log(pkg.name)        // "net-tools"
 * console.log(pkg.description) // "Package from pantry: sourceforge.net/net-tools"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/net-tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sourceforgenetnettoolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'net-tools' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceforge.net/net-tools' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sourceforge.net/net-tools' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sourceforge.net/net-tools' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/net-tools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SourceforgenetnettoolsPackage = typeof sourceforgenetnettoolsPackage
