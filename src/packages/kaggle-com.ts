/**
 * **kaggle** - Official Kaggle API
 *
 * @domain `kaggle.com`
 * @programs `kaggle`
 * @version `1.7.4.5` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) kaggle`
 * @name `kaggle`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.kaggle
 * // Or access via domain
 * const samePkg = pantry.kagglecom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "kaggle"
 * console.log(pkg.description) // "Official Kaggle API"
 * console.log(pkg.programs)    // ["kaggle"]
 * console.log(pkg.versions[0]) // "1.7.4.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kaggle-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kagglePackage = {
  /**
   * The display name of this package.
   */
  name: 'kaggle' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kaggle.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Official Kaggle API' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/kaggle.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) kaggle' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'kaggle',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.7.4.5',
    '1.7.4.2',
    '1.6.3',
    '1.6.1',
    '1.5.16',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'kaggle' as const,
}

export type KagglePackage = typeof kagglePackage
