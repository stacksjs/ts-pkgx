/**
 * **yubikey-agent** - Package from pantry: filippo.io/yubikey-agent
 *
 * @domain `filippo.io/yubikey-agent`
 *
 * @install `launchpad install filippo.io/yubikey-agent`
 * @dependencies `pcsclite.apdu.fr^2`, `linux:gnupg.org/pinentry` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.filippoioyubikeyagent
 * console.log(pkg.name)        // "yubikey-agent"
 * console.log(pkg.description) // "Package from pantry: filippo.io/yubikey-agent"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/filippo-io/yubikey-agent.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const filippoioyubikeyagentPackage = {
  /**
   * The display name of this package.
   */
  name: 'yubikey-agent' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'filippo.io/yubikey-agent' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: filippo.io/yubikey-agent' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install filippo.io/yubikey-agent' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +filippo.io/yubikey-agent -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install filippo.io/yubikey-agent' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'pcsclite.apdu.fr^2',
    'linux:gnupg.org/pinentry',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/filippo.io/yubikey-agent/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type FilippoioyubikeyagentPackage = typeof filippoioyubikeyagentPackage
