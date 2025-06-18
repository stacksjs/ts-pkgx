/**
 * **libkml** - pkgx package
 *
 * @domain `github.com/libkml`
 *
 * @install `pkgx github.com/libkml`
 * @name `libkml`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.libkml
 * // Or access via domain
 * const samePkg = pantry.githubcomlibkml
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libkml"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/libkml.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libkmlPackage = {
  /**
   * The display name of this package.
   */
  name: 'libkml' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/libkml' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A package from github.com/libkml' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx github.com/libkml' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'github.com/libkml' as const,
}

export type LibkmlPackage = typeof libkmlPackage
