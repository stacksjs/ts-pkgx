/**
 * **goreleaser.com** - Package from pantry: goreleaser.com
 *
 * @domain `goreleaser.com`
 *
 * @install `launchpad install goreleaser.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.goreleasercom
 * console.log(pkg.name)        // "goreleaser.com"
 * console.log(pkg.description) // "Package from pantry: goreleaser.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/goreleaser-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const goreleasercomPackage = {
  /**
   * The display name of this package.
   */
  name: 'goreleaser.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'goreleaser.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: goreleaser.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install goreleaser.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +goreleaser.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install goreleaser.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/goreleaser.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GoreleasercomPackage = typeof goreleasercomPackage
