/**
 * **turso.tech** - Package from pantry: turso.tech
 *
 * @domain `turso.tech`
 *
 * @install `launchpad install turso.tech`
 * @dependencies `go.dev^1.20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tursotech
 * console.log(pkg.name)        // "turso.tech"
 * console.log(pkg.description) // "Package from pantry: turso.tech"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/turso-tech.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tursotechPackage = {
  /**
   * The display name of this package.
   */
  name: 'turso.tech' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'turso.tech' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: turso.tech' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install turso.tech' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.20',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/turso.tech/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TursotechPackage = typeof tursotechPackage
