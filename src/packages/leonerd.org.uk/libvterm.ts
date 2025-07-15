/**
 * **libvterm** - Package from pantry: leonerd.org.uk/libvterm
 *
 * @domain `leonerd.org.uk/libvterm`
 *
 * @install `launchpad install leonerd.org.uk/libvterm`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.leonerdorguklibvterm
 * console.log(pkg.name)        // "libvterm"
 * console.log(pkg.description) // "Package from pantry: leonerd.org.uk/libvterm"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/leonerd-org-uk/libvterm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const leonerdorguklibvtermPackage = {
  /**
   * The display name of this package.
   */
  name: 'libvterm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'leonerd.org.uk/libvterm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: leonerd.org.uk/libvterm' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install leonerd.org.uk/libvterm' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +leonerd.org.uk/libvterm -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install leonerd.org.uk/libvterm' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/leonerd.org.uk/libvterm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LeonerdorguklibvtermPackage = typeof leonerdorguklibvtermPackage
