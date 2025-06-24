/**
 * **edencommon** - Package from pantry: facebook.com/edencommon
 *
 * @domain `facebook.com/edencommon`
 *
 * @install `launchpad install facebook.com/edencommon`
 * @dependencies `facebook.com/folly`, `gflags.github.io`, `google.com/glog`, ... (+6 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.facebookcomedencommon
 * console.log(pkg.name)        // "edencommon"
 * console.log(pkg.description) // "Package from pantry: facebook.com/edencommon"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/facebook-com/edencommon.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const facebookcomedencommonPackage = {
  /**
   * The display name of this package.
   */
  name: 'edencommon' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'facebook.com/edencommon' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: facebook.com/edencommon' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install facebook.com/edencommon' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +facebook.com/edencommon -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install facebook.com/edencommon' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'facebook.com/folly',
    'gflags.github.io',
    'google.com/glog',
    'facebook.com/fb303',
    'facebook.com/mvfst',
    'openssl.org^1.1',
    'sourceware.org/bzip2^1',
    'boost.org~1.88',
    'linux:gnu.org/gcc/libstdcxx@13',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/edencommon/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FacebookcomedencommonPackage = typeof facebookcomedencommonPackage
