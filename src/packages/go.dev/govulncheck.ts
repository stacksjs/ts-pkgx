/**
 * **govulncheck** - Package from pantry: go.dev/govulncheck
 *
 * @domain `go.dev/govulncheck`
 *
 * @install `launchpad install go.dev/govulncheck`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.godevgovulncheck
 * console.log(pkg.name)        // "govulncheck"
 * console.log(pkg.description) // "Package from pantry: go.dev/govulncheck"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/go-dev/govulncheck.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const godevgovulncheckPackage = {
  /**
   * The display name of this package.
   */
  name: 'govulncheck' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'go.dev/govulncheck' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: go.dev/govulncheck' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install go.dev/govulncheck' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +go.dev/govulncheck -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install go.dev/govulncheck' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/go.dev/govulncheck/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GodevgovulncheckPackage = typeof godevgovulncheckPackage
