/**
 * **bore.pub** - Package from pantry: bore.pub
 *
 * @domain `bore.pub`
 *
 * @install `launchpad install bore.pub`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.borepub
 * console.log(pkg.name)        // "bore.pub"
 * console.log(pkg.description) // "Package from pantry: bore.pub"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bore-pub.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const borepubPackage = {
  /**
   * The display name of this package.
   */
  name: 'bore.pub' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bore.pub' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: bore.pub' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install bore.pub' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +bore.pub -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install bore.pub' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/bore.pub/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type BorepubPackage = typeof borepubPackage
