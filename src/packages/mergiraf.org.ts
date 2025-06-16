/**
 * **mergiraf** - Syntax-aware git merge driver
 *
 * @domain `mergiraf.org`
 * @programs `mergiraf`
 * @version `0.10.0` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/mergiraf-org.md
 *
 * @install `sh <(curl https://pkgx.sh) mergiraf`
 * @name `mergiraf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mergiraf
 * // Or access via domain
 * const samePkg = pantry.mergiraforg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mergiraf"
 * console.log(pkg.description) // "Syntax-aware git merge driver"
 * console.log(pkg.programs)    // ["mergiraf"]
 * console.log(pkg.versions[0]) // "0.10.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mergiraf-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mergirafPackage = {
  /**
   * The display name of this package.
   */
  name: 'mergiraf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mergiraf.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Syntax-aware git merge driver' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mergiraf.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) mergiraf' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mergiraf',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'mergiraf.org' as const,
}

export type MergirafPackage = typeof mergirafPackage
