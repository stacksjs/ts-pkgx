/**
 * **gum** - Package from pantry: charm.sh/gum
 *
 * @domain `charm.sh/gum`
 *
 * @install `launchpad install charm.sh/gum`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.charmshgum
 * console.log(pkg.name)        // "gum"
 * console.log(pkg.description) // "Package from pantry: charm.sh/gum"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/charm-sh/gum.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const charmshgumPackage = {
  /**
   * The display name of this package.
   */
  name: 'gum' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'charm.sh/gum' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: charm.sh/gum' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install charm.sh/gum' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +charm.sh/gum -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install charm.sh/gum' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/charm.sh/gum/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CharmshgumPackage = typeof charmshgumPackage
