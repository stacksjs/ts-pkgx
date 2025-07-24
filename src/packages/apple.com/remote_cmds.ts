/**
 * **remote_cmds** - Package from pantry: apple.com/remote_cmds
 *
 * @domain `apple.com/remote_cmds`
 *
 * @install `launchpad install apple.com/remote_cmds`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.applecomremote_cmds
 * console.log(pkg.name)        // "remote_cmds"
 * console.log(pkg.description) // "Package from pantry: apple.com/remote_cmds"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/apple-com/remote_cmds.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const applecomremote_cmdsPackage = {
  /**
   * The display name of this package.
   */
  name: 'remote_cmds' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'apple.com/remote_cmds' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: apple.com/remote_cmds' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install apple.com/remote_cmds' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +apple.com/remote_cmds -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install apple.com/remote_cmds' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/apple.com/remote_cmds/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Applecomremote_cmdsPackage = typeof applecomremote_cmdsPackage
