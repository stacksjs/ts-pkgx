/**
 * **pulumi.io** - Package from pantry: pulumi.io
 *
 * @domain `pulumi.io`
 *
 * @install `launchpad install pulumi.io`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pulumiio
 * console.log(pkg.name)        // "pulumi.io"
 * console.log(pkg.description) // "Package from pantry: pulumi.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pulumi-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pulumiioPackage = {
  /**
   * The display name of this package.
   */
  name: 'pulumi.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pulumi.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pulumi.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pulumi.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pulumi.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PulumiioPackage = typeof pulumiioPackage
