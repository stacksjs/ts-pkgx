/**
 * **sshx** - Fast, collaborative live terminal sharing over the web
 *
 * @domain `sshx.io`
 * @programs `sshx`
 * @version `2023.11.14` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/sshx-io.md
 *
 * @install `sh <(curl https://pkgx.sh) sshx`
 * @dependencies `protobuf.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sshxio
 * console.log(pkg.name)        // "sshx"
 * console.log(pkg.description) // "Fast, collaborative live terminal sharing over ..."
 * console.log(pkg.programs)    // ["sshx"]
 * console.log(pkg.versions[0]) // "2023.11.14" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sshx-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sshxioPackage = {
  /**
   * The display name of this package.
   */
  name: 'sshx' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sshx.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Fast, collaborative live terminal sharing over the web' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sshx.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) sshx' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'sshx',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'protobuf.dev',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2023.11.14',
  ] as const,
  fullPath: 'sshx.io' as const,
  aliases: [] as const,
}

export type SshxioPackage = typeof sshxioPackage
