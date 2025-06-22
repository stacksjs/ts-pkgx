/**
 * **go-sponge** - Package from pantry: github.com/loq9/go-sponge
 *
 * @domain `github.com/loq9/go-sponge`
 *
 * @install `launchpad install github.com/loq9/go-sponge`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomloq9gosponge
 * console.log(pkg.name)        // "go-sponge"
 * console.log(pkg.description) // "Package from pantry: github.com/loq9/go-sponge"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/loq9/go-sponge.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomloq9gospongePackage = {
  /**
   * The display name of this package.
   */
  name: 'go-sponge' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/loq9/go-sponge' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/loq9/go-sponge' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/loq9/go-sponge' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/loq9/go-sponge -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/loq9/go-sponge' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/loq9/go-sponge/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomloq9gospongePackage = typeof githubcomloq9gospongePackage
