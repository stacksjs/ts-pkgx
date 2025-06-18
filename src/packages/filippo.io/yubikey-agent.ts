/**
 * **yubikey-agent** - Seamless ssh-agent for YubiKeys and other PIV tokens
 *
 * @domain `filippo.io/yubikey-agent`
 * @programs `yubikey-agent`
 * @version `0.1.6` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install yubikey-agent`
 * @name `yubikey-agent`
 * @dependencies `pcsclite.apdu.fr^2`, `gnupg.org/pinentry`, `go.dev^1.20`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.yubikeyagent
 * // Or access via domain
 * const samePkg = pantry.filippoioyubikeyagent
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "yubikey-agent"
 * console.log(pkg.description) // "Seamless ssh-agent for YubiKeys and other PIV t..."
 * console.log(pkg.programs)    // ["yubikey-agent"]
 * console.log(pkg.versions[0]) // "0.1.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/filippo-io/yubikey-agent.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yubikeyagentPackage = {
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
  description: 'Seamless ssh-agent for YubiKeys and other PIV tokens' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/filippo.io/yubikey-agent/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install yubikey-agent' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'yubikey-agent',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pcsclite.apdu.fr^2',
    'gnupg.org/pinentry',
    'go.dev^1.20',
    'gitlab.com/procps-ng/procps',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type YubikeyagentPackage = typeof yubikeyagentPackage
