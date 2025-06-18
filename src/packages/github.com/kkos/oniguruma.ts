/**
 * **onig-config** - Regular expressions library
 *
 * @domain `github.com/kkos/oniguruma`
 * @programs `onig-config`
 * @version `6.9.10` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) onig-config`
 * @name `onig-config`
 * @aliases `kkos/oniguruma`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.onigconfig
 * // Or access via domain
 * const samePkg = pantry.githubcomkkosoniguruma
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "onig-config"
 * console.log(pkg.description) // "Regular expressions library"
 * console.log(pkg.programs)    // ["onig-config"]
 * console.log(pkg.versions[0]) // "6.9.10" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kkos/oniguruma.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const onigconfigPackage = {
  /**
   * The display name of this package.
   */
  name: 'onig-config' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kkos/oniguruma' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Regular expressions library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kkos/oniguruma/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) onig-config' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'onig-config',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.9.10',
    '6.9.9',
    '6.9.8',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'kkos/oniguruma',
  ] as const,
  fullPath: 'github.com/kkos/oniguruma' as const,
}

export type OnigconfigPackage = typeof onigconfigPackage
