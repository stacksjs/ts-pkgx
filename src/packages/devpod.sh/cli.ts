/**
 * **cli** - Package from pantry: devpod.sh/cli
 *
 * @domain `devpod.sh/cli`
 *
 * @install `launchpad install devpod.sh/cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.devpodshcli
 * console.log(pkg.name)        // "cli"
 * console.log(pkg.description) // "Package from pantry: devpod.sh/cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/devpod-sh/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const devpodshcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'devpod.sh/cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: devpod.sh/cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install devpod.sh/cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +devpod.sh/cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install devpod.sh/cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/devpod.sh/cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DevpodshcliPackage = typeof devpodshcliPackage
