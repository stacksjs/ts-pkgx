/**
 * **libsmi** - Package from pantry: ibr.cs.tu-bs.de/libsmi
 *
 * @domain `ibr.cs.tu-bs.de/libsmi`
 *
 * @install `launchpad install ibr.cs.tu-bs.de/libsmi`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ibrcstubsdelibsmi
 * console.log(pkg.name)        // "libsmi"
 * console.log(pkg.description) // "Package from pantry: ibr.cs.tu-bs.de/libsmi"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ibr-cs-tu-bs-de/libsmi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ibrcstubsdelibsmiPackage = {
  /**
   * The display name of this package.
   */
  name: 'libsmi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ibr.cs.tu-bs.de/libsmi' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ibr.cs.tu-bs.de/libsmi' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ibr.cs.tu-bs.de/libsmi' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +ibr.cs.tu-bs.de/libsmi -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ibr.cs.tu-bs.de/libsmi' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ibr.cs.tu-bs.de/libsmi/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type IbrcstubsdelibsmiPackage = typeof ibrcstubsdelibsmiPackage
