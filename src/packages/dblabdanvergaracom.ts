/**
 * **dblab.danvergara.com** - Package from pantry: dblab.danvergara.com
 *
 * @domain `dblab.danvergara.com`
 *
 * @install `launchpad install dblab.danvergara.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.dblabdanvergaracom
 * console.log(pkg.name)        // "dblab.danvergara.com"
 * console.log(pkg.description) // "Package from pantry: dblab.danvergara.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dblab-danvergara-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dblabdanvergaracomPackage = {
  /**
   * The display name of this package.
   */
  name: 'dblab.danvergara.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dblab.danvergara.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: dblab.danvergara.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dblab.danvergara.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +dblab.danvergara.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dblab.danvergara.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dblab.danvergara.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DblabdanvergaracomPackage = typeof dblabdanvergaracomPackage
