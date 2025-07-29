/**
 * **grpcurl** - Package from pantry: fullstory.com/grpcurl
 *
 * @domain `fullstory.com/grpcurl`
 *
 * @install `launchpad install fullstory.com/grpcurl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fullstorycomgrpcurl
 * console.log(pkg.name)        // "grpcurl"
 * console.log(pkg.description) // "Package from pantry: fullstory.com/grpcurl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fullstory-com/grpcurl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fullstorycomgrpcurlPackage = {
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
  description: 'Package from pantry: fullstory.com/grpcurl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fullstory.com/grpcurl' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +fullstory.com/grpcurl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install fullstory.com/grpcurl' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fullstory.com/grpcurl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FullstorycomgrpcurlPackage = typeof fullstorycomgrpcurlPackage
