/**
 * **license** - Package from pantry: github.com/nishanths/license
 *
 * @domain `github.com/nishanths/license`
 *
 * @install `launchpad install github.com/nishanths/license`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomnishanthslicense
 * console.log(pkg.name)        // "license"
 * console.log(pkg.description) // "Package from pantry: github.com/nishanths/license"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/nishanths/license.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomnishanthslicensePackage = {
  /**
   * The display name of this package.
   */
  name: 'license' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/nishanths/license' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/nishanths/license' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/nishanths/license' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/nishanths/license -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/nishanths/license' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/nishanths/license/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomnishanthslicensePackage = typeof githubcomnishanthslicensePackage
