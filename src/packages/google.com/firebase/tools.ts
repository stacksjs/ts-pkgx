/**
 * **google.com/firebase-tools** - pkgx package
 *
 * @domain `google.com/firebase/tools`
 *
 * @install `pkgx google.com/firebase-tools`
 * @name `firebase-tools`
 * @aliases `google.com/firebase-tools`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.googlecomfirebasetools
 * // Or access via domain
 * const samePkg = pantry.googlecomfirebasetools
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "firebase-tools"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/firebase/tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const googlecomfirebasetoolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'firebase-tools' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/firebase/tools' as const,
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
  installCommand: 'pkgx google.com/firebase-tools' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'google.com/firebase-tools',
  ] as const,
  fullPath: 'google.com/firebase-tools' as const,
}

export type GooglecomfirebasetoolsPackage = typeof googlecomfirebasetoolsPackage
