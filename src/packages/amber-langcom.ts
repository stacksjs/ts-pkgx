/**
 * **amber-lang.com** - pkgx package
 *
 * @domain `amber-lang.com`
 *
 * @install `launchpad install amber-lang.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.amberlangcom
 * console.log(pkg.name)        // "amber-lang.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/amber-lang-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const amberlangcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'amber-lang.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'amber-lang.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install amber-lang.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +amber-lang.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install amber-lang.com' as const,
}

export type AmberlangcomPackage = typeof amberlangcomPackage
