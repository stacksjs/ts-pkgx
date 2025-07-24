/**
 * **augeas.net** - Package from pantry: augeas.net
 *
 * @domain `augeas.net`
 *
 * @install `launchpad install augeas.net`
 * @dependencies `gnu.org/readline`, `gnome.org/libxml2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.augeasnet
 * console.log(pkg.name)        // "augeas.net"
 * console.log(pkg.description) // "Package from pantry: augeas.net"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/augeas-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const augeasnetPackage = {
  /**
   * The display name of this package.
   */
  name: 'augeas.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'augeas.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: augeas.net' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install augeas.net' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +augeas.net -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install augeas.net' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/readline',
    'gnome.org/libxml2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/augeas.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AugeasnetPackage = typeof augeasnetPackage
