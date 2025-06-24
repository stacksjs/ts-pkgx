/**
 * **killport** - Package from pantry: crates.io/killport
 *
 * @domain `crates.io/killport`
 *
 * @install `launchpad install crates.io/killport`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiokillport
 * console.log(pkg.name)        // "killport"
 * console.log(pkg.description) // "Package from pantry: crates.io/killport"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/killport.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiokillportPackage = {
  /**
   * The display name of this package.
   */
  name: 'killport' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/killport' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/killport' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/killport' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/killport -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/killport' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/killport/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiokillportPackage = typeof cratesiokillportPackage
