/**
 * **mergiraf** - Syntax-aware git merge driver
 *
 * @domain `mergiraf.org`
 * @programs `mergiraf`
 * @version `0.11.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install mergiraf`
 * @name `mergiraf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mergiraf
 * // Or access via domain
 * const samePkg = pantry.mergiraforg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mergiraf"
 * console.log(pkg.description) // "Syntax-aware git merge driver"
 * console.log(pkg.programs)    // ["mergiraf"]
 * console.log(pkg.versions[0]) // "0.11.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mergiraf-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mergirafPackage = {
  /**
   * The display name of this package.
   */
  name: 'mergiraf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mergiraf.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Syntax-aware git merge driver' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mergiraf.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mergiraf' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mergiraf',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.11.0',
    '0.10.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) mergiraf -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mergiraf' as const,
}

export type MergirafPackage = typeof mergirafPackage
