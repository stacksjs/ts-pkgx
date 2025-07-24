/**
 * **diskus** - Package from pantry: crates.io/diskus
 *
 * @domain `crates.io/diskus`
 *
 * @install `launchpad install crates.io/diskus`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiodiskus
 * console.log(pkg.name)        // "diskus"
 * console.log(pkg.description) // "Package from pantry: crates.io/diskus"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/diskus.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiodiskusPackage = {
  /**
   * The display name of this package.
   */
  name: 'diskus' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/diskus' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/diskus' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/diskus' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/diskus -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/diskus' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/diskus/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesiodiskusPackage = typeof cratesiodiskusPackage
