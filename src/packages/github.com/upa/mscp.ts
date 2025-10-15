/**
 * **mscp** - mscp: transfer files over multiple SSH (SFTP) connections
 *
 * @domain `github.com/upa/mscp`
 * @programs `mscp`
 * @version `0.2.3` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/upa/mscp`
 * @dependencies `zlib.net^1.2.11`, `openssl.org^1.1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomupamscp
 * console.log(pkg.name)        // "mscp"
 * console.log(pkg.description) // "mscp: transfer files over multiple SSH (SFTP) c..."
 * console.log(pkg.programs)    // ["mscp"]
 * console.log(pkg.versions[0]) // "0.2.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/upa/mscp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mscpPackage = {
  /**
   * The display name of this package.
   */
  name: 'mscp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/upa/mscp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'mscp: transfer files over multiple SSH (SFTP) connections' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/upa/mscp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/upa/mscp' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/upa/mscp' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/upa/mscp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/upa/mscp' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mscp',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1.2.11',
    'openssl.org^1.1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.3',
    '0.2.2',
    '0.2.1',
  ] as const,
  aliases: [] as const,
}

export type MscpPackage = typeof mscpPackage
