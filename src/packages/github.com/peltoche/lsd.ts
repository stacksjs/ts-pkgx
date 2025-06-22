/**
 * **lsd** - Clone of ls with colorful output, file type icons, and more
 *
 * @domain `github.com/peltoche/lsd`
 * @programs `lsd`
 * @version `1.1.5` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install lsd`
 * @name `lsd`
 * @dependencies `libgit2.org~1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.lsd
 * // Or access via domain
 * const samePkg = pantry.githubcompeltochelsd
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lsd"
 * console.log(pkg.description) // "Clone of ls with colorful output, file type ico..."
 * console.log(pkg.programs)    // ["lsd"]
 * console.log(pkg.versions[0]) // "1.1.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/peltoche/lsd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lsdPackage = {
  /**
   * The display name of this package.
   */
  name: 'lsd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/peltoche/lsd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Clone of ls with colorful output, file type icons, and more' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/peltoche/lsd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install lsd' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'lsd',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org~1.7',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.5',
    '1.1.3',
    '1.1.2',
    '1.1.1',
    '1.1.0',
    '1.0.0',
    '0.23.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) lsd -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install lsd' as const,
}

export type LsdPackage = typeof lsdPackage
