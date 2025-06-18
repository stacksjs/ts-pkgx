/**
 * **mergestat** - Query git repositories with SQL. Generate reports, perform status checks, analyze codebases. 🔍 📊
 *
 * @domain `mergestat.com/mergestat-lite`
 * @programs `mergestat`
 * @version `0.6.2` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install mergestat`
 * @name `mergestat`
 * @aliases `mergestat-lite`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mergestat
 * // Or access via domain
 * const samePkg = pantry.mergestatcommergestatlite
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mergestat"
 * console.log(pkg.description) // "Query git repositories with SQL. Generate repor..."
 * console.log(pkg.programs)    // ["mergestat"]
 * console.log(pkg.versions[0]) // "0.6.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mergestat-com/mergestat-lite.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mergestatPackage = {
  /**
   * The display name of this package.
   */
  name: 'mergestat' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mergestat.com/mergestat-lite' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Query git repositories with SQL. Generate reports, perform status checks, analyze codebases. 🔍 📊' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mergestat.com/mergestat-lite/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install mergestat' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mergestat',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.6.2',
    '0.6.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'mergestat-lite',
  ] as const,
  fullPath: 'mergestat.com/mergestat-lite' as const,
}

export type MergestatPackage = typeof mergestatPackage
