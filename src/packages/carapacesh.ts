/**
 * **carapace.sh** - Package from pantry: carapace.sh
 *
 * @domain `carapace.sh`
 *
 * @install `launchpad install carapace.sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.carapacesh
 * console.log(pkg.name)        // "carapace.sh"
 * console.log(pkg.description) // "Package from pantry: carapace.sh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/carapace-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const carapaceshPackage = {
  /**
   * The display name of this package.
   */
  name: 'carapace.sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'carapace.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: carapace.sh' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install carapace.sh' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +carapace.sh -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install carapace.sh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/carapace.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CarapaceshPackage = typeof carapaceshPackage
