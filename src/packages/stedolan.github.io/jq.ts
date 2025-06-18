/**
 * **jq** - Lightweight and flexible command-line JSON processor
 *
 * @domain `stedolan.github.io/jq`
 * @programs `jq`
 * @version `1.8.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install jq`
 * @name `jq`
 * @dependencies `github.com/kkos/oniguruma@6`, `git-scm.org@2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.jq
 * // Or access via domain
 * const samePkg = pantry.stedolangithubiojq
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jq"
 * console.log(pkg.description) // "Lightweight and flexible command-line JSON proc..."
 * console.log(pkg.programs)    // ["jq"]
 * console.log(pkg.versions[0]) // "1.8.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/stedolan-github-io/jq.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jqPackage = {
  /**
   * The display name of this package.
   */
  name: 'jq' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'stedolan.github.io/jq' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Lightweight and flexible command-line JSON processor' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/stedolan.github.io/jq/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install jq' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'jq',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/kkos/oniguruma@6',
    'git-scm.org@2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.8.0',
    '1.7.1',
    '1.7.0',
    '1.6.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type JqPackage = typeof jqPackage
