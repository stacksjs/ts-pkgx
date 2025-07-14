/**
 * **trezor-agent** - Package from pantry: github.com/romanz/trezor-agent
 *
 * @domain `github.com/romanz/trezor-agent`
 *
 * @install `launchpad install github.com/romanz/trezor-agent`
 * @dependencies `python.org~3.12`, `libusb.info^1`, `darwin:libpng.org~1.6` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomromanztrezoragent
 * console.log(pkg.name)        // "trezor-agent"
 * console.log(pkg.description) // "Package from pantry: github.com/romanz/trezor-a..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/romanz/trezor-agent.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomromanztrezoragentPackage = {
  /**
   * The display name of this package.
   */
  name: 'trezor-agent' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/romanz/trezor-agent' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/romanz/trezor-agent' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/romanz/trezor-agent' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/romanz/trezor-agent -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/romanz/trezor-agent' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'python.org~3.12',
    'libusb.info^1',
    'darwin:libpng.org~1.6',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/romanz/trezor-agent/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomromanztrezoragentPackage = typeof githubcomromanztrezoragentPackage
