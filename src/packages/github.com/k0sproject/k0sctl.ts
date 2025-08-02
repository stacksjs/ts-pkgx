/**
 * **k0sctl** - Package from pantry: github.com/k0sproject/k0sctl
 *
 * @domain `github.com/k0sproject/k0sctl`
 *
 * @install `launchpad install github.com/k0sproject/k0sctl`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomk0sprojectk0sctl
 * console.log(pkg.name)        // "k0sctl"
 * console.log(pkg.description) // "Package from pantry: github.com/k0sproject/k0sctl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/k0sproject/k0sctl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomk0sprojectk0sctlPackage = {
  /**
   * The display name of this package.
   */
  name: 'k0sctl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/k0sproject/k0sctl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/k0sproject/k0sctl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/k0sproject/k0sctl' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/k0sproject/k0sctl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/k0sproject/k0sctl' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/k0sproject/k0sctl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomk0sprojectk0sctlPackage = typeof githubcomk0sprojectk0sctlPackage
