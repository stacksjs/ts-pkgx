/**
 * **lazydocker** - The lazier way to manage everything docker
 *
 * @domain `github.com/jesseduffield/lazydocker`
 * @programs `lazydocker`
 * @version `0.24.1` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install lazydocker`
 * @name `lazydocker`
 * @dependencies `go.dev^1.18`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.lazydocker
 * // Or access via domain
 * const samePkg = pantry.githubcomjesseduffieldlazydocker
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "lazydocker"
 * console.log(pkg.description) // "The lazier way to manage everything docker"
 * console.log(pkg.programs)    // ["lazydocker"]
 * console.log(pkg.versions[0]) // "0.24.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/jesseduffield/lazydocker.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lazydockerPackage = {
  /**
   * The display name of this package.
   */
  name: 'lazydocker' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/jesseduffield/lazydocker' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The lazier way to manage everything docker' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/jesseduffield/lazydocker/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install lazydocker' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'lazydocker',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.18',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.24.1',
    '0.24.0',
    '0.23.3',
    '0.23.1',
    '0.23.0',
    '0.21.1',
    '0.21.0',
    '0.20.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type LazydockerPackage = typeof lazydockerPackage
