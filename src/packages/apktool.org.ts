/**
 * **apktool** - Tool for reverse engineering 3rd party, closed, binary Android apps
 *
 * @domain `apktool.org`
 * @programs `apktool`
 * @version `2.11.1` (4 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/apktool-org.md
 *
 * @install `sh <(curl https://pkgx.sh) apktool`
 * @dependencies `openjdk.org^21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.apktoolorg
 * console.log(pkg.name)        // "apktool"
 * console.log(pkg.description) // "Tool for reverse engineering 3rd party, closed,..."
 * console.log(pkg.programs)    // ["apktool"]
 * console.log(pkg.versions[0]) // "2.11.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apktool-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const apktoolorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'apktool' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apktool.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Tool for reverse engineering 3rd party, closed, binary Android apps' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apktool.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) apktool' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'apktool',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openjdk.org^21',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.11.1',
    '2.11.0',
    '2.10.0',
    '2.9.3',
  ] as const,
  fullPath: 'apktool.org' as const,
  aliases: [] as const,
}

export type ApktoolorgPackage = typeof apktoolorgPackage
