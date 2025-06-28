/**
 * **faac** - Package from pantry: sourceforge.net/faac
 *
 * @domain `sourceforge.net/faac`
 *
 * @install `launchpad install sourceforge.net/faac`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sourceforgenetfaac
 * console.log(pkg.name)        // "faac"
 * console.log(pkg.description) // "Package from pantry: sourceforge.net/faac"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/faac.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sourceforgenetfaacPackage = {
  /**
   * The display name of this package.
   */
  name: 'faac' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceforge.net/faac' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sourceforge.net/faac' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sourceforge.net/faac' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +sourceforge.net/faac -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sourceforge.net/faac' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/faac/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SourceforgenetfaacPackage = typeof sourceforgenetfaacPackage
