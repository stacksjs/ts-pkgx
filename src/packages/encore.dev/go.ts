/**
 * **go** - Package from pantry: encore.dev/go
 *
 * @domain `encore.dev/go`
 *
 * @install `launchpad install encore.dev/go`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.encoredevgo
 * console.log(pkg.name)        // "go"
 * console.log(pkg.description) // "Package from pantry: encore.dev/go"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/encore-dev/go.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const encoredevgoPackage = {
  /**
   * The display name of this package.
   */
  name: 'go' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'encore.dev/go' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: encore.dev/go' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install encore.dev/go' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +encore.dev/go -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install encore.dev/go' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/encore.dev/go/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type EncoredevgoPackage = typeof encoredevgoPackage
