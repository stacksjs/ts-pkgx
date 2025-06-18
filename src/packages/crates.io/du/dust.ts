/**
 * **crates.io/du-dust** - pkgx package
 *
 * @domain `crates.io/du/dust`
 *
 * @install `pkgx crates.io/du-dust`
 * @name `du-dust`
 * @aliases `crates.io/du-dust`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiodudust
 * // Or access via domain
 * const samePkg = pantry.cratesiodudust
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "du-dust"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/du/dust.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiodudustPackage = {
  /**
   * The display name of this package.
   */
  name: 'du-dust' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/du/dust' as const,
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
  installCommand: 'pkgx crates.io/du-dust' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/du-dust',
  ] as const,
  fullPath: 'crates.io/du-dust' as const,
}

export type CratesiodudustPackage = typeof cratesiodudustPackage
