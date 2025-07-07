/**
 * **xauth** - Package from pantry: x.org/xauth
 *
 * @domain `x.org/xauth`
 *
 * @install `launchpad install x.org/xauth`
 * @dependencies `x.org/x11`, `x.org/exts`, `x.org/xau`, ... (+3 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxauth
 * console.log(pkg.name)        // "xauth"
 * console.log(pkg.description) // "Package from pantry: x.org/xauth"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xauth.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxauthPackage = {
  /**
   * The display name of this package.
   */
  name: 'xauth' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xauth' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xauth' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xauth' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/xauth -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/xauth' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'x.org/x11',
    'x.org/exts',
    'x.org/xau',
    'x.org/xmu',
    'linux:x.org/xcb',
    'linux:x.org/xdmcp',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xauth/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxauthPackage = typeof xorgxauthPackage
