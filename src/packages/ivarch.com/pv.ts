/**
 * **pv** - Monitor data's progress through a pipe
 *
 * @domain `ivarch.com/pv`
 * @programs `pv`
 * @version `1.9.34` (14 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pv`
 * @name `pv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pv
 * // Or access via domain
 * const samePkg = pantry.ivarchcompv
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pv"
 * console.log(pkg.description) // "Monitor data's progress through a pipe"
 * console.log(pkg.programs)    // ["pv"]
 * console.log(pkg.versions[0]) // "1.9.34" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ivarch-com/pv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pvPackage = {
  /**
   * The display name of this package.
   */
  name: 'pv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ivarch.com/pv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Monitor data\'s progress through a pipe' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ivarch.com/pv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pv' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pv',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.9.34',
    '1.9.31',
    '1.9.27',
    '1.9.25',
    '1.9.24',
    '1.9.15',
    '1.9.7',
    '1.9.0',
    '1.8.14',
    '1.8.13',
    '1.8.12',
    '1.8.10',
    '1.8.9',
    '1.8.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) pv -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pv' as const,
}

export type PvPackage = typeof pvPackage
