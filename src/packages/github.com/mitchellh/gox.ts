/**
 * **gox** - Package from pantry: github.com/mitchellh/gox
 *
 * @domain `github.com/mitchellh/gox`
 *
 * @install `launchpad install github.com/mitchellh/gox`
 * @dependencies `go.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommitchellhgox
 * console.log(pkg.name)        // "gox"
 * console.log(pkg.description) // "Package from pantry: github.com/mitchellh/gox"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mitchellh/gox.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommitchellhgoxPackage = {
  /**
   * The display name of this package.
   */
  name: 'gox' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mitchellh/gox' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/mitchellh/gox' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/mitchellh/gox' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/mitchellh/gox -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/mitchellh/gox' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mitchellh/gox/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcommitchellhgoxPackage = typeof githubcommitchellhgoxPackage
