/**
 * **juju.is** - Package from pantry: juju.is
 *
 * @domain `juju.is`
 *
 * @install `launchpad install juju.is`
 * @dependencies `go.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jujuis
 * console.log(pkg.name)        // "juju.is"
 * console.log(pkg.description) // "Package from pantry: juju.is"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/juju-is.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jujuisPackage = {
  /**
   * The display name of this package.
   */
  name: 'juju.is' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'juju.is' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: juju.is' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install juju.is' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/juju.is/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type JujuisPackage = typeof jujuisPackage
