/**
 * **ijg.org** - pkgx package
 *
 * @domain `ijg.org`
 *
 * @install `launchpad install ijg.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ijgorg
 * console.log(pkg.name)        // "ijg.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ijg-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ijgorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'ijg.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ijg.org' as const,
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
  installCommand: 'launchpad install ijg.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +ijg.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ijg.org' as const,
}

export type IjgorgPackage = typeof ijgorgPackage
