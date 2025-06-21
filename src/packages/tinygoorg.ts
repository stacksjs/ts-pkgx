/**
 * **tinygo.org** - Package from pantry: tinygo.org
 *
 * @domain `tinygo.org`
 *
 * @install `launchpad install tinygo.org`
 * @dependencies `go.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tinygoorg
 * console.log(pkg.name)        // "tinygo.org"
 * console.log(pkg.description) // "Package from pantry: tinygo.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tinygo-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tinygoorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'tinygo.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tinygo.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: tinygo.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tinygo.org' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tinygo.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TinygoorgPackage = typeof tinygoorgPackage
