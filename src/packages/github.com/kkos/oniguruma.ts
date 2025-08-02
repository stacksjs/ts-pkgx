/**
 * **oniguruma** - Package from pantry: github.com/kkos/oniguruma
 *
 * @domain `github.com/kkos/oniguruma`
 *
 * @install `launchpad install github.com/kkos/oniguruma`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomkkosoniguruma
 * console.log(pkg.name)        // "oniguruma"
 * console.log(pkg.description) // "Package from pantry: github.com/kkos/oniguruma"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kkos/oniguruma.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomkkosonigurumaPackage = {
  /**
   * The display name of this package.
   */
  name: 'oniguruma' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kkos/oniguruma' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/kkos/oniguruma' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/kkos/oniguruma' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/kkos/oniguruma -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/kkos/oniguruma' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kkos/oniguruma/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomkkosonigurumaPackage = typeof githubcomkkosonigurumaPackage
