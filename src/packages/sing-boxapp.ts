/**
 * **sing-box.app** - Package from pantry: sing-box.app
 *
 * @domain `sing-box.app`
 *
 * @install `launchpad install sing-box.app`
 * @dependencies `go.dev^1.20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.singboxapp
 * console.log(pkg.name)        // "sing-box.app"
 * console.log(pkg.description) // "Package from pantry: sing-box.app"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sing-box-app.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const singboxappPackage = {
  /**
   * The display name of this package.
   */
  name: 'sing-box.app' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sing-box.app' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sing-box.app' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install sing-box.app' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sing-box.app/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SingboxappPackage = typeof singboxappPackage
