/**
 * **logdy.dev** - Package from pantry: logdy.dev
 *
 * @domain `logdy.dev`
 *
 * @install `launchpad install logdy.dev`
 * @dependencies `go.dev^1.21.4`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.logdydev
 * console.log(pkg.name)        // "logdy.dev"
 * console.log(pkg.description) // "Package from pantry: logdy.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/logdy-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const logdydevPackage = {
  /**
   * The display name of this package.
   */
  name: 'logdy.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'logdy.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: logdy.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install logdy.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.21.4',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/logdy.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LogdydevPackage = typeof logdydevPackage
