/**
 * **mkcert.dev** - Package from pantry: mkcert.dev
 *
 * @domain `mkcert.dev`
 *
 * @install `launchpad install mkcert.dev`
 * @dependencies `go.dev^1.18`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mkcertdev
 * console.log(pkg.name)        // "mkcert.dev"
 * console.log(pkg.description) // "Package from pantry: mkcert.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mkcert-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mkcertdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'mkcert.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mkcert.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mkcert.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install mkcert.dev' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mkcert.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MkcertdevPackage = typeof mkcertdevPackage
