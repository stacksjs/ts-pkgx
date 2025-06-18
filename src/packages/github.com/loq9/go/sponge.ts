/**
 * **github.com/loq9/go-sponge** - pkgx package
 *
 * @domain `github.com/loq9/go/sponge`
 *
 * @install `pkgx github.com/loq9/go-sponge`
 * @aliases `github.com/loq9/go-sponge`, `loq9/go-sponge`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcomloq9gosponge
 * // Or access via domain
 * const samePkg = pantry.githubcomloq9gosponge
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "loq9"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/loq9/go/sponge.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomloq9gospongePackage = {
  /**
   * The display name of this package.
   */
  name: 'loq9' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/loq9/go/sponge' as const,
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
  installCommand: 'pkgx github.com/loq9/go-sponge' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/loq9/go-sponge',
    'loq9/go-sponge',
  ] as const,
  fullPath: 'github.com/loq9/go-sponge' as const,
}

export type Githubcomloq9gospongePackage = typeof githubcomloq9gospongePackage
