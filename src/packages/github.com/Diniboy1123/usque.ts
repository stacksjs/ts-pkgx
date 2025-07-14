/**
 * **usque** - Package from pantry: github.com/Diniboy1123/usque
 *
 * @domain `github.com/Diniboy1123/usque`
 *
 * @install `launchpad install github.com/Diniboy1123/usque`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomdiniboy1123usque
 * console.log(pkg.name)        // "usque"
 * console.log(pkg.description) // "Package from pantry: github.com/Diniboy1123/usque"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Diniboy1123/usque.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomdiniboy1123usquePackage = {
  /**
   * The display name of this package.
   */
  name: 'usque' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Diniboy1123/usque' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/Diniboy1123/usque' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/Diniboy1123/usque' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/Diniboy1123/usque -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/Diniboy1123/usque' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Diniboy1123/usque/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomdiniboy1123usquePackage = typeof githubcomdiniboy1123usquePackage
