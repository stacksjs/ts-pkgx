/**
 * **android.com/cmdline-tools** - pkgx package
 *
 * @domain `android.com/cmdline/tools`
 *
 * @install `pkgx android.com/cmdline-tools`
 * @name `cmdline-tools`
 * @aliases `android.com/cmdline-tools`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.androidcomcmdlinetools
 * // Or access via domain
 * const samePkg = pantry.androidcomcmdlinetools
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cmdline-tools"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/android-com/cmdline/tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const androidcomcmdlinetoolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'cmdline-tools' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'android.com/cmdline/tools' as const,
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
  installCommand: 'pkgx android.com/cmdline-tools' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'android.com/cmdline-tools',
  ] as const,
  fullPath: 'android.com/cmdline-tools' as const,
}

export type AndroidcomcmdlinetoolsPackage = typeof androidcomcmdlinetoolsPackage
