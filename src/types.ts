export interface ProjectFolder {
  name: string
  url: string
}

export interface FetchProjectsOptions {
  apiUrl?: string
}

export interface GitHubContent {
  name: string
  path: string
  sha: string
  size: number
  url: string
  html_url: string
  git_url: string
  download_url: string | null
  type: 'dir' | 'file'
  _links: {
    self: string
    git: string
    html: string
  }
}

/**
 * Represents a pkgx package with its metadata
 */
export interface PkgxPackage {
  name: string
  domain: string
  description: string
  packageYmlUrl?: string
  homepageUrl?: string
  githubUrl?: string
  installCommand: string
  programs: string[]
  companions: string[]
  dependencies: string[]
  versions: string[]
  /**
   * List of alternative names or aliases for this package
   */
  aliases?: string[]
  /**
   * The full path to the package, including any nested paths (e.g. 'agwa.name/git-crypt')
   */
  fullPath?: string
}

/**
 * Options for package fetching methods
 */
export interface PackageFetchOptions {
  /**
   * Timeout in milliseconds for fetching operations
   * @default 30000
   */
  timeout?: number

  /**
   * Directory to save package data
   * @default 'packages'
   */
  outputDir?: string

  /**
   * Enable debug mode to save screenshots and additional info
   * @default false
   */
  debug?: boolean
}

export interface FetchPkgxPackageOptions {
  url?: string
}
