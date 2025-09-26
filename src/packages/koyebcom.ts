/**
 * **koyeb.com** - pkgx package
 *
 * @domain `koyeb.com`
 *
 * @install `launchpad install koyeb.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.koyebcom
 * console.log(pkg.name)        // "koyeb.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/koyeb-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const koyebcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'koyeb.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'koyeb.com' as const,
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
  installCommand: 'launchpad install koyeb.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +koyeb.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install koyeb.com' as const,
}

export type KoyebcomPackage = typeof koyebcomPackage
