/**
 * **ninja-build.org** - Package from pantry: ninja-build.org
 *
 * @domain `ninja-build.org`
 *
 * @install `launchpad install ninja-build.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ninjabuildorg
 * console.log(pkg.name)        // "ninja-build.org"
 * console.log(pkg.description) // "Package from pantry: ninja-build.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ninja-build-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ninjabuildorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'ninja-build.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ninja-build.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ninja-build.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ninja-build.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +ninja-build.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ninja-build.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ninja-build.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NinjabuildorgPackage = typeof ninjabuildorgPackage
