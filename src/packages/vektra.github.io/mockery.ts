/**
 * **mockery** - Package from pantry: vektra.github.io/mockery
 *
 * @domain `vektra.github.io/mockery`
 *
 * @install `launchpad install vektra.github.io/mockery`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.vektragithubiomockery
 * console.log(pkg.name)        // "mockery"
 * console.log(pkg.description) // "Package from pantry: vektra.github.io/mockery"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/vektra-github-io/mockery.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const vektragithubiomockeryPackage = {
  /**
   * The display name of this package.
   */
  name: 'mockery' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'vektra.github.io/mockery' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: vektra.github.io/mockery' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install vektra.github.io/mockery' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +vektra.github.io/mockery -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install vektra.github.io/mockery' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/vektra.github.io/mockery/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type VektragithubiomockeryPackage = typeof vektragithubiomockeryPackage
