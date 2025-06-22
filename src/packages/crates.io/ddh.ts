/**
 * **ddh** - Package from pantry: crates.io/ddh
 *
 * @domain `crates.io/ddh`
 *
 * @install `launchpad install crates.io/ddh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioddh
 * console.log(pkg.name)        // "ddh"
 * console.log(pkg.description) // "Package from pantry: crates.io/ddh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/ddh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioddhPackage = {
  /**
   * The display name of this package.
   */
  name: 'ddh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/ddh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/ddh' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/ddh' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/ddh -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/ddh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/ddh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesioddhPackage = typeof cratesioddhPackage
