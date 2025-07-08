/**
 * **mockgen** - Package from pantry: go.uber.org/mock/mockgen
 *
 * @domain `go.uber.org/mock/mockgen`
 *
 * @install `launchpad install go.uber.org/mock/mockgen`
 * @dependencies `go.dev^1.20`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gouberorgmockmockgen
 * console.log(pkg.name)        // "mockgen"
 * console.log(pkg.description) // "Package from pantry: go.uber.org/mock/mockgen"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/go-uber-org/mock/mockgen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gouberorgmockmockgenPackage = {
  /**
   * The display name of this package.
   */
  name: 'mockgen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'go.uber.org/mock/mockgen' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: go.uber.org/mock/mockgen' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install go.uber.org/mock/mockgen' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +go.uber.org/mock/mockgen -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install go.uber.org/mock/mockgen' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/go.uber.org/mock/mockgen/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GouberorgmockmockgenPackage = typeof gouberorgmockmockgenPackage
