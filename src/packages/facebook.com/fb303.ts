/**
 * **fb303** - Package from pantry: facebook.com/fb303
 *
 * @domain `facebook.com/fb303`
 *
 * @install `launchpad install facebook.com/fb303`
 * @dependencies `github.com/facebookincubator/fizz`, `facebook.com/wangle`, `facebook.com/folly`, ... (+9 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.facebookcomfb303
 * console.log(pkg.name)        // "fb303"
 * console.log(pkg.description) // "Package from pantry: facebook.com/fb303"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/facebook-com/fb303.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const facebookcomfb303Package = {
  /**
   * The display name of this package.
   */
  name: 'fb303' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'facebook.com/fb303' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: facebook.com/fb303' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install facebook.com/fb303' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +facebook.com/fb303 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install facebook.com/fb303' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'github.com/facebookincubator/fizz',
    'facebook.com/wangle',
    'facebook.com/folly',
    'facebook.com/fbthrift>=2023.12.18.0',
    'fmt.dev^10',
    'gflags.github.io^2.2.2',
    'google.com/glog^0.6',
    'libsodium.org^1.0.19',
    'openssl.org^1.1',
    'github.com/Cyan4973/xxHash^0.8 # since 2024.10.14.0',
    'linux:zlib.net^1',
    'linux:gnu.org/gcc/libstdcxx@13',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/facebook.com/fb303/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Facebookcomfb303Package = typeof facebookcomfb303Package
