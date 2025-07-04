/**
 * **envconsul** - Package from pantry: hashicorp.com/envconsul
 *
 * @domain `hashicorp.com/envconsul`
 *
 * @install `launchpad install hashicorp.com/envconsul`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hashicorpcomenvconsul
 * console.log(pkg.name)        // "envconsul"
 * console.log(pkg.description) // "Package from pantry: hashicorp.com/envconsul"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hashicorp-com/envconsul.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hashicorpcomenvconsulPackage = {
  /**
   * The display name of this package.
   */
  name: 'envconsul' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hashicorp.com/envconsul' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: hashicorp.com/envconsul' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install hashicorp.com/envconsul' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +hashicorp.com/envconsul -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install hashicorp.com/envconsul' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hashicorp.com/envconsul/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HashicorpcomenvconsulPackage = typeof hashicorpcomenvconsulPackage
