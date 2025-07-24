/**
 * **skate** - Package from pantry: charm.sh/skate
 *
 * @domain `charm.sh/skate`
 *
 * @install `launchpad install charm.sh/skate`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.charmshskate
 * console.log(pkg.name)        // "skate"
 * console.log(pkg.description) // "Package from pantry: charm.sh/skate"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/charm-sh/skate.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const charmshskatePackage = {
  /**
   * The display name of this package.
   */
  name: 'skate' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'charm.sh/skate' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: charm.sh/skate' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install charm.sh/skate' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +charm.sh/skate -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install charm.sh/skate' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/charm.sh/skate/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CharmshskatePackage = typeof charmshskatePackage
