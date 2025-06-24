/**
 * **glow** - Package from pantry: charm.sh/glow
 *
 * @domain `charm.sh/glow`
 *
 * @install `launchpad install charm.sh/glow`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.charmshglow
 * console.log(pkg.name)        // "glow"
 * console.log(pkg.description) // "Package from pantry: charm.sh/glow"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/charm-sh/glow.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const charmshglowPackage = {
  /**
   * The display name of this package.
   */
  name: 'glow' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'charm.sh/glow' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: charm.sh/glow' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install charm.sh/glow' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +charm.sh/glow -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install charm.sh/glow' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/charm.sh/glow/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CharmshglowPackage = typeof charmshglowPackage
