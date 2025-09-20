/**
 * **crates.io/eb** - pkgx package
 *
 * @domain `crates.io/eb`
 * @version `0.5.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install crates.io/eb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioeb
 * console.log(pkg.name)        // "crates.io/eb"
 * console.log(pkg.versions[0]) // "0.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/eb.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioebPackage = {
  /**
   * The display name of this package.
   */
  name: 'crates.io/eb' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/eb' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/eb/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/eb' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.5.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/eb -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/eb' as const,
}

export type CratesioebPackage = typeof cratesioebPackage
