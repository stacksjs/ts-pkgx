/**
 * **gdown** - Google Drive Public File Downloader when Curl/Wget Fails
 *
 * @domain `wkentaro.github.io/gdown`
 * @programs `gdown`
 * @version `5.2.0` (7 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/wkentaro-github-io/gdown.md
 *
 * @install `sh <(curl https://pkgx.sh) gdown`
 * @name `gdown`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gdown
 * // Or access via domain
 * const samePkg = pantry.wkentarogithubiogdown
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gdown"
 * console.log(pkg.description) // "Google Drive Public File Downloader when Curl/W..."
 * console.log(pkg.programs)    // ["gdown"]
 * console.log(pkg.versions[0]) // "5.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wkentaro-github-io/gdown.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gdownPackage = {
  /**
   * The display name of this package.
   */
  name: 'gdown' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wkentaro.github.io/gdown' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Google Drive Public File Downloader when Curl/Wget Fails' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wkentaro.github.io/gdown/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) gdown' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gdown',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.2.0',
    '5.1.0',
    '5.0.1',
    '5.0.0',
    '4.7.3',
    '4.7.2',
    '4.7.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'wkentaro.github.io/gdown' as const,
}

export type GdownPackage = typeof gdownPackage
