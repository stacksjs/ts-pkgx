/**
 * **github.com/mac-cain13/R.swift** - pkgx package
 *
 * @domain `github.com/mac/cain13/R.swift`
 *
 * @install `pkgx github.com/mac-cain13/R.swift`
 * @aliases `github.com/mac-cain13/R.swift`, `mac-cain13/R.swift`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.githubcommaccain13Rswift
 * // Or access via domain
 * const samePkg = pantry.githubcommaccain13rswift
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mac-cain13"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mac/cain13/R-swift.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommaccain13RswiftPackage = {
  /**
   * The display name of this package.
   */
  name: 'mac-cain13' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mac/cain13/R.swift' as const,
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
  installCommand: 'pkgx github.com/mac-cain13/R.swift' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'github.com/mac-cain13/R.swift',
    'mac-cain13/R.swift',
  ] as const,
  fullPath: 'github.com/mac-cain13/R.swift' as const,
}

export type Githubcommaccain13RswiftPackage = typeof githubcommaccain13RswiftPackage
