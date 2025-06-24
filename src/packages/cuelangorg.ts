/**
 * **cue** - The home of the CUE language! Validate and define text-based and dynamic configuration
 *
 * @domain `cuelang.org`
 * @programs `cue`
 * @version `0.13.2` (21 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cue`
 * @name `cue`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cue
 * // Or access via domain
 * const samePkg = pantry.cuelangorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cue"
 * console.log(pkg.description) // "The home of the CUE language! Validate and defi..."
 * console.log(pkg.programs)    // ["cue"]
 * console.log(pkg.versions[0]) // "0.13.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cuelang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cuePackage = {
  /**
   * The display name of this package.
   */
  name: 'cue' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cuelang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The home of the CUE language! Validate and define text-based and dynamic configuration' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cuelang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cue' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cue',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.13.2',
    '0.13.1',
    '0.13.0',
    '0.12.1',
    '0.12.0',
    '0.11.2',
    '0.11.1',
    '0.11.0',
    '0.10.1',
    '0.10.0',
    '0.9.2',
    '0.9.1',
    '0.9.0',
    '0.8.2',
    '0.8.1',
    '0.8.0',
    '0.7.1',
    '0.7.0',
    '0.6.0',
    '0.5.0',
    '0.4.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) cue -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cue' as const,
}

export type CuePackage = typeof cuePackage
