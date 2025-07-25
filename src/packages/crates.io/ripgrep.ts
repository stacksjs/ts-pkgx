/**
 * **rg** - ripgrep recursively searches directories for a regex pattern while respecting your gitignore
 *
 * @domain `crates.io/ripgrep`
 * @programs `rg`
 * @version `14.1.1` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install rg`
 * @name `rg`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.rg
 * // Or access via domain
 * const samePkg = pantry.cratesioripgrep
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rg"
 * console.log(pkg.description) // "ripgrep recursively searches directories for a ..."
 * console.log(pkg.programs)    // ["rg"]
 * console.log(pkg.versions[0]) // "14.1.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/ripgrep.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rgPackage = {
  /**
   * The display name of this package.
   */
  name: 'rg' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/ripgrep' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'ripgrep recursively searches directories for a regex pattern while respecting your gitignore' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/ripgrep/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rg' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'rg',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '14.1.1',
    '14.1.0',
    '14.0.3',
    '14.0.2',
    '14.0.1',
    '14.0.0',
    '13.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) rg -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rg' as const,
}

export type RgPackage = typeof rgPackage
