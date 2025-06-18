/**
 * **json** - A fast streaming JSON parsing library in C.
 *
 * @domain `lloyd.github.io/yajl`
 * @programs `json_reformat`, `json_verify`
 * @version `2.1.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +lloyd.github.io/yajl -- $SHELL -i`
 * @aliases `json`
 * @dependencies `cmake.org`, `gnu.org/gcc`, `gnu.org/make`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.json
 * // Or access via domain
 * const samePkg = pantry.lloydgithubioyajl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "yajl"
 * console.log(pkg.description) // "A fast streaming JSON parsing library in C."
 * console.log(pkg.programs)    // ["json_reformat", "json_verify"]
 * console.log(pkg.versions[0]) // "2.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lloyd-github-io/yajl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jsonPackage = {
  /**
   * The display name of this package.
   */
  name: 'yajl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lloyd.github.io/yajl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A fast streaming JSON parsing library in C.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lloyd.github.io/yajl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +lloyd.github.io/yajl -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'json_reformat',
    'json_verify',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cmake.org',
    'gnu.org/gcc',
    'gnu.org/make',
    'freedesktop.org/pkg-config',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'json',
  ] as const,
}

export type JsonPackage = typeof jsonPackage
