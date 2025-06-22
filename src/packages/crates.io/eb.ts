/**
 * **eb** - Package from pantry: crates.io/eb
 *
 * @domain `crates.io/eb`
 *
 * @install `launchpad install crates.io/eb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioeb
 * console.log(pkg.name)        // "eb"
 * console.log(pkg.description) // "Package from pantry: crates.io/eb"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/eb.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioebPackage = {
  /**
   * The display name of this package.
   */
  name: 'eb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/eb' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/eb' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/eb' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/eb -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/eb' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/eb/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesioebPackage = typeof cratesioebPackage
