/**
 * **ipfs.tech** - Package from pantry: ipfs.tech
 *
 * @domain `ipfs.tech`
 *
 * @install `launchpad install ipfs.tech`
 * @dependencies `go.dev>=1.20`, `gnu.org/patch`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ipfstech
 * console.log(pkg.name)        // "ipfs.tech"
 * console.log(pkg.description) // "Package from pantry: ipfs.tech"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ipfs-tech.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ipfstechPackage = {
  /**
   * The display name of this package.
   */
  name: 'ipfs.tech' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ipfs.tech' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ipfs.tech' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install ipfs.tech' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev>=1.20',
    'gnu.org/patch',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ipfs.tech/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type IpfstechPackage = typeof ipfstechPackage
