/**
 * **mvfst** - Package from pantry: facebook.com/mvfst
 *
 * @domain `facebook.com/mvfst`
 *
 * @install `launchpad install facebook.com/mvfst`
 * @dependencies `boost.org`, `github.com/facebookincubator/fizz`, `fmt.dev^10`, ... (+6 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.facebookcommvfst
 * console.log(pkg.name)        // "mvfst"
 * console.log(pkg.description) // "Package from pantry: facebook.com/mvfst"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/facebook-com/mvfst.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const facebookcommvfstPackage = {
  /**
   * The display name of this package.
   */
  name: 'mvfst' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'facebook.com/mvfst' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: facebook.com/mvfst' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install facebook.com/mvfst' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +facebook.com/mvfst -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install facebook.com/mvfst' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'boost.org',
    'github.com/facebookincubator/fizz',
    'fmt.dev^10',
    'facebook.com/folly',
    'gflags.github.io',
    'google.com/glog',
    'openssl.org',
    'linux:libsodium.org^1.0.19',
    'linux:gnu.org/gcc/libstdcxx@13',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/mvfst/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FacebookcommvfstPackage = typeof facebookcommvfstPackage
