/**
 * **@ekzhang/bore** - Programs
 *
 * @domain `github.com/ekzhang/bore`
 * @version `0.5.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/ekzhang/bore sh`
 * @name `@ekzhang/bore`
 * @aliases `ekzhang/bore`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.ekzhangbore
 * // Or access via domain
 * const samePkg = pantry.githubcomekzhangbore
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "@ekzhang/bore"
 * console.log(pkg.description) // "Programs"
 * console.log(pkg.versions[0]) // "0.5.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ekzhang/bore.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ekzhangborePackage = {
  /**
   * The display name of this package.
   */
  name: '@ekzhang/bore' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ekzhang/bore' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Programs' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ekzhang/bore/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/ekzhang/bore sh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'ekzhang/bore',
  ] as const,
  fullPath: 'github.com/ekzhang/bore' as const,
}

export type EkzhangborePackage = typeof ekzhangborePackage
