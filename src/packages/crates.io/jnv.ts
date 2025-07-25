/**
 * **jnv** - Interactive JSON filter using jq
 *
 * @domain `crates.io/jnv`
 * @programs `jnv`
 * @version `0.6.1` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install jnv`
 * @name `jnv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.jnv
 * // Or access via domain
 * const samePkg = pantry.cratesiojnv
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jnv"
 * console.log(pkg.description) // "Interactive JSON filter using jq"
 * console.log(pkg.programs)    // ["jnv"]
 * console.log(pkg.versions[0]) // "0.6.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/jnv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jnvPackage = {
  /**
   * The display name of this package.
   */
  name: 'jnv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/jnv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Interactive JSON filter using jq' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/jnv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install jnv' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'jnv',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.6.1',
    '0.6.0',
    '0.5.0',
    '0.4.2',
    '0.4.1',
    '0.4.0',
    '0.3.0',
    '0.2.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) jnv -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install jnv' as const,
}

export type JnvPackage = typeof jnvPackage
