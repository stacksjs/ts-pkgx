/**
 * **tea-pub.key** - pkgx package
 *
 * @domain `tea-pub.key`
 *
 * @install `pkgx tea-pub.key`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.teapubkey
 * console.log(pkg.name)        // "tea-pub.key"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tea-pub-key.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const teapubkeyPackage = {
  /**
   * The display name of this package.
   */
  name: 'tea-pub.key' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tea-pub.key' as const,
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
  installCommand: 'pkgx tea-pub.key' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  fullPath: 'tea-pub.key' as const,
}

export type TeapubkeyPackage = typeof teapubkeyPackage
