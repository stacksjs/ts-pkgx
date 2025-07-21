/**
 * **girara** - Package from pantry: pwmt.org/girara
 *
 * @domain `pwmt.org/girara`
 *
 * @install `launchpad install pwmt.org/girara`
 * @dependencies `gtk.org/gtk3@3`, `gnome.org/glib^2.72`, `gnome.org/json-glib^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pwmtorggirara
 * console.log(pkg.name)        // "girara"
 * console.log(pkg.description) // "Package from pantry: pwmt.org/girara"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pwmt-org/girara.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pwmtorggiraraPackage = {
  /**
   * The display name of this package.
   */
  name: 'girara' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pwmt.org/girara' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pwmt.org/girara' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pwmt.org/girara' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pwmt.org/girara -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pwmt.org/girara' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gtk.org/gtk3@3',
    'gnome.org/glib^2.72',
    'gnome.org/json-glib^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pwmt.org/girara/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PwmtorggiraraPackage = typeof pwmtorggiraraPackage
