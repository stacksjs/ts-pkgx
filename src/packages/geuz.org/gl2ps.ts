/**
 * **geuz.org/gl2ps** - pkgx package
 *
 * @domain `geuz.org/gl2ps`
 * @version `1.4.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install geuz.org/gl2ps`
 * @dependencies `libpng.org`, `linux:freeglut.sourceforge.io` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.geuzorggl2ps
 * console.log(pkg.name)        // "geuz.org/gl2ps"
 * console.log(pkg.versions[0]) // "1.4.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/geuz-org/gl2ps.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const geuzorggl2psPackage = {
  /**
   * The display name of this package.
   */
  name: 'geuz.org/gl2ps' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'geuz.org/gl2ps' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/geuz.org/gl2ps/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install geuz.org/gl2ps' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'libpng.org',
    'linux:freeglut.sourceforge.io',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.4.2',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +geuz.org/gl2ps -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install geuz.org/gl2ps' as const,
}

export type Geuzorggl2psPackage = typeof geuzorggl2psPackage
