/**
 * **bartib** - Package from pantry: crates.io/bartib
 *
 * @domain `crates.io/bartib`
 *
 * @install `launchpad install crates.io/bartib`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiobartib
 * console.log(pkg.name)        // "bartib"
 * console.log(pkg.description) // "Package from pantry: crates.io/bartib"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/bartib.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiobartibPackage = {
  /**
   * The display name of this package.
   */
  name: 'bartib' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/bartib' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/bartib' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/bartib' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/bartib -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/bartib' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/bartib/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiobartibPackage = typeof cratesiobartibPackage
