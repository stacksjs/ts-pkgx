/**
 * **mvdan/sh** - A shell parser, formatter, and interpreter with bash support; includes shfmt
 *
 * @domain `github.com/mvdan/sh`
 * @programs `gosh`, `shfmt`
 * @version `3.11.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/mvdan/sh -- $SHELL -i`
 * @aliases `mvdan/sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.mvdansh
 * // Or access via domain
 * const samePkg = pantry.githubcommvdansh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/mvdan/sh"
 * console.log(pkg.description) // "A shell parser, formatter, and interpreter with..."
 * console.log(pkg.programs)    // ["gosh", "shfmt"]
 * console.log(pkg.versions[0]) // "3.11.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mvdan/sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mvdanshPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/mvdan/sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mvdan/sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A shell parser, formatter, and interpreter with bash support; includes shfmt' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mvdan/sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/mvdan/sh -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gosh',
    'shfmt',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.11.0',
    '3.10.0',
    '3.9.0',
    '3.8.0',
    '3.7.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'mvdan/sh',
  ] as const,
  fullPath: 'github.com/mvdan/sh' as const,
}

export type MvdanshPackage = typeof mvdanshPackage
