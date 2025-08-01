/**
 * **json** - A fast streaming JSON parsing library in C.
 *
 * @domain `lloyd.github.io/yajl`
 * @programs `json_reformat`, `json_verify`
 * @version `2.1.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install json`
 * @name `json`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.json
 * // Or access via domain
 * const samePkg = pantry.lloydgithubioyajl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "json"
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
  name: 'json' as const,
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install json' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'json_reformat',
    'json_verify',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
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
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +lloyd.github.io/yajl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install json' as const,
}

export type JsonPackage = typeof jsonPackage
