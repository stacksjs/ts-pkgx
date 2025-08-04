/**
 * **cbindgen** - Package from pantry: mozilla.org/cbindgen
 *
 * @domain `mozilla.org/cbindgen`
 *
 * @install `launchpad install mozilla.org/cbindgen`
 * @dependencies `linux:llvm.org` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mozillaorgcbindgen
 * console.log(pkg.name)        // "cbindgen"
 * console.log(pkg.description) // "Package from pantry: mozilla.org/cbindgen"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mozilla-org/cbindgen.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mozillaorgcbindgenPackage = {
  /**
   * The display name of this package.
   */
  name: 'cbindgen' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mozilla.org/cbindgen' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mozilla.org/cbindgen' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mozilla.org/cbindgen' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mozilla.org/cbindgen -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mozilla.org/cbindgen' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:llvm.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mozilla.org/cbindgen/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MozillaorgcbindgenPackage = typeof mozillaorgcbindgenPackage
