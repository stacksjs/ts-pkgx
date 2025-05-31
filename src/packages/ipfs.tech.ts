/**
 * **ipfs** - Peer-to-peer hypermedia protocol
 *
 * @domain `ipfs.tech`
 * @programs `ipfs`
 * @version `0.35.0` (28 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/ipfs-tech.md
 * @install `sh <(curl https://pkgx.sh) ipfs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ipfstech
 * console.log(pkg.name)        // "ipfs"
 * console.log(pkg.description) // "Peer-to-peer hypermedia protocol"
 * console.log(pkg.programs)    // ["ipfs"]
 * console.log(pkg.versions[0]) // "0.35.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ipfs-tech.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ipfstechPackage = {
  /**
   * The display name of this package.
   */
  name: 'ipfs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ipfs.tech' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Peer-to-peer hypermedia protocol' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ipfs.tech/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) ipfs' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ipfs',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.35.0',
    '0.34.1',
    '0.34.0',
    '0.33.2',
    '0.33.1',
    '0.33.0',
    '0.32.1',
    '0.32.0',
    '0.31.0',
    '0.30.0',
    '0.29.0',
    '0.28.0',
    '0.27.0',
    '0.26.0',
    '0.25.0',
    '0.24.0',
    '0.23.0',
    '0.22.0',
    '0.21.1',
    '0.21.0',
    '0.20.0',
    '0.19.2',
    '0.19.1',
    '0.19.0',
    '0.18.1',
    '0.18.0',
    '0.17.0',
    '0.16.0',
  ] as const,
  fullPath: 'ipfs.tech' as const,
  aliases: [] as const,
}

export type IpfstechPackage = typeof ipfstechPackage
