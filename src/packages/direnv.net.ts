/**
 * **direnv** - Load/unload environment variables based on $PWD
 *
 * @domain `direnv.net`
 * @programs `direnv`
 * @version `2.36.0` (6 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/direnv-net.md
 * @install `sh <(curl https://pkgx.sh) direnv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.direnvnet
 * console.log(pkg.name)        // "direnv"
 * console.log(pkg.description) // "Load/unload environment variables based on $PWD"
 * console.log(pkg.programs)    // ["direnv"]
 * console.log(pkg.versions[0]) // "2.36.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/direnv-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const direnvnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'direnv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'direnv.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Load/unload environment variables based on $PWD' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/direnv.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) direnv' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'direnv',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.36.0',
    '2.35.0',
    '2.34.0',
    '2.33.0',
    '2.32.3',
    '2.32.2',
  ] as const,
  fullPath: 'direnv.net' as const,
  aliases: [] as const,
}

export type DirenvnetPackage = typeof direnvnetPackage
