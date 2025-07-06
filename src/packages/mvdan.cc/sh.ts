/**
 * **shfmt** - A shell parser, formatter, and interpreter with bash support; includes shfmt
 *
 * @domain `mvdan.cc/sh`
 * @programs `shfmt`
 * @version `3.12.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install shfmt`
 * @name `shfmt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.shfmt
 * // Or access via domain
 * const samePkg = pantry.mvdanccsh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "shfmt"
 * console.log(pkg.description) // "A shell parser, formatter, and interpreter with..."
 * console.log(pkg.programs)    // ["shfmt"]
 * console.log(pkg.versions[0]) // "3.12.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mvdan-cc/sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const shfmtPackage = {
  /**
   * The display name of this package.
   */
  name: 'shfmt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mvdan.cc/sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A shell parser, formatter, and interpreter with bash support; includes shfmt' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mvdan.cc/sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install shfmt' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'shfmt',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.12.0',
    '3.11.0',
    '3.10.0',
    '3.9.0',
    '3.8.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) shfmt -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install shfmt' as const,
}

export type ShfmtPackage = typeof shfmtPackage
