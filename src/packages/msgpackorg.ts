/**
 * **msgpack.org** - Package from pantry: msgpack.org
 *
 * @domain `msgpack.org`
 *
 * @install `launchpad install msgpack.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.msgpackorg
 * console.log(pkg.name)        // "msgpack.org"
 * console.log(pkg.description) // "Package from pantry: msgpack.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/msgpack-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const msgpackorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'msgpack.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'msgpack.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: msgpack.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install msgpack.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +msgpack.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install msgpack.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/msgpack.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MsgpackorgPackage = typeof msgpackorgPackage
