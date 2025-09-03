/**
 * **sig** - Interactive grep (for streaming)
 *
 * @domain `crates.io/sigrs`
 * @programs `sig`
 * @version `0.2.1` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install sig`
 * @name `sig`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.sig
 * // Or access via domain
 * const samePkg = pantry.cratesiosigrs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "sig"
 * console.log(pkg.description) // "Interactive grep (for streaming)"
 * console.log(pkg.programs)    // ["sig"]
 * console.log(pkg.versions[0]) // "0.2.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/sigrs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sigPackage = {
  /**
   * The display name of this package.
   */
  name: 'sig' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/sigrs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Interactive grep (for streaming)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/sigrs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sig' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sig',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.1',
    '0.2.0',
    '0.1.4',
    '0.1.3',
    '0.1.2',
    '0.1.1',
    '0.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) sig -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sig' as const,
}

export type SigPackage = typeof sigPackage
