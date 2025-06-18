/**
 * **go-bindata** - A small utility which generates Go code from any file. Useful for embedding binary data in a Go program.
 *
 * @domain `github.com/kevinburke/go-bindata`
 * @programs `go-bindata`
 * @version `4.0.2` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install go-bindata`
 * @name `go-bindata`
 * @dependencies `go.dev^1.18`, `gnu.org/patch`, `crates.io/semverator^0`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gobindata
 * // Or access via domain
 * const samePkg = pantry.githubcomkevinburkegobindata
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "go-bindata"
 * console.log(pkg.description) // "A small utility which generates Go code from an..."
 * console.log(pkg.programs)    // ["go-bindata"]
 * console.log(pkg.versions[0]) // "4.0.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kevinburke/go-bindata.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gobindataPackage = {
  /**
   * The display name of this package.
   */
  name: 'go-bindata' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kevinburke/go-bindata' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A small utility which generates Go code from any file. Useful for embedding binary data in a Go program.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kevinburke/go-bindata/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install go-bindata' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'go-bindata',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.18',
    'gnu.org/patch',
    'crates.io/semverator^0',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.0.2',
    '3.25.0',
    '3.24.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type GobindataPackage = typeof gobindataPackage
