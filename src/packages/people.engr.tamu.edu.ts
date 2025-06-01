/**
 * **people.engr.tamu.edu** - Go home.
 *
 * @domain `people.engr.tamu.edu`
 *
 * @install `pkgx people.engr.tamu.edu`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.peopleengrtamuedu
 * console.log(pkg.name)        // "people.engr.tamu.edu"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/people-engr-tamu-edu.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const peopleengrtamueduPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/people.engr.tamu.edu/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'people.engr.tamu.edu' as const,
  fullPath: 'people.engr.tamu.edu' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx people.engr.tamu.edu' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PeopleengrtamueduPackage = typeof peopleengrtamueduPackage
