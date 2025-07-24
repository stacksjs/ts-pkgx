/**
 * **upx** - UPX - the Ultimate Packer for eXecutables
 *
 * @domain `upx.github.io`
 * @programs `upx`
 * @version `5.0.2` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install upx`
 * @name `upx`
 * @dependencies `zlib.net`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.upx
 * // Or access via domain
 * const samePkg = pantry.upxgithubio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "upx"
 * console.log(pkg.description) // "UPX - the Ultimate Packer for eXecutables"
 * console.log(pkg.programs)    // ["upx"]
 * console.log(pkg.versions[0]) // "5.0.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/upx-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const upxPackage = {
  /**
   * The display name of this package.
   */
  name: 'upx' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'upx.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'UPX - the Ultimate Packer for eXecutables' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/upx.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install upx' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'upx',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.0.2',
    '5.0.1',
    '5.0.0',
    '4.2.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) upx -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install upx' as const,
}

export type UpxPackage = typeof upxPackage
