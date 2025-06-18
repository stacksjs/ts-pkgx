/**
 * **go-sponge** - Golang alternative of sponge tool
 *
 * @domain `github.com/loq9/go-sponge`
 * @programs `go-sponge`
 * @version `1.0.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) go-sponge`
 * @name `go-sponge`
 * @aliases `loq9/go-sponge`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gosponge
 * // Or access via domain
 * const samePkg = pantry.githubcomloq9gosponge
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "go-sponge"
 * console.log(pkg.description) // "Golang alternative of sponge tool"
 * console.log(pkg.programs)    // ["go-sponge"]
 * console.log(pkg.versions[0]) // "1.0.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/loq9/go-sponge.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gospongePackage = {
  /**
   * The display name of this package.
   */
  name: 'go-sponge' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/loq9/go-sponge' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Golang alternative of sponge tool' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/loq9/go-sponge/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) go-sponge' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'go-sponge',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'loq9/go-sponge',
  ] as const,
  fullPath: 'github.com/loq9/go-sponge' as const,
}

export type GospongePackage = typeof gospongePackage
