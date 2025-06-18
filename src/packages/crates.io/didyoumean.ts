/**
 * **dym** - A CLI spelling corrector for when you're unsure
 *
 * @domain `crates.io/didyoumean`
 * @programs `dym`
 * @version `1.1.4` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) dym`
 * @name `dym`
 * @aliases `didyoumean`
 * @dependencies `openssl.org^1.1`, `linuxx.org/xcb`, `x.org/xcb`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dym
 * // Or access via domain
 * const samePkg = pantry.cratesiodidyoumean
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dym"
 * console.log(pkg.description) // "A CLI spelling corrector for when you're unsure"
 * console.log(pkg.programs)    // ["dym"]
 * console.log(pkg.versions[0]) // "1.1.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/didyoumean.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dymPackage = {
  /**
   * The display name of this package.
   */
  name: 'dym' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/didyoumean' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A CLI spelling corrector for when you\'re unsure' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/didyoumean/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) dym' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dym',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'linuxx.org/xcb',
    'x.org/xcb',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'didyoumean',
  ] as const,
  fullPath: 'crates.io/didyoumean' as const,
}

export type DymPackage = typeof dymPackage
