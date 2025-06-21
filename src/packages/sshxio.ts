/**
 * **sshx.io** - Package from pantry: sshx.io
 *
 * @domain `sshx.io`
 *
 * @install `launchpad install sshx.io`
 * @dependencies `protobuf.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sshxio
 * console.log(pkg.name)        // "sshx.io"
 * console.log(pkg.description) // "Package from pantry: sshx.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sshx-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sshxioPackage = {
  /**
   * The display name of this package.
   */
  name: 'sshx.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sshx.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sshx.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sshx.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'protobuf.dev',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sshx.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SshxioPackage = typeof sshxioPackage
