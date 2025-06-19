/**
 * **fend** - Arbitrary-precision unit-aware calculator
 *
 * @domain `printfn.github.io/fend`
 * @programs `fend`
 * @version `1.5.6` (18 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install fend`
 * @name `fend`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.fend
 * // Or access via domain
 * const samePkg = pantry.printfngithubiofend
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "fend"
 * console.log(pkg.description) // "Arbitrary-precision unit-aware calculator"
 * console.log(pkg.programs)    // ["fend"]
 * console.log(pkg.versions[0]) // "1.5.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/printfn-github-io/fend.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fendPackage = {
  /**
   * The display name of this package.
   */
  name: 'fend' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'printfn.github.io/fend' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Arbitrary-precision unit-aware calculator' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/printfn.github.io/fend/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install fend' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'fend',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.5.6',
    '1.5.5',
    '1.5.3',
    '1.5.2',
    '1.5.1',
    '1.5.0',
    '1.4.9',
    '1.4.8',
    '1.4.7',
    '1.4.6',
    '1.4.5',
    '1.4.4',
    '1.4.3',
    '1.4.2',
    '1.4.1',
    '1.4.0',
    '1.3.3',
    '1.3.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type FendPackage = typeof fendPackage
