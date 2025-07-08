/**
 * **golangci-lint.run** - Package from pantry: golangci-lint.run
 *
 * @domain `golangci-lint.run`
 *
 * @install `launchpad install golangci-lint.run`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.golangcilintrun
 * console.log(pkg.name)        // "golangci-lint.run"
 * console.log(pkg.description) // "Package from pantry: golangci-lint.run"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/golangci-lint-run.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const golangcilintrunPackage = {
  /**
   * The display name of this package.
   */
  name: 'golangci-lint.run' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'golangci-lint.run' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: golangci-lint.run' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install golangci-lint.run' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +golangci-lint.run -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install golangci-lint.run' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/golangci-lint.run/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GolangcilintrunPackage = typeof golangcilintrunPackage
