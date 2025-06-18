/**
 * **pack** - CLI for building apps using Cloud Native Buildpacks
 *
 * @domain `buildpacks.io`
 * @programs `pack`
 * @version `0.38.1` (14 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install pack`
 * @aliases `pack`
 * @dependencies `go.dev~1.24`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.pack
 * // Or access via domain
 * const samePkg = pantry.buildpacksio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "buildpacks.io"
 * console.log(pkg.description) // "CLI for building apps using Cloud Native Buildp..."
 * console.log(pkg.programs)    // ["pack"]
 * console.log(pkg.versions[0]) // "0.38.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/buildpacks-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const packPackage = {
  /**
   * The display name of this package.
   */
  name: 'buildpacks.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'buildpacks.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CLI for building apps using Cloud Native Buildpacks' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/buildpacks.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install pack' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pack',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev~1.24',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.38.1',
    '0.38.0',
    '0.37.0',
    '0.36.4',
    '0.36.3',
    '0.36.2',
    '0.36.1',
    '0.36.0',
    '0.35.1',
    '0.35.0',
    '0.34.2',
    '0.34.1',
    '0.34.0',
    '0.33.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'pack',
  ] as const,
}

export type PackPackage = typeof packPackage
