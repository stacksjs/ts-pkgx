/**
 * **opentofu.org** - Package from pantry: opentofu.org
 *
 * @domain `opentofu.org`
 *
 * @install `launchpad install opentofu.org`
 * @dependencies `gnu.org/gcc/libstdcxx`, `curl.se/ca-certs`, `go.dev~1.21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.opentofuorg
 * console.log(pkg.name)        // "opentofu.org"
 * console.log(pkg.description) // "Package from pantry: opentofu.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opentofu-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const opentofuorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'opentofu.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'opentofu.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: opentofu.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install opentofu.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gcc/libstdcxx',
    'curl.se/ca-certs',
    'go.dev~1.21',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/opentofu.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpentofuorgPackage = typeof opentofuorgPackage
