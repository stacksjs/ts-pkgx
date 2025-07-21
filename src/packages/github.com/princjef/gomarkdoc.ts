/**
 * **gomarkdoc** - Package from pantry: github.com/princjef/gomarkdoc
 *
 * @domain `github.com/princjef/gomarkdoc`
 *
 * @install `launchpad install github.com/princjef/gomarkdoc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomprincjefgomarkdoc
 * console.log(pkg.name)        // "gomarkdoc"
 * console.log(pkg.description) // "Package from pantry: github.com/princjef/gomarkdoc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/princjef/gomarkdoc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomprincjefgomarkdocPackage = {
  /**
   * The display name of this package.
   */
  name: 'gomarkdoc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/princjef/gomarkdoc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/princjef/gomarkdoc' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/princjef/gomarkdoc' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/princjef/gomarkdoc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/princjef/gomarkdoc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/princjef/gomarkdoc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomprincjefgomarkdocPackage = typeof githubcomprincjefgomarkdocPackage
