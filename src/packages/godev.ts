/**
 * **go.dev** - Package from pantry: go.dev
 *
 * @domain `go.dev`
 *
 * @install `launchpad install go.dev`
 * @dependencies `openssl.org^1  # for ca-certificates`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.godev
 * console.log(pkg.name)        // "go.dev"
 * console.log(pkg.description) // "Package from pantry: go.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/go-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const godevPackage = {
  /**
   * The display name of this package.
   */
  name: 'go.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'go.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: go.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install go.dev' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +go.dev -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install go.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1  # for ca-certificates',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/go.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GodevPackage = typeof godevPackage
