/**
 * **tsc** - TypeScript is a superset of JavaScript that compiles to clean JavaScript output.
 *
 * @domain `typescriptlang.org`
 * @programs `tsc`
 * @version `5.8.3` (13 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install tsc`
 * @aliases `tsc`
 * @dependencies `nodejs.org^20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.tsc
 * // Or access via domain
 * const samePkg = pantry.typescriptlangorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "typescriptlang.org"
 * console.log(pkg.description) // "TypeScript is a superset of JavaScript that com..."
 * console.log(pkg.programs)    // ["tsc"]
 * console.log(pkg.versions[0]) // "5.8.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/typescriptlang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tscPackage = {
  /**
   * The display name of this package.
   */
  name: 'typescriptlang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'typescriptlang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'TypeScript is a superset of JavaScript that compiles to clean JavaScript output.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/typescriptlang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install tsc' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tsc',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org^20',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.8.3',
    '5.8.2',
    '5.7.3',
    '5.7.2',
    '5.6.3',
    '5.6.2',
    '5.5.4',
    '5.5.3',
    '5.5.2',
    '5.4.5',
    '5.4.4',
    '5.4.3',
    '5.4.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'tsc',
  ] as const,
}

export type TscPackage = typeof tscPackage
