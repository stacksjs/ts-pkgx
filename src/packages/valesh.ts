/**
 * **vale.sh** - Package from pantry: vale.sh
 *
 * @domain `vale.sh`
 *
 * @install `launchpad install vale.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.valesh
 * console.log(pkg.name)        // "vale.sh"
 * console.log(pkg.description) // "Package from pantry: vale.sh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vale-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const valeshPackage = {
  /**
   * The display name of this package.
   */
  name: 'vale.sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vale.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: vale.sh' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install vale.sh' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +vale.sh -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install vale.sh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vale.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ValeshPackage = typeof valeshPackage
