/**
 * **file** - Package from pantry: darwinsys.com/file
 *
 * @domain `darwinsys.com/file`
 *
 * @install `launchpad install darwinsys.com/file`
 * @dependencies `zlib.net^1 #FIXME this is actually an optional dep`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.darwinsyscomfile
 * console.log(pkg.name)        // "file"
 * console.log(pkg.description) // "Package from pantry: darwinsys.com/file"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/darwinsys-com/file.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const darwinsyscomfilePackage = {
  /**
   * The display name of this package.
   */
  name: 'file' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'darwinsys.com/file' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: darwinsys.com/file' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install darwinsys.com/file' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +darwinsys.com/file -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install darwinsys.com/file' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1 #FIXME this is actually an optional dep',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/darwinsys.com/file/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DarwinsyscomfilePackage = typeof darwinsyscomfilePackage
