/**
 * **rarlab.com** - Package from pantry: rarlab.com
 *
 * @domain `rarlab.com`
 *
 * @install `launchpad install rarlab.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rarlabcom
 * console.log(pkg.name)        // "rarlab.com"
 * console.log(pkg.description) // "Package from pantry: rarlab.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rarlab-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rarlabcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'rarlab.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rarlab.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rarlab.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rarlab.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +rarlab.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install rarlab.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rarlab.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RarlabcomPackage = typeof rarlabcomPackage
