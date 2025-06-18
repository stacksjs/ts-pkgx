/**
 * **github.com/cpuguy83/go-md2man** - pkgx package
 *
 * @domain `github.com/cpuguy83/go/md2man`
 *
 * @install `pkgx github.com/cpuguy83/go-md2man`
 * @aliases `github.com/cpuguy83/go-md2man`, `cpuguy83/go-md2man`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomcpuguy83gomd2man
 * // Or access via domain
 * const samePkg = pantry.githubcomcpuguy83gomd2man
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cpuguy83"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cpuguy83/go/md2man.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcpuguy83gomd2manPackage = {
  /**
   * The display name of this package.
   */
  name: 'cpuguy83' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cpuguy83/go/md2man' as const,
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
  installCommand: 'pkgx github.com/cpuguy83/go-md2man' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/cpuguy83/go-md2man',
    'cpuguy83/go-md2man',
  ] as const,
  fullPath: 'github.com/cpuguy83/go-md2man' as const,
}

export type Githubcomcpuguy83gomd2manPackage = typeof githubcomcpuguy83gomd2manPackage
