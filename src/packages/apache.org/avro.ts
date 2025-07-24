/**
 * **avro** - Package from pantry: apache.org/avro
 *
 * @domain `apache.org/avro`
 *
 * @install `launchpad install apache.org/avro`
 * @dependencies `digip.org/jansson`, `google.github.io/snappy`, `tukaani.org/xz`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.apacheorgavro
 * console.log(pkg.name)        // "avro"
 * console.log(pkg.description) // "Package from pantry: apache.org/avro"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apache-org/avro.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const apacheorgavroPackage = {
  /**
   * The display name of this package.
   */
  name: 'avro' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apache.org/avro' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: apache.org/avro' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install apache.org/avro' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +apache.org/avro -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install apache.org/avro' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'digip.org/jansson',
    'google.github.io/snappy',
    'tukaani.org/xz',
    'zlib.net',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apache.org/avro/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ApacheorgavroPackage = typeof apacheorgavroPackage
