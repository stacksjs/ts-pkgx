/**
 * **gqlgen.com** - Package from pantry: gqlgen.com
 *
 * @domain `gqlgen.com`
 *
 * @install `launchpad install gqlgen.com`
 * @dependencies `go.dev^1.18`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gqlgencom
 * console.log(pkg.name)        // "gqlgen.com"
 * console.log(pkg.description) // "Package from pantry: gqlgen.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gqlgen-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gqlgencomPackage = {
  /**
   * The display name of this package.
   */
  name: 'gqlgen.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gqlgen.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: gqlgen.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install gqlgen.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.18',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gqlgen.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GqlgencomPackage = typeof gqlgencomPackage
