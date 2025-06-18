/**
 * **github.com/10gic/vanitygen-plusplus** - pkgx package
 *
 * @domain `github.com/10gic/vanitygen/plusplus`
 *
 * @install `pkgx github.com/10gic/vanitygen-plusplus`
 * @aliases `github.com/10gic/vanitygen-plusplus`, `10gic/vanitygen-plusplus`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcom10gicvanitygenplusplus
 * // Or access via domain
 * const samePkg = pantry.githubcom10gicvanitygenplusplus
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "10gic"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/10gic/vanitygen/plusplus.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcom10gicvanitygenplusplusPackage = {
  /**
   * The display name of this package.
   */
  name: '10gic' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/10gic/vanitygen/plusplus' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/10gic/vanitygen-plusplus' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/10gic/vanitygen-plusplus',
    '10gic/vanitygen-plusplus',
  ] as const,
  fullPath: 'github.com/10gic/vanitygen-plusplus' as const,
}

export type Githubcom10gicvanitygenplusplusPackage = typeof githubcom10gicvanitygenplusplusPackage
