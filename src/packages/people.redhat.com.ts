/**
 * **people.redhat.com** - Go home.
 *
 * @domain `people.redhat.com`
 *
 * @install `pkgx people.redhat.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.peopleredhatcom
 * console.log(pkg.name)        // "people.redhat.com"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/people-redhat-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const peopleredhatcomPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/people.redhat.com/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'people.redhat.com' as const,
  fullPath: 'people.redhat.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx people.redhat.com' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PeopleredhatcomPackage = typeof peopleredhatcomPackage
