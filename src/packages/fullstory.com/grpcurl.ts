/**
 * **grpcurl** - Like cURL, but for gRPC: Command-line tool for interacting with gRPC servers
 *
 * @domain `fullstory.com/grpcurl`
 * @programs `grpcurl`
 * @version `1.9.3` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install grpcurl`
 * @name `grpcurl`
 * @dependencies `go.dev^1.19`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.grpcurl
 * // Or access via domain
 * const samePkg = pantry.fullstorycomgrpcurl
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "grpcurl"
 * console.log(pkg.description) // "Like cURL, but for gRPC: Command-line tool for ..."
 * console.log(pkg.programs)    // ["grpcurl"]
 * console.log(pkg.versions[0]) // "1.9.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fullstory-com/grpcurl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const grpcurlPackage = {
  /**
   * The display name of this package.
   */
  name: 'grpcurl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fullstory.com/grpcurl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Like cURL, but for gRPC: Command-line tool for interacting with gRPC servers' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fullstory.com/grpcurl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install grpcurl' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'grpcurl',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.19',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.9.3',
    '1.9.2',
    '1.9.1',
    '1.9.0',
    '1.8.9',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type GrpcurlPackage = typeof grpcurlPackage
