/**
 * **stress-ng** - Package from pantry: github.com/ColinIanKing/stress-ng
 *
 * @domain `github.com/ColinIanKing/stress-ng`
 *
 * @install `launchpad install github.com/ColinIanKing/stress-ng`
 * @dependencies `github.com/besser82/libxcrypt`, `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcoliniankingstressng
 * console.log(pkg.name)        // "stress-ng"
 * console.log(pkg.description) // "Package from pantry: github.com/ColinIanKing/st..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ColinIanKing/stress-ng.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcoliniankingstressngPackage = {
  /**
   * The display name of this package.
   */
  name: 'stress-ng' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ColinIanKing/stress-ng' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/ColinIanKing/stress-ng' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/ColinIanKing/stress-ng' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/ColinIanKing/stress-ng -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/ColinIanKing/stress-ng' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/besser82/libxcrypt',
    'zlib.net',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ColinIanKing/stress-ng/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomcoliniankingstressngPackage = typeof githubcomcoliniankingstressngPackage
