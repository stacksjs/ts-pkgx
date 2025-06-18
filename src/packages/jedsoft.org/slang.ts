/**
 * **slsh** - Library for creating multi-platform software
 *
 * @domain `jedsoft.org/slang`
 * @programs `slsh`
 * @version `2.3.3` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install slsh`
 * @aliases `slsh`, `s-lang`
 * @dependencies `libpng.org`, `pcre.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.slsh
 * // Or access via domain
 * const samePkg = pantry.jedsoftorgslang
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "slang"
 * console.log(pkg.description) // "Library for creating multi-platform software"
 * console.log(pkg.programs)    // ["slsh"]
 * console.log(pkg.versions[0]) // "2.3.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jedsoft-org/slang.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const slshPackage = {
  /**
   * The display name of this package.
   */
  name: 'slang' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jedsoft.org/slang' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Library for creating multi-platform software' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jedsoft.org/slang/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install slsh' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'slsh',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libpng.org',
    'pcre.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.3.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'slsh',
    's-lang',
  ] as const,
}

export type SlshPackage = typeof slshPackage
