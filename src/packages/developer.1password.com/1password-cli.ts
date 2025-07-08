/**
 * **1password-cli** - Package from pantry: developer.1password.com/1password-cli
 *
 * @domain `developer.1password.com/1password-cli`
 *
 * @install `launchpad install developer.1password.com/1password-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.developer1passwordcom1passwordcli
 * console.log(pkg.name)        // "1password-cli"
 * console.log(pkg.description) // "Package from pantry: developer.1password.com/1p..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/developer-1password-com/1password-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const developer1passwordcom1passwordcliPackage = {
  /**
   * The display name of this package.
   */
  name: '1password-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'developer.1password.com/1password-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: developer.1password.com/1password-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install developer.1password.com/1password-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +developer.1password.com/1password-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install developer.1password.com/1password-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/developer.1password.com/1password-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Developer1passwordcom1passwordcliPackage = typeof developer1passwordcom1passwordcliPackage
