/**
 * **crates.io/rucola-notes** - pkgx package
 *
 * @domain `crates.io/rucola/notes`
 *
 * @install `pkgx crates.io/rucola-notes`
 * @name `rucola-notes`
 * @aliases `crates.io/rucola-notes`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiorucolanotes
 * // Or access via domain
 * const samePkg = pantry.cratesiorucolanotes
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rucola-notes"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/rucola/notes.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiorucolanotesPackage = {
  /**
   * The display name of this package.
   */
  name: 'rucola-notes' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/rucola/notes' as const,
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
  installCommand: 'pkgx crates.io/rucola-notes' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/rucola-notes',
  ] as const,
  fullPath: 'crates.io/rucola-notes' as const,
}

export type CratesiorucolanotesPackage = typeof cratesiorucolanotesPackage
