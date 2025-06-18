/**
 * **encore-go** - Encore's rolling fork of Go with added automatic tracing & instrumentation
 *
 * @domain `encore.dev/go`
 * @programs `encore-go`
 * @version `1.23.0` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) encore-go`
 * @name `encore-go`
 * @aliases `go`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.encorego
 * // Or access via domain
 * const samePkg = pantry.encoredevgo
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "encore-go"
 * console.log(pkg.description) // "Encore's rolling fork of Go with added automati..."
 * console.log(pkg.programs)    // ["encore-go"]
 * console.log(pkg.versions[0]) // "1.23.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/encore-dev/go.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const encoregoPackage = {
  /**
   * The display name of this package.
   */
  name: 'encore-go' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'encore.dev/go' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Encore\'s rolling fork of Go with added automatic tracing & instrumentation' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/encore.dev/go/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) encore-go' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'encore-go',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.23.0',
    '1.22.5',
    '1.22.0',
    '1.21.6',
    '1.21.5',
    '1.21.4',
    '1.21.3',
    '1.21.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'go',
  ] as const,
  fullPath: 'encore.dev/go' as const,
}

export type EncoregoPackage = typeof encoregoPackage
