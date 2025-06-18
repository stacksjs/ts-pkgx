/**
 * **pkgx.sh/** - pkgx package
 *
 * @domain `pkgx.sh`
 *
 * @install `pkgx pkgx.sh/`
 * @aliases ``
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pkgxsh
 * console.log(pkg.name)        // "pkgx.sh/"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pkgx-sh/.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pkgxshPackage = {
  /**
   * The display name of this package.
   */
  name: 'pkgx.sh/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pkgx.sh' as const,
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
  installCommand: 'pkgx pkgx.sh/' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '',
  ] as const,
  fullPath: 'pkgx.sh/' as const,
}

export type PkgxshPackage = typeof pkgxshPackage
