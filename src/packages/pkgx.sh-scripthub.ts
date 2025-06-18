/**
 * **scripthub** - Programs
 *
 * @domain `pkgx.sh/scripthub`
 * @version `0.1.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/pkgx-sh/scripthub.md
 *
 * @install `sh <(curl https://pkgx.sh) +pkgx.sh/scripthub sh`
 * @aliases `scripthub`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.scripthub
 * // Or access via domain
 * const samePkg = pantry.pkgxshscripthub
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pkgx.sh/scripthub"
 * console.log(pkg.description) // "Programs"
 * console.log(pkg.versions[0]) // "0.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pkgx-sh/scripthub.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const scripthubPackage = {
  /**
   * The display name of this package.
   */
  name: 'pkgx.sh/scripthub' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pkgx.sh/scripthub' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Programs' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pkgx.sh/scripthub/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +pkgx.sh/scripthub sh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'scripthub',
  ] as const,
  fullPath: 'pkgx.sh/scripthub' as const,
}

export type ScripthubPackage = typeof scripthubPackage
