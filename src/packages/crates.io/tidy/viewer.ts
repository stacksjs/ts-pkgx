/**
 * **crates.io/tidy-viewer** - pkgx package
 *
 * @domain `crates.io/tidy/viewer`
 *
 * @install `pkgx crates.io/tidy-viewer`
 * @name `tidy-viewer`
 * @aliases `crates.io/tidy-viewer`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiotidyviewer
 * // Or access via domain
 * const samePkg = pantry.cratesiotidyviewer
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tidy-viewer"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/tidy/viewer.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiotidyviewerPackage = {
  /**
   * The display name of this package.
   */
  name: 'tidy-viewer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/tidy/viewer' as const,
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
  installCommand: 'pkgx crates.io/tidy-viewer' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/tidy-viewer',
  ] as const,
  fullPath: 'crates.io/tidy-viewer' as const,
}

export type CratesiotidyviewerPackage = typeof cratesiotidyviewerPackage
