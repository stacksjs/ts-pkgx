/**
 * **github.com/Everduin94/better-commits** - pkgx package
 *
 * @domain `github.com/Everduin94/better/commits`
 *
 * @install `pkgx github.com/Everduin94/better-commits`
 * @aliases `github.com/Everduin94/better-commits`, `Everduin94/better-commits`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomEverduin94bettercommits
 * // Or access via domain
 * const samePkg = pantry.githubcomeverduin94bettercommits
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "Everduin94"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Everduin94/better/commits.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomEverduin94bettercommitsPackage = {
  /**
   * The display name of this package.
   */
  name: 'Everduin94' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Everduin94/better/commits' as const,
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
  installCommand: 'pkgx github.com/Everduin94/better-commits' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/Everduin94/better-commits',
    'Everduin94/better-commits',
  ] as const,
  fullPath: 'github.com/Everduin94/better-commits' as const,
}

export type GithubcomEverduin94bettercommitsPackage = typeof githubcomEverduin94bettercommitsPackage
