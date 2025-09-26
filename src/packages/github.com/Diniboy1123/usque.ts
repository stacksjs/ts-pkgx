/**
 * **Diniboy1123** - pkgx package
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
 * console.log(pkg.name)        // "Diniboy1123"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Diniboy1123/usque.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomdiniboy1123usquePackage = {
  /**
   * The display name of this package.
   */
  name: 'Diniboy1123' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Diniboy1123/usque' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/Diniboy1123/usque' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/Diniboy1123/usque' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/Diniboy1123/usque -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/Diniboy1123/usque' as const,
}

export type Githubcomdiniboy1123usquePackage = typeof githubcomdiniboy1123usquePackage
